import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { theme } from "../theme";

export const Scene2Terminal: React.FC = () => {
  const frame = useCurrentFrame();

  const command = "npx skills add nutlope/hallmark -g";

  // Typing animation starts at frame 15, takes 45 frames
  const charCount = Math.floor(
    interpolate(frame, [15, 65], [0, command.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const typedCommand = command.slice(0, charCount);
  const isTypingDone = frame >= 65;

  // Discrete terminal cursor (no fade, mechanical blink)
  const cursorVisible = Math.floor(frame / 15) % 2 === 0;

  // Fast deterministic line output rendering
  const showLine1 = frame >= 80;
  const showLine2 = frame >= 105;
  const showLine3 = frame >= 135;
  const showLine4 = frame >= 165;

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
      {/* Top Monospace Header */}
      <div
        style={{
          width: 1100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            fontFamily: theme.typography.mono,
            fontSize: 14,
            letterSpacing: "0.12em",
            color: theme.colors.accentPrimary,
          }}
        >
          [02 // INSTALLATION & HARNESS INTEGRATION]
        </div>
        <div
          style={{
            fontFamily: theme.typography.mono,
            fontSize: 13,
            color: theme.colors.textMuted,
          }}
        >
          NODE 18+ · ZERO CONFIG
        </div>
      </div>

      {/* Crisp Dark Matte Terminal Window */}
      <div
        style={{
          width: 1100,
          backgroundColor: theme.colors.terminalDark,
          border: `1px solid ${theme.colors.border}`,
          borderRadius: 8,
          boxShadow: theme.shadows.tactile,
          overflow: "hidden",
        }}
      >
        {/* Terminal Header */}
        <div
          style={{
            height: 42,
            backgroundColor: "#111210",
            borderBottom: `1px solid ${theme.colors.border}`,
            display: "flex",
            alignItems: "center",
            padding: "0 18px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#383632" }} />
            <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#383632" }} />
            <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#383632" }} />
          </div>
          <span
            style={{
              fontFamily: theme.typography.mono,
              fontSize: 12,
              color: theme.colors.textMuted,
              letterSpacing: "0.04em",
            }}
          >
            bash — skills add nutlope/hallmark
          </span>
          <div style={{ width: 45 }} />
        </div>

        {/* Terminal Body */}
        <div
          style={{
            padding: "36px 44px",
            minHeight: 320,
            fontFamily: theme.typography.mono,
            fontSize: 19,
            lineHeight: 1.8,
            color: theme.colors.textPrimary,
          }}
        >
          {/* Active Command Prompt */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: theme.colors.textMuted, marginRight: 14 }}>$</span>
            <span style={{ color: theme.colors.textPrimary, fontWeight: 600 }}>{typedCommand}</span>
            {(!isTypingDone || cursorVisible) && (
              <span
                style={{
                  display: "inline-block",
                  width: 9,
                  height: 20,
                  backgroundColor: theme.colors.accentPrimary,
                  marginLeft: 4,
                }}
              />
            )}
          </div>

          {/* Real Output Lines */}
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
            {showLine1 && (
              <div style={{ color: theme.colors.textMuted }}>
                <span style={{ color: theme.colors.accentSecondary, marginRight: 12 }}>✔</span>
                Fetching skill definition from Nutlope/hallmark...
              </div>
            )}
            {showLine2 && (
              <div style={{ color: theme.colors.textMuted }}>
                <span style={{ color: theme.colors.accentSecondary, marginRight: 12 }}>✔</span>
                Registered skill: <span style={{ color: theme.colors.textPrimary }}>~/.claude/skills/hallmark</span>
              </div>
            )}
            {showLine3 && (
              <div style={{ color: theme.colors.textMuted }}>
                <span style={{ color: theme.colors.accentSecondary, marginRight: 12 }}>✔</span>
                Loaded 48 material themes & sloplint browser checks
              </div>
            )}
            {showLine4 && (
              <div
                style={{
                  marginTop: 12,
                  padding: "12px 18px",
                  border: `1px solid ${theme.colors.border}`,
                  backgroundColor: theme.colors.surface,
                  borderRadius: 4,
                  color: theme.colors.accentSecondary,
                  fontSize: 17,
                }}
              >
                ✓ Ready: Invoke with /hallmark &lt;prompt&gt; in Claude Code, Cursor, or Codex CLI.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Harness Integration Footnote */}
      <div
        style={{
          width: 1100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 24,
          padding: "16px 24px",
          backgroundColor: theme.colors.surface,
          border: `1px solid ${theme.colors.border}`,
          borderRadius: 6,
        }}
      >
        <span style={{ fontFamily: theme.typography.mono, fontSize: 13, color: theme.colors.textMuted }}>
          SUPPORTED HARNESSES:
        </span>
        <div style={{ display: "flex", gap: 32 }}>
          <span style={{ fontFamily: theme.typography.mono, fontSize: 13, color: theme.colors.textPrimary }}>
            • Claude Code
          </span>
          <span style={{ fontFamily: theme.typography.mono, fontSize: 13, color: theme.colors.textPrimary }}>
            • Cursor IDE
          </span>
          <span style={{ fontFamily: theme.typography.mono, fontSize: 13, color: theme.colors.textPrimary }}>
            • Codex CLI
          </span>
          <span style={{ fontFamily: theme.typography.mono, fontSize: 13, color: theme.colors.textPrimary }}>
            • OpenCode
          </span>
        </div>
      </div>
    </div>
  );
};
