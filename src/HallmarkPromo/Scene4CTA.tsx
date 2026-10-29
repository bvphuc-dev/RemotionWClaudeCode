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
        width: 1920,
        height: 1080,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      {/* Monospace Metadata */}
      <div
        style={{
          fontFamily: theme.typography.mono,
          fontSize: 14,
          letterSpacing: "0.12em",
          color: theme.colors.accentPrimary,
          marginBottom: 16,
          opacity: cardOpacity,
        }}
      >
        [04 // GET STARTED]
      </div>

      {/* Main Final Card */}
      <div
        style={{
          width: 980,
          backgroundColor: theme.colors.surface,
          border: `1px solid ${theme.colors.border}`,
          borderRadius: 8,
          padding: "56px 64px",
          boxShadow: theme.shadows.tactile,
          opacity: cardOpacity,
          transform: `translateY(${(1 - cardProgress) * 20}px)`,
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        {/* Subtitle */}
        <div
          style={{
            fontFamily: theme.typography.mono,
            fontSize: 14,
            color: theme.colors.textMuted,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          Open Source Anti-AI-Slop Skill
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: theme.typography.heading,
            fontSize: 52,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: theme.colors.textPrimary,
            margin: "0 0 32px 0",
            lineHeight: 1.15,
          }}
        >
          Elevate Your AI-Generated Web UI
        </h2>

        {/* CLI Command Box */}
        <div
          style={{
            backgroundColor: theme.colors.terminalDark,
            border: `1px solid ${theme.colors.border}`,
            borderRadius: 6,
            padding: "20px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 36,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: theme.colors.textMuted, marginRight: 16, fontFamily: theme.typography.mono }}>
              $
            </span>
            <span
              style={{
                fontFamily: theme.typography.mono,
                fontSize: 22,
                color: theme.colors.textPrimary,
                fontWeight: 600,
              }}
            >
              npx skills add nutlope/hallmark -g
            </span>
          </div>
          <span
            style={{
              fontFamily: theme.typography.mono,
              fontSize: 13,
              color: theme.colors.accentSecondary,
              backgroundColor: "rgba(107, 158, 120, 0.12)",
              padding: "6px 12px",
              borderRadius: 4,
            }}
          >
            GLOBAL
          </span>
        </div>

        {/* Repository Link & Footer Meta */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `1px solid ${theme.colors.border}`,
            paddingTop: 24,
          }}
        >
          <div
            style={{
              fontFamily: theme.typography.mono,
              fontSize: 16,
              color: theme.colors.accentPrimary,
            }}
          >
            github.com/Nutlope/hallmark
          </div>

          <div
            style={{
              fontFamily: theme.typography.mono,
              fontSize: 13,
              color: theme.colors.textMuted,
            }}
          >
            Together AI · MIT License
          </div>
        </div>
      </div>
    </div>
  );
};
