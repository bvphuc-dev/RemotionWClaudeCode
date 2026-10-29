---
name: new-video
description: Quy trình dựng video TikTok 30fps chuẩn VideoLast 10 scene cho GitHub repo với bước validate tự động.
---

# /new-video Workflow: Quy Trình Dựng Video TikTok Siêu Tốc (Chuẩn VideoLast 10 Scene - 30fps)

Khi người dùng chạy `/new-video <github_repo_url>` hoặc yêu cầu làm video cho dự án GitHub mới:

## Quy Trình Tối Ưu (Thời Gian ~1 - 1.5 Phút / Video):

### BƯỚC 1: Claude Code Soạn Kịch Bản 10 Scene & TikTok Post Metadata (Trí Tuệ Sáng Tạo)
Claude Code đọc repo README, phân tích bài toán cốt lõi, trích xuất `project_brief` trước và soạn file `script.json`:
```json
{
  "brief": {
    "what_it_is": "[loại công cụ] giúp [ai] [làm việc cụ thể gì]",
    "input": "người dùng đưa vào cái gì (file, lệnh, link, prompt... hoặc viết code)",
    "output": "nhận được cái gì (file, kết quả, hành động tự động...)",
    "problem": "trước đây việc này đau ở đâu (tốn thời gian, tốn tiền, phải làm tay...)",
    "concrete_example": "1 tình huống thật có đối tượng cụ thể (vd: đưa file PDF 50 trang, ra slide 12 trang)",
    "evidence": "trích 1 dòng README chứng minh"
  },
  "scenes": [
    {"id": 1, "text": "...", "on_screen_keyword": "...", "visual_hint": "..."},
    {"id": 2, "text": "...", "on_screen_keyword": "...", "visual_hint": "..."},
    {"id": 3, "text": "...", "on_screen_keyword": "...", "visual_hint": "..."},
    {"id": 4, "text": "DocuSlide là công cụ giúp bạn biến file PDF thành slide PowerPoint.", "on_screen_keyword": "PDF → SLIDE", "visual_hint": "Icon PDF biến thành PowerPoint"},
    {"id": 5, "text": "Bạn đưa vào một file PDF, nó trả ra bộ slide có sẵn tiêu đề và hình.", "on_screen_keyword": "VÀO PDF, RA SLIDE", "visual_hint": "Screenshot terminal lệnh chạy, rồi file .pptx xuất hiện"},
    {"id": 6, "text": "Báo cáo 50 trang thành 12 slide, chỉ mất chưa đầy một phút.", "on_screen_keyword": "50 TRANG → 12 SLIDE", "visual_hint": "Ảnh demo trước/sau trong README, zoom vào số trang"},
    {"id": 7, "text": "...", "on_screen_keyword": "...", "visual_hint": "..."},
    {"id": 8, "text": "...", "on_screen_keyword": "...", "visual_hint": "..."},
    {"id": 9, "text": "...", "on_screen_keyword": "...", "visual_hint": "..."},
    {"id": 10, "text": "...", "on_screen_keyword": "...", "visual_hint": "..."}
  ],
  "warnings": [],
  "tiktok_post": {
    "title": "...",
    "caption": "...",
    "hashtags": ["#ai", "..."],
    "tiktok_copy_line": "..."
  }
}
```
- Ngân sách từ & vai trò từng scene (BÌNH DÂN HÓA 100% CHO NGƯỜI KHÔNG BIẾT GÌ VỀ CODE):
  - Scene 1 (Hook Nỗi Đau / Tranh Luận): 8 - 13 từ. Gây tò mò, tranh cãi, kích thích tranh luận.
  - Scene 2: 5 - 8 từ. Tên repo & Tác giả.
  - Scene 3: 6 - 10 từ. Stars & Screenshot repo (Python tự động điền nếu để trống).
  - Scene 4 (Nó Là Gì - Định nghĩa đời thực): 10 - 16 từ. `{repo_name} là công cụ giúp bạn [làm việc cụ thể ngoài đời] mà không cần [nỗi đau cũ].` (Bỏ tên repo đi, người nghe vẫn biết nó làm việc gì ngoài đời).
  - Scene 5 (Cách Hoạt Động - Vào X, Ra Y): 10 - 16 từ. `Bạn ném vào [vật thể cụ thể], máy tự nhả ra [kết quả cụ thể].` CẤM nói "đưa vào dữ liệu/code/cấu hình". Phải là vật thể người dùng ném vào (tệp PDF, ảnh chụp, video, giọng nói) và kết quả mắt thấy tai nghe (slide PowerPoint, bảng Excel, ảnh nét).
  - Scene 6 (Ví Dụ Thực Tế Có Số Liệu): 10 - 16 từ. Tình huống thật có số liệu thực tế (số phút, số trang, số tiền tiết kiệm), khớp ảnh demo README.
  - Scene 7 (Dành Cho Ai & Nỗi Đau Cũ): 8 - 12 từ. Nghề nghiệp cụ thể ngoài đời (dân văn phòng, kế toán, học sinh...) và việc họ sợ nhất.
  - Scene 8: 5 - 8 từ. Hoàn toàn miễn phí 0đ, không phí duy trì.
  - Scene 9: 6 - 10 từ. Lệnh cài đặt 1 dòng (Python tự động điền nếu để trống).
  - Scene 10: Bridge 4 - 7 từ dẫn về bio + câu CTA Telegram cố định ("Tham gia nhóm chat tele của mình ở link trong bio tiktok nhé.").
- **CẤM TIỆT THUẬT NGỮ DEV**: `API`, `framework`, `repository/repo`, `backend`, `frontend`, `OCR`, `LLM`, `pipeline`, `token`, `endpoint`, `thư viện`, `mô hình ngôn ngữ`, `tự động hóa workflow`.
- **TỪ CẤM SÁO RỖNG (BANNED BUZZWORDS)**: `giải pháp`, `mạnh mẽ`, `tối ưu`, `hiệu quả`, `tiện lợi`, `thông minh`, `linh hoạt`, `toàn diện`, `nâng cao trải nghiệm`, `nền tảng`, `hệ sinh thái`.
- **KIỂM TRA CUỐI (SANITY CHECK GATE)**: Đọc riêng S4+S5+S6, người không biết code phải trả lời được 4 câu:
  1. Nó là cái máy/công cụ gì?
  2. Người dùng ném cái gì vào?
  3. Nhận về cái gì cụ thể?
  4. Tiết kiệm được bao nhiêu thời gian/công sức/tiền bạc?
  Nếu không trả lời được -> KỊCH BẢN KHÔNG ĐẠT, BẮT BUỘC VIẾT LẠI.
- **Giữ nguyên bố cục & styling**: Toàn bộ layout, styling, bảng màu 2 màu chuẩn (#FFCC00 và #FFFFFF) giữ nguyên 100%.
- **Tách 2 luồng script**:
  - `text` trong JSON: Giữ nguyên tên tiếng Anh chuẩn (`GitHub`, `Cursor`, `Claude Code`, `AI`, `Landing Page`, `Terminal`).
  - `voice_scripts`: Pipeline Python tự động sinh phiên âm tiếng Việt cho Edge-TTS đọc chuẩn.
- Kèm trường `"tiktok_post"` gồm `title` (dưới 70 ký tự giật tít), `caption` (ngắn gọn), `hashtags` (5-7 tags).

### BƯỚC 2: Chạy Tự Động Toàn Bộ Phần Xử Lý Kỹ Thuật (Tool Python Tối Ưu)
```bash
.venv\Scripts\python.exe make_video.py --url <github_repo_url> --script-json script.json
```
Tool đã được tối ưu hóa siêu tốc:
1. **Scraper**: Tự động lấy số sao, lệnh cài đặt, chụp screenshot giao diện vào `public/assets/`.
2. **Parallel TTS**: Chạy song song 10 đoạn voice cùng lúc qua `asyncio.gather` (~2s).
3. **Dynamic Audio (30fps)**: Đệm 0.15s breathing buffer, chuẩn hóa `loudnorm`, tính khung hình 30fps từng scene.
4. **Fast Whisper CUDA**: Dùng `openai/whisper-base` trên GPU trích xuất timestamp karaoke chính xác.
5. **Remotion Code Gen**: Tự động sinh `Scenes.tsx`, `Captions.tsx`, `SfxTrack.tsx`, `timings.ts`, `constants.ts`.
6. **Pre-render Validation**: Tự động chạy `npm run validate` đảm bảo chuẩn 100%.
7. **Multi-thread Render (30fps)**: Chạy Remotion với 8 workers ở 30fps (chỉ render ~900-1000 frames thay vì 3000 frames, cực nhanh ~25-30s).
8. **FFmpeg 1.4x**: Xuất `out/VideoLast.mp4` (~22-28s chuẩn nhịp TikTok).

### BƯỚC 3: Báo Cáo Kết Quả & TikTok Post
- Trả về đường dẫn video `out/VideoLast.mp4`.
- **Định dạng copy TikTok bắt buộc**: In ra đúng 1 dòng duy nhất gồm tiêu đề giật tít, gây sốc, kích thích tranh cãi + hashtag liền kề để người dùng copy đăng ngay:
  `[Tiêu đề gây sốc/tranh cãi] #[tag1] #[tag2] #[tag3] #[tag4] #[tag5]`
  *(Ví dụ: `Dự án mã nguồn mở này liệu có thay đổi toàn bộ thị trường tuyển dụng lập trình? #ai #github #coding #laptrinh #learnontiktok`)*

