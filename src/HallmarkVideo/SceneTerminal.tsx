import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const SceneTerminal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const scale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 140 },
  });

  const fullCommand = "npx skills add nutlope/hallmark -g";

  // Typing effect: starts at frame 15, takes ~45 frames
  const typingProgress = interpolate(frame, [15, 65], [0, fullCommand.length], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const currentChars = fullCommand.slice(0, Math.floor(typingProgress));
  const isTypingDone = frame >= 65;

  // Blinking cursor
  const cursorBlink = Math.floor(frame / 8) % 2 === 0;

  // Output lines appearing sequentially
  const showLine1 = frame >= 75;
  const showLine2 = frame >= 95;
  const showLine3 = frame >= 120;
  const showLine4 = frame >= 150;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 140,
        position: "relative",
      }}
    >
      {/* Category Pill */}
      <div
        style={{
          transform: `scale(${scale})`,
          background: "rgba(0, 255, 136, 0.15)",
          border: "2px solid #00ff88",
          padding: "14px 32px",
          borderRadius: 999,
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 30,
          boxShadow: "0 0 30px rgba(0,255,136,0.3)",
        }}
      >
        <span style={{ fontSize: 32 }}>💻</span>
        <span
          style={{
            fontSize: 28,
            fontWeight: 900,
            color: "#00ff88",
            letterSpacing: "0.08em",
          }}
        >
          CÀI ĐẶT 1 DÒNG LỆNH DUY NHẤT
        </span>
      </div>

      {/* Title */}
      <h1
        style={{
          fontSize: 74,
          fontWeight: 900,
          color: "#ffffff",
          textAlign: "center",
          margin: 0,
          marginBottom: 40,
          lineHeight: 1.2,
          textTransform: "uppercase",
        }}
      >
        MỞ <span style={{ color: "#00ff88" }}>TERMINAL</span> HOẶC{" "}
        <span style={{ color: "#5ac8fa" }}>CMD</span>
        <br />
        DÁN LỆNH NÀY VÀO:
      </h1>

      {/* Terminal Window */}
      <div
        style={{
          transform: `scale(${scale})`,
          width: 960,
          background: "#0d1117",
          border: "2px solid #30363d",
          borderRadius: 24,
          boxShadow:
            "0 30px 90px rgba(0,0,0,0.9), 0 0 50px rgba(0, 255, 136, 0.25)",
          overflow: "hidden",
          fontFamily: "'Fira Code', 'Cascadia Code', Consolas, Monaco, monospace",
          marginBottom: 35,
        }}
      >
        {/* Terminal Titlebar */}
        <div
          style={{
            background: "#161b22",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #30363d",
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "#ff5f56",
              }}
            />
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "#ffbd2e",
              }}
            />
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "#27c93f",
              }}
            />
          </div>
          <div
            style={{
              color: "#8b949e",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            Terminal — Hallmark Skill Installer
          </div>
          <div style={{ width: 60 }} />
        </div>

        {/* Terminal Body */}
        <div
          style={{
            padding: "36px 36px 48px",
            fontSize: 26,
            lineHeight: 1.8,
            color: "#c9d1d9",
            minHeight: 380,
          }}
        >
          {/* Active Command Line */}
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ color: "#58a6ff", fontWeight: 700, marginRight: 12 }}>
              dev@macbook
            </span>
            <span style={{ color: "#8b949e", marginRight: 12 }}>~ %</span>
            <span
              style={{
                color: "#7ee787",
                fontWeight: 700,
                fontSize: 28,
                letterSpacing: "0.02em",
              }}
            >
              {currentChars}
            </span>
            {(!isTypingDone || cursorBlink) && (
              <span
                style={{
                  display: "inline-block",
                  width: 14,
                  height: 28,
                  background: "#00ff88",
                  marginLeft: 4,
                  verticalAlign: "middle",
                }}
              />
            )}
          </div>

          {/* Installation Progress Output */}
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
            {showLine1 && (
              <div style={{ color: "#58a6ff" }}>
                <span style={{ color: "#3fb950", marginRight: 12 }}>✔</span>
                Fetching skills manifest from nutlope/hallmark...
              </div>
            )}
            {showLine2 && (
              <div style={{ color: "#8b949e" }}>
                <span style={{ color: "#3fb950", marginRight: 12 }}>✔</span>
                Loaded 48 aesthetic UI themes & typography presets
              </div>
            )}
            {showLine3 && (
              <div style={{ color: "#e3b341" }}>
                <span style={{ color: "#3fb950", marginRight: 12 }}>✔</span>
                Configuring integration: Cursor Rules & Claude Code Skill...
              </div>
            )}
            {showLine4 && (
              <div
                style={{
                  marginTop: 12,
                  background: "rgba(63, 185, 80, 0.15)",
                  border: "1px solid #3fb950",
                  padding: "14px 20px",
                  borderRadius: 12,
                  color: "#3fb950",
                  fontWeight: 700,
                }}
              >
                ✨ Hallmark installed globally! AI will now generate clean UI.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Integration Icons Card */}
      <div
        style={{
          width: 960,
          background: "rgba(22, 27, 34, 0.8)",
          border: "1px solid rgba(88, 166, 255, 0.3)",
          borderRadius: 20,
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 36 }}>⚡</span>
          <div>
            <div style={{ fontSize: 26, fontWeight: 800, color: "#ffffff" }}>
              Claude Code
            </div>
            <div style={{ fontSize: 20, color: "#8b949e" }}>Tự nhận diện rule</div>
          </div>
        </div>
        <div style={{ width: 2, height: 40, background: "#30363d" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 36 }}>🎯</span>
          <div>
            <div style={{ fontSize: 26, fontWeight: 800, color: "#ffffff" }}>
              Cursor IDE
            </div>
            <div style={{ fontSize: 20, color: "#8b949e" }}>Áp dụng tức thì</div>
          </div>
        </div>
      </div>
    </div>
  );
};
