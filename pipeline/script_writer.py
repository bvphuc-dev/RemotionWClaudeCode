import os
import re

PHONETIC_PAIRS = [
    (r"\bAI code\b", "A I viết code"),
    (r"\bAI coding\b", "A I viết code"),
    (r"\bAI\b", "A I"),
    (r"\bGitHub\b", "Gít Húp"),
    (r"\bGithub\b", "Gít Húp"),
    (r"\bgithub\b", "Gít Húp"),
    (r"\bGit\b", "Gít"),
    (r"\bTerminal\b", "téc mi nồ"),
    (r"\bterminal\b", "téc mi nồ"),
    (r"\bCursor\b", "Cớ Sơ"),
    (r"\bcursor\b", "Cớ Sơ"),
    (r"\bClaude Code\b", "Cờ Lót Cốt"),
    (r"\bClaude\b", "Cờ Lót"),
    (r"\bWindsurf\b", "Win Sơt"),
    (r"\blanding page\b", "lèn đinh pếch"),
    (r"\bLanding Page\b", "lèn đinh pếch"),
    (r"\bLanding page\b", "lèn đinh pếch"),
    (r"\bUI/UX\b", "U I U Ích"),
    (r"\bUI\b", "U I"),
    (r"\bUX\b", "U Ích"),
    (r"\bAPI\b", "A P I"),
    (r"\bpip install\b", "píp inxto"),
    (r"\bDocker\b", "Đốc Cơ"),
    (r"\bdocker\b", "Đốc Cơ"),
    (r"\bRepo\b", "Rê pô"),
    (r"\brepo\b", "rê pô"),
    (r"\bWeb\b", "Oép"),
    (r"\bweb\b", "oép"),
    (r"\bTheDotMack\b", "The Dot Mack"),
    (r"\bnpx\b", "en pi ích"),
    (r"\bVorssaint\b", "Vo sanh"),
    (r"\bOrkas\b", "O ca"),
    (r"\bMacBook\b", "Mác Búc"),
    (r"\bMac\b", "Mác"),
]

REVERSE_PHONETIC_PAIRS = [
    (r"\bGít Húp\b", "GitHub"),
    (r"\bA I\b", "AI"),
    (r"\bCớ Sơ\b", "Cursor"),
    (r"\bCờ Lót Cốt\b", "Claude Code"),
    (r"\bCờ Lót\b", "Claude"),
    (r"\blèn đinh pếch\b", "Landing Page"),
    (r"\btéc mi nồ\b", "Terminal"),
    (r"\bpíp inxto\b", "pip install"),
    (r"\ben pi ích\b", "npx"),
    (r"\bĐốc Cơ\b", "Docker"),
    (r"\bRê pô\b", "Repo"),
    (r"\brê pô\b", "Repo"),
    (r"\bU I U Ích\b", "UI/UX"),
    (r"\bVo sanh\b", "Vorssaint"),
    (r"\bO ca\b", "Orkas"),
    (r"\bMác Búc\b", "MacBook"),
]

DEFAULT_CTA_FIXED = "Tham gia nhóm chat tele của mình ở link trong bio tiktok nhé."

BANNED_BUZZWORDS = [
    "giải pháp", "mạnh mẽ", "tối ưu", "hiệu quả", "tiện lợi",
    "thông minh", "linh hoạt", "toàn diện", "nâng cao trải nghiệm",
    "nền tảng", "hệ sinh thái"
]

BANNED_DEV_JARGON = [
    "api", "framework", "repository", "backend", "frontend",
    "ocr", "llm", "pipeline", "token", "endpoint", "thư viện",
    "mô hình ngôn ngữ", "tự động hóa workflow"
]

def auto_phonetic_vietnamese(text: str) -> str:
    """Convert formal tech words into natural Vietnamese phonetic pronunciation for Edge-TTS."""
    res = text
    for pattern, replacement in PHONETIC_PAIRS:
        res = re.sub(pattern, replacement, res)

    # Convert large numbers with commas (e.g. 34,049 or 100,715) to natural Vietnamese speech
    def _convert_stars_speech(m):
        raw_num = m.group(1).replace(",", "")
        try:
            val = int(raw_num)
            if val >= 1000:
                k = round(val / 1000)
                return f"{k} nghìn"
            return str(val)
        except Exception:
            return m.group(0)

    res = re.sub(r"\b(\d{1,3}(?:,\d{3})+)\b", _convert_stars_speech, res)

    # Hyphenate long compound English words so Edge-TTS Vietnamese neural voice pronounces cleanly
    def _hyphen_long(m):
        w = m.group(0)
        w_low = w.lower()
        for suffix in ["powers", "power", "rails", "rail"]:
            if w_low.endswith(suffix) and len(w) > len(suffix) + 3:
                idx = len(w) - len(suffix)
                return f"{w[:idx]}-{w[idx:]}"
        if len(w) >= 11:
            mid = len(w) // 2
            return f"{w[:mid]}-{w[mid:]}"
        return w

    res = re.sub(r"\b[a-zA-Z]{8,}\b", _hyphen_long, res)
    return res

def sanitize_display_subtitle(text: str) -> str:
    """Ensure on-screen subtitles display professional English terms instead of raw phonetics."""
    res = text
    for pattern, replacement in REVERSE_PHONETIC_PAIRS:
        res = re.sub(pattern, replacement, res, flags=re.IGNORECASE)
    return res

def _pick_repo_screenshot(images: list[str]) -> str | None:
    if not images:
        return None
    for img in images:
        if "github_repo" in img.lower():
            return img
    return images[0]

def _pick_workflow_screenshot(images: list[str]) -> str | None:
    if not images:
        return None
    for img in images:
        if any(k in img.lower() for k in ["features", "workflow", "website", "readme"]):
            return img
    return images[-1]

def create_default_10_scenes(repo_meta: dict) -> tuple[list[str], list[str], list[dict], dict]:
    """
    Generate standard 10-scene script conforming to the new prompt layout:
    S1: Hook (8-13 words)
    S2: Repo name + author (5-8 words)
    S3: Stars + screenshot (6-10 words, Python auto-fills)
    S4: Pain -> solution (9-14 words)
    S5: Breakthrough feature (9-14 words)
    S6: UI / workflow (9-14 words)
    S7: Who is it for (8-12 words)
    S8: 0đ Free (5-8 words)
    S9: 1-line install command (6-10 words, Python auto-fills)
    S10: CTA bridge (4-7 words) + cta_fixed
    """
    name = repo_meta.get("repo", "Dự Án")
    owner = repo_meta.get("owner", "Tác Giả")
    stars = repo_meta.get("stars", 0)
    stars_str = f"{stars:,}" if stars else "nhiều nghìn"
    cmd = repo_meta.get("install_cmd", f"git clone https://github/{owner}/{name}.git").strip()
    images = repo_meta.get("images", [])

    img_repo = _pick_repo_screenshot(images)
    img_wf = _pick_workflow_screenshot(images) or img_repo

    display_scripts = [
        # S1: Hook (11 words)
        "Công cụ này liệu có làm thay đổi thói quen làm việc?",
        # S2: Tên repo + tác giả (6 words)
        f"Dự án {name} từ tác giả {owner}.",
        # S3: Stars + screenshot (9 words)
        f"Dự án đạt hơn {stars_str} ngôi sao trên GitHub.",
        # S4: Nó là gì: định nghĩa 1 câu đời thực (10-16 words)
        f"{name} là công cụ biến tài liệu phức tạp thành kết quả trực quan.",
        # S5: Cách hoạt động: đưa vào X, nhận ra Y (10-16 words)
        "Bạn chỉ cần ném tệp vào, máy tự nhả ra bản hoàn chỉnh.",
        # S6: Ví dụ thực tế: 1 tình huống cụ thể + kết quả (10-16 words)
        "Làm xong cả tập tài liệu dày chỉ trong vài giây ngắn ngủi.",
        # S7: Dùng cho ai (10 words)
        "Dành cho bất kỳ ai muốn tiết kiệm thời gian làm việc.",
        # S8: Miễn phí 0đ (7 words)
        "Hoàn toàn miễn phí, không tốn một đồng.",
        # S9: Cài đặt 1 dòng lệnh (9 words)
        "Cài đặt nhanh gọn chỉ với một dòng lệnh.",
        # S10: CTA bridge + cta_fixed (19 words)
        f"Xem link chi tiết bên dưới nhé. {DEFAULT_CTA_FIXED}",
    ]

    voice_scripts = [auto_phonetic_vietnamese(s) for s in display_scripts]

    scenes_meta = [
        {
            "badge": "01 // CÂU HỎI LỚN",
            "titleGold": "BƯỚC NGOẶT MỚI?",
            "titleWhite": "Công Cụ Này Liệu Có Gây Sốc?",
            "centerEmoji": "🔥",
            "stickers": [
                {"emoji": "🔥", "text": "HOT TREND", "triggerFrame": 20, "rotate": -6, "top": -24, "left": 30},
                {"emoji": "⚡", "text": "GÂY TRANH CÃI", "triggerFrame": 50, "rotate": 8, "bottom": -24, "right": 30}
            ]
        },
        {
            "badge": "02 // DỰ ÁN GITHUB",
            "titleGold": f"{name.upper()}",
            "titleWhite": f"Tác Giả: @{owner}",
            "centerEmoji": "🐙",
            "stickers": [
                {"emoji": "🐙", "text": "GITHUB REPO", "triggerFrame": 15, "rotate": -5, "top": -24, "left": 30},
                {"emoji": "🚀", "text": "MÃ NGUỒN MỞ", "triggerFrame": 45, "rotate": 6, "bottom": -24, "right": 30}
            ]
        },
        {
            "badge": "03 // UY TÍN CỘNG ĐỒNG",
            "titleGold": f"⭐ {stars_str} STARS",
            "titleWhite": "Cộng Đồng Đón Nhận Nồng Nhiệt",
            "image": img_repo,
            "stickers": [
                {"emoji": "⭐", "text": f"{stars_str} SAO", "triggerFrame": 20, "rotate": -7, "top": -24, "left": 30},
                {"emoji": "🔥", "text": "VIRAL GITHUB", "triggerFrame": 50, "rotate": 6, "bottom": -24, "right": 30}
            ]
        },
        {
            "badge": "04 // NÓ LÀ GÌ",
            "titleGold": "CÔNG CỤ NÀY LÀ GÌ",
            "titleWhite": f"{name} Giúp Giải Quyết Công Việc",
            "centerEmoji": "💡",
            "stickers": [
                {"emoji": "💡", "text": "ĐỊNH NGHĨA", "triggerFrame": 20, "rotate": -6, "top": -24, "left": 30},
                {"emoji": "⚡", "text": "CÔNG DỤNG", "triggerFrame": 50, "rotate": 7, "bottom": -24, "right": 30}
            ]
        },
        {
            "badge": "05 // CÁCH HOẠT ĐỘNG",
            "titleGold": "VÀO X, RA Y",
            "titleWhite": "Đưa Dữ Liệu Vào, Nhận Kết Quả",
            "centerEmoji": "🔄",
            "stickers": [
                {"emoji": "📥", "text": "ĐƯA VÀO X", "triggerFrame": 20, "rotate": 6, "top": -24, "right": 30},
                {"emoji": "📤", "text": "TRẢ RA Y", "triggerFrame": 50, "rotate": -6, "bottom": -24, "left": 30}
            ]
        },
        {
            "badge": "06 // VÍ DỤ THỰC TẾ",
            "titleGold": "KẾT QUẢ THỰC TẾ",
            "titleWhite": "Xem Demo Trực Quan Từ Dự Án",
            "image": img_wf,
            "stickers": [
                {"emoji": "📊", "text": "VÍ DỤ THẬT", "triggerFrame": 20, "rotate": -6, "top": -24, "left": 30},
                {"emoji": "✨", "text": "KẾT QUẢ", "triggerFrame": 50, "rotate": 6, "bottom": -24, "right": 30}
            ]
        },
        {
            "badge": "07 // DÀNH CHO AI",
            "titleGold": "ĐÚNG ĐỐI TƯỢNG",
            "titleWhite": "Dành Cho Mọi Người",
            "centerEmoji": "🎯",
            "stickers": [
                {"emoji": "🎯", "text": "DÀNH CHO BẠN", "triggerFrame": 20, "rotate": 6, "top": -24, "right": 30},
                {"emoji": "⚡", "text": "ĐÚNG NHU CẦU", "triggerFrame": 50, "rotate": -6, "bottom": -24, "left": 30}
            ]
        },
        {
            "badge": "08 // HOÀN TOÀN MIỄN PHÍ",
            "titleGold": "0 ĐỒNG CHI PHÍ",
            "titleWhite": "Không Phí Duy Trì Hàng Tháng",
            "centerEmoji": "💰",
            "stickers": [
                {"emoji": "💵", "text": "0 ĐỒNG", "triggerFrame": 20, "rotate": 7, "top": -24, "right": 30},
                {"emoji": "🆓", "text": "FREE TRỌN ĐỜI", "triggerFrame": 50, "rotate": -6, "bottom": -24, "left": 30}
            ]
        },
        {
            "badge": "09 // CÀI ĐẶT 1 DÒNG LỆNH",
            "titleGold": "CÀI ĐẶT 1 DÒNG",
            "titleWhite": "Copy & Chạy Ngay",
            "command": cmd,
            "stickers": [
                {"emoji": "💻", "text": "1 DÒNG LỆNH", "triggerFrame": 20, "rotate": -6, "top": -24, "left": 30},
                {"emoji": "⚡", "text": "CHẠY TRONG 1 PHÚT", "triggerFrame": 50, "rotate": 7, "bottom": -24, "right": 30}
            ]
        },
        {
            "badge": "10 // THAM GIA TELEGRAM",
            "titleGold": "LINK TRONG BIO",
            "titleWhite": "Tham Gia Nhóm Chat Tele",
            "bullets": [
                ["Link nhóm nằm trong BIO TikTok", "#FFCC00"],
                ["Cập nhật repo AI đỉnh mỗi ngày", "#FFFFFF"],
                ["Thảo luận cùng cộng đồng coder", "#FFFFFF"]
            ],
            "stickers": [
                {"emoji": "📌", "text": "LƯU VIDEO LẠI", "triggerFrame": 20, "rotate": -6, "top": -24, "left": 30},
                {"emoji": "💬", "text": "NHÓM CHAT TELE", "triggerFrame": 50, "rotate": 7, "bottom": -24, "right": 30}
            ]
        }
    ]

    tiktok_post = {
        "title": f"Dự án mã nguồn mở {name.upper()} liệu có thay đổi toàn bộ thị trường tuyển dụng?",
        "caption": f"Dự án {name} cực đỉnh trên GitHub với hơn {stars_str} stars. Hoàn toàn miễn phí. Link nhóm tele cộng đồng trong bio nhé!",
        "hashtags": ["#ai", f"#{name.lower()}", "#github", "#coding", "#laptrinh", "#congnghe", "#learnontiktok"],
        "tiktok_copy_line": f"Dự án mã nguồn mở {name.upper()} liệu có thay đổi toàn bộ thị trường tuyển dụng? #ai #{name.lower()} #github #coding #laptrinh #congnghe #learnontiktok"
    }

    return display_scripts, voice_scripts, scenes_meta, tiktok_post

def parse_or_create_scenes(custom_data: dict, repo_meta: dict) -> tuple[list[str], list[str], list[dict], dict]:
    """
    Parse custom script JSON conforming to the new prompt format:
    {
      "scenes": [
        {"id": 1, "text": "...", "on_screen_keyword": "...", "visual_hint": "..."},
        ...
      ],
      "warnings": ["..."],
      "tiktok_post": { ... } (optional)
    }
    """
    # Fallback to legacy format if "scenes" is not a list of scene objects
    if "scenes" not in custom_data or not isinstance(custom_data["scenes"], list) or len(custom_data["scenes"]) < 5:
        if "voice_scripts" in custom_data or "display_scripts" in custom_data or "scripts" in custom_data:
            voice_scripts = custom_data.get("voice_scripts") or custom_data.get("tts_scripts")
            display_scripts = custom_data.get("display_scripts") or custom_data.get("subtitles") or custom_data.get("scripts", [])
            if not voice_scripts:
                voice_scripts = [auto_phonetic_vietnamese(s) for s in display_scripts]
            display_scripts = [sanitize_display_subtitle(s) for s in display_scripts]
            scenes_meta = custom_data.get("scenes_meta") or create_default_10_scenes(repo_meta)[2]
            custom_post = custom_data.get("tiktok_post")
            return display_scripts, voice_scripts, scenes_meta, custom_post
        return create_default_10_scenes(repo_meta)

    name = repo_meta.get("repo", "Dự Án")
    owner = repo_meta.get("owner", "Tác Giả")
    stars = repo_meta.get("stars", 0)
    stars_str = f"{stars:,}" if stars else "nhiều nghìn"
    cmd = repo_meta.get("install_cmd", f"git clone https://github.com/{owner}/{name}.git").strip()
    images = repo_meta.get("images", [])
    img_repo = _pick_repo_screenshot(images)
    img_wf = _pick_workflow_screenshot(images) or img_repo

    raw_scenes = sorted(custom_data["scenes"], key=lambda s: s.get("id", 0))

    badges_default = [
        "01 // CÂU HỎI LỚN",
        "02 // DỰ ÁN GITHUB",
        "03 // UY TÍN CỘNG ĐỒNG",
        "04 // NÓ LÀ GÌ",
        "05 // CÁCH HOẠT ĐỘNG",
        "06 // VÍ DỤ THỰC TẾ",
        "07 // DÀNH CHO AI",
        "08 // HOÀN TOÀN MIỄN PHÍ",
        "09 // CÀI ĐẶT 1 DÒNG LỆNH",
        "10 // THAM GIA TELEGRAM",
    ]

    display_scripts = []
    scenes_meta = []

    for idx, sc in enumerate(raw_scenes):
        sid = idx + 1
        raw_text = sc.get("text", "").strip()
        kw = sc.get("on_screen_keyword", "").strip()
        hint = sc.get("visual_hint", "").strip()

        # Handle auto-filled scenes
        if sid == 3 and len(raw_scenes) == 10: # S3: Stars + screenshot (Python auto-fills if empty in 10-scene)
            if not raw_text:
                raw_text = f"Dự án đạt hơn {stars_str} ngôi sao trên GitHub."
            if not kw:
                kw = f"{stars_str} Stars"
        elif sid == len(raw_scenes) - 1 and not raw_text and sc.get("command"):
            raw_text = "Cài đặt nhanh gọn chỉ với một dòng lệnh."
            if not kw:
                kw = "1 DÒNG LỆNH"
        elif sid == len(raw_scenes): # Last scene: Bridge + cta_fixed if requested
            bridge = raw_text
            if not bridge:
                bridge = "Chi tiết nằm ở link bên dưới nhé."
            if "tele" not in bridge.lower() and "bio" not in bridge.lower():
                raw_text = f"{bridge} {DEFAULT_CTA_FIXED}".strip()
            if not kw:
                kw = "LINK Ở BIO"

        clean_sub = sanitize_display_subtitle(raw_text)
        display_scripts.append(clean_sub)

        # Check banned words in S4-S7 (non-coder explanation gate)
        if sid in [4, 5, 6, 7]:
            text_lower = raw_text.lower()
            found_buzzwords = [bw for bw in BANNED_BUZZWORDS if bw in text_lower]
            found_jargon = [jg for jg in BANNED_DEV_JARGON if re.search(rf"\b{re.escape(jg)}\b", text_lower)]
            if found_buzzwords:
                print(f"   ⚠️ [KỊCH BẢN - S{sid}] Chứa từ sáo rỗng: {', '.join(found_buzzwords)}. Nên thay bằng hành động cụ thể ngoài đời!")
            if found_jargon:
                print(f"   ⚠️ [KỊCH BẢN - S{sid}] Chứa thuật ngữ dev: {', '.join(found_jargon)}. Người không biết code sẽ không hiểu!")

        # Build scene meta
        badge = sc.get("badge") or (badges_default[idx] if idx < len(badges_default) else f"{sid:02d} // TÍNH NĂNG")
        sm = {
            "badge": badge,
            "titleGold": sc.get("titleGold") or (kw.upper() if kw else f"SCENE {sid:02d}"),
            "titleWhite": sc.get("titleWhite") or (hint if (hint and len(hint) <= 45) else clean_sub[:45]),
            "stickers": sc.get("stickers", [])
        }
        if "image" in sc:
            sm["image"] = sc["image"]
        if "command" in sc:
            sm["command"] = sc["command"]
        if "bullets" in sc:
            sm["bullets"] = sc["bullets"]
        if "centerEmoji" in sc:
            sm["centerEmoji"] = sc["centerEmoji"]

        # Context-specific visuals based on scene role if not already provided
        if not sm["stickers"] and not sm.get("image") and not sm.get("command") and not sm.get("bullets"):
            if sid == 1:
                sm["centerEmoji"] = "🔥"
                sm["stickers"] = [
                    {"emoji": "🔥", "text": kw[:16] if kw else "HOT TREND", "triggerFrame": 15, "rotate": -6, "top": -24, "left": 30},
                    {"emoji": "⚡", "text": "GÂY BẤT NGỜ", "triggerFrame": 45, "rotate": 8, "bottom": -24, "right": 30}
                ]
            elif sid == 2:
                sm["titleGold"] = sc.get("titleGold") or name.upper()
                sm["titleWhite"] = sc.get("titleWhite") or f"Tác Giả: @{owner}"
                sm["centerEmoji"] = "🐙"
                sm["stickers"] = [
                    {"emoji": "🐙", "text": "GITHUB REPO", "triggerFrame": 15, "rotate": -5, "top": -24, "left": 30},
                    {"emoji": "🚀", "text": kw[:16] if kw else "MÃ NGUỒN MỞ", "triggerFrame": 45, "rotate": 6, "bottom": -24, "right": 30}
                ]
            elif sid == 3:
                sm["titleGold"] = sc.get("titleGold") or f"⭐ {stars_str} STARS"
                sm["titleWhite"] = sc.get("titleWhite") or "Cộng Đồng Đón Nhận Nồng Nhiệt"
                sm["image"] = img_repo
                sm["stickers"] = [
                    {"emoji": "⭐", "text": f"{stars_str} SAO", "triggerFrame": 15, "rotate": -7, "top": -24, "left": 30},
                    {"emoji": "🔥", "text": "VIRAL GITHUB", "triggerFrame": 45, "rotate": 6, "bottom": -24, "right": 30}
                ]
            elif sid == 4:
                sm["centerEmoji"] = "💡"
                sm["stickers"] = [
                    {"emoji": "💡", "text": "ĐỊNH NGHĨA", "triggerFrame": 15, "rotate": -6, "top": -24, "left": 30},
                    {"emoji": "⚡", "text": kw[:16] if kw else "CÔNG DỤNG", "triggerFrame": 45, "rotate": 7, "bottom": -24, "right": 30}
                ]
            elif sid == 5:
                sm["centerEmoji"] = "🔄"
                sm["stickers"] = [
                    {"emoji": "📥", "text": "ĐƯA VÀO X", "triggerFrame": 15, "rotate": 6, "top": -24, "right": 30},
                    {"emoji": "📤", "text": kw[:16] if kw else "TRẢ RA Y", "triggerFrame": 45, "rotate": -6, "bottom": -24, "left": 30}
                ]
            elif sid == 6:
                sm["image"] = img_wf
                sm["stickers"] = [
                    {"emoji": "📊", "text": kw[:16] if kw else "VÍ DỤ THẬT", "triggerFrame": 15, "rotate": -6, "top": -24, "top": -24, "left": 30},
                    {"emoji": "✨", "text": "KẾT QUẢ", "triggerFrame": 45, "rotate": 6, "bottom": -24, "right": 30}
                ]
            elif sid == 7:
                sm["centerEmoji"] = "🎯"
                sm["stickers"] = [
                    {"emoji": "🎯", "text": kw[:16] if kw else "DÀNH CHO BẠN", "triggerFrame": 15, "rotate": 6, "top": -24, "right": 30},
                    {"emoji": "⚡", "text": "ĐÚNG NHU CẦU", "triggerFrame": 45, "rotate": -6, "bottom": -24, "left": 30}
                ]
            elif sid == 8 and len(raw_scenes) == 10:
                sm["titleGold"] = "0 ĐỒNG CHI PHÍ"
                sm["titleWhite"] = "Hoàn Toàn Miễn Phí"
                sm["centerEmoji"] = "💰"
                sm["stickers"] = [
                    {"emoji": "💵", "text": kw[:16] if kw else "0 ĐỒNG", "triggerFrame": 15, "rotate": 7, "top": -24, "right": 30},
                    {"emoji": "🆓", "text": "FREE TRỌN ĐỜI", "triggerFrame": 45, "rotate": -6, "bottom": -24, "left": 30}
                ]
            elif sid == 9 and len(raw_scenes) == 10:
                sm["titleGold"] = "CÀI ĐẶT 1 DÒNG"
                sm["titleWhite"] = "Copy & Chạy Ngay"
                sm["command"] = cmd
                sm["stickers"] = [
                    {"emoji": "💻", "text": "1 DÒNG LỆNH", "triggerFrame": 15, "rotate": -6, "top": -24, "left": 30},
                    {"emoji": "⚡", "text": "CHẠY NGAY", "triggerFrame": 45, "rotate": 7, "bottom": -24, "right": 30}
                ]
            elif sid == 10 and len(raw_scenes) == 10:
                sm["titleGold"] = "LINK TRONG BIO"
                sm["titleWhite"] = "Tham Gia Nhóm Chat Tele"
                sm["bullets"] = [
                    ["Link nhóm nằm trong BIO TikTok", "#FFCC00"],
                    ["Cập nhật repo AI đỉnh mỗi ngày", "#FFFFFF"],
                    ["Thảo luận cùng cộng đồng coder", "#FFFFFF"]
                ]
                sm["stickers"] = [
                    {"emoji": "📌", "text": "LƯU VIDEO LẠI", "triggerFrame": 15, "rotate": -6, "top": -24, "left": 30},
                    {"emoji": "💬", "text": "NHÓM CHAT TELE", "triggerFrame": 45, "rotate": 7, "bottom": -24, "right": 30}
                ]

        scenes_meta.append(sm)

    voice_scripts = [auto_phonetic_vietnamese(s) for s in display_scripts]

    custom_post = custom_data.get("tiktok_post")
    if not custom_post:
        custom_post = {
            "title": f"Dự án mã nguồn mở {name.upper()} liệu có thay đổi toàn bộ thị trường tuyển dụng?",
            "caption": f"Dự án {name} cực đỉnh trên GitHub với hơn {stars_str} stars. Hoàn toàn miễn phí. Link nhóm tele cộng đồng trong bio nhé!",
            "hashtags": ["#ai", f"#{name.lower()}", "#github", "#coding", "#laptrinh", "#congnghe", "#learnontiktok"],
            "tiktok_copy_line": f"Dự án mã nguồn mở {name.upper()} liệu có thay đổi toàn bộ thị trường tuyển dụng? #ai #{name.lower()} #github #coding #laptrinh #congnghe #learnontiktok"
        }

    return display_scripts, voice_scripts, scenes_meta, custom_post

# Alias for backward compatibility
create_default_15_scenes = create_default_10_scenes
