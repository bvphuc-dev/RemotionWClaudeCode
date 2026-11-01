import os
import re
import urllib.request
import json
import subprocess
from urllib.parse import urlparse

def _fetch_url_text(url: str, timeout: int = 10) -> str:
    """Fetch URL content with urllib, fallback to curl.exe to bypass network/model issues."""
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return resp.read().decode("utf-8", errors="replace")
    except Exception:
        pass

    try:
        res = subprocess.run(
            ["curl.exe", "-s", "-L", url],
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            timeout=timeout
        )
        if res.returncode == 0 and res.stdout.strip():
            return res.stdout
    except Exception:
        pass
    return ""

def parse_repo_url(url: str) -> tuple[str, str]:
    """Extract owner and repo name from GitHub URL or 'owner/repo' format."""
    clean_url = url.strip().rstrip("/")
    if "github.com" in clean_url:
        path = urlparse(clean_url).path.strip("/")
        parts = path.split("/")
        return parts[0], parts[1]
    elif "/" in clean_url:
        parts = clean_url.split("/")
        return parts[0], parts[1]
    raise ValueError(f"Invalid GitHub repo: {url}")

def fetch_repo_data(url: str, assets_dir: str = "public/assets") -> dict:
    """Fetch GitHub repo metadata and download available banner/images."""
    owner, repo = parse_repo_url(url)
    os.makedirs(assets_dir, exist_ok=True)
    slug = f"{owner.lower()}_{repo.lower()}"

    meta = {
        "owner": owner,
        "repo": repo,
        "slug": slug,
        "full_name": f"{owner}/{repo}",
        "stars": 0,
        "description": "",
        "readme": "",
        "images": [],
        "install_cmd": f"git clone https://github.com/{owner}/{repo}.git"
    }

    # 1. GitHub API Metadata
    api_url = f"https://api.github.com/repos/{owner}/{repo}"
    api_text = _fetch_url_text(api_url)
    if api_text:
        try:
            data = json.loads(api_text)
            meta["stars"] = data.get("stargazers_count", 0)
            meta["description"] = data.get("description", "") or ""
            meta["homepage"] = data.get("homepage", "") or ""
        except Exception as e:
            print(f"⚠️ Could not parse GitHub API: {e}")

    # 2. Raw README.md
    readme_text = _fetch_url_text(f"https://raw.githubusercontent.com/{owner}/{repo}/main/README.md")
    if not readme_text:
        readme_text = _fetch_url_text(f"https://raw.githubusercontent.com/{owner}/{repo}/master/README.md")
    meta["readme"] = readme_text

    # 3. Detect install command from README
    if meta["readme"]:
        for line in meta["readme"].splitlines():
            line_s = line.strip().lower()
            if any(k in line_s for k in ["npx ", "npm i", "pip install", "brew install", "cargo install"]) and len(line.strip()) < 80:
                clean_cmd = line.strip().strip("`$# ")
                if clean_cmd:
                    meta["install_cmd"] = clean_cmd
                    break

    # 4. Find images in README
    if meta["readme"]:
        # Find markdown images ![alt](url) and html img src
        img_urls = re.findall(r'!\[.*?\]\((https?://[^\s\)]+)\)', meta["readme"])
        img_urls += re.findall(r'<img[^>]+src=["\'](https?://[^"\']+)["\']', meta["readme"])

        # Also find relative paths like "site/OG-hallmark.png"
        rel_imgs = re.findall(r'!\[.*?\]\((?!http)([^\s\)]+\.(?:png|jpg|jpeg|webp))\)', meta["readme"])
        rel_imgs += re.findall(r'<img[^>]+src=["\'](?!http)([^"\']+\.(?:png|jpg|jpeg|webp))["\']', meta["readme"])
        for r_path in rel_imgs:
            r_clean = r_path.lstrip("./")
            img_urls.append(f"https://raw.githubusercontent.com/{owner}/{repo}/main/{r_clean}")

        # Filter out badge icons, shields, svg
        clean_img_urls = [
            u for u in img_urls
            if not any(k in u.lower() for k in ["badge", "shields.io", ".svg", "workflow", "license"])
        ]

        saved_count = 0
        for i, img_url in enumerate(clean_img_urls):
            if saved_count >= 3:
                break
            ext = os.path.splitext(urlparse(img_url).path)[1] or ".png"
            if ext.lower() not in [".png", ".jpg", ".jpeg", ".webp"]:
                ext = ".png"
            out_filename = f"{slug}_asset_{saved_count+1}{ext}"
            out_path = os.path.join(assets_dir, out_filename)
            try:
                urllib.request.urlretrieve(img_url, out_path)
                # Verify magic bytes: PNG (\x89PNG), JPEG (\xff\xd8), WebP (RIFF)
                with open(out_path, "rb") as f:
                    header = f.read(12)
                is_valid = (
                    header.startswith(b"\x89PNG") or
                    header.startswith(b"\xff\xd8") or
                    (header.startswith(b"RIFF") and b"WEBP" in header)
                )
                if is_valid:
                    meta["images"].append(f"assets/{out_filename}")
                    saved_count += 1
                    print(f"📸 Downloaded asset {saved_count}: {out_filename}")
                else:
                    os.remove(out_path)
            except Exception:
                if os.path.exists(out_path):
                    try: os.remove(out_path)
                    except Exception: pass

    # 5. Playwright screenshot capture if README has few or no images
    if len(meta["images"]) < 2:
        try:
            from pipeline.screenshot import capture_screenshots_for_repo
            captured = capture_screenshots_for_repo(owner, repo, meta.get("homepage"), assets_dir=assets_dir)
            for c in captured:
                if c not in meta["images"]:
                    meta["images"].append(c)
        except Exception as e:
            print(f"⚠️ Playwright screenshot failed: {e}")

    return meta
