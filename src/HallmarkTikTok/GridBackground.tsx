import React from "react";
import { theme } from "../theme";

export const GridBackground: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        backgroundColor: theme.colors.background,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Top Left Watermark: @titechmoingay in Glowing Gold */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 60,
          fontFamily: theme.typography.rounded,
          fontSize: 22,
          fontWeight: 900,
          letterSpacing: "0.04em",
          color: theme.colors.accentGold,
          textShadow: "0 0 16px rgba(255, 204, 0, 0.85), 0 0 30px rgba(255, 204, 0, 0.4)",
          userSelect: "none",
        }}
      >
        @titechmoingay
      </div>

      {/* Top Right Watermark: @titechmoingay in Glowing Gold */}
      <div
        style={{
          position: "absolute",
          top: 60,
          right: 60,
          fontFamily: theme.typography.rounded,
          fontSize: 22,
          fontWeight: 900,
          letterSpacing: "0.04em",
          color: theme.colors.accentGold,
          textShadow: "0 0 16px rgba(255, 204, 0, 0.85), 0 0 30px rgba(255, 204, 0, 0.4)",
          userSelect: "none",
        }}
      >
        @titechmoingay
      </div>
    </div>
  );
};
