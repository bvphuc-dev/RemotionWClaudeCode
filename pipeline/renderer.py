import os
import subprocess
import time

def validate_project() -> bool:
    """Run `npm run validate` to ensure audio, frames, and captions align."""
    print("🔍 Running pre-render validation (npm run validate)...")
    res = subprocess.run(
        ["npm", "run", "validate"],
        shell=True,
        capture_output=True,
        encoding="utf-8",
        errors="replace"
    )
    if res.returncode != 0:
        print("❌ Pre-render validation FAILED:")
        print(res.stdout)
        print(res.stderr)
        return False
    print("🎉 Validation passed!")
    return True

def render_video(
    composition_id: str = "TikTokVideo",
    out_raw_mp4: str = "out/videoGoc.mp4",
    out_final_mp4: str = "out/VideoLast.mp4",
    speedup_factor: float = 1.4,
    concurrency: int = 8
) -> str:
    """Render Remotion 60fps composition and accelerate with FFmpeg."""
    os.makedirs(os.path.dirname(out_raw_mp4) or ".", exist_ok=True)
    os.makedirs(os.path.dirname(out_final_mp4) or ".", exist_ok=True)

    # Ensure TEMP and TMP point to local workspace on Drive F with plenty of space
    ws_temp = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".temp"))
    os.makedirs(ws_temp, exist_ok=True)
    env = os.environ.copy()
    env["TEMP"] = ws_temp
    env["TMP"] = ws_temp

    t0 = time.time()
    print(f"🎬 Rendering Remotion Composition '{composition_id}' to {out_raw_mp4} (concurrency={concurrency})...")
    render_cmd = [
        "npx", "remotion", "render",
        composition_id,
        out_raw_mp4,
        "--concurrency", str(concurrency),
        "--gl", "angle"
    ]
    sub = subprocess.run(render_cmd, shell=True, env=env)
    if sub.returncode != 0:
        raise RuntimeError(f"Remotion render failed with exit code {sub.returncode}")

    t_render = time.time() - t0
    print(f"⚡ Rendered raw video in {t_render:.1f}s")

    # Accelerate 1.6x using FFmpeg
    print(f"⏩ Accelerating {speedup_factor}x -> {out_final_mp4}...")
    ffmpeg_cmd = [
        "ffmpeg", "-y",
        "-i", out_raw_mp4,
        "-filter_complex", f"[0:v]setpts=PTS/{speedup_factor}[v];[0:a]atempo={speedup_factor}[a]",
        "-map", "[v]",
        "-map", "[a]",
        "-c:v", "libx264",
        "-preset", "fast",
        "-crf", "18",
        "-c:a", "aac",
        "-b:a", "192k",
        out_final_mp4
    ]
    subprocess.run(ffmpeg_cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)

    # Get final duration
    probe = subprocess.run([
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1", out_final_mp4
    ], capture_output=True, text=True)
    final_dur = float(probe.stdout.strip())

    print(f"🎉 Final VideoReady: {out_final_mp4} ({final_dur:.2f}s)")
    return out_final_mp4
