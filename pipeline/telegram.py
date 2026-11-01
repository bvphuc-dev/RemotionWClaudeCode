import hashlib
import json
import os
import time
import requests
from pathlib import Path

# Load environment variables from .env if present
env_file = Path(__file__).resolve().parent.parent / ".env"
if env_file.exists():
    with open(env_file, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip())

DEFAULT_TOKEN = "9176648870:AAEhAyBIo3l92iTfQM7KY57fEYi1Z2pmk2k"
DEFAULT_CHAT_ID = "7277122122"
SENT_LOG_FILE = Path(__file__).resolve().parent.parent / ".sent_videos.json"

def _get_file_hash(filepath: str) -> str:
    """Compute sha256 hash of a file for deduplication."""
    h = hashlib.sha256()
    with open(filepath, "rb") as f:
        while chunk := f.read(65536):
            h.update(chunk)
    return h.hexdigest()

def send_telegram_video(video_path: str, caption: str = "", force: bool = False) -> bool:
    """Send rendered MP4 video and caption to Telegram bot with anti-duplicate guard."""
    token = os.environ.get("TELEGRAM_BOT_TOKEN", DEFAULT_TOKEN)
    chat_id = os.environ.get("TELEGRAM_CHAT_ID", DEFAULT_CHAT_ID)

    if not token or not chat_id:
        print("⚠️ [TELEGRAM] Thiếu TELEGRAM_BOT_TOKEN hoặc TELEGRAM_CHAT_ID, bỏ qua gửi telegram.")
        return False

    if not os.path.exists(video_path):
        print(f"❌ [TELEGRAM] Không tìm thấy file video: {video_path}")
        return False

    file_size_mb = os.path.getsize(video_path) / (1024 * 1024)

    # Anti-duplicate check: Do not re-send the exact same video within 15 minutes unless forced
    file_hash = _get_file_hash(video_path)
    now = time.time()
    sent_cache = {}
    if SENT_LOG_FILE.exists():
        try:
            with open(SENT_LOG_FILE, "r", encoding="utf-8") as f:
                sent_cache = json.load(f)
        except Exception:
            sent_cache = {}

    if not force and file_hash in sent_cache:
        prev_time = sent_cache[file_hash].get("timestamp", 0)
        elapsed = now - prev_time
        if elapsed < 900:  # 15 minutes window
            print(f"⚠️ [TELEGRAM] Video '{os.path.basename(video_path)}' vừa được gửi thành công cách đây {int(elapsed)}s. Bỏ qua để tránh gửi trùng lặp!")
            return True

    print(f"✈️ [TELEGRAM] Đang gửi video ({file_size_mb:.1f} MB) về Telegram...")

    url = f"https://api.telegram.org/bot{token}/sendVideo"
    try:
        with open(video_path, "rb") as f:
            files = {"video": (os.path.basename(video_path), f, "video/mp4")}
            data = {
                "chat_id": chat_id,
                "caption": caption,
                "supports_streaming": True
            }
            resp = requests.post(url, data=data, files=files, timeout=180)
            res_json = resp.json()
            if resp.status_code == 200 and res_json.get("ok"):
                print("✅ [TELEGRAM] Đã gửi video và caption thành công về Telegram!")
                # Record successful send
                sent_cache[file_hash] = {"file": os.path.basename(video_path), "timestamp": now}
                try:
                    with open(SENT_LOG_FILE, "w", encoding="utf-8") as f:
                        json.dump(sent_cache, f, indent=2)
                except Exception:
                    pass
                return True
            else:
                desc = res_json.get("description", resp.text)
                print(f"❌ [TELEGRAM] Gửi video thất bại: {desc}")
                return False
    except Exception as e:
        print(f"❌ [TELEGRAM] Lỗi kết nối Telegram: {e}")
        return False
