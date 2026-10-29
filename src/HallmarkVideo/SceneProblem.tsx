import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const SceneProblem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const introScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 140 },
  });

  // Staggered card entrance
  const card1 = spring({ frame: Math.max(0, frame - 15), fps });
  const card2 = spring({ frame: Math.max(0, frame - 45), fps });
  const card3 = spring({ frame: Math.max(0, frame - 75), fps });

  // Stamp entrance at frame 150
  const stampSpring = spring({
    frame: Math.max(0, frame - 160),
    fps,
    config: { damping: 8, stiffness: 200 },
  });

  // Screen shake on stamp
  const shake =
    frame >= 160 && frame < 185
      ? Math.sin(frame * 2.5) * interpolate(frame, [160, 185], [18, 0])
      : 0;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 160,
        position: "relative",
        transform: `translate(${shake}px, ${shake * 0.7}px)`,
      }}
    >
      {/* Category Pill */}
      <div
        style={{
          transform: `scale(${introScale})`,
          background: "rgba(255, 59, 48, 0.2)",
          border: "2px solid #ff3b30",
          padding: "14px 32px",
          borderRadius: 999,
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 35,
        }}
      >
        <span style={{ fontSize: 32 }}>💀</span>
        <span
          style={{
            fontSize: 30,
            fontWeight: 900,
            color: "#ff3b30",
            letterSpacing: "0.06em",
          }}
        >
          3 DẤU HIỆU CỦA AI SLOP
        </span>
      </div>

      {/* Main Title */}
      <h1
        style={{
          fontSize: 72,
          fontWeight: 900,
          color: "#ffffff",
          textAlign: "center",
          margin: 0,
          marginBottom: 60,
          lineHeight: 1.2,
          textTransform: "uppercase",
        }}
      >
        TẠI SAO NGƯỜI TA BIẾT
        <br />
        <span style={{ color: "#ff2d55" }}>WEB BẠN DO AI TỰ VẼ?</span>
      </h1>

      {/* 3 Bad UI Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
          width: 940,
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            transform: `scale(${card1}) translateX(${(1 - card1) * -80}px)`,
            background: "rgba(30, 20, 25, 0.8)",
            border: "2px solid #ff453a",
            borderRadius: 24,
            padding: "26px 36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: 20,
                background: "rgba(255, 69, 58, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 38,
              }}
            >
              ❌
            </div>
            <div>
              <div style={{ fontSize: 36, fontWeight: 900, color: "#ffffff" }}>
                Chữ To Chữ Nhỏ Vô Tội Vạ
              </div>
              <div style={{ fontSize: 24, color: "#a0a0a0", marginTop: 4 }}>
                Mất phân cấp thị giác (visual hierarchy), font loạn xạ
              </div>
            </div>
          </div>
          <span
            style={{
              color: "#ff453a",
              fontWeight: 800,
              fontSize: 24,
              background: "rgba(255, 69, 58, 0.15)",
              padding: "8px 16px",
              borderRadius: 12,
            }}
          >
            Font Lỗi
          </span>
        </div>

        {/* Card 2 */}
        <div
          style={{
            transform: `scale(${card2}) translateX(${(1 - card2) * 80}px)`,
            background: "rgba(30, 20, 25, 0.8)",
            border: "2px solid #ff9f0a",
            borderRadius: 24,
            padding: "26px 36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: 20,
                background: "rgba(255, 159, 10, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 38,
              }}
            >
              🌈
            </div>
            <div>
              <div style={{ fontSize: 36, fontWeight: 900, color: "#ffffff" }}>
                Màu Sắc Lòe Loẹt & Rối Mắt
              </div>
              <div style={{ fontSize: 24, color: "#a0a0a0", marginTop: 4 }}>
                Gradient tím neon, xanh chuối, nút bấm chói lòa
              </div>
            </div>
          </div>
          <span
            style={{
              color: "#ff9f0a",
              fontWeight: 800,
              fontSize: 24,
              background: "rgba(255, 159, 10, 0.15)",
              padding: "8px 16px",
              borderRadius: 12,
            }}
          >
            Chói Mắt
          </span>
        </div>

        {/* Card 3 */}
        <div
          style={{
            transform: `scale(${card3}) translateX(${(1 - card3) * -80}px)`,
            background: "rgba(30, 20, 25, 0.8)",
            border: "2px solid #ff375f",
            borderRadius: 24,
            padding: "26px 36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: 20,
                background: "rgba(255, 55, 95, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 38,
              }}
            >
              🕳️
            </div>
            <div>
              <div style={{ fontSize: 36, fontWeight: 900, color: "#ffffff" }}>
                Khung Hình Trống Rỗng Vô Hồn
              </div>
              <div style={{ fontSize: 24, color: "#a0a0a0", marginTop: 4 }}>
                Thiếu padding, layout lệch méo, nhìn là thấy cẩu thả
              </div>
            </div>
          </div>
          <span
            style={{
              color: "#ff375f",
              fontWeight: 800,
              fontSize: 24,
              background: "rgba(255, 55, 95, 0.15)",
              padding: "8px 16px",
              borderRadius: 12,
            }}
          >
            Vô Hồn
          </span>
        </div>
      </div>

      {/* Dramatic Stamp at frame > 160 */}
      {frame >= 160 && (
        <div
          style={{
            position: "absolute",
            top: "48%",
            left: "50%",
            transform: `translate(-50%, -50%) rotate(-14deg) scale(${stampSpring})`,
            border: "10px solid #ff2d55",
            borderRadius: 28,
            padding: "24px 60px",
            background: "rgba(0,0,0,0.85)",
            boxShadow: "0 20px 60px rgba(255, 45, 85, 0.7)",
            zIndex: 30,
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 900,
              color: "#ff2d55",
              letterSpacing: "0.1em",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            AI SLOP!
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "center",
              marginTop: 6,
            }}
          >
            NHÌN LÀ BIẾT NGAY LƯỜI BIẾNG
          </div>
        </div>
      )}
    </div>
  );
};
