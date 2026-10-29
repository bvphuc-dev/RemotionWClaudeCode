import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { theme } from "../theme";

interface CaptionSegment {
  from: number;
  to: number;
  text: string;
  highlight: string;
}

const PROMO_CAPTIONS: CaptionSegment[] = [
  {
    from: 0,
    to: 227,
    text: "Hallmark: Giải pháp diệt trừ triệt để giao diện phèn do AI vẽ ra.",
    highlight: "diệt trừ triệt để",
  },
  {
    from: 227,
    to: 693,
    text: "Cài đặt đúng 1 dòng lệnh: npx skills add nutlope/hallmark -g",
    highlight: "npx skills add nutlope/hallmark -g",
  },
  {
    from: 693,
    to: 1056,
    text: "Sở hữu 48 bộ theme chuẩn studio kèm sloplint kiểm tra tự động.",
    highlight: "48 bộ theme chuẩn studio",
  },
  {
    from: 1056,
    to: 1268,
    text: "Dự án mã nguồn mở trên GitHub · Khám phá ngay hôm nay.",
    highlight: "github.com/Nutlope/hallmark",
  },
];

export const Captions: React.FC = () => {
  const frame = useCurrentFrame();

  const current = PROMO_CAPTIONS.find((c) => frame >= c.from && frame < c.to);
  if (!current) return null;

  const opacity = interpolate(
    frame - current.from,
    [0, 10],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 50,
        pointerEvents: "none",
        opacity,
      }}
    >
      <div
        style={{
          backgroundColor: theme.colors.surface,
          border: `1px solid ${theme.colors.border}`,
          padding: "10px 24px",
          borderRadius: 6,
          fontFamily: theme.typography.mono,
          fontSize: 16,
          letterSpacing: "0.02em",
          color: theme.colors.textPrimary,
          boxShadow: theme.shadows.tactile,
        }}
      >
        <span>{current.text}</span>
      </div>
    </div>
  );
};
