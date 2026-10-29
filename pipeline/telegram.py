import os
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

def send_telegram_video(video_path: str, caption: str = "") -> bool:
    """Send rendered MP4 video and caption to Telegram bot."""
    token = os.environ.get("TELEGRAM_BOT_TOKEN", DEFAULT_TOKEN)
    chat_id = os.environ.get("TELEGRAM_CHAT_ID", DEFAULT_CHAT_ID)

    if not token or not chat_id:
        print("⚠️ [TELEGRAM] Thiếu TELEGRAM_BOT_TOKEN hoặc TELEGRAM_CHAT_ID, bỏ qua gửi telegram.")
        return False

    if not os.path.exists(video_path):
        print(f"❌ [TELEGRAM] Không tìm thấy file video: {video_path}")
        return False

    file_size_mb = os.path.getsize(video_path) / (1024 * 1024)
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
                return True
            else:
                desc = res_json.get("description", resp.text)
                print(f"❌ [TELEGRAM] Gửi video thất bại: {desc}")
                return False
    except Exception as e:
        print(f"❌ [TELEGRAM] Lỗi kết nối Telegram: {e}")
        return False
