import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const Scene3Architecture: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const barProgress = spring({
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
          <span style={{ fontSize: 22 }}>🛡️</span>
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
            SLOPLINT // CHẶN LỖI TỰ ĐỘNG
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
          CẤM TIỆT MỌI NÉT PHÈN!
          <br />
          <span style={{ color: theme.colors.accentGold }}>TỰ ĐỘNG AUDIT CHUẨN ĐẸP</span>
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
          48 bộ materials studio & bộ lọc sloplint diệt sạch lỗi thiết kế
        </p>
      </div>

      {/* STATIC BANNER IMAGE - STRICTLY NO ANIMATION */}
      <div
        style={{
          width: "100%",
          maxWidth: 960,
          height: 380,
          border: `2px solid #3A3D34`,
          borderRadius: 32,
          overflow: "hidden",
          backgroundColor: theme.colors.surface,
          boxShadow: theme.shadows.card,
          marginBottom: 36,
        }}
      >
        <div
          style={{
            height: 48,
            backgroundColor: "#161715",
            borderBottom: `2px solid #2E302A`,
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
            gap: 10,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#FF5F56" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#27C93F" }} />
          <span
            style={{
              fontFamily: theme.typography.mono,
              fontSize: 15,
              color: "rgba(255, 255, 255, 0.65)",
              marginLeft: 12,
            }}
          >
            hallmark-catalog // 48 curated materials
          </span>
        </div>

        <Img
          src={staticFile("assets/hallmark_banner.png")}
          style={{
            width: "100%",
            height: "calc(100% - 48px)",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* 2 LARGE ROUNDED FEATURE CARDS */}
      <div
        style={{
          width: "100%",
          maxWidth: 960,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          opacity: cardOpacity,
        }}
      >
        {/* Card 1: 48 Themes */}
        <div
          style={{
            backgroundColor: theme.colors.surface,
            border: `2px solid #3A3D34`,
            borderRadius: 28,
            padding: "26px 30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                fontFamily: theme.typography.mono,
                fontSize: 16,
                fontWeight: 700,
                color: theme.colors.accentGold,
                backgroundColor: "rgba(255, 204, 0, 0.12)",
                padding: "4px 14px",
                borderRadius: theme.radius.full,
                marginBottom: 10,
              }}
            >
              01 // 48 BỘ THEMES CHUẨN STUDIO
            </div>
            <div
              style={{
                fontFamily: theme.typography.rounded,
                fontSize: 28,
                fontWeight: 900,
                color: "#FFFFFF",
                marginBottom: 6,
              }}
            >
              Màu Sắc, Font Chữ & Bề Mặt Thực Tế
            </div>
            <div
              style={{
                fontFamily: theme.typography.rounded,
                fontSize: 20,
                fontWeight: 600,
                color: "rgba(255, 255, 255, 0.65)",
              }}
            >
              Không còn phong cách AI generic, giao diện sang trọng như agency lớn.
            </div>
          </div>
          <span style={{ fontSize: 44, marginLeft: 20 }}>🎨</span>
        </div>

        {/* Card 2: Sloplint Audit */}
        <div
          style={{
            backgroundColor: theme.colors.surface,
            border: `2px solid #3A3D34`,
            borderRadius: 28,
            padding: "26px 30px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div
              style={{
                display: "inline-block",
                fontFamily: theme.typography.mono,
                fontSize: 16,
                fontWeight: 700,
                color: theme.colors.accentGold,
                backgroundColor: "rgba(255, 204, 0, 0.12)",
                padding: "4px 14px",
                borderRadius: theme.radius.full,
              }}
            >
              02 // SLOPLINT GATEKEEPER
            </div>
            <span
              style={{
                fontFamily: theme.typography.mono,
                fontSize: 16,
                fontWeight: 800,
                color: theme.colors.accentGold,
              }}
            >
              100% CLEAN PASS
            </span>
          </div>

          <div
            style={{
              fontFamily: theme.typography.rounded,
              fontSize: 28,
              fontWeight: 900,
              color: "#FFFFFF",
              marginBottom: 14,
            }}
          >
            Trình Duyệt Tự Kiểm Tra Trước Khi Render
          </div>

          {/* Progress Bar */}
          <div
            style={{
              width: "100%",
              height: 14,
              backgroundColor: "#2E302A",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${barProgress * 100}%`,
                height: "100%",
                backgroundColor: theme.colors.accentGold,
                borderRadius: 8,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
