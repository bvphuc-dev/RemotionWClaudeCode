import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const Scene3Architecture: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Snappy progress for metric bars (screenshots remain completely static)
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
        width: 1920,
        height: 1080,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 160px",
        boxSizing: "border-box",
        zIndex: 1,
      }}
    >
      {/* Top Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 30,
          opacity: cardOpacity,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: theme.typography.mono,
              fontSize: 14,
              letterSpacing: "0.12em",
              color: theme.colors.accentPrimary,
              marginBottom: 8,
            }}
          >
            [03 // THREE-TIER GATING ARCHITECTURE]
          </div>
          <h2
            style={{
              fontFamily: theme.typography.heading,
              fontSize: 44,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: theme.colors.textPrimary,
              margin: 0,
            }}
          >
            Enforced Quality Controls
          </h2>
        </div>
        <div
          style={{
            fontFamily: theme.typography.mono,
            fontSize: 13,
            color: theme.colors.textMuted,
          }}
        >
          AUTOMATED BROWSER VERIFICATION
        </div>
      </div>

      {/* Split Layout: Static Hallmark Banner + 3 Architecture Cards */}
      <div
        style={{
          display: "flex",
          gap: 36,
          alignItems: "stretch",
        }}
      >
        {/* Left: Static Screenshot - STRICTLY NO ANIMATION */}
        <div
          style={{
            width: 820,
            border: `1px solid ${theme.colors.border}`,
            borderRadius: 8,
            overflow: "hidden",
            backgroundColor: theme.colors.surface,
            boxShadow: theme.shadows.tactile,
            display: "flex",
            flexDirection: "column",
          }}
        >
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
              material-catalog // 48 themes
            </span>
          </div>

          <Img
            src={staticFile("assets/hallmark_banner.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Right: 3 Tier Architecture Cards */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            opacity: cardOpacity,
          }}
        >
          {/* Card 1: The Floor */}
          <div
            style={{
              backgroundColor: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: 6,
              padding: "20px 24px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontFamily: theme.typography.mono, fontSize: 13, color: theme.colors.accentPrimary }}>
                01 // THE FLOOR GATE
              </span>
              <span style={{ fontFamily: theme.typography.mono, fontSize: 13, color: theme.colors.accentSecondary }}>
                STRICT BLOCK
              </span>
            </div>
            <div style={{ fontFamily: theme.typography.heading, fontSize: 18, fontWeight: 700, color: theme.colors.textPrimary, marginBottom: 4 }}>
              Zero Contrast or Accessibility Violations
            </div>
            <div style={{ fontFamily: theme.typography.heading, fontSize: 14, color: theme.colors.textMuted, lineHeight: 1.4 }}>
              Never ships broken phone layouts, missing focus states, or hallucinated facts.
            </div>
          </div>

          {/* Card 2: 48 Themes */}
          <div
            style={{
              backgroundColor: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: 6,
              padding: "20px 24px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontFamily: theme.typography.mono, fontSize: 13, color: theme.colors.accentPrimary }}>
                02 // 48 MATERIAL THEMES
              </span>
              <span style={{ fontFamily: theme.typography.mono, fontSize: 13, color: theme.colors.textMuted }}>
                PRE-TESTED
              </span>
            </div>
            <div style={{ fontFamily: theme.typography.heading, fontSize: 18, fontWeight: 700, color: theme.colors.textPrimary, marginBottom: 4 }}>
              Paper, Type, Color & Surface Systems
            </div>
            <div style={{ fontFamily: theme.typography.heading, fontSize: 14, color: theme.colors.textMuted, lineHeight: 1.4 }}>
              Real typography pairings and tactile surfaces instead of generic Tailwind defaults.
            </div>
          </div>

          {/* Card 3: Sloplint Engine with Animated Benchmark Bar */}
          <div
            style={{
              backgroundColor: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: 6,
              padding: "20px 24px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontFamily: theme.typography.mono, fontSize: 13, color: theme.colors.accentPrimary }}>
                03 // SLOPLINT AUDIT
              </span>
              <span style={{ fontFamily: theme.typography.mono, fontSize: 13, color: theme.colors.accentSecondary }}>
                100% COVERAGE
              </span>
            </div>
            <div style={{ fontFamily: theme.typography.heading, fontSize: 18, fontWeight: 700, color: theme.colors.textPrimary, marginBottom: 8 }}>
              Automated Headless Browser Linting
            </div>

            {/* Benchmark Bar Animation */}
            <div
              style={{
                width: "100%",
                height: 8,
                backgroundColor: theme.colors.border,
                borderRadius: 4,
                overflow: "hidden",
                marginTop: 10,
              }}
            >
              <div
                style={{
                  width: `${barProgress * 100}%`,
                  height: "100%",
                  backgroundColor: theme.colors.accentSecondary,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
