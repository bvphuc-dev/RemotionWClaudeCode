import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

interface SubtitleSegment {
  from: number;
  to: number;
  text: string;
  highlightWords?: string[];
  color?: string;
}

const SUBTITLES: SubtitleSegment[] = [
  // Scene 1: Hook (0 - 294)
  {
    from: 0,
    to: 95,
    text: "DỪNG NGAY VIỆC ĐỂ CLAUDE CODE HAY CURSOR",
    highlightWords: ["DỪNG NGAY", "CLAUDE CODE", "CURSOR"],
    color: "#ff3b30",
  },
  {
    from: 95,
    to: 190,
    text: "TỰ THIẾT KẾ GIAO DIỆN WEB!",
    highlightWords: ["TỰ THIẾT KẾ", "GIAO DIỆN"],
    color: "#ffcc00",
  },
  {
    from: 190,
    to: 294,
    text: "NẾU KHÔNG MUỐN SẢN PHẨM BỊ CHÊ LÀ RÁC CÔNG NGHỆ!",
    highlightWords: ["RÁC CÔNG NGHỆ"],
    color: "#ff2d55",
  },

  // Scene 2: Problem (294 - 617)
  {
    from: 294,
    to: 400,
    text: "CHỮ TO CHỮ NHỎ VÔ TỘI VẠ",
    highlightWords: ["VÔ TỘI VẠ"],
    color: "#ff9500",
  },
  {
    from: 400,
    to: 510,
    text: "MÀU SẮC LÒE LOẸT, KHUNG HÌNH RỖNG TUẾCH",
    highlightWords: ["LÒE LOẸT", "RỖNG TUẾCH"],
    color: "#ff3b30",
  },
  {
    from: 510,
    to: 617,
    text: "GIỚI CÔNG NGHỆ GỌI ĐÓ LÀ 'AI SLOP' - NHÌN LÀ BIẾT LƯỜI!",
    highlightWords: ["AI SLOP", "LƯỜI!"],
    color: "#ff2d55",
  },

  // Scene 3: Solution - Hallmark (617 - 1002)
  {
    from: 617,
    to: 730,
    text: "VÀ ĐÂY LÀ THỨ CỨU BẠN: HALLMARK!",
    highlightWords: ["CỨU BẠN", "HALLMARK!"],
    color: "#00f2fe",
  },
  {
    from: 730,
    to: 865,
    text: "DỰ ÁN HƠN 35.000 SAO TRÊN GITHUB!",
    highlightWords: ["35.000 SAO", "GITHUB!"],
    color: "#ffd700",
  },
  {
    from: 865,
    to: 1002,
    text: "ÉP AI THEO 48 BỘ THEME CHUẨN - CẤM TIỆT MỌI NÉT PHÈN!",
    highlightWords: ["48 BỘ THEME", "CẤM TIỆT"],
    color: "#4cd964",
  },

  // Scene 4: Installation CMD (1002 - 1309)
  {
    from: 1002,
    to: 1110,
    text: "CÀI ĐẶT ĐÚNG 1 DÒNG LỆNH TRONG TERMINAL:",
    highlightWords: ["1 DÒNG LỆNH", "TERMINAL"],
    color: "#5ac8fa",
  },
  {
    from: 1110,
    to: 1225,
    text: "npx skills add nutlope/hallmark -g",
    highlightWords: ["npx skills add nutlope/hallmark -g"],
    color: "#00ff88",
  },
  {
    from: 1225,
    to: 1309,
    text: "TÍCH HỢP THẲNG VÀO CURSOR & CLAUDE CODE!",
    highlightWords: ["CURSOR", "CLAUDE CODE!"],
    color: "#5856d6",
  },

  // Scene 5: CTA (1309 - 1545)
  {
    from: 1309,
    to: 1425,
    text: "MUỐN WEB ĐẸP NHƯ STUDIO? CÀI NGAY HÔM NAY!",
    highlightWords: ["ĐẸP NHƯ STUDIO", "CÀI NGAY"],
    color: "#ffcc00",
  },
  {
    from: 1425,
    to: 1545,
    text: "LƯU VIDEO LẠI KẺO LÚC CẦN LẠI TÌM KHÔNG RA NHÉ!",
    highlightWords: ["LƯU VIDEO", "TÌM KHÔNG RA"],
    color: "#ff3b30",
  },
];

export const Captions: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const current = SUBTITLES.find((sub) => frame >= sub.from && frame < sub.to);

  if (!current) return null;

  const progress = spring({
    frame: frame - current.from,
    fps,
    config: {
      damping: 12,
      stiffness: 160,
    },
  });

  const words = current.text.split(" ");

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 240,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 40px",
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          transform: `scale(${progress})`,
          textAlign: "center",
          maxWidth: 960,
          background: "rgba(10, 10, 15, 0.88)",
          padding: "20px 36px",
          borderRadius: 24,
          border: `2px solid ${current.color || "#ffcc00"}`,
          boxShadow: `0 10px 40px rgba(0,0,0,0.8), 0 0 30px ${current.color || "#ffcc00"}44`,
          backdropFilter: "blur(12px)",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 44,
            fontWeight: 900,
            lineHeight: 1.35,
            letterSpacing: "0.03em",
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            textTransform: "uppercase",
            color: "#ffffff",
            textShadow: "0 2px 10px rgba(0,0,0,0.9)",
          }}
        >
          {words.map((word, idx) => {
            const isHighlighted = current.highlightWords?.some((hw) =>
              hw.toLowerCase().includes(word.toLowerCase().replace(/[^a-zA-Z0-9à-ỹÀ-Ỹ]/g, ""))
            );

            return (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  margin: "0 6px",
                  color: isHighlighted ? current.color || "#ffcc00" : "#ffffff",
                  textShadow: isHighlighted
                    ? `0 0 20px ${current.color || "#ffcc00"}aa, 0 2px 4px #000`
                    : "0 2px 4px rgba(0,0,0,0.8)",
                  transform: isHighlighted ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.1s ease",
                }}
              >
                {word}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};
