import os
import subprocess
import json

PAUSE_SEC = 0.15 # 150ms natural breathing buffer
VIDEO_FPS = 30

def assemble_master_audio(
    segments: list[dict],
    scene_names: list[str],
    out_master_mp3: str = "public/current_voice.mp3",
    temp_dir: str = "temp_voice_segments"
) -> dict:
    """Pad segments with 0.15s buffer, concat, normalize, and calculate dynamic scene timings."""
    os.makedirs(os.path.dirname(out_master_mp3) or ".", exist_ok=True)
    concat_list_file = os.path.join(temp_dir, "concat_list.txt")
    normalized_segs = []
    scenes = []
    current_frame = 0

    print("🔊 Assembling dynamic audio track (0.15s buffer per scene)...")
    for idx, seg in enumerate(segments):
        sid = seg["id"]
        in_file = seg["file"]
        dur = seg["duration"]
        padded_file = os.path.join(temp_dir, f"seg_{sid:02d}_padded.wav")

        scene_dur_sec = dur + PAUSE_SEC
        scene_frames = int(round(scene_dur_sec * VIDEO_FPS))
        target_audio_dur = scene_frames / float(VIDEO_FPS)
        pad_dur = max(0.0, target_audio_dur - dur)

        cmd = [
            "ffmpeg", "-y", "-i", in_file,
            "-af", f"apad=pad_dur={pad_dur:.4f}",
            "-t", f"{target_audio_dur:.4f}",
            padded_file
        ]
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
        normalized_segs.append(padded_file)

        st = "intro" if sid <= 2 else ("outro" if sid >= (len(segments) - 1) else "content")
        sname = scene_names[idx] if idx < len(scene_names) else f"Scene {sid:02d}"
        scenes.append({
            "id": sid,
            "name": sname,
            "from": current_frame,
            "to": current_frame + scene_frames,
            "durationInFrames": scene_frames,
            "fromSec": round(current_frame / float(VIDEO_FPS), 3),
            "toSec": round((current_frame + scene_frames) / float(VIDEO_FPS), 3),
            "type": st,
            "speechDuration": dur
        })
        current_frame += scene_frames

    total_frames = current_frame
    total_seconds = total_frames / float(VIDEO_FPS)

    # Write concat list
    with open(concat_list_file, "w", encoding="utf-8") as f:
        for p in normalized_segs:
            clean_path = os.path.abspath(p).replace("\\", "/")
            f.write(f"file '{clean_path}'\n")

    # Concat to temp raw wav
    raw_master = os.path.join(temp_dir, "temp_raw_master.wav")
    subprocess.run([
        "ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", concat_list_file,
        "-c", "copy", raw_master
    ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)

    # Normalize with loudnorm
    subprocess.run([
        "ffmpeg", "-y", "-i", raw_master,
        "-af", "loudnorm=I=-16:TP=-1.0",
        "-ar", "44100", "-b:a", "192k",
        out_master_mp3
    ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)

    res = subprocess.run([
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1", out_master_mp3
    ], capture_output=True, text=True)
    actual_dur = float(res.stdout.strip())

    timings_data = {
        "totalFrames": total_frames,
        "totalSeconds": total_seconds,
        "actualAudioDuration": actual_dur,
        "audioFile": out_master_mp3,
        "scenes": scenes
    }

    with open("scene_timings.json", "w", encoding="utf-8") as f:
        json.dump(timings_data, f, ensure_ascii=False, indent=2)

    print(f"✅ Master voice ready: {out_master_mp3} ({actual_dur:.2f}s, {total_frames} frames @ {VIDEO_FPS}fps)")
    return timings_data
