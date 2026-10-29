import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const SceneCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const scale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 140 },
  });

  // Bookmark icon bounce
  const bookmarkBounce = Math.sin(frame * 0.15) * 16;
  const glowPulse = interpolate(
    Math.sin(frame * 0.1),
    [-1, 1],
    [0.4, 0.9]
  );

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
      }}
    >
      {/* Category Pill */}
      <div
        style={{
          transform: `scale(${scale})`,
          background: "linear-gradient(90deg, #ff9500, #ffcc00)",
          padding: "14px 36px",
          borderRadius: 999,
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 35,
          boxShadow: "0 0 40px rgba(255, 204, 0, 0.6)",
        }}
      >
        <span style={{ fontSize: 32 }}>🔥</span>
        <span
          style={{
            fontSize: 28,
            fontWeight: 900,
            color: "#000000",
            letterSpacing: "0.08em",
          }}
        >
          ĐỪNG ĐỂ SẢN PHẨM BỊ CHÊ
        </span>
      </div>

      {/* Main Title */}
      <h1
        style={{
          fontSize: 78,
          fontWeight: 900,
          color: "#ffffff",
          textAlign: "center",
          margin: 0,
          marginBottom: 50,
          lineHeight: 1.2,
          textTransform: "uppercase",
        }}
      >
        NÂNG CẤP DỰ ÁN
        <br />
        <span
          style={{
            background: "linear-gradient(90deg, #00f2fe, #4facfe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          CHUẨN STUDIO NGAY!
        </span>
      </h1>

      {/* Save Video Action Card */}
      <div
        style={{
          transform: `scale(${scale})`,
          width: 940,
          background: "rgba(255, 204, 0, 0.1)",
          border: "3px solid #ffcc00",
          borderRadius: 28,
          padding: "36px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: `0 20px 60px rgba(0,0,0,0.8), 0 0 50px rgba(255, 204, 0, ${glowPulse})`,
          marginBottom: 40,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              fontSize: 72,
              transform: `translateY(${bookmarkBounce}px)`,
              filter: "drop-shadow(0 0 16px #ffcc00)",
            }}
          >
            🔖
          </div>
          <div>
            <div style={{ fontSize: 44, fontWeight: 900, color: "#ffffff" }}>
              LƯU VIDEO LẠI KẺO QUÊN!
            </div>
            <div style={{ fontSize: 24, color: "#e0e0e0", marginTop: 6 }}>
              Lúc mở Cursor hay Claude Code cần dùng là có ngay
            </div>
          </div>
        </div>
        <div
          style={{
            background: "#ffcc00",
            color: "#000",
            fontWeight: 900,
            fontSize: 28,
            padding: "16px 32px",
            borderRadius: 16,
          }}
        >
          LƯU NGAY
        </div>
      </div>

      {/* GitHub Repo Card */}
      <div
        style={{
          width: 940,
          background: "#161b22",
          border: "2px solid #30363d",
          borderRadius: 24,
          padding: "28px 36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 15px 40px rgba(0,0,0,0.7)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <span style={{ fontSize: 48 }}>⭐</span>
          <div>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#ffffff" }}>
              Nutlope / hallmark
            </div>
            <div style={{ fontSize: 22, color: "#8b949e" }}>
              github.com/Nutlope/hallmark
            </div>
          </div>
        </div>
        <span
          style={{
            background: "rgba(56, 139, 253, 0.15)",
            border: "1px solid #388bfd",
            color: "#58a6ff",
            padding: "12px 24px",
            borderRadius: 12,
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          Open Source
        </span>
      </div>
    </div>
  );
};
