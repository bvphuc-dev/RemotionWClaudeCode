import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const Scene4CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardProgress = spring({
    frame,
    fps,
    config: theme.springs.snappy,
  });

  const cardOpacity = interpolate(frame, [0, 15], [0, 1], {
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
      {/* SECTION HEADER */}
      <div
        style={{
          width: "100%",
          maxWidth: 960,
          marginBottom: 32,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          opacity: cardOpacity,
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
          <span style={{ fontSize: 22 }}>✈️</span>
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
            CỘNG ĐỒNG DEV & AI
          </span>
        </div>

        {/* Title */}
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
          LƯU VIDEO LẠI DÙNG NGAY!
          <br />
          <span style={{ color: theme.colors.accentGold }}>THAM GIA NHÓM CHAT TELEGRAM</span>
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
          Nhận prompt mẫu, skill mới và tài nguyên thiết kế xịn sò mỗi ngày!
        </p>
      </div>

      {/* MAIN CONTAINER */}
      <div
        style={{
          width: "100%",
          maxWidth: 960,
          opacity: cardOpacity,
          transform: `translateY(${(1 - cardProgress) * 24}px)`,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {/* REPO INSTALL REMINDER CARD */}
        <div
          style={{
            backgroundColor: theme.colors.surface,
            border: `2px solid #3A3D34`,
            borderRadius: 28,
            padding: "24px 30px",
            boxShadow: theme.shadows.card,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: theme.typography.mono,
                fontSize: 15,
                color: theme.colors.accentGold,
                fontWeight: 700,
                marginBottom: 6,
              }}
            >
              ★ GITHUB REPO: Nutlope / hallmark
            </div>
            <div
              style={{
                fontFamily: theme.typography.mono,
                fontSize: 20,
                color: "#FFFFFF",
                fontWeight: 700,
              }}
            >
              $ npx skills add nutlope/hallmark -g
            </div>
          </div>
          <div
            style={{
              backgroundColor: "rgba(255, 204, 0, 0.15)",
              color: theme.colors.accentGold,
              padding: "10px 18px",
              borderRadius: theme.radius.full,
              fontFamily: theme.typography.rounded,
              fontSize: 18,
              fontWeight: 800,
            }}
          >
            LƯU LẠI
          </div>
        </div>

        {/* TELEGRAM CTA CALLOUT BOX */}
        <div
          style={{
            backgroundColor: "#161B22",
            border: `2px solid ${theme.colors.accentGold}`,
            borderRadius: 32,
            padding: "36px 36px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8)",
          }}
        >
          {/* User Exact Phrase Callout */}
          <div
            style={{
              backgroundColor: "rgba(255, 204, 0, 0.1)",
              border: `1.5px dashed ${theme.colors.accentGold}`,
              borderRadius: 22,
              padding: "20px 24px",
              marginBottom: 28,
              fontFamily: theme.typography.rounded,
              fontSize: 24,
              fontWeight: 800,
              lineHeight: 1.5,
              color: "#FFFFFF",
            }}
          >
            👉 "Tham gia nhóm chat <span style={{ color: theme.colors.accentGold }}>Tele</span> của mình ở link trong{" "}
            <span style={{ color: theme.colors.accentGold }}>bio TikTok</span> nhé, anh em{" "}
            <span style={{ color: theme.colors.accentGold }}>lướt xuống xíu trong trang web</span> là thấy link nhóm nhé!"
          </div>

          {/* 3 Step Visual Pills */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                backgroundColor: theme.colors.terminalDark,
                border: "1px solid #333630",
                borderRadius: 18,
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: theme.colors.accentGold,
                  color: "#000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 18,
                  fontFamily: theme.typography.rounded,
                }}
              >
                1
              </div>
              <span
                style={{
                  fontFamily: theme.typography.rounded,
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                Nhấp vào Link trong <span style={{ color: theme.colors.accentGold }}>Bio TikTok</span> của mình
              </span>
            </div>

            <div
              style={{
                backgroundColor: theme.colors.terminalDark,
                border: "1px solid #333630",
                borderRadius: 18,
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: theme.colors.accentGold,
                  color: "#000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 18,
                  fontFamily: theme.typography.rounded,
                }}
              >
                2
              </div>
              <span
                style={{
                  fontFamily: theme.typography.rounded,
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                Lướt xuống một chút trong website
              </span>
            </div>

            <div
              style={{
                backgroundColor: theme.colors.terminalDark,
                border: "1px solid #333630",
                borderRadius: 18,
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: theme.colors.accentGold,
                  color: "#000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 18,
                  fontFamily: theme.typography.rounded,
                }}
              >
                3
              </div>
              <span
                style={{
                  fontFamily: theme.typography.rounded,
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                Bấm vào nút <span style={{ color: theme.colors.accentGold }}>Tham Gia Nhóm Telegram</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
