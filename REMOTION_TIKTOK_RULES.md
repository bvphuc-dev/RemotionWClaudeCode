# QUY CHUẨN DỰNG VIDEO REMOTION TIKTOK (Chuẩn VideoLast 60s -> 37.5s)

Tài liệu quy chuẩn dùng để tự động hóa và dựng các video TikTok giới thiệu các dự án GitHub. Giữ nguyên 100% cấu trúc, phong cách, hiệu ứng, chỉ thay đổi thông tin dự án GitHub.

---

## 1. Thông Số Kỹ Thuật (Specs)
- **Định dạng**: Vertical 9:16 (TikTok, Reels, Shorts).
- **Độ phân giải**: `1080 x 1920 px`.
- **Tốc độ khung hình**: `60 fps`.
- **Độ dài videoGoc**: Đúng `60 giây` (`3600 frames`).
- **Cấu trúc 15 frame hình (Slide/Scene)**: Đúng 15 frame, mỗi frame kéo dài `4 giây` (`240 frames`):
  - **Frame 1 - 2 (0s - 8s / 0 - 480 frames)**: Hook giật gân, đánh trúng nỗi đau, cảnh báo.
  - **Frame 3 - 13 (8s - 52s / 480 - 3120 frames)**: 11 frame giải thích dự án GitHub (tính năng, demo, kiến trúc, CLI, số liệu).
  - **Frame 14 - 15 (52s - 60s / 3120 - 3600 frames)**: 2 frame CTA giới thiệu nhóm chat Telegram.
- **Quy trình 2 bước xuất file**:
  1. Render Remotion gốc ở tốc độ 1.0x -> `out/videoGoc.mp4` (độ dài 60s / 3600 frames).
  2. Tăng tốc 1.6x bằng FFmpeg -> `out/VideoLast.mp4` (độ dài chuẩn 37.5s, nhịp độ cực nhanh, giữ chân người xem tối đa).

---

## 2. Thiết Kế Giao Diện (Design Rules)
- **Tone màu chủ đạo**: Matte Charcoal & Brass (Dark mode trầm, lì, chuẩn dev công nghệ cao cấp).
  - Background: `#0C0D0E` hoặc `#111210`.
  - Accent chính: Vàng Gold sáng `#FFCC00`.
  - Text chính: Trắng sáng `#FFFFFF` / Trắng kem `#F0EFEA`.
- **Quy tắc 2 màu chữ / frame (BẮT BUỘC)**: Mọi frame trên toàn bộ video chỉ dùng đúng 2 màu chữ:
  1. Màu 1: Trắng `#FFFFFF` (hoặc mờ `rgba(255, 255, 255, 0.45)`).
  2. Màu 2: Vàng Gold `#FFCC00`.
  Tuyệt đối không dùng nhiều màu sặc sỡ (xanh lam, đỏ, cam, lục) trong cùng frame gây rối mắt.
- **Watermark nhận diện thương hiệu**:
  - Chữ `@titechmoingay` màu vàng `#FFCC00`, hiệu ứng phát sáng `textShadow: 0 0 16px rgba(255, 204, 0, 0.85)`.
  - Đặt cố định ở hai góc trên (Top-Left và Top-Right), font chữ tròn đậm (`Nunito`), size `22px`.
- **Thanh tiến trình (Progress Bar)**:
  - Line mỏng `5px` sát mép trên cùng, chạy từ 0% đến 100% màu vàng Gold `#FFCC00`.
- **Card & Container**:
  - Bo góc mềm mại: `border-radius: 20px - 28px`.
  - Nền mờ kính tối: `backgroundColor: rgba(17, 18, 16, 0.94)`.
  - Border viền tinh tế: `border: 2px solid #2A2C26`.
- **Ảnh chụp màn hình (Screenshot)**:
  - **TUYỆT ĐỐI KHÔNG thêm animation rung lắc hay xoay 3D** (tránh cảm giác rác AI / AI-slop).
  - Giữ ảnh tĩnh nguyên bản bên trong khung bo góc sắc nét.

---

## 3. Subtitle Karaoke Kinetic (Captions)
- **Vị trí**: Đặt cách đáy màn hình `240px` (tránh bị che bởi giao diện caption và thanh công cụ của TikTok).
- **Typography**: Font tròn Cartoon (`Nunito`, `sans-serif`), weight `900`, `textTransform: uppercase`, kích thước `44px`.
- **Hiệu ứng Karaoke**:
  - Chữ đang đọc: Phóng to nhẹ `scale(1.14)`, đổi sang màu vàng Gold `#FFCC00`, kèm hiệu ứng phát sáng `textShadow: 0 0 24px rgba(255, 204, 0, 0.95)`.
  - Chữ đã đọc: Giữ màu trắng sáng `#FFFFFF`.
  - Chữ chưa đọc: Làm mờ `rgba(255, 255, 255, 0.45)`.
- **Đồng bộ thời gian từ (Word-level Timing)**:
  - Dùng Whisper (`openai/whisper-large-v3-turbo`) trích xuất chính xác frame bắt đầu (`start`) và kết thúc (`end`) của từng từ theo giọng đọc.
  - Active khi `frame >= word.start && frame < word.end`.

---

## 4. Cấu Trúc Kịch Bản 15 Frame Hình Chuẩn (Mỗi frame 4s / 240 frames)

| Frame | Giây (Gốc) | Tên Phân Cảnh | Mục Tiêu & Nội Dung |
|---|---|---|---|
| **Frame 1** | 0s - 4s | **Hook Cảnh Báo** | Đánh trúng nỗi đau chi phí/lỗi thời của người dùng khi làm nội dung. |
| **Frame 2** | 4s - 8s | **Hook Giải Pháp** | Chặn đứng suy nghĩ cũ, mở ra giải pháp mã nguồn mở mới. |
| **Frame 3** | 8s - 12s | **Hero Reveal** | Giới thiệu tên dự án GitHub, số sao, vị thế thay thế công cụ trả phí. |
| **Frame 4** | 12s - 16s | **Giao Diện UI** | Trình diễn giao diện Desktop trực quan, thân thiện, không cần code. |
| **Frame 5** | 16s - 20s | **Tính Năng Clone Voice** | Clone giọng tức thì chỉ với vài giây âm thanh mẫu (Zero-shot). |
| **Frame 6** | 20s - 24s | **Đa Ngôn Ngữ** | Hỗ trợ hàng trăm ngôn ngữ toàn cầu, giữ nguyên ngữ điệu. |
| **Frame 7** | 24s - 28s | **Tính Năng Lồng Tiếng** | Tự động dubbing video, khớp thời gian và nhịp thoại. |
| **Frame 8** | 28s - 32s | **Tạo Sách Nói & Batch** | Xử lý kịch bản dài, tạo audio hàng loạt không giới hạn ký tự. |
| **Frame 9** | 32s - 36s | **Kho Model TTS** | Hỗ trợ đa dạng model AI hàng đầu thế giới (OmniVoice, CosyVoice,...). |
| **Frame 10** | 36s - 40s | **Hiệu Năng & Phần Cứng** | Chạy mượt trên GPU cá nhân hoặc CPU nhẹ tênh, bảo mật 100% offline. |
| **Frame 11** | 40s - 44s | **Kết Nối AI Agent** | Local API và MCP kết nối trực tiếp các công cụ AI. |
| **Frame 12** | 44s - 48s | **Cài Đặt Cực Nhanh** | 1 dòng lệnh duy nhất, cài đặt trong vài giây. |
| **Frame 13** | 48s - 52s | **Tổng Kết Giá Trị** | Hoàn toàn miễn phí, mã nguồn mở, không tốn tiền đăng ký tháng. |
| **Frame 14** | 52s - 56s | **CTA Telegram 1** | Kêu gọi lưu video và hướng dẫn vào bio TikTok. |
| **Frame 15** | 56s - 60s | **CTA Telegram 2** | Hướng dẫn lướt nhẹ trang web để vào nhóm chat Telegram trao đổi AI. |

> **Câu thoại kết thúc bắt buộc ở Frame 14 & 15:**
> *"Lưu video lại dùng ngay! Tham gia nhóm chat tele của mình ở link trong bio tiktok nhé. Anh em lướt xuống xíu trong trang web, là thấy link nhóm nhé."*

---

## 5. Quy Tắc Giọng Đọc & Lời Thoại (Voiceover)
- **Công cụ TTS chuẩn**: Microsoft Edge-TTS (miễn phí, tốc độ cao, không tốn GPU).
  - Giọng Nam chuẩn: `vi-VN-NamMinhNeural` (trầm ấm, tự tin, phong cách review công nghệ).
  - Giọng Nữ (nếu cần): `vi-VN-HoaiMyNeural`.
  - Tốc độ gốc: `rate="+0%"` (sau đó video thành phẩm sẽ được tăng tốc 1.6x bằng FFmpeg).
- **Phiên âm tiếng Anh sang tiếng Việt**: Để công cụ đọc chuẩn ngữ âm tự nhiên, toàn bộ từ khóa tiếng Anh trong script đọc phải được phiên âm thuần Việt:
  - *VoiceStudio* -> `Voi Sờ tu đi ô`
  - *ElevenLabs* -> `I le vần Láp`
  - *GitHub* -> `Gít Húp`
  - *OmniVoice* -> `Ôm ni Voi`
  - *Clone voice* -> `Cờ lon voi`
  - *Desktop* -> `Đét tốp`
  - *Terminal* -> `tec mi nồ`
- **Khoảng nghỉ thở tự nhiên**: Giữa các vế câu chèn khoảng lặng ngắn `0.1s - 0.2s`.
- **Âm lượng**: Chuẩn hóa EBU R128 `loudnorm=I=-16:TP=-1.0`.

---

## 6. Lệnh Render & Hậu Kỳ Tự Động (Execution Commands)

### Bước 1: Render videoGoc từ Remotion (60s @ 60fps)
```bash
npx remotion render <CompositionID> out/videoGoc.mp4 --concurrency 4
```

### Bước 2: Tăng tốc 1.6x tạo VideoLast bằng FFmpeg (37.5s)
```bash
ffmpeg -i out/videoGoc.mp4 -filter_complex "[0:v]setpts=PTS/1.6[v];[0:a]atempo=1.6[a]" -map "[v]" -map "[a]" -c:v libx264 -preset fast -crf 18 -c:a aac -b:a 192k out/VideoLast.mp4 -y
```

---

## 7. Checklist Khi Chuyển Sang Dự Án GitHub Mới:
- [ ] 1. Lấy thông tin dự án: Tên repo, tác giả, số sao, tính năng nổi bật, lệnh cài đặt CLI.
- [ ] 2. Chụp/tạo ảnh chụp màn hình tĩnh của dự án đưa vào `public/assets/`.
- [ ] 3. Viết script 15 frame hình chuẩn (mỗi frame 4s, tổng 60s).
- [ ] 4. Phiên âm các thuật ngữ sang tiếng Việt.
- [ ] 5. Tạo voice Edge-TTS, lấy timestamp Whisper chính xác cho từng từ Karaoke.
- [ ] 6. Cập nhật `Sequence` trong Remotion (15 sequences x 240 frames = 3600 frames).
- [ ] 7. Render `videoGoc.mp4` (60s) rồi chạy lệnh tăng tốc 1.6x ra `VideoLast.mp4` (37.5s).
