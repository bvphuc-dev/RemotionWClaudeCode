import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

export const SceneSolution: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const scale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 130 },
  });

  // Animated star counter
  const starsCount = Math.floor(
    interpolate(frame, [20, 110], [1200, 35680], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  // Banner card floating animation
  const bannerY = Math.sin(frame * 0.05) * 10;
  const bannerRotate = Math.cos(frame * 0.04) * 2;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 150,
        position: "relative",
      }}
    >
      {/* Category Pill */}
      <div
        style={{
          transform: `scale(${scale})`,
          background: "linear-gradient(90deg, rgba(0,242,254,0.2), rgba(79,172,254,0.2))",
          border: "2px solid #00f2fe",
          padding: "14px 32px",
          borderRadius: 999,
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 30,
          boxShadow: "0 0 30px rgba(0,242,254,0.4)",
        }}
      >
        <span style={{ fontSize: 32 }}>⚡</span>
        <span
          style={{
            fontSize: 28,
            fontWeight: 900,
            color: "#00f2fe",
            letterSpacing: "0.08em",
          }}
        >
          GIẢI PHÁP TỪ GITHUB TRENDING
        </span>
      </div>

      {/* Hero Title */}
      <div style={{ textAlign: "center", marginBottom: 35 }}>
        <h1
          style={{
            fontSize: 88,
            fontWeight: 900,
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            background: "linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 10px 30px rgba(0,242,254,0.5))",
          }}
        >
          HALLMARK
        </h1>
        <p
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#cccccc",
            margin: "8px 0 0",
          }}
        >
          Ép AI Thiết Kế UI Chuẩn Studio
        </p>
      </div>

      {/* GitHub Stars Counter Banner */}
      <div
        style={{
          transform: `scale(${scale})`,
          background: "rgba(22, 27, 34, 0.9)",
          border: "2px solid #ffd700",
          borderRadius: 24,
          padding: "18px 40px",
          display: "flex",
          alignItems: "center",
          gap: 24,
          boxShadow: "0 10px 40px rgba(255, 215, 0, 0.3)",
          marginBottom: 40,
        }}
      >
        <span style={{ fontSize: 48, filter: "drop-shadow(0 0 10px #ffd700)" }}>
          ⭐
        </span>
        <div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 900,
              color: "#ffd700",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {starsCount.toLocaleString()} STARS
          </div>
          <div style={{ fontSize: 22, color: "#8b949e", fontWeight: 600 }}>
            Đang gây sốt cộng đồng lập trình viên thế giới
          </div>
        </div>
      </div>

      {/* Hallmark 48 Themes Preview Banner */}
      <div
        style={{
          width: 960,
          perspective: 1000,
          marginBottom: 40,
        }}
      >
        <div
          style={{
            transform: `translateY(${bannerY}px) rotate(${bannerRotate}deg)`,
            borderRadius: 24,
            overflow: "hidden",
            border: "2px solid rgba(0, 242, 254, 0.6)",
            boxShadow:
              "0 25px 70px rgba(0,0,0,0.9), 0 0 50px rgba(0, 242, 254, 0.3)",
            background: "#0d1117",
          }}
        >
          <Img
            src={staticFile("assets/hallmark_banner.png")}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* 3 Key Value Badges */}
      <div
        style={{
          display: "flex",
          gap: 20,
          width: 960,
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "rgba(0, 242, 254, 0.12)",
            border: "1px solid #00f2fe",
            padding: "16px 24px",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 28 }}>🎨</span>
          <span style={{ fontSize: 24, fontWeight: 800, color: "#ffffff" }}>
            48 Themes Đỉnh Cao
          </span>
        </div>

        <div
          style={{
            background: "rgba(76, 217, 100, 0.12)",
            border: "1px solid #4cd964",
            padding: "16px 24px",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 28 }}>🛡️</span>
          <span style={{ fontSize: 24, fontWeight: 800, color: "#ffffff" }}>
            Cấm Tiệt Nét Phèn
          </span>
        </div>

        <div
          style={{
            background: "rgba(255, 204, 0, 0.12)",
            border: "1px solid #ffcc00",
            padding: "16px 24px",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 28 }}>⚡</span>
          <span style={{ fontSize: 24, fontWeight: 800, color: "#ffffff" }}>
            Auto 100% Cho AI
          </span>
        </div>
      </div>
    </div>
  );
};
