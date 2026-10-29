import asyncio
import edge_tts
import os
import re
import subprocess

DEFAULT_VOICE = "vi-VN-NamMinhNeural"
DEFAULT_RATE = "+20%"

async def _synth_one_segment(
    seg_num: int,
    text: str,
    temp_dir: str,
    voice: str,
    rate: str,
    sem: asyncio.Semaphore
) -> dict:
    out_file = os.path.join(temp_dir, f"seg_{seg_num:02d}.mp3")
    # Stagger slightly to avoid simultaneous WebSocket connection bursts
    await asyncio.sleep((seg_num - 1) * 0.12)
    async with sem:
        success = False
        last_err = None
        current_text = text
        current_rate = rate
        current_voice = voice
        for attempt in range(6):
            try:
                communicate = edge_tts.Communicate(current_text, current_voice, rate=current_rate)
                await communicate.save(out_file)
                success = True
                break
            except Exception as e:
                last_err = e
                # Fallbacks on failure (handle long/compound English words, isolated acronyms, commas in numbers)
                if attempt == 0:
                    current_text = re.sub(r"\bA I code\b", "A I viết code", current_text, flags=re.IGNORECASE)
                    current_text = re.sub(r"([a-z])([A-Z])", r"\1 \2", current_text)
                    current_text = re.sub(r"(\d+),(\d+)", r"\1\2", current_text)
                elif attempt == 1:
                    def _hyphenate(m):
                        w = m.group(0)
                        mid = len(w) // 2
                        return f"{w[:mid]}-{w[mid:]}"
                    current_text = re.sub(r"\b[a-zA-Z]{7,}\b", _hyphenate, current_text)
                elif attempt == 2:
                    current_rate = "+0%"
                elif attempt == 3:
                    current_voice = "vi-VN-HoaiMyNeural"
                    current_rate = "+0%"
                await asyncio.sleep(1.5 + attempt * 0.5)

        if not success:
            raise RuntimeError(f"Edge-TTS failed for seg {seg_num:02d} after 6 attempts: {last_err}")

    # Probe duration
    res = subprocess.run([
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1", out_file
    ], capture_output=True, text=True)
    dur = float(res.stdout.strip())
    print(f"   ✓ Seg {seg_num:02d} ({dur:.2f}s): {text[:32]}...")
    return {
        "id": seg_num,
        "file": out_file,
        "duration": dur,
        "text": text
    }

async def generate_speech_segments(
    scripts: list[str],
    temp_dir: str = "temp_voice_segments",
    voice: str = DEFAULT_VOICE,
    rate: str = DEFAULT_RATE
) -> list[dict]:
    """Generate 15 speech audio files concurrently via Edge-TTS."""
    os.makedirs(temp_dir, exist_ok=True)
    sem = asyncio.Semaphore(1) # Serial TTS ensures 100% stable connection without socket drops

    print(f"🎙️ Generating {len(scripts)} TTS audio segments in parallel ({voice}, rate={rate})...")
    tasks = [
        _synth_one_segment(idx + 1, text, temp_dir, voice, rate, sem)
        for idx, text in enumerate(scripts)
    ]
    segments = await asyncio.gather(*tasks)
    # Ensure sorted by ID 1..15
    segments.sort(key=lambda x: x["id"])
    return segments

def run_tts(scripts: list[str], temp_dir: str = "temp_voice_segments") -> list[dict]:
    """Synchronous wrapper for generate_speech_segments."""
    return asyncio.run(generate_speech_segments(scripts, temp_dir=temp_dir))
