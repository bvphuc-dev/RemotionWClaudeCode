import argparse
import os
import sys
import time

# Ensure UTF-8 output on Windows terminal
if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
if sys.stderr and hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8")

from make_video import generate_video
from pipeline.scraper import parse_repo_url

def find_script_for_repo(url: str, scripts_dir: str = None) -> str | None:
    """Find custom script JSON for a repo if it exists."""
    try:
        owner, repo = parse_repo_url(url)
    except Exception:
        return None

    slug = f"{owner.lower()}_{repo.lower()}"
    repo_clean = repo.lower()
    repo_no_dash = repo_clean.replace("-", "").replace("_", "")

    candidates = [
        f"{slug}_script.json",
        f"{repo_clean}_script.json",
        f"{repo_no_dash}_script.json",
        f"{slug}.json",
        f"{repo_clean}.json",
    ]

    search_dirs = [".", "repo_scripts"]
    if scripts_dir and os.path.isdir(scripts_dir):
        search_dirs.insert(0, scripts_dir)

    for d in search_dirs:
        for c in candidates:
            p = os.path.join(d, c)
            if os.path.exists(p):
                return p
    return None

def load_repos_from_file(file_path: str) -> list[str]:
    """Read repo URLs from a text file, ignoring empty lines and comments."""
    if not os.path.exists(file_path):
        return []
    repos = []
    with open(file_path, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#"):
                repos.append(line)
    return repos

def run_batch(
    repo_urls: list[str],
    concurrency: int = 8,
    no_telegram: bool = False,
    whisper_model: str = "openai/whisper-base",
    speedup_factor: float = 1.4,
    scripts_dir: str = None,
):
    total = len(repo_urls)
    if total == 0:
        print("⚠️ Danh sách repository rỗng! Vui lòng truyền URL hoặc thêm vào repos.txt")
        return

    print("\n" + "=" * 65)
    print(f"🚀 BẮT ĐẦU CHẠY BATCH {total} VIDEO TIKTOK (QUEUE TUẦN TỰ)")
    print(f"⚡ Xong video nào -> Tự gửi Telegram ngay -> Sang video kế")
    print("=" * 65 + "\n")

    results = []
    start_all = time.time()

    for idx, url in enumerate(repo_urls, 1):
        clean_url = url.strip()
        print("\n" + "#" * 65)
        print(f"📦 [{idx}/{total}] ĐANG XỬ LÝ: {clean_url}")
        print("#" * 65)

        script_file = find_script_for_repo(clean_url, scripts_dir=scripts_dir)
        if script_file:
            print(f"📝 Tìm thấy kịch bản riêng: {script_file}")
        else:
            print(f"⚠️ Không có script riêng, dùng fallback chuẩn 10-scene")

        t0 = time.time()
        try:
            res = generate_video(
                url=clean_url,
                script_json=script_file,
                concurrency=concurrency,
                no_telegram=no_telegram,
                whisper_model=whisper_model,
                speedup_factor=speedup_factor
            )
            elapsed = time.time() - t0
            res["elapsed_sec"] = elapsed
            results.append(res)
            print(f"\n✅ [{idx}/{total}] HOÀN THÀNH {res['repo']} trong {elapsed:.1f}s!")
            if res.get("sent_telegram"):
                print(f"✈️ ĐÃ GỬI TELEGRAM THÀNH CÔNG -> TIẾP TỤC VIDEO TIẾP THEO...")
            else:
                print(f"⚠️ Chưa gửi Telegram (hoặc no-telegram) -> TIẾP TỤC VIDEO TIẾP THEO...")
        except Exception as e:
            elapsed = time.time() - t0
            print(f"\n❌ [{idx}/{total}] THẤT BẠI khi xử lý {clean_url}: {e}")
            results.append({
                "repo": clean_url,
                "success": False,
                "error": str(e),
                "elapsed_sec": elapsed
            })
            print("⏩ Bỏ qua lỗi, tiếp tục repo tiếp theo trong danh sách...")

    total_time = time.time() - start_all
    success_count = sum(1 for r in results if r.get("success"))
    fail_count = total - success_count

    print("\n" + "=" * 65)
    print(f"🎉 HOÀN TẤT TOÀN BỘ BATCH ({success_count}/{total} THÀNH CÔNG) - TỔNG THỜI GIAN: {total_time / 60:.1f} phút")
    print("=" * 65)

    print("\n📋 DANH SÁCH THÀNH PHẨM:")
    for idx, r in enumerate(results, 1):
        if r.get("success"):
            print(f"  {idx}. ✅ {r['repo']} ({r['elapsed_sec']:.1f}s)")
            print(f"     📁 File: {r['out_final']}")
            if r.get("copy_line"):
                print(f"     📱 TikTok: {r['copy_line']}")
        else:
            print(f"  {idx}. ❌ {r['repo']} - Lỗi: {r.get('error')}")

    print("\n" + "=" * 65 + "\n")

def main():
    parser = argparse.ArgumentParser(description="Batch TikTok Video Queue Runner")
    parser.add_argument("--file", type=str, default="repos.txt", help="Path to repos.txt file containing URLs (one per line)")
    parser.add_argument("--urls", nargs="*", default=None, help="List of GitHub repo URLs directly from command line")
    parser.add_argument("--scripts-dir", type=str, default=None, help="Directory containing custom script JSON files (<slug>_script.json)")
    parser.add_argument("--concurrency", type=int, default=8, help="Remotion render concurrency")
    parser.add_argument("--no-telegram", action="store_true", help="Do not send to Telegram")
    parser.add_argument("--whisper-model", type=str, default="openai/whisper-base", help="Whisper model")
    parser.add_argument("--speedup", type=float, default=1.4, help="FFmpeg speedup factor (default: 1.4)")

    args = parser.parse_args()

    repo_urls = []
    if args.urls:
        repo_urls = [u.strip() for u in args.urls if u.strip()]
    elif os.path.exists(args.file):
        repo_urls = load_repos_from_file(args.file)
    else:
        print(f"❌ Không tìm thấy danh sách URL từ command line hoặc file '{args.file}'")
        sys.exit(1)

    run_batch(
        repo_urls=repo_urls,
        concurrency=args.concurrency,
        no_telegram=args.no_telegram,
        whisper_model=args.whisper_model,
        speedup_factor=args.speedup,
        scripts_dir=args.scripts_dir,
    )

if __name__ == "__main__":
    main()
