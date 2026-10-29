import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { theme } from "../theme";

export const Scene2Terminal: React.FC = () => {
  const frame = useCurrentFrame();

  const command = "npx skills add nutlope/hallmark -g";

  // Typing animation across 50 frames
  const charCount = Math.floor(
    interpolate(frame, [10, 60], [0, command.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const typedCommand = command.slice(0, charCount);
  const isTypingDone = frame >= 60;

  // Mechanical cursor blink
  const cursorVisible = Math.floor(frame / 15) % 2 === 0;

  // Output logs sequence
  const showLine1 = frame >= 75;
  const showLine2 = frame >= 115;
  const showLine3 = frame >= 155;
  const showLine4 = frame >= 195;

  return (
    <div
      style={{
        position: "relative",
        width: 1080,
        height: 1920,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 160,
        paddingLeft: 60,
        paddingRight: 60,
        boxSizing: "border-box",
        zIndex: 1,
      }}
    >
      {/* SECTION HEADER */}
      <div
        style={{
          width: "100%",
          maxWidth: 960,
          marginBottom: 36,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            backgroundColor: "rgba(255, 204, 0, 0.15)",
            border: `2px solid ${theme.colors.accentGold}`,
            padding: "10px 22px",
            borderRadius: theme.radius.full,
            marginBottom: 20,
          }}
        >
          <span style={{ fontSize: 22 }}>⚡</span>
          <span
            style={{
              fontFamily: theme.typography.mono,
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: "0.08em",
              color: theme.colors.accentGold,
              textTransform: "uppercase",
            }}
          >
            GIẢI PHÁP // 35.6K STARS
          </span>
        </div>

        {/* Big Rounded Title */}
        <h2
          style={{
            fontFamily: theme.typography.rounded,
            fontSize: 66,
            fontWeight: 900,
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            margin: "0 0 16px 0",
            lineHeight: 1.15,
          }}
        >
          CÀI ĐẶT 1 DÒNG DUY NHẤT
          <br />
          <span style={{ color: theme.colors.accentGold }}>ÉP AI THIẾT KẾ ĐẸP!</span>
        </h2>

        <p
          style={{
            fontFamily: theme.typography.rounded,
            fontSize: 26,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          Tự động tích hợp vào <span style={{ color: theme.colors.accentGold }}>Claude Code</span> &{" "}
          <span style={{ color: theme.colors.accentGold }}>Cursor</span>
        </p>
      </div>

      {/* ROUNDED TERMINAL WINDOW */}
      <div
        style={{
          width: "100%",
          maxWidth: 960,
          backgroundColor: theme.colors.terminalDark,
          border: `2px solid #3A3D34`,
          borderRadius: 32,
          boxShadow: theme.shadows.card,
          overflow: "hidden",
          marginBottom: 36,
        }}
      >
        {/* Title Bar */}
        <div
          style={{
            height: 52,
            backgroundColor: "#161715",
            borderBottom: `2px solid #2E302A`,
            display: "flex",
            alignItems: "center",
            padding: "0 22px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#FF5F56" }} />
            <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
            <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#27C93F" }} />
          </div>
          <span
            style={{
              fontFamily: theme.typography.mono,
              fontSize: 16,
              fontWeight: 600,
              color: "rgba(255, 255, 255, 0.65)",
            }}
          >
            bash — skills add nutlope/hallmark
          </span>
          <div style={{ width: 45 }} />
        </div>

        {/* Terminal Body */}
        <div
          style={{
            padding: "36px 36px 44px",
            minHeight: 400,
            fontFamily: theme.typography.mono,
            fontSize: 22,
            lineHeight: 1.8,
            color: "#FFFFFF",
          }}
        >
          {/* Active Command Line */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              padding: "12px 18px",
              borderRadius: 16,
              border: "1px solid #333630",
              marginBottom: 24,
            }}
          >
            <span style={{ color: theme.colors.accentGold, marginRight: 14, fontWeight: 800 }}>$</span>
            <span style={{ color: "#FFFFFF", fontWeight: 700 }}>{typedCommand}</span>
            {(!isTypingDone || cursorVisible) && (
              <span
                style={{
                  display: "inline-block",
                  width: 12,
                  height: 26,
                  backgroundColor: theme.colors.accentGold,
                  marginLeft: 6,
                  borderRadius: 2,
                }}
              />
            )}
          </div>

          {/* Sequential Output Logs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {showLine1 && (
              <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#FFFFFF" }}>
                <span style={{ color: theme.colors.accentGold, fontSize: 24 }}>✔</span>
                <span>Phát hiện môi trường Claude Code & Cursor IDE</span>
              </div>
            )}
            {showLine2 && (
              <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#FFFFFF" }}>
                <span style={{ color: theme.colors.accentGold, fontSize: 24 }}>✔</span>
                <span>Tải 48 bộ Material Themes chuẩn Studio</span>
              </div>
            )}
            {showLine3 && (
              <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#FFFFFF" }}>
                <span style={{ color: theme.colors.accentGold, fontSize: 24 }}>✔</span>
                <span>Kích hoạt Sloplint kiểm tra chống phèn tự động</span>
              </div>
            )}
            {showLine4 && (
              <div
                style={{
                  marginTop: 12,
                  padding: "18px 24px",
                  border: `2px solid ${theme.colors.accentGold}`,
                  backgroundColor: "rgba(255, 204, 0, 0.12)",
                  borderRadius: 20,
                  color: theme.colors.accentGold,
                  fontSize: 22,
                  fontWeight: 700,
                  fontFamily: theme.typography.rounded,
                }}
              >
                🎉 Sẵn sàng! AI từ nay tự động tuân thủ chuẩn thiết kế cao cấp!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* COMPATIBILITY ROW */}
      <div
        style={{
          width: "100%",
          maxWidth: 960,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 30px",
          backgroundColor: theme.colors.surface,
          border: `2px solid #2E302A`,
          borderRadius: 24,
        }}
      >
        <span
          style={{
            fontFamily: theme.typography.rounded,
            fontSize: 20,
            fontWeight: 800,
            color: "rgba(255, 255, 255, 0.65)",
            textTransform: "uppercase",
          }}
        >
          HỖ TRỢ MỌI NỀN TẢNG:
        </span>
        <div style={{ display: "flex", gap: 18 }}>
          <div
            style={{
              backgroundColor: "rgba(255, 204, 0, 0.12)",
              border: `1.5px solid ${theme.colors.accentGold}`,
              padding: "8px 18px",
              borderRadius: theme.radius.full,
              fontFamily: theme.typography.rounded,
              fontSize: 18,
              fontWeight: 800,
              color: theme.colors.accentGold,
            }}
          >
            Claude Code
          </div>
          <div
            style={{
              backgroundColor: "rgba(255, 204, 0, 0.12)",
              border: `1.5px solid ${theme.colors.accentGold}`,
              padding: "8px 18px",
              borderRadius: theme.radius.full,
              fontFamily: theme.typography.rounded,
              fontSize: 18,
              fontWeight: 800,
              color: theme.colors.accentGold,
            }}
          >
            Cursor IDE
          </div>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: `1.5px solid rgba(255, 255, 255, 0.25)`,
              padding: "8px 18px",
              borderRadius: theme.radius.full,
              fontFamily: theme.typography.rounded,
              fontSize: 18,
              fontWeight: 800,
              color: "#FFFFFF",
            }}
          >
            Terminal CLI
          </div>
        </div>
      </div>
    </div>
  );
};
