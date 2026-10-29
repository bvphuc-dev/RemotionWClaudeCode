import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Snappy physics for text entry (screenshot is strictly static)
  const textProgress = spring({
    frame,
    fps,
    config: theme.springs.snappy,
  });

  const textOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

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
      {/* SENSATIONAL CONTROVERSIAL HOOK HEADER */}
      <div
        style={{
          width: "100%",
          maxWidth: 960,
          opacity: textOpacity,
          transform: `translateY(${(1 - textProgress) * 24}px)`,
          marginBottom: 36,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* Warning Chip */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            backgroundColor: "rgba(255, 204, 0, 0.15)",
            border: `2px solid ${theme.colors.accentGold}`,
            padding: "10px 22px",
            borderRadius: theme.radius.full,
            marginBottom: 24,
          }}
        >
          <span style={{ fontSize: 22 }}>🚨</span>
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
            CẢNH BÁO // AI WEB DEV
          </span>
        </div>

        {/* Sensational Title */}
        <h1
          style={{
            fontFamily: theme.typography.rounded,
            fontSize: 72,
            fontWeight: 900,
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            margin: "0 0 20px 0",
          }}
        >
          <span style={{ color: theme.colors.accentGold }}>DỪNG LẠI NGAY!</span>
          <br />
          ĐỪNG ĐỂ CLAUDE HAY CURSOR TỰ VẼ WEB!
        </h1>

        {/* Attention Grabber Subtitle */}
        <p
          style={{
            fontFamily: theme.typography.rounded,
            fontSize: 30,
            fontWeight: 700,
            lineHeight: 1.45,
            color: "#FFFFFF",
            margin: "0 0 28px 0",
          }}
        >
          Bạn đang tạo ra thứ{" "}
          <span
            style={{
              color: theme.colors.accentGold,
              backgroundColor: "rgba(255, 204, 0, 0.2)",
              padding: "4px 12px",
              borderRadius: 12,
            }}
          >
            rác rưởi công nghệ
          </span>{" "}
          khiến người dùng vừa vào là muốn bấm thoát ngay!
        </p>

        {/* Comparison Pills */}
        <div style={{ display: "flex", gap: 16, width: "100%" }}>
          <div
            style={{
              flex: 1,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: `2px solid rgba(255, 255, 255, 0.25)`,
              borderRadius: theme.radius.lg,
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span style={{ fontSize: 32 }}>❌</span>
            <div>
              <div
                style={{
                  fontFamily: theme.typography.rounded,
                  fontSize: 22,
                  fontWeight: 900,
                  color: "#FFFFFF",
                }}
              >
                GIAO DIỆN PHÈN
              </div>
              <div
                style={{
                  fontFamily: theme.typography.rounded,
                  fontSize: 16,
                  color: "rgba(255, 255, 255, 0.65)",
                  fontWeight: 700,
                }}
              >
                Lòe loẹt, lỗi responsive, vỡ font
              </div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              backgroundColor: "rgba(255, 204, 0, 0.12)",
              border: `2px solid ${theme.colors.accentGold}`,
              borderRadius: theme.radius.lg,
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span style={{ fontSize: 32 }}>✅</span>
            <div>
              <div
                style={{
                  fontFamily: theme.typography.rounded,
                  fontSize: 22,
                  fontWeight: 900,
                  color: theme.colors.accentGold,
                }}
              >
                HALLMARK FIX 100%
              </div>
              <div
                style={{
                  fontFamily: theme.typography.rounded,
                  fontSize: 16,
                  color: "rgba(255, 255, 255, 0.65)",
                  fontWeight: 700,
                }}
              >
                48 bộ giao diện chuẩn Studio
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Static GitHub Screenshot - STRICTLY NO ANIMATION */}
      <div
        style={{
          width: "100%",
          maxWidth: 960,
          border: `2px solid #3A3D34`,
          borderRadius: 32,
          overflow: "hidden",
          backgroundColor: theme.colors.surface,
          boxShadow: theme.shadows.card,
        }}
      >
        {/* Rounded Window Bar */}
        <div
          style={{
            height: 52,
            backgroundColor: "#161715",
            borderBottom: `2px solid #2E302A`,
            display: "flex",
            alignItems: "center",
            padding: "0 22px",
            gap: 12,
          }}
        >
          <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#FF5F56" }} />
          <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
          <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#27C93F" }} />
          <span
            style={{
              fontFamily: theme.typography.mono,
              fontSize: 16,
              fontWeight: 600,
              color: "rgba(255, 255, 255, 0.65)",
              marginLeft: 14,
            }}
          >
            github.com/Nutlope/hallmark
          </span>
          <span
            style={{
              marginLeft: "auto",
              fontFamily: theme.typography.mono,
              fontSize: 16,
              fontWeight: 800,
              color: theme.colors.accentGold,
              backgroundColor: "rgba(255, 204, 0, 0.15)",
              padding: "4px 12px",
              borderRadius: theme.radius.full,
            }}
          >
            ★ 35.6k Stars
          </span>
        </div>

        {/* STATIC IMAGE - NO ROTATE/SCALE */}
        <Img
          src={staticFile("assets/github_header.png")}
          style={{
            width: "100%",
            display: "block",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};
