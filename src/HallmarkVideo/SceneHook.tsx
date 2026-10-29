import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

export const SceneHook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const scale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  // Floating rotation
  const rotateX = Math.sin(frame * 0.04) * 6;
  const rotateY = Math.cos(frame * 0.03) * 8;
  const translateY = Math.sin(frame * 0.05) * 12;

  // Warning pulse
  const pulseOpacity = interpolate(
    Math.sin(frame * 0.15),
    [-1, 1],
    [0.7, 1]
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
      {/* Top Warning Badge */}
      <div
        style={{
          transform: `scale(${scale})`,
          opacity: pulseOpacity,
          background: "linear-gradient(90deg, #ff3b30, #ff9500)",
          padding: "16px 36px",
          borderRadius: 999,
          boxShadow: "0 0 40px rgba(255, 59, 48, 0.7)",
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 40,
        }}
      >
        <span style={{ fontSize: 36 }}>⚠️</span>
        <span
          style={{
            fontSize: 32,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          CẢNH BÁO DEV DÙNG AI
        </span>
      </div>

      {/* Hero Headline */}
      <div
        style={{
          textAlign: "center",
          maxWidth: 960,
          marginBottom: 50,
          transform: `translateY(${Math.sin(frame * 0.06) * 6}px)`,
        }}
      >
        <h1
          style={{
            fontSize: 76,
            fontWeight: 900,
            lineHeight: 1.15,
            color: "#ffffff",
            margin: 0,
            textTransform: "uppercase",
            textShadow: "0 10px 30px rgba(0,0,0,0.8)",
          }}
        >
          ĐỪNG ĐỂ <span style={{ color: "#00f2fe" }}>CLAUDE</span> HAY{" "}
          <span style={{ color: "#ff2d55" }}>CURSOR</span>
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #ff3b30, #ffcc00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            TỰ VẼ GIAO DIỆN WEB!
          </span>
        </h1>
      </div>

      {/* Floating 3D GitHub Header Showcase */}
      <div
        style={{
          width: 960,
          perspective: 1200,
          marginBottom: 40,
        }}
      >
        <div
          style={{
            transform: `scale(${scale}) translateY(${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transformStyle: "preserve-3d",
            borderRadius: 24,
            overflow: "hidden",
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.9), 0 0 60px rgba(0, 242, 254, 0.35)",
            border: "2px solid rgba(0, 242, 254, 0.5)",
            background: "#0d1117",
          }}
        >
          <Img
            src={staticFile("assets/github_header.png")}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* Warning Alert Banner Card */}
      <div
        style={{
          width: 900,
          background: "rgba(255, 45, 85, 0.12)",
          border: "2px dashed #ff2d55",
          borderRadius: 20,
          padding: "24px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 10px 30px rgba(255, 45, 85, 0.2)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 44 }}>🚫</span>
          <div>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#ff2d55" }}>
              HẬU QUẢ: AI SLOP DESIGN
            </div>
            <div style={{ fontSize: 24, color: "#cccccc" }}>
              Giao diện phèn, lệch layout, người dùng bấm thoát ngay
            </div>
          </div>
        </div>
        <div
          style={{
            background: "#ff2d55",
            color: "#fff",
            fontWeight: 800,
            fontSize: 22,
            padding: "10px 20px",
            borderRadius: 12,
          }}
        >
          RÁC UI
        </div>
      </div>
    </div>
  );
};
