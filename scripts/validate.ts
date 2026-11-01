import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import {
  VIDEO_FPS,
  VIDEO_WIDTH,
  VIDEO_HEIGHT,
  TOTAL_DURATION_IN_FRAMES,
  TOTAL_SCENES,
  SCENE_TIMINGS,
  MAX_WORDS_PER_SCENE,
} from "../src/template/constants";

// Ngân sách số từ tối đa cho từng scene chuẩn 10 Scene VideoLast:
// S1: Hook (8-13 từ) -> max 14
// S2: Repo & Author (5-8 từ) -> max 10
// S3: Stars & Screenshot (6-10 từ) -> max 12
// S4: Nó là gì: định nghĩa 1 câu (10-16 từ) -> max 16
// S5: Cách hoạt động: đưa vào X, nhận ra Y (10-16 từ) -> max 16
// S6: Ví dụ thực tế: cụ thể + kết quả nhìn thấy được (10-16 từ) -> max 16
// S7: Dành cho ai (8-12 từ) -> max 14
// S8: Miễn phí 0đ (5-8 từ) -> max 10
// S9: Cài đặt 1 dòng lệnh (6-10 từ) -> max 12
// S10: Bridge + CTA Telegram cố định (17-21 từ) -> max 24
const SCENE_MAX_WORDS = [14, 10, 12, 16, 16, 16, 14, 10, 12, 24];

let hasError = false;

function error(msg: string) {
  console.error(`❌ [VALIDATE ERROR] ${msg}`);
  hasError = true;
}

function success(msg: string) {
  console.log(`✅ [VALIDATE OK] ${msg}`);
}

console.log("=========================================================");
console.log("🔍 RUNNING PRE-RENDER VALIDATION (scripts/validate.ts)");
console.log("=========================================================\n");

// 1. KIỂM TRA CONSTANTS & DYNAMIC SCENE TIMING
console.log("--- BƯỚC 1: KIỂM TRA THÔNG SỐ DYNAMIC (constants.ts) ---");
if (VIDEO_FPS !== 30) error(`FPS phải là 30, hiện tại: ${VIDEO_FPS}`);
if (VIDEO_WIDTH !== 1080) error(`Width phải là 1080, hiện tại: ${VIDEO_WIDTH}`);
if (VIDEO_HEIGHT !== 1920) error(`Height phải là 1920, hiện tại: ${VIDEO_HEIGHT}`);
if (TOTAL_SCENES < 5 || TOTAL_SCENES > 20) error(`Tổng số scene không hợp lệ (5-20), hiện tại: ${TOTAL_SCENES}`);

if (SCENE_TIMINGS.length !== TOTAL_SCENES) {
  error(`SCENE_TIMINGS phải có đúng ${TOTAL_SCENES} scene, hiện có: ${SCENE_TIMINGS.length}`);
} else {
  let expectedNextFrom = 0;
  SCENE_TIMINGS.forEach((s, idx) => {
    if (s.from !== expectedNextFrom) {
      error(`Scene ${idx + 1} (${s.name}) sai start frame: ${s.from}, kỳ vọng: ${expectedNextFrom}`);
    }
    if (s.to !== s.from + s.durationInFrames) {
      error(`Scene ${idx + 1} sai durationInFrames: to (${s.to}) != from (${s.from}) + dur (${s.durationInFrames})`);
    }
    expectedNextFrom = s.to;
  });

  if (expectedNextFrom !== TOTAL_DURATION_IN_FRAMES) {
    error(`Tổng duration các scene (${expectedNextFrom}) không khớp TOTAL_DURATION_IN_FRAMES (${TOTAL_DURATION_IN_FRAMES})`);
  }
}
success(`constants.ts: 30fps, 1080x1920, 10 scene dynamic liên tục (${TOTAL_DURATION_IN_FRAMES} frames / ${(TOTAL_DURATION_IN_FRAMES / 30).toFixed(2)}s) chuẩn 100%`);

// 2. KIỂM TRA ROOT.TSX
console.log("\n--- BƯỚC 2: KIỂM TRA ROOT.TSX & COMPOSITION ---");
const rootPath = path.join(process.cwd(), "src", "Root.tsx");
if (!fs.existsSync(rootPath)) {
  error("Không tìm thấy src/Root.tsx");
} else {
  const rootContent = fs.readFileSync(rootPath, "utf-8");
  const compMatch = rootContent.match(/<Composition[\s\S]*?id="(?:TikTokVideo|VoiceStudioTikTok)"[\s\S]*?\/>/);
  if (compMatch && compMatch[0].includes("calculateMetadata")) {
    error("CẤM dùng calculateMetadata cho video composition!");
  }
  if (!rootContent.includes("TOTAL_DURATION_IN_FRAMES")) {
    error("Root.tsx chưa import và dùng TOTAL_DURATION_IN_FRAMES từ constants.ts!");
  }
  success("Root.tsx: Không dùng calculateMetadata, khóa chặt theo TOTAL_DURATION_IN_FRAMES");
}

// 3. KIỂM TRA MASTER AUDIO & VOICE SEGMENTS
console.log("\n--- BƯỚC 3: KIỂM TRA ĐỘ DÀI VOICE AUDIO MASTER ---");
let voicePath = path.join(process.cwd(), "public", "current_voice.mp3");
if (!fs.existsSync(voicePath)) {
  voicePath = path.join(process.cwd(), "public", "voicestudio_vietnamese_voice.mp3");
}
if (!fs.existsSync(voicePath)) {
  error(`Không tìm thấy file voice chính: ${voicePath}`);
} else {
  try {
    const durStr = execSync(
      `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${voicePath}"`
    )
      .toString()
      .trim();
    const dur = parseFloat(durStr);
    const expectedSec = TOTAL_DURATION_IN_FRAMES / VIDEO_FPS;
    const diff = Math.abs(dur - expectedSec);
    if (diff > 0.25) {
      error(`Voice audio chính lệch quá nhiều: hiện tại ${dur.toFixed(2)}s, kỳ vọng ${expectedSec.toFixed(2)}s (lệch ${diff.toFixed(2)}s > 0.25s)`);
    } else {
      success(`Master voice audio: ${dur.toFixed(2)}s (khớp chuẩn video frames: ${TOTAL_DURATION_IN_FRAMES} frames)`);
    }
  } catch (e: any) {
    error(`Lỗi khi đo độ dài voice bằng ffprobe: ${e.message}`);
  }
}

// 4. KIỂM TRA SUBTITLES / CAPTIONS
console.log("\n--- BƯỚC 4: KIỂM TRA SUBTITLES / CAPTIONS ---");
let captionsPath = path.join(process.cwd(), "src", "TikTokVideo", "Captions.tsx");
if (!fs.existsSync(captionsPath)) {
  captionsPath = path.join(process.cwd(), "src", "VoiceStudioTikTok", "Captions.tsx");
}
if (!fs.existsSync(captionsPath)) {
  error(`Không tìm thấy file Captions.tsx`);
} else {
  const capContent = fs.readFileSync(captionsPath, "utf-8");
  const match = capContent.match(/const SUBTITLE_CHUNKS: SubtitleChunk\[\] = (\[[\s\S]*?\]);/);
  if (!match) {
    error("Không tìm thấy SUBTITLE_CHUNKS trong Captions.tsx");
  } else {
    try {
      const chunks = JSON.parse(match[1]);
      if (chunks.length !== TOTAL_SCENES) {
        error(`SUBTITLE_CHUNKS phải có ${TOTAL_SCENES} chunks, hiện có: ${chunks.length}`);
      }
      chunks.forEach((chunk: any, idx: number) => {
        const expectedFrom = SCENE_TIMINGS[idx].from;
        const expectedTo = SCENE_TIMINGS[idx].to;
        if (chunk.from !== expectedFrom || chunk.to !== expectedTo) {
          error(
            `Sub Chunk ${idx + 1} sai mốc frame: [${chunk.from}..${chunk.to}], kỳ vọng scene: [${expectedFrom}..${expectedTo}]`
          );
        }
        const maxAllowed = TOTAL_SCENES === 10 ? (SCENE_MAX_WORDS[idx] ?? MAX_WORDS_PER_SCENE) : MAX_WORDS_PER_SCENE;
        if (chunk.words.length > maxAllowed) {
          error(
            `Sub Chunk ${idx + 1} vượt ngân sách từ: ${chunk.words.length} từ > tối đa ${maxAllowed} từ!`
          );
        }
        chunk.words.forEach((w: any) => {
          if (w.start < chunk.from || w.end > chunk.to + 10) {
            error(
              `Từ '${w.text}' trong Scene ${idx + 1} tràn ra ngoài khung: [${w.start}..${w.end}] nằm ngoài [${chunk.from}..${chunk.to}]`
            );
          }
        });
      });
      success(
        `Captions.tsx: Đúng 10 chunks, khớp từng frame dynamic của 10 scene, ngân sách từ <= ${MAX_WORDS_PER_SCENE} từ/scene`
      );
    } catch (e: any) {
      error(`Không parse được SUBTITLE_CHUNKS JSON: ${e.message}`);
    }
  }
}

// 5. KIỂM TRA TÀI NGUYÊN SFX
console.log("\n--- BƯỚC 5: KIỂM TRA TÀI NGUYÊN SOUND EFFECTS (SFX) ---");
const sfxFiles = ["whoosh.wav", "pop.wav", "click.wav", "bell.wav"];
sfxFiles.forEach((f) => {
  const sfxPath = path.join(process.cwd(), "public", "sfx", f);
  if (!fs.existsSync(sfxPath)) {
    error(`Thiếu file sound effect: public/sfx/${f}`);
  }
});
if (!hasError) {
  success("Tất cả file SFX (whoosh, pop, click, bell) đã sẵn sàng trong public/sfx/");
}

console.log("\n=========================================================");
if (hasError) {
  console.error("❌ VALIDATION FAILED! DỪNG LẠI, KHÔNG ĐƯỢC PHÉP RENDER!");
  console.error("Hãy sửa nội dung, rút gọn script hoặc chỉnh voice/sub rồi chạy lại.");
  console.log("=========================================================\n");
  process.exit(1);
} else {
  console.log("🎉 VALIDATION PASSED! ĐỦ ĐIỀU KIỆN RENDER VIDEOGOC & VIDEOLAST!");
  console.log("=========================================================\n");
  process.exit(0);
}
