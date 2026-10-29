import json
import librosa
import soundfile as sf
import torch
from transformers import pipeline

VIDEO_FPS = 30

def extract_whisper_subtitles(
    audio_path: str,
    scenes: list[dict],
    raw_sentences: list[list[str]],
    model_name: str = "openai/whisper-base"
) -> list[dict]:
    """Run Whisper CUDA on master audio and map words into 15 dynamic scenes."""
    device = "cuda" if torch.cuda.is_available() else "cpu"
    print(f"🧠 Loading {model_name} on {device.upper()}...")

    pipe = pipeline(
        "automatic-speech-recognition",
        model=model_name,
        device=device
    )

    wav, sr = sf.read(audio_path)
    if len(wav.shape) > 1:
        wav = wav.mean(axis=1)
    if sr != 16000:
        wav = librosa.resample(wav, orig_sr=sr, target_sr=16000)

    audio_dict = {"raw": wav, "sampling_rate": 16000}
    res = pipe(audio_dict, return_timestamps="word", generate_kwargs={"language": "vietnamese"})

    words_data = []
    for c in res["chunks"]:
        w = c["text"].strip()
        if not w:
            continue
        t0, t1 = c["timestamp"]
        if t0 is None:
            continue
        if t1 is None:
            t1 = t0 + 0.3
        f0 = int(round(t0 * VIDEO_FPS))
        f1 = int(round(t1 * VIDEO_FPS))
        words_data.append({
            "word": w.upper(),
            "start_frame": f0,
            "end_frame": f1
        })

    # Partition Whisper words into each scene
    chunks = []
    for idx, s in enumerate(scenes):
        s_from = s["from"]
        s_to = s["to"]
        whisper_scene_words = [
            w for w in words_data
            if s_from <= (w["start_frame"] + w["end_frame"]) / 2.0 < s_to
        ]

        if len(whisper_scene_words) >= 2:
            t_first = max(s_from + 6, whisper_scene_words[0]["start_frame"])
            t_last = min(s_to - 6, whisper_scene_words[-1]["end_frame"])
        else:
            t_first = s_from + 6
            t_last = s_to - 6

        if t_last <= t_first:
            t_last = s_to - 6
            t_first = s_from + 6

        script_words = raw_sentences[idx] if idx < len(raw_sentences) else [w["word"] for w in whisper_scene_words]
        n_words = len(script_words)
        total_span = max(n_words * 8, t_last - t_first)
        step = total_span / max(1, n_words)

        aligned_words = []
        for widx, wtext in enumerate(script_words):
            w_st = max(s_from, int(round(t_first + widx * step)))
            w_en = min(s_to, int(round(w_st + step * 0.9)))
            if w_st >= w_en:
                w_st = max(s_from, w_en - 6)
            aligned_words.append({
                "text": wtext.upper(),
                "start": w_st,
                "end": w_en
            })

        chunks.append({
            "from": s_from,
            "to": s_to,
            "words": aligned_words
        })

    print(f"✨ Whisper synchronized {len(chunks)} subtitle chunks successfully!")
    return chunks
