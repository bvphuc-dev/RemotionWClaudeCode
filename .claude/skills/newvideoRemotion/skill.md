---
name: newvideoRemotion
description: Quy trình dựng video TikTok Remotion chuẩn 8 Scene cô đặc (90s pre-speedup / ~30-35s VideoLast 1.4x) cho GitHub repo, bình dân hóa cho người mới, nâng cao điểm mạnh thần thánh của repo.
---

# /newvideoRemotion Workflow: Dựng Video TikTok GitHub Siêu Tốc (Chuẩn 8 Scene Cô Đặc - 30fps)

Khi nhận lệnh `/newvideoRemotion <github_repo_url>` hoặc yêu cầu làm video theo cấu trúc 8 scene cô đặc 90 giây:

---

## 1. NGUYÊN TẮC CỐT LÕI (8 SCENE CÔ ĐẶC - THẦN THÁNH HÓA CHO NGƯỜI MỚI)
- **Thời lượng:** ~45s - 50s voice gốc (khoảng 210 - 240 từ), tăng tốc 1.4x thành video TikTok dài **~30s - 35s** (chuẩn nhịp giữ chân người xem cao nhất).
- **FPS:** 30 fps, độ phân giải 1080x1920 (dọc 9:16).
- **Mục tiêu kịch bản:** Người hoàn toàn không biết code nghe vẫn hiểu được sự "thần thánh" của repo. Dùng các phép ví von đời thực (máy chụp X-quang, chìa khóa vạn năng, thư ký tự động...), loại bỏ hoàn toàn biệt ngữ khó hiểu.
- **2 màu chủ đạo:** Vàng Gold (`#FFCC00`) và Trắng (`#FFFFFF`).

---

## 2. QUY TRÌNH THỰC HIỆN 3 BƯỚC

### BƯỚC 1: Claude Code Thu Thập Dữ Liệu & Soạn Kịch Bản 8 Scene
Đọc README repo GitHub bằng lệnh PowerShell `curl.exe -s "https://raw.githubusercontent.com/<owner>/<repo>/main/README.md"` (hoặc chạy scraper Python). **Tuyệt đối KHÔNG dùng WebFetch** để tránh lỗi `Model is unavailable (400)`.
Tạo file `repo_scripts/<slug>_script.json` với đúng cấu trúc 8 scene sau:

```json
{
  "brief": {
    "what_it_is": "[Phép ví von đời thực] giúp [ai] [làm việc thần thánh gì]",
    "input": "ném vật thể đóng kín / bài toán khó gì vào",
    "output": "máy tự nhả ra kết quả trực quan gì cụ thể",
    "problem": "nỗi đau cũ nếu không có repo này (mò tay mất cả tuần, tốn tiền triệu)",
    "concrete_example": "1 ví dụ thật dễ hiểu có kết quả đo lường cụ thể",
    "evidence": "trích 1 dòng chứng minh từ README"
  },
  "scenes": [
    {
      "id": 1,
      "badge": "01 // SIÊU NĂNG LỰC",
      "titleGold": "SIÊU NĂNG LỰC GÂY SỐC",
      "titleWhite": "Khám Phá Bí Mật Repo",
      "text": "Bạn thấy một ứng dụng có tính năng cực đỉnh nhưng không có mã nguồn? Repo REA này sẽ giúp AI mổ xẻ mọi phần mềm.",
      "on_screen_keyword": "MỔ XẺ ỨNG DỤNG",
      "visual_hint": "Bí mật bên trong mọi phần mềm",
      "image": "assets/<slug>_github_repo.png",
      "stickers": [
        {"emoji": "🔥", "text": "413K STARS", "triggerFrame": 15, "rotate": -6, "top": -24, "left": 30},
        {"emoji": "⚡", "text": "BƯỚC NGOẶT AI", "triggerFrame": 45, "rotate": 8, "bottom": -24, "right": 30}
      ]
    },
    {
      "id": 2,
      "badge": "02 // NỖI ĐAU NGƯỜI MỚI",
      "titleGold": "BẤT LỰC VỚI CÁCH CŨ",
      "titleWhite": "Mò Mẫm Cả Tuần Mù Mịt",
      "text": "Người mới học code muốn làm tính năng giống đối thủ thường bất lực vì ứng dụng đã đóng gói mã hóa, mò tay thì mù mịt.",
      "on_screen_keyword": "BẤT LỰC CÁCH CŨ",
      "visual_hint": "Khó khăn khi làm thủ công",
      "centerEmoji": "🔒",
      "stickers": [
        {"emoji": "😵", "text": "MÒ KIM ĐÁY BỂ", "triggerFrame": 15, "rotate": -7, "top": -24, "right": 30},
        {"emoji": "❌", "text": "BẤT LỰC", "triggerFrame": 45, "rotate": 6, "bottom": -24, "left": 30}
      ]
    },
    {
      "id": 3,
      "badge": "03 // PHÉP MÀU ĐỜI THỰC",
      "titleGold": "VẬT THỂ ĐỜI THỰC",
      "titleWhite": "Soi Thông Suốt Toàn Bộ Dự Án",
      "text": "REA chính là chiếc máy chụp X-quang phần mềm, trao cho trợ lý AI đôi mắt nhìn xuyên thấu vào tận từng tế bào nhị phân.",
      "on_screen_keyword": "PHÉP MÀU X-QUANG",
      "visual_hint": "Soi thấu tận ruột phần mềm",
      "image": "assets/<slug>_asset_1.png",
      "stickers": [
        {"emoji": "🩻", "text": "SOI XUYÊN THẤU", "triggerFrame": 15, "rotate": 6, "top": -24, "left": 30},
        {"emoji": "🧠", "text": "AI TRÍ TUỆ CAO", "triggerFrame": 45, "rotate": -6, "bottom": -24, "right": 30}
      ]
    },
    {
      "id": 4,
      "badge": "04 // VÀO X, RA Y",
      "titleGold": "VÀO VẬT THỂ, RA KẾT QUẢ",
      "titleWhite": "Tự Động 100% Cục Bộ",
      "text": "Bạn chỉ cần ném tệp phần mềm đóng kín vào, trợ lý AI tự mổ xẻ các nhánh chạy và đưa ra bằng chứng hoạt động xác thực.",
      "on_screen_keyword": "VÀO FILE, RA CODE",
      "visual_hint": "Bằng chứng hoạt động rõ ràng",
      "centerEmoji": "⚙️",
      "stickers": [
        {"emoji": "📥", "text": "NÉM FILE VÀO", "triggerFrame": 15, "rotate": -6, "top": -24, "right": 30},
        {"emoji": "📤", "text": "NHẬN CODE RA", "triggerFrame": 45, "rotate": 7, "bottom": -24, "left": 30}
      ]
    },
    {
      "id": 5,
      "badge": "05 // VÍ DỤ THỰC TẾ",
      "titleGold": "KẾT QUẢ CÓ SỐ LIỆU",
      "titleWhite": "Hoàn Thành Trong Vài Phút",
      "text": "Ví dụ muốn biết game khủng long tăng tốc thế nào, chỉ cần hỏi một câu, AI mổ xẻ mã máy và dựng lại game y hệt trong vài phút.",
      "on_screen_keyword": "XONG TRONG VÀI PHÚT",
      "visual_hint": "Tái tạo tính năng cực nhanh",
      "image": "assets/<slug>_website_workflow.png",
      "stickers": [
        {"emoji": "🎯", "text": "VÍ DỤ THẬT", "triggerFrame": 15, "rotate": -5, "top": -24, "left": 30},
        {"emoji": "⚡", "text": "XONG VÀI PHÚT", "triggerFrame": 45, "rotate": 6, "bottom": -24, "right": 30}
      ]
    },
    {
      "id": 6,
      "badge": "06 // ĐÈ BẸP CÁCH CŨ",
      "titleGold": "VƯỢT TRỘI CÁCH CŨ",
      "titleWhite": "Không Cần Thuê Chuyên Gia Đắt Tiền",
      "text": "Trước đây dịch ngược ứng dụng cần chuyên gia mất cả tuần, nay trợ lý AI của bạn tự làm ngay trên máy, an toàn tuyệt đối.",
      "on_screen_keyword": "TIẾT KIỆM HÀNG TUẦN",
      "visual_hint": "Chạy cục bộ, bảo mật 100%",
      "bullets": [
        ["Cách cũ: Thuê chuyên gia mất cả tuần, tốn tiền triệu", "#FFFFFF"],
        ["Cách mới: Trợ lý AI tự mổ xẻ chỉ trong vài phút", "#FFCC00"],
        ["An toàn: Chạy 100% trên máy tính của bạn", "#FFFFFF"]
      ],
      "stickers": [
        {"emoji": "⏱️", "text": "TIẾT KIỆM 99% GIỜ", "triggerFrame": 15, "rotate": 6, "top": -24, "right": 30},
        {"emoji": "🛡️", "text": "AN TOÀN CỤC BỘ", "triggerFrame": 45, "rotate": -6, "bottom": -24, "left": 30}
      ]
    },
    {
      "id": 7,
      "badge": "07 // CÀI ĐẶT 0 ĐỒNG",
      "titleGold": "MIỄN PHÍ TRỌN ĐỜI",
      "titleWhite": "Cài Đặt Cực Nhanh 1 Dòng",
      "text": "Dự án mã nguồn mở hoàn toàn miễn phí không tốn một đồng, cài đặt chỉ bằng đúng một dòng lệnh npx đơn giản.",
      "on_screen_keyword": "0 ĐỒNG 1 DÒNG LỆNH",
      "visual_hint": "Copy lệnh chạy ngay",
      "command": "npx <package> setup",
      "stickers": [
        {"emoji": "💰", "text": "0 ĐỒNG MIỄN PHÍ", "triggerFrame": 15, "rotate": -6, "top": -24, "left": 30},
        {"emoji": "💻", "text": "1 DÒNG LỆNH", "triggerFrame": 45, "rotate": 7, "bottom": -24, "right": 30}
      ]
    },
    {
      "id": 8,
      "badge": "08 // TRANH LUẬN & BIO",
      "titleGold": "BẠN DÁM THỬ KHÔNG?",
      "titleWhite": "Nhóm Chat Tele Ở Link Bio",
      "text": "Bạn có dám để AI mổ xẻ phần mềm đối thủ không? Tham gia nhóm chat tele của mình ở link trong bio tiktok nhé.",
      "on_screen_keyword": "LINK TRONG BIO",
      "visual_hint": "Bình luận và lấy link bio",
      "bullets": [
        ["Link repo và hướng dẫn nằm trong BIO TikTok", "#FFCC00"],
        ["Chia sẻ kỹ thuật AI và mã nguồn mở đỉnh cao", "#FFFFFF"],
        ["Bình luận ngay ý kiến của bạn bên dưới", "#FFFFFF"]
      ],
      "stickers": [
        {"emoji": "💬", "text": "BÌNH LUẬN NGAY", "triggerFrame": 15, "rotate": -6, "top": -24, "right": 30},
        {"emoji": "🚀", "text": "TELE TRONG BIO", "triggerFrame": 45, "rotate": 7, "bottom": -24, "right": 30}
      ]
    }
  ],
  "tiktok_post": {
    "title": "...",
    "caption": "...",
    "hashtags": ["#ai", "..."],
    "tiktok_copy_line": "..."
  }
}
```

- **Quy tắc ngân sách từ & ngắt câu:** Mỗi scene từ 22 - 32 từ (tổng script khoảng 210 - 240 từ voice, khi đọc rate +20% sẽ ra ~46s video gốc, tăng tốc 1.4x ra đúng ~33s chuẩn TikTok). Ngắt câu ngắn tự nhiên bằng dấu chấm (`.`), tránh câu phức nối quá dài không dấu ngắt để Edge-TTS không bị ngắt kết nối.
- **Cấm sáo rỗng & thuật ngữ dev:** Cấm các từ `giải pháp`, `mạnh mẽ`, `tối ưu`, `toàn diện`, `API`, `framework`, `backend`, `frontend`, `LLM`. Thay bằng hình tượng đời thực: *máy chụp X-quang, chìa khóa mở khóa phần mềm, người trợ lý, file tài liệu, tệp ảnh*.

---

### BƯỚC 2: Chạy Pipeline Tự Động Hóa
Chạy lệnh Python:
```bash
.venv\Scripts\python.exe make_video.py --url <github_repo_url> --script-json repo_scripts/<slug>_script.json
```

Pipeline sẽ tự động thực thi tuần tự:
1. **Scraper & Screenshot**: Lấy metadata repo và dùng Playwright chụp ảnh giao diện đưa vào `public/assets/`.
2. **Fresh Edge-TTS Synthesis**: Tự động dọn sạch thư mục `temp_voice_segments/`, không bao giờ dùng cache file cũ của video trước. Tự tạo mới 100% từng file voice tiếng Việt chuẩn nội dung kịch bản hiện tại.
3. **Dynamic Audio**: Ghép 8 scene đệm 0.15s nghỉ thở tự nhiên, chuẩn hóa `loudnorm`.
4. **Whisper CUDA**: Dùng GPU đồng bộ timestamp từng từ (kinetic karaoke captions).
5. **Generator**: Tự động sinh `Scenes.tsx`, `Captions.tsx`, `SfxTrack.tsx`, `timings.ts`, `constants.ts`.
6. **Pre-render Validation**: Tự động chạy `npm run validate` đảm bảo 100% khớp frame trước khi render.
7. **Remotion Render**: Render 30fps ra `out/<slug>_videoGoc.mp4` (~45s).
8. **FFmpeg 1.4x**: Tăng tốc ra `out/<slug>_VideoLast.mp4` (~33s nhịp TikTok).
9. **Telegram Bot**: Tự động bắn video hoàn thiện và caption về bot Telegram `@remotionVidsBot`.

---

### BƯỚC 3: Báo Cáo Kết Quả Cho Người Dùng
- Trả về thông số thời lượng, số frames và đường dẫn file video `out/<slug>_VideoLast.mp4`.
- **In đúng 1 dòng copy TikTok duy nhất** để người dùng copy paste ngay:
  `[Tiêu đề gây sốc/kích thích tranh cãi] #[tag1] #[tag2] #[tag3] #[tag4] #[tag5]`
