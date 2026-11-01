# CLAUDE.md — Quy Chuẩn Dự Án Remotion TikTok (VideoLast Standard - Dynamic Timing)

Tài liệu hướng dẫn bắt buộc cho Claude Code khi xây dựng các video TikTok giới thiệu dự án GitHub.

---

## 1. NGUYÊN TẮC BẤT DI BẤT DỊCH (IMMUTABLE RULES)

1. **Kích thước video & Chuyển cảnh Dynamic theo Audio (Cách 1)**:
   - Resolution: `1080 x 1920` (9:16 Vertical TikTok).
   - FPS: `30 fps`.
   - Cấu trúc: Đúng `10 scene`.
   - **Chuyển cảnh theo Voice thực tế**: Mỗi scene kéo dài bằng `thời lượng giọng đọc + 0.15s` (nghỉ thở tự nhiên). Hết tiếng là chuyển cảnh ngay, tuyệt đối không chèn silence kéo dài gây đơ khung hình.
   - Hậu kỳ: Tăng tốc `1.4x` bằng FFmpeg tạo `out/VideoLast.mp4` (~22s - 28s chuẩn nhịp TikTok).

2. **Nguồn chân lý duy nhất (Single Source of Truth)**:
   - Toàn bộ thông số kỹ thuật được đọc từ `src/template/constants.ts` (sinh tự động qua `scene_timings.json`).
   - Cấu trúc `SCENE_TIMINGS` liên tục, không đứt đoạn: `scene[i].from = scene[i-1].to`.
   - CẤM DÙNG `calculateMetadata` trong `Root.tsx`. Khóa cứng theo `TOTAL_DURATION_IN_FRAMES`.

3. **Hệ thống Sound Effects (SFX)**:
   - Bắt buộc tích hợp `<SfxTrack />` trong composition:
     - `whoosh.wav`: Chuyển cảnh giữa các scene (Scene 2 -> 10).
     - `pop.wav`: Xuất hiện badge cảnh báo, feature highlight, logo, tag, sticker.
     - `bell.wav`: Kêu gọi hành động CTA Telegram (Scene 2).
     - `click.wav`: Gõ lệnh terminal, phím bấm, thao tác code (Scene 10 cài đặt lệnh).
   - Toàn bộ file SFX lưu tại `public/sfx/`.

4. **Kiểm tra tự động trước khi Render (Pre-render Validation)**:
   - Trước khi render, **BẮT BUỘC** chạy `npm run validate` (`scripts/validate.ts`).
   - Phải pass 100%: Audio master khớp tổng frames, 10 sub chunks khớp từng scene, đủ file SFX.
   - Tuyệt đối không render khi chưa pass validation.

5. **Quy tắc 2 màu chữ / frame (Strict 2-Color Rule)**:
   - Mỗi frame chỉ sử dụng đúng 2 màu: Trắng (`#FFFFFF` / `rgba(255,255,255,0.45)`) và Vàng Gold (`#FFCC00`).
   - Watermark `@titechmoingay` màu vàng ở 2 góc trên cùng.
   - Không dùng animation rung lắc cho ảnh chụp màn hình (giữ ảnh tĩnh nguyên bản).

6. **Cấu trúc 10 Scene Chuẩn VideoLast (Bình Dân Hóa 100% Cho Người Không Biết Code)**:
   - **Tư duy cốt lõi**: Khán giả là người dùng phổ thông, dân văn phòng, học sinh sinh viên, người làm nội dung. Tuyệt đối không viết cho kỹ sư phần mềm.
   - **CẤM TIỆT THUẬT NGỮ DEV trong mô tả công năng (S4, S5, S6, S7)**: CẤM các từ `API`, `framework`, `repository/repo`, `backend`, `frontend`, `OCR`, `LLM`, `pipeline`, `token`, `endpoint`, `thư viện`, `mô hình ngôn ngữ`, `tự động hóa workflow`. Thay bằng vật thể đời thực: "công cụ", "phần mềm", "máy tự động", "thư ký", "thợ cắt ảnh", "bảng tính", "tệp tài liệu".
   - **TỪ CẤM SÁO RỖNG (BANNED BUZZWORDS - CẤM TUYỆT ĐỐI)**: `giải pháp`, `mạnh mẽ`, `tối ưu`, `hiệu quả`, `tiện lợi`, `thông minh`, `linh hoạt`, `toàn diện`, `nâng cao trải nghiệm`, `nền tảng`, `hệ sinh thái`. Bỏ từ cấm mà câu mất nghĩa thì bắt buộc viết lại bằng hành động thực tế.
   - **Bước bắt buộc trước khi viết**: Trích `project_brief` từ README vào JSON đầu ra (bằng tiếng Việt đời thường, không dùng thuật ngữ code).
   - **Scene 1 (Hook Nỗi Đau / Tranh Cãi)**: 8 - 13 từ. Gây tò mò, tranh cãi, kích thích tranh luận (BỎ HOÀN TOÀN câu "Dừng... Đừng..." tiêu cực).
   - **Scene 2 (Repo & Tác Giả)**: 5 - 8 từ. Tên repo & tác giả.
   - **Scene 3 (Stars & Screenshot Repo)**: 6 - 10 từ. Số sao GitHub & screenshot repo tĩnh (Python tự động lấy stars & ảnh).
   - **Scene 4 (Nó Là Gì - Định nghĩa đời thực)**: 10 - 16 từ. `{repo_name} là công cụ giúp bạn [làm việc cụ thể ngoài đời] mà không cần [nỗi đau cũ].` (Bỏ tên repo đi, người nghe vẫn biết nó làm việc gì ngoài đời).
   - **Scene 5 (Cách Hoạt Động - Vào X, Ra Y)**: 10 - 16 từ. `Bạn ném vào [vật thể cụ thể], máy tự nhả ra [kết quả cụ thể].` CẤM nói "đưa vào dữ liệu/code/cấu hình/JSON". Phải là vật thể người dùng cầm ném vào (file văn bản, tệp PDF, ảnh chụp, video, đường link, giọng nói) và kết quả mắt thấy tai nghe (bộ slide hoàn chỉnh, bảng Excel số liệu, ảnh nét căng).
   - **Scene 6 (Ví Dụ Thực Tế Có Số Liệu)**: 10 - 16 từ. 1 tình huống cụ thể có số liệu thực tế (số phút, số trang, số tiền tiết kiệm, hình dạng kết quả), khớp ảnh demo README.
   - **Scene 7 (Dành Cho Ai & Nỗi Đau Cũ)**: 8 - 12 từ. Đối tượng nghề nghiệp thực tế ngoài đời (dân văn phòng, kế toán, học sinh, người làm nội dung...) và việc họ sợ nhất (thức đêm gõ tay từng dòng, tốn tiền triệu thuê ngoài...).
   - **Scene 8 (Miễn Phí 0đ)**: 5 - 8 từ. 100% miễn phí, không tốn 1 đồng phí duy trì hàng tháng.
   - **Scene 9 (Cài Đặt 1 Dòng Lệnh)**: 6 - 10 từ. Lệnh terminal 1 dòng (Python tự động điền lệnh).
   - **Scene 10 (CTA Telegram Cuối Video)**: Bridge 4 - 7 từ dẫn về bio + câu CTA cố định: *"Tham gia nhóm chat tele của mình ở link trong bio tiktok nhé."* (Tổng ~17 - 21 từ).
   - **KIỂM TRA CUỐI (SANITY CHECK GATE)**: Đọc riêng S4+S5+S6, người hoàn toàn không biết code phải trả lời được 4 câu:
     1. Nó là cái máy/công cụ gì?
     2. Người dùng ném cái gì vào?
     3. Nhận về cái gì cụ thể?
     4. Tiết kiệm được bao nhiêu thời gian/công sức/tiền bạc?
     Nếu không trả lời được -> KỊCH BẢN KHÔNG ĐẠT, BẮT BUỘC VIẾT LẠI.

7. **Quy chuẩn Sticker & Emoji đa tầng theo ngữ cảnh (Contextual Pop-in)**:
   - Tránh frame chỉ có 1 element đơn độc (card chữ).
   - Mỗi frame bắt buộc bổ sung đúng **1 đến 2 sticker/emoji** đặt so le ở góc card (`top: -24, right: 30` hoặc `bottom: -24, left: 30`).
   - **CẤM xuất hiện từ đầu frame**: Ban đầu sticker phải ẩn hoàn toàn (`frame < triggerFrame`).
   - **Bung theo đúng nhịp nói**: Chỉ xuất hiện đúng lúc giọng đọc phát âm đến từ khóa ngữ cảnh liên quan (sử dụng Remotion `spring(scale 0 -> 1.15 -> 1.0)`).
   - **Đồng bộ SFX**: Mỗi sticker bung ra phải khớp đúng thời điểm phát âm thanh `pop.wav` trong `SfxTrack`.
   - Xoay nhẹ góc vật lý (`rotate: -6deg` đến `+5deg`), nền xám than `#1B1D17`, viền vàng `#FFCC00`.
   - Nội dung sticker ngắn gọn: Emoji + 2-3 từ in hoa (ví dụ: `🔥 38.2K STARS`, `🧹 DIỆT LỖI GIAO DIỆN`, `💎 50+ THEMES`, `💰 X3 DOANH SỐ`).

8. **Tiêu Đề & Hashtag Đăng TikTok (TikTok Post Metadata)**:
   - Tiêu đề câu từ **gây sốc, tranh cãi, kích thích tranh luận** (ví dụ: *"Dự án mã nguồn mở này liệu có thay đổi toàn bộ thị trường tuyển dụng?*", *"Lập trình viên sắp mất việc vì công cụ mã nguồn mở này?"*).
   - Định dạng trả về cuối cùng khi tạo video: **Chỉ xuất đúng 1 dòng duy nhất dạng `Tiêu đề #hashtag1 #hashtag2...`** để copy paste ngay vào TikTok.
   - Gồm 5 - 7 hashtag liên quan (#ai, #ten_repo, #github, #coding, #laptrinh, #learnontiktok).

---

## 2. QUY TRÌNH TẠO VIDEO MỚI (`/newvideoRemotion`)

Khi nhận lệnh làm video mới cho 1 repo GitHub (hoặc khi gõ `/newvideoRemotion <repo_url>`):

### Bước 1: Thu thập thông tin GitHub
- Đọc README.md bằng `curl.exe -s "https://raw.githubusercontent.com/<owner>/<repo>/main/README.md"` hoặc python scraper (CẤM dùng tool WebFetch tránh lỗi upstream model 400).
- Xác định: Tên repo, tác giả, bài toán cốt lõi, công cụ trả phí mà nó thay thế, tính năng nổi bật, lệnh cài đặt 1 dòng.
- Chụp/lưu 4-5 ảnh chụp màn hình tĩnh độ nét cao vào `public/assets/`.

### Bước 2: Soạn kịch bản 10 Scene & TikTok Post
- Viết đúng 10 scene theo định dạng JSON chuẩn (BẮT BUỘC có field `"brief"`):
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
- Tuân thủ nghiêm ngặt ngân sách từ và vai trò từng scene (BÌNH DÂN HÓA 100% CHO NGƯỜI KHÔNG BIẾT CODE):
  - S1: 8 - 13 từ. Hook dạng nỗi đau hoặc câu hỏi gây tranh cãi.
  - S2: 5 - 8 từ. Tên repo + tác giả.
  - S3: 6 - 10 từ. Stars & Screenshot (Python tự điền nếu để trống).
  - S4 (Nó là gì): 10 - 16 từ. Định nghĩa đời thực: `{repo_name} là công cụ giúp bạn [làm việc cụ thể ngoài đời] mà không cần [nỗi đau cũ].` (Bỏ tên repo đi, người nghe vẫn biết nó làm việc gì).
  - S5 (Cách hoạt động): 10 - 16 từ. Cấu trúc: `Bạn ném vào [vật thể cụ thể], máy tự nhả ra [kết quả cụ thể].` Lấy từ brief.input và brief.output. CẤM nói "đưa vào dữ liệu/code/cấu hình".
  - S6 (Ví dụ thực tế): 10 - 16 từ. 1 tình huống cụ thể có số liệu thực tế (số phút, số trang, số tiền tiết kiệm), khớp ảnh demo README.
  - S7: 8 - 12 từ. Dành cho ai (nghề nghiệp cụ thể: văn phòng, kế toán, học sinh...) & giải quyết việc họ sợ nhất.
  - S8: 5 - 8 từ. 100% miễn phí, không tốn 1 đồng duy trì.
  - S9: 6 - 10 từ. Cài đặt 1 dòng lệnh (Python tự điền nếu để trống).
  - S10: Bridge 4 - 7 từ + câu CTA tele cố định ("Tham gia nhóm chat tele của mình ở link trong bio tiktok nhé.").
- **CẤM TIỆT THUẬT NGỮ DEV**: `API`, `framework`, `repository/repo`, `backend`, `frontend`, `OCR`, `LLM`, `pipeline`, `token`, `endpoint`, `thư viện`, `mô hình ngôn ngữ`, `tự động hóa workflow`.
- **TỪ CẤM SÁO RỖNG (BANNED BUZZWORDS)**: `giải pháp`, `mạnh mẽ`, `tối ưu`, `hiệu quả`, `tiện lợi`, `thông minh`, `linh hoạt`, `toàn diện`, `nâng cao trải nghiệm`, `nền tảng`, `hệ sinh thái`.
- **KIỂM TRA CUỐI (SANITY CHECK GATE)**: Đọc riêng S4+S5+S6, người không biết code phải trả lời được: Nó là cái máy gì? Cầm cái gì ném vào? Nhận về cái gì? Tiết kiệm bao nhiêu thời gian/tiền?
- **Tách bạch 2 luồng Phụ đề (Sub) & Giọng đọc (Voice)**:
  - `display_scripts` (trong `text`): Giữ nguyên tên tiếng Anh chuẩn (`GitHub`, `Cursor`, `Claude Code`, `AI`, `Landing Page`, `Terminal`, `pip install`, tên repo).
  - `voice_scripts`: Pipeline Python tự động sinh phiên âm chuẩn (`Gít Húp`, `Cớ Sơ`, `Cờ Lót`, `A I`, `lèn đinh pếch`, `téc mi nồ`, `píp inxto`).
- Kèm trường `"tiktok_post"` (title, caption, hashtags, tiktok_copy_line).

### Bước 3: Tạo Voice & Dynamic Timings
- Tự động dọn sạch thư mục `temp_voice_segments/`, tuyệt đối không dùng cache audio cũ của repo trước.
- Luôn tạo mới 100% từng file voice `seg_01.mp3` .. `seg_xx.mp3` qua Edge-TTS (`vi-VN-NamMinhNeural`, `rate="+20%"`).
- Kịch bản ngắt câu tự nhiên bằng dấu chấm (`.`), tránh dùng câu phức quá dài (> 12 từ không dấu ngắt) để Edge-TTS không bị ngắt kết nối.
- Nối voice với buffer `0.15s` qua `make_video.py` (hoặc `pipeline/audio.py`).
- Tự động sinh `src/template/constants.ts` và `src/TikTokVideo/Captions.tsx`.

### Bước 4: Thiết kế Visual & Gắn SFX trong Remotion
- Cập nhật 10 component trong `src/TikTokVideo/Scenes.tsx`.
- Gắn `<SfxTrack />` trong `src/TikTokVideo/index.tsx`.
- Tuân thủ palette Matte Charcoal & Gold (`#FFCC00` và `#FFFFFF`).

### Bước 5: Chạy Validation Gate (BẮT BUỘC)
```bash
npm run validate
```
- Phải ra output `🎉 VALIDATION PASSED! ĐỦ ĐIỀU KIỆN RENDER VIDEOGOC & VIDEOLAST!`.

### Bước 6: Render videoGoc & Tăng tốc 1.4x VideoLast
```bash
# Render video gốc 30fps
npx remotion render TikTokVideo out/videoGoc.mp4 --concurrency 8

# Tăng tốc 1.4x ra video TikTok cuối cùng
ffmpeg -i out/videoGoc.mp4 -filter_complex "[0:v]setpts=PTS/1.4[v];[0:a]atempo=1.4[a]" -map "[v]" -map "[a]" -c:v libx264 -preset fast -crf 18 -c:a aac -b:a 192k out/VideoLast.mp4 -y
```

### Bước 7: Tự Động Bắn Video Về Telegram Bot
- Pipeline tự động gửi `out/VideoLast.mp4` về bot Telegram `@remotionVidsBot` (chat ID `7277122122`).
- Kèm caption 1 dòng duy nhất gồm tiêu đề sốc + hashtags sẵn sàng copy đăng TikTok.

---

## 3. LỆNH THƯỜNG DÙNG
- `/newvideoRemotion <repo_url>`: Dựng video 8 Scene cô đặc 90s (~33s VideoLast 1.4x), bình dân hóa cho người mới, tôn vinh điểm mạnh của repo.
- `npm run dev`: Mở Remotion Studio xem trực tiếp tại `http://localhost:3000`.
- `npm run validate`: Kiểm tra toàn diện khung hình, thời lượng, voice, sub và SFX.
