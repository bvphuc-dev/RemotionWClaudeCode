import os
from urllib.parse import urlparse
from playwright.sync_api import sync_playwright

def capture_screenshots_for_repo(
    owner: str,
    repo: str,
    homepage_url: str = None,
    assets_dir: str = "public/assets"
) -> list[str]:
    """Capture high-resolution dark-mode screenshots of GitHub repo and live website using Playwright."""
    os.makedirs(assets_dir, exist_ok=True)
    slug = f"{owner.lower()}_{repo.lower()}"
    saved_images = []

    print(f"📸 Playwright capturing high-res screenshots for {owner}/{repo}...")
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            context = browser.new_context(
                viewport={"width": 1280, "height": 800},
                device_scale_factor=2,
                color_scheme="dark",
                user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            )
            page = context.new_page()

            # 1. Capture live website/demo if exists
            if homepage_url and "http" in homepage_url and not any(k in homepage_url for k in ["github.com", "badge", "shield"]):
                try:
                    print(f"   🌐 Visiting live website: {homepage_url}...")
                    page.goto(homepage_url, wait_until="networkidle", timeout=12000)
                    page.wait_for_timeout(1000)

                    # 1a. Hero
                    web_path = os.path.join(assets_dir, f"{slug}_website.png")
                    page.screenshot(path=web_path, clip={"x": 80, "y": 0, "width": 1120, "height": 720})
                    saved_images.append(f"assets/{slug}_website.png")
                    print(f"   ✓ Captured website hero: {web_path}")

                    # 1b. Scroll down for features UI
                    page.evaluate("window.scrollTo(0, 900)")
                    page.wait_for_timeout(800)
                    feat_path = os.path.join(assets_dir, f"{slug}_website_features.png")
                    page.screenshot(path=feat_path, clip={"x": 80, "y": 0, "width": 1120, "height": 720})
                    saved_images.append(f"assets/{slug}_website_features.png")
                    print(f"   ✓ Captured website features: {feat_path}")

                    # 1c. Scroll further for workflow / demo
                    page.evaluate("window.scrollTo(0, 2000)")
                    page.wait_for_timeout(800)
                    flow_path = os.path.join(assets_dir, f"{slug}_website_workflow.png")
                    page.screenshot(path=flow_path, clip={"x": 80, "y": 0, "width": 1120, "height": 720})
                    saved_images.append(f"assets/{slug}_website_workflow.png")
                    print(f"   ✓ Captured website workflow: {flow_path}")
                except Exception as e:
                    print(f"   ⚠️ Could not capture homepage {homepage_url}: {e}")

            # 2. Capture GitHub Repo Header (Stars, repo name, about, tags)
            github_url = f"https://github.com/{owner}/{repo}"
            repo_path = os.path.join(assets_dir, f"{slug}_github_repo.png")
            try:
                print(f"   🐙 Visiting GitHub repo: {github_url}...")
                page.goto(github_url, wait_until="networkidle", timeout=12000)
                page.wait_for_timeout(800)
                page.evaluate("""() => {
                    const cookie = document.querySelector('.js-cookie-consent-banner');
                    if (cookie) cookie.remove();
                }""")
                page.screenshot(path=repo_path, clip={"x": 80, "y": 60, "width": 1120, "height": 640})
                saved_images.append(f"assets/{slug}_github_repo.png")
                print(f"   ✓ Captured GitHub repo header: {repo_path}")
            except Exception as e:
                print(f"   ⚠️ Could not capture GitHub repo: {e}")

            # 3. Capture GitHub README section if needed
            if len(saved_images) < 2:
                readme_path = os.path.join(assets_dir, f"{slug}_github_readme.png")
                try:
                    page.screenshot(path=readme_path, clip={"x": 80, "y": 480, "width": 1120, "height": 640})
                    saved_images.append(f"assets/{slug}_github_readme.png")
                    print(f"   ✓ Captured GitHub README preview: {readme_path}")
                except Exception:
                    pass

            browser.close()
    except Exception as e:
        print(f"⚠️ Playwright capture failed: {e}")

    return saved_images
