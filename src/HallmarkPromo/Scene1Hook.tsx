import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Snappy physics for text only (NO animation on screenshots)
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
        width: 1920,
        height: 1080,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 180px",
        boxSizing: "border-box",
        zIndex: 1,
      }}
    >
      {/* Monospace Metadata Tag */}
      <div
        style={{
          fontFamily: theme.typography.mono,
          fontSize: 14,
          letterSpacing: "0.12em",
          color: theme.colors.accentPrimary,
          marginBottom: 16,
          opacity: textOpacity,
        }}
      >
        [01 // REPOSITORY IDENTITY]
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 60,
        }}
      >
        {/* Left Column: Bold Typography & Identity */}
        <div
          style={{
            flex: 1,
            opacity: textOpacity,
            transform: `translateY(${(1 - textProgress) * 20}px)`,
          }}
        >
          {/* Repo Path */}
          <div
            style={{
              fontFamily: theme.typography.mono,
              fontSize: 20,
              color: theme.colors.textMuted,
              marginBottom: 12,
            }}
          >
            Nutlope / <span style={{ color: theme.colors.textPrimary }}>hallmark</span>
          </div>

          {/* Heading with Italic Serif Accent */}
          <h1
            style={{
              fontFamily: theme.typography.heading,
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: theme.colors.textPrimary,
              margin: "0 0 24px 0",
            }}
          >
            The design skill that refuses to look{" "}
            <span
              style={{
                fontFamily: theme.typography.serif,
                fontStyle: "italic",
                fontWeight: 400,
                color: theme.colors.accentPrimary,
              }}
            >
              AI-generated.
            </span>
          </h1>

          {/* 1-sentence value proposition */}
          <p
            style={{
              fontFamily: theme.typography.heading,
              fontSize: 22,
              lineHeight: 1.5,
              color: theme.colors.textMuted,
              maxWidth: 680,
              margin: "0 0 32px 0",
            }}
          >
            Eliminates AI slop across Claude Code and Cursor. Enforces 48 curated materials with automated browser gates.
          </p>

          {/* Badges Row */}
          <div style={{ display: "flex", gap: 16 }}>
            <div
              style={{
                border: `1px solid ${theme.colors.border}`,
                backgroundColor: theme.colors.surface,
                padding: "8px 16px",
                borderRadius: 6,
                fontFamily: theme.typography.mono,
                fontSize: 14,
                color: theme.colors.accentPrimary,
              }}
            >
              ★ 35.6k Stars
            </div>
            <div
              style={{
                border: `1px solid ${theme.colors.border}`,
                backgroundColor: theme.colors.surface,
                padding: "8px 16px",
                borderRadius: 6,
                fontFamily: theme.typography.mono,
                fontSize: 14,
                color: theme.colors.accentSecondary,
              }}
            >
              ✓ MIT License
            </div>
            <div
              style={{
                border: `1px solid ${theme.colors.border}`,
                backgroundColor: theme.colors.surface,
                padding: "8px 16px",
                borderRadius: 6,
                fontFamily: theme.typography.mono,
                fontSize: 14,
                color: theme.colors.textMuted,
              }}
            >
              v2.0 Release
            </div>
          </div>
        </div>

        {/* Right Column: Static Screenshot - STRICTLY NO ANIMATION */}
        <div
          style={{
            width: 720,
            border: `1px solid ${theme.colors.border}`,
            borderRadius: 8,
            overflow: "hidden",
            backgroundColor: theme.colors.surface,
            boxShadow: theme.shadows.tactile,
          }}
        >
          {/* Subtle Window Header */}
          <div
            style={{
              height: 36,
              backgroundColor: "#161715",
              borderBottom: `1px solid ${theme.colors.border}`,
              display: "flex",
              alignItems: "center",
              padding: "0 14px",
              gap: 8,
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#3A3834" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#3A3834" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#3A3834" }} />
            <span
              style={{
                fontFamily: theme.typography.mono,
                fontSize: 11,
                color: theme.colors.textMuted,
                marginLeft: 12,
              }}
            >
              github.com/Nutlope/hallmark
            </span>
          </div>

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
    </div>
  );
};
