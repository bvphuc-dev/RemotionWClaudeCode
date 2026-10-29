---
name: batch-videos
description: Quy trình tạo hàng loạt video TikTok 30fps chuẩn VideoLast cho danh sách GitHub repos (đọc README, soạn script bình dân hóa, render 1.4x, gửi Telegram).
---

# /batch-videos Workflow: Dựng Hàng Loạt Video TikTok Chuẩn VideoLast 10 Scene (Queue Tuần Tự)

Khi người dùng chạy `/batch-videos` (hoặc `/batch-videos <url1> <url2> ...`):

## NGUYÊN TẮC BẤT DI BẤT DỊCH
**Tuyệt đối KHÔNG chạy batch generic bằng template cũ.** Mỗi repo trong hàng đợi BẮT BUỘC phải qua bước phân tích README và soạn kịch bản `script.json` bình dân hóa 100% cho người không biết gì về code, trả lời đúng:
1. **Nó là gì?** (Ví von đời thực, không dùng thuật ngữ kỹ thuật).
2. **Đưa gì vào?** (Vật thể cụ thể: PDF, ảnh, video, link, file).
3. **Nhận được gì ra?** (Kết quả nhìn thấy được: slide, bảng tính, ảnh nét).
4. **Tiết kiệm bao nhiêu?** (Số phút, số trang, số tiền).

---

## QUY TRÌNH THỰC HIỆN TUẦN TỰ (QUEUE):

### BƯỚC 1: Lấy Danh Sách Repo Cần Chạy
- Nếu có `$ARGUMENTS`, lấy danh sách URL từ `$ARGUMENTS`.
- Nếu không có `$ARGUMENTS`, đọc danh sách URL từ file `repos.txt` (bỏ qua dòng trống và comment `#`).
- Nếu `repos.txt` rỗng, yêu cầu người dùng thêm repo vào `repos.txt`.

### BƯỚC 2: Duyệt Từng Repo Theo Cơ Chế Hàng Đợi (Queue)
Với mỗi repo trong danh sách, Claude Code thực hiện lần lượt:

#### 2.1. Đọc README & Thu Thập Dữ Liệu Repo
- Đọc README.md, tìm hiểu công dụng thật ngoài đời, bài toán giải quyết, đối tượng người dùng, tính năng chính.

#### 2.2. Điền `project_brief` & Soạn Kịch Bản 10 Scene vào `script.json`
Viết file `script.json` đúng chuẩn:
```json
{
  "brief": {
    "what_it_is": "[loại công cụ] giúp [ai] [làm việc cụ thể gì ngoài đời]",
    "input": "người dùng đưa vào vật thể gì cụ thể (tệp PDF, ảnh, video, giọng nói...)",
    "output": "nhận được kết quả gì cụ thể (bộ slide, bảng Excel, ảnh nét gấp 4...)",
    "problem": "trước đây việc này sợ nhất ở đâu (thức đêm gõ tay, tốn tiền thuê ngoài...)",
    "concrete_example": "1 tình huống thật có số liệu (vd: tài liệu 50 trang ra 12 slide trong 1 phút)",
    "evidence": "trích 1 dòng README chứng minh"
  },
  "scenes": [
    {"id": 1, "text": "...", "on_screen_keyword": "...", "visual_hint": "..."},
    {"id": 2, "text": "...", "on_screen_keyword": "...", "visual_hint": "..."},
    {"id": 3, "text": "...", "on_screen_keyword": "...", "visual_hint": "..."},
    {"id": 4, "text": "...", "on_screen_keyword": "...", "visual_hint": "..."},
    {"id": 5, "text": "...", "on_screen_keyword": "...", "visual_hint": "..."},
    {"id": 6, "text": "...", "on_screen_keyword": "...", "visual_hint": "..."},
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

- **Ngân sách từ & vai trò từng scene (BÌNH DÂN HÓA 100% CHO NGƯỜI KHÔNG BIẾT CODE)**:
  - S1 (Hook nỗi đau / tranh luận): 8 - 13 từ.
  - S2 (Repo & Tác giả): 5 - 8 từ.
  - S3 (Stars & Screenshot): 6 - 10 từ (Python tự điền nếu để trống).
  - S4 (Nó là gì - Định nghĩa đời thực): 10 - 16 từ. `{repo_name} là công cụ giúp bạn [làm việc cụ thể ngoài đời] mà không cần [nỗi đau cũ].`
  - S5 (Cách hoạt động - Vào X, Ra Y): 10 - 16 từ. `Bạn ném vào [vật thể cụ thể], máy tự nhả ra [kết quả cụ thể].` CẤM nói "đưa vào dữ liệu/code/cấu hình".
  - S6 (Ví dụ thực tế có số liệu): 10 - 16 từ. Tình huống thật có số liệu (số phút, số trang, số tiền), khớp ảnh demo README.
  - S7 (Dành cho ai & nỗi đau cũ): 8 - 12 từ. Nghề nghiệp cụ thể (văn phòng, kế toán, học sinh...) & việc họ sợ nhất.
  - S8 (Miễn phí 0đ): 5 - 8 từ. 100% miễn phí, không tốn phí duy trì.
  - S9 (Cài đặt 1 dòng lệnh): 6 - 10 từ (Python tự điền nếu để trống).
  - S10 (CTA bio + Telegram): Bridge 4 - 7 từ + câu CTA Telegram cố định ("Tham gia nhóm chat tele của mình ở link trong bio tiktok nhé.").
- **CẤM TIỆT THUẬT NGỮ DEV**: `API`, `framework`, `repository/repo`, `backend`, `frontend`, `OCR`, `LLM`, `pipeline`, `token`, `endpoint`, `thư viện`, `mô hình ngôn ngữ`, `tự động hóa workflow`.
- **TỪ CẤM SÁO RỖNG (BANNED BUZZWORDS)**: `giải pháp`, `mạnh mẽ`, `tối ưu`, `hiệu quả`, `tiện lợi`, `thông minh`, `linh hoạt`, `toàn diện`, `nâng cao trải nghiệm`, `nền tảng`, `hệ sinh thái`.
- **KIỂM TRA CUỐI (SANITY CHECK GATE)**: Đọc riêng S4+S5+S6, người không biết code phải hiểu rõ: Nó là máy gì? Ném gì vào? Nhận gì ra? Tiết kiệm bao nhiêu?
- **Tách bạch 2 luồng Phụ đề (Sub) & Giọng đọc (Voice)**:
  - `text` trong JSON: Giữ nguyên tên tiếng Anh chuẩn (`GitHub`, `Cursor`, `Claude Code`, `AI`, `Landing Page`, `Terminal`, `pip install`, `npx`, tên repo).
  - `voice_scripts`: Pipeline Python tự động sinh phiên âm chuẩn tiếng Việt cho Edge-TTS đọc tự nhiên (`Gít Húp`, `Cớ Sơ`, `Cờ Lót`, `A I`, `téc mi nồ`, `en pi ích`).
- Lưu kịch bản theo tên riêng: `<slug>_script.json` (ví dụ: `macro_script.json`, `linkswift_script.json`) để không bị ghi đè file giữa các repo trong queue.

#### 2.3. Thực Thi Render Video & Bắn Telegram
Chạy lệnh:
```bash
.venv\Scripts\python.exe make_video.py --url "<repo_url>" --script-json <slug>_script.json
```
Lệnh sẽ:
1. Chụp screenshot/tải ảnh repo vào `public/assets/`.
2. Tạo voice Edge-TTS, đệm buffer 0.15s, tính dynamic timing 30fps.
3. Đồng bộ Whisper CUDA.
4. Sinh code Remotion, chạy `npm run validate` pass 100%.
5. Render Remotion 30fps và tăng tốc 1.4x ra `out/<slug>_VideoLast.mp4`.
6. Tự động bắn video về bot Telegram kèm caption 1 dòng duy nhất.

#### 2.4. Chuyển Sang Repo Tiếp Theo Trong Queue
Sau khi video trước đã render xong và gửi Telegram thành công, lặp lại bước 2.1 cho repo tiếp theo.

---

### BƯỚC 3: Báo Cáo Tổng Hợp
Khi hoàn tất toàn bộ danh sách, xuất bảng tổng hợp:
- Tên repo & đường dẫn file video `out/<slug>_VideoLast.mp4`.
- Dòng copy TikTok 1 dòng duy nhất cho từng video:
  `[Tiêu đề gây sốc/tranh luận] #[tag1] #[tag2] #[tag3] #[tag4] #[tag5]`
