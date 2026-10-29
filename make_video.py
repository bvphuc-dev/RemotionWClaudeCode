import argparse
import json
import os
import re
import sys

# Ensure UTF-8 output on Windows terminal
if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
if sys.stderr and hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8")

from pipeline.scraper import fetch_repo_data
from pipeline.script_writer import (
    create_default_10_scenes,
    parse_or_create_scenes,
    auto_phonetic_vietnamese,
    sanitize_display_subtitle,
)
from pipeline.tts import run_tts
from pipeline.audio import assemble_master_audio
from pipeline.whisper_sync import extract_whisper_subtitles
from pipeline.generator import generate_remotion_code
from pipeline.renderer import validate_project, render_video
from pipeline.telegram import send_telegram_video

def generate_video(
    url: str,
    script_json: str = None,
    voice: str = "vi-VN-NamMinhNeural",
    rate: str = "+20%",
    skip_render: bool = False,
    no_telegram: bool = False,
    concurrency: int = 8,
    whisper_model: str = "openai/whisper-base",
    out_raw: str = None,
    out_final: str = None,
    speedup_factor: float = 1.4,
) -> dict:
    """Generate a single TikTok GitHub promo video and optionally send to Telegram."""
    print("\n=======================================================")
    print(f"🚀 STARTING VIDEO GENERATION PIPELINE FOR: {url}")
    print("=======================================================\n")

    # Step 1: Fetch GitHub repo metadata & assets
    print("📥 STEP 1: Scraping GitHub repository metadata & assets...")
    repo_meta = fetch_repo_data(url)
    slug = repo_meta.get("slug", "repo")
    print(f"   Repo: {repo_meta['full_name']} | Stars: {repo_meta['stars']:,}")
    print(f"   Install: {repo_meta['install_cmd']}")
    print(f"   Assets: {len(repo_meta['images'])} images saved")

    if not out_raw:
        out_raw = f"out/{slug}_videoGoc.mp4"
    if not out_final:
        out_final = f"out/{slug}_VideoLast.mp4"

    # Step 2: Prepare script & contextual sticker metadata
    print("\n📝 STEP 2: Preparing script & contextual sticker metadata...")
    custom_post = None
    if script_json and not os.path.exists(script_json):
        alt_path = os.path.join("repo_scripts", script_json)
        if os.path.exists(alt_path):
            script_json = alt_path

    if script_json and os.path.exists(script_json):
        with open(script_json, "r", encoding="utf-8") as f:
            custom_data = json.load(f)
            display_scripts, voice_scripts, scenes_meta, custom_post = parse_or_create_scenes(custom_data, repo_meta)
    else:
        display_scripts, voice_scripts, scenes_meta, custom_post = create_default_10_scenes(repo_meta)

    print(f"   Generated {len(display_scripts)} scenes (Word budget validated <= 14 words/scene)")
    print("   Subtitles (Display): English/Formal tech names")
    print("   Voiceover (TTS): Natural Vietnamese phonetics")

    # Step 3: Edge-TTS synthesis
    print("\n🎙️ STEP 3: Synthesizing Edge-TTS speech segments...")
    segments = run_tts(voice_scripts)

    # Step 4: Assemble dynamic audio track (0.15s pause)
    print("\n🔊 STEP 4: Assembling dynamic audio with 0.15s buffer & loudnorm...")
    scene_names = [f"{i+1:02d} // {sm.get('badge', 'SCENE')}" for i, sm in enumerate(scenes_meta)]
    timings = assemble_master_audio(
        segments,
        scene_names=scene_names,
        out_master_mp3="public/current_voice.mp3"
    )

    # Step 5: Whisper word-level synchronization
    print("\n🧠 STEP 5: Running Whisper CUDA for kinetic subtitle alignment...")
    raw_sentences = [
        [w for w in re.sub(r"[^\w\s\-/]", "", s).split()]
        for s in display_scripts
    ]

    sub_chunks = extract_whisper_subtitles(
        audio_path="public/current_voice.mp3",
        scenes=timings["scenes"],
        raw_sentences=raw_sentences,
        model_name=whisper_model
    )

    # Step 6: Generate Remotion React code
    print("\n💻 STEP 6: Generating Remotion TypeScript components (Scenes, Captions, SfxTrack)...")
    generate_remotion_code(
        timings_data=timings,
        sub_chunks=sub_chunks,
        scenes_meta=scenes_meta,
        target_dir="src/TikTokVideo"
    )

    # Step 7: Pre-render validation
    print("\n🔍 STEP 7: Running Pre-render Validation Gate...")
    val_ok = validate_project()
    if not val_ok:
        print("❌ Pipeline stopped due to validation failure.")
        raise RuntimeError("Pre-render validation failed.")

    copy_line = ""
    if custom_post:
        copy_line = custom_post.get("tiktok_copy_line") or f"{custom_post.get('title', '')} {' '.join(custom_post.get('hashtags', []))}".strip()

    if skip_render:
        print("\n✨ Code and assets generated successfully! Skipped render as requested.")
        return {
            "repo": repo_meta["full_name"],
            "slug": slug,
            "out_raw": out_raw,
            "out_final": None,
            "copy_line": copy_line,
            "success": True,
        }

    # Step 8: Render 30fps & acceleration
    print(f"\n🎬 STEP 8: Rendering video and applying {speedup_factor}x FFmpeg acceleration...")
    final_video = render_video(
        composition_id="TikTokVideo",
        out_raw_mp4=out_raw,
        out_final_mp4=out_final,
        speedup_factor=speedup_factor,
        concurrency=concurrency
    )

    print("\n=======================================================")
    print("🎉 VIDEO PIPELINE FINISHED SUCCESSFULLY!")
    print(f"📦 Master Video: {out_raw}")
    print(f"🔥 Final TikTok Video ({speedup_factor}x): {final_video}")

    if copy_line:
        print("\n📱 DÒNG TIÊU ĐỀ & HASHTAG TIKTOK (COPY ĐĂNG NGAY):")
        print(f"{copy_line}")

    # Step 9: Send video to Telegram
    sent_telegram = False
    if not no_telegram and os.path.exists(final_video):
        print("\n✈️ STEP 9: Sending video to Telegram Bot...")
        sent_telegram = send_telegram_video(final_video, caption=copy_line)

    print("=======================================================\n")
    return {
        "repo": repo_meta["full_name"],
        "slug": slug,
        "out_raw": out_raw,
        "out_final": final_video,
        "copy_line": copy_line,
        "sent_telegram": sent_telegram,
        "success": True,
    }

def main():
    parser = argparse.ArgumentParser(description="End-to-end TikTok GitHub Promo Video Generator")
    parser.add_argument("--url", type=str, required=True, help="GitHub repository URL or owner/repo")
    parser.add_argument("--script-json", type=str, default=None, help="Custom script JSON file (optional)")
    parser.add_argument("--voice", type=str, default="vi-VN-NamMinhNeural", help="Edge-TTS voice")
    parser.add_argument("--rate", type=str, default="+20%", help="Edge-TTS speech rate")
    parser.add_argument("--skip-render", action="store_true", help="Generate code and assets only, skip Remotion rendering")
    parser.add_argument("--no-telegram", action="store_true", help="Do not send video to Telegram bot")
    parser.add_argument("--concurrency", type=int, default=8, help="Remotion render concurrency")
    parser.add_argument("--whisper-model", type=str, default="openai/whisper-base", help="Whisper model name")
    parser.add_argument("--out-raw", type=str, default="out/videoGoc.mp4", help="Raw Remotion 60fps output path")
    parser.add_argument("--out-final", type=str, default="out/VideoLast.mp4", help="Final accelerated TikTok video path")
    parser.add_argument("--speedup", type=float, default=1.4, help="FFmpeg speedup factor (default: 1.4)")

    args = parser.parse_args()
    generate_video(
        url=args.url,
        script_json=args.script_json,
        voice=args.voice,
        rate=args.rate,
        skip_render=args.skip_render,
        no_telegram=args.no_telegram,
        concurrency=args.concurrency,
        whisper_model=args.whisper_model,
        out_raw=args.out_raw,
        out_final=args.out_final,
        speedup_factor=args.speedup,
    )

if __name__ == "__main__":
    main()
