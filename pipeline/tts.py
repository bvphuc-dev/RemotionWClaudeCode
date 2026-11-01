import asyncio
import os
import random
import subprocess
import time
import edge_tts

DEFAULT_VOICE = "vi-VN-NamMinhNeural"
DEFAULT_RATE = "+20%"

async def _synth_one_segment(
    seg_num: int,
    text: str,
    temp_dir: str,
    voice: str = DEFAULT_VOICE,
    rate: str = DEFAULT_RATE
) -> dict:
    """Synthesize a single audio segment using native edge_tts.Communicate with jittered exponential backoff."""
    out_file = os.path.join(temp_dir, f"seg_{seg_num:02d}.mp3")
    if os.path.exists(out_file):
        try:
            os.remove(out_file)
        except Exception:
            pass

    success = False
    last_err = ""

    for attempt in range(6):
        cur_rate = rate if attempt == 0 else "+0%"
        cur_voice = voice if attempt < 3 else "vi-VN-HoaiMyNeural"
        try:
            communicate = edge_tts.Communicate(text, cur_voice, rate=cur_rate)
            await communicate.save(out_file)
            if os.path.exists(out_file) and os.path.getsize(out_file) > 2000:
                success = True
                break
            else:
                last_err = f"Output file too small or missing ({os.path.getsize(out_file) if os.path.exists(out_file) else 0} bytes)"
        except Exception as e:
            last_err = str(e)

        sleep_sec = 2.0 * (attempt + 1) + random.uniform(0.3, 0.9)
        print(f"   ⚠️ Edge-TTS seg {seg_num:02d} attempt {attempt + 1} throttled ({last_err}), retrying with voice={cur_voice}, rate={cur_rate} in {sleep_sec:.1f}s...")
        await asyncio.sleep(sleep_sec)

    if not success:
        raise RuntimeError(f"Edge-TTS failed for seg {seg_num:02d} after 6 attempts: {last_err}")

    # Probe duration using ffprobe
    res = subprocess.run([
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1", out_file
    ], capture_output=True, text=True)
    dur = float(res.stdout.strip())
    print(f"   ✓ Seg {seg_num:02d} ({dur:.2f}s, {os.path.getsize(out_file)} bytes): {text[:36]}...")
    return {
        "id": seg_num,
        "file": out_file,
        "duration": dur,
        "text": text
    }

async def _synth_all_segments(
    scripts: list[str],
    temp_dir: str,
    voice: str,
    rate: str
) -> list[dict]:
    segments = []
    for idx, text in enumerate(scripts):
        seg = await _synth_one_segment(idx + 1, text, temp_dir, voice=voice, rate=rate)
        segments.append(seg)
        await asyncio.sleep(1.0 + random.uniform(0.3, 0.7))
    segments.sort(key=lambda x: x["id"])
    return segments

def generate_speech_segments(
    scripts: list[str],
    temp_dir: str = "temp_voice_segments",
    voice: str = DEFAULT_VOICE,
    rate: str = DEFAULT_RATE
) -> list[dict]:
    """Generate fresh speech audio files sequentially via Edge-TTS."""
    os.makedirs(temp_dir, exist_ok=True)
    # Purge any stale audio segments from previous video runs
    for fname in os.listdir(temp_dir):
        if fname.endswith((".mp3", ".wav", ".txt")):
            try:
                os.remove(os.path.join(temp_dir, fname))
            except Exception:
                pass

    print(f"🎙️ Generating {len(scripts)} fresh TTS audio segments ({voice}, rate={rate})...")
    return asyncio.run(_synth_all_segments(scripts, temp_dir=temp_dir, voice=voice, rate=rate))

def run_tts(
    scripts: list[str],
    temp_dir: str = "temp_voice_segments",
    voice: str = DEFAULT_VOICE,
    rate: str = DEFAULT_RATE
) -> list[dict]:
    """Synchronous entry point for generate_speech_segments."""
    return generate_speech_segments(scripts, temp_dir=temp_dir, voice=voice, rate=rate)
