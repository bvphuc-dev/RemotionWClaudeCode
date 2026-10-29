import React from "react";
import { theme } from "../theme";

export const GridBackground: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 1920,
        height: 1080,
        backgroundColor: theme.colors.background,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Horizontal Structural Grid Lines */}
      <div
        style={{
          position: "absolute",
          top: 100,
          left: 80,
          right: 80,
          height: 1,
          backgroundColor: theme.colors.border,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: 80,
          right: 80,
          height: 1,
          backgroundColor: theme.colors.border,
        }}
      />

      {/* Vertical Structural Grid Lines */}
      <div
        style={{
          position: "absolute",
          top: 60,
          bottom: 60,
          left: 120,
          width: 1,
          backgroundColor: theme.colors.border,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 60,
          bottom: 60,
          right: 120,
          width: 1,
          backgroundColor: theme.colors.border,
        }}
      />

      {/* Crosshair Markers (+) at Intersections */}
      {[
        { top: 100, left: 120 },
        { top: 100, left: 1800 },
        { top: 980, left: 120 },
        { top: 980, left: 1800 },
      ].map((pt, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: pt.top - 10,
            left: pt.left - 6,
            color: theme.colors.border,
            fontFamily: theme.typography.mono,
            fontSize: 16,
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          +
        </span>
      ))}

      {/* Exposed Monospace Metadata Labels */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 130,
          fontFamily: theme.typography.mono,
          fontSize: 12,
          letterSpacing: "0.1em",
          color: theme.colors.textMuted,
          textTransform: "uppercase",
        }}
      >
        [HALLMARK // ANTI-AI-SLOP]
      </div>

      <div
        style={{
          position: "absolute",
          top: 40,
          right: 130,
          fontFamily: theme.typography.mono,
          fontSize: 12,
          letterSpacing: "0.1em",
          color: theme.colors.textMuted,
          textTransform: "uppercase",
        }}
      >
        [TOGETHER AI · MIT LICENSE]
      </div>
    </div>
  );
};
