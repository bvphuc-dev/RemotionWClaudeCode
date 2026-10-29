// Centralized Theme Tokens for Rounded TikTok Editorial Aesthetic
export const theme = {
  colors: {
    // Matte Grounded Dark Mode
    background: "#111210", // Matte Charcoal
    surface: "#1A1B18", // Elevated Surface
    surfaceElevated: "#222420", // Card Surface
    border: "#2E302A", // Structural Border
    borderHighlight: "#4A4D44", // High-contrast border

    // Vibrant TikTok Accents for Keywords & Highlights
    accentGold: "#FFCC00", // Bright Gold / Amber (Emphasis & Active Karaoke)
    accentWarning: "#FF3B30", // Punchy Red for Warning / Controversy
    accentGreen: "#34C759", // Punchy Sage Green for Verification / Success
    accentCyan: "#00F2FE", // Punchy Cyan for Tech / Tools
    accentTelegram: "#2AABEE", // Telegram Blue

    // Fallbacks / Aliases
    accentPrimary: "#FFCC00",
    accentSecondary: "#34C759",

    textPrimary: "#FFFFFF", // Crisp White
    textBone: "#F0EFEA", // Bone White
    textMuted: "#9E9C94", // Warm Stone
    terminalDark: "#151614", // Terminal Matte Surface
  },
  typography: {
    // Rounded / Cartoon TikTok Font Stack
    rounded: "'Nunito', 'Arial Rounded MT Bold', -apple-system, BlinkMacSystemFont, sans-serif",
    heading: "'Nunito', 'Arial Rounded MT Bold', -apple-system, BlinkMacSystemFont, sans-serif",
    serif: "'Nunito', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
  },
  radius: {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 40,
    full: 9999,
  },
  shadows: {
    card: "0 16px 40px rgba(0,0,0,0.7), 0 0 0 1px #2E302A",
    tactile: "0 16px 40px rgba(0,0,0,0.7), 0 0 0 1px #2E302A",
    highlight: "0 16px 48px rgba(0,0,0,0.8), 0 0 24px rgba(255, 204, 0, 0.25)",
    warning: "0 16px 48px rgba(0,0,0,0.8), 0 0 24px rgba(255, 59, 48, 0.3)",
  },
  springs: {
    snappy: { damping: 20, stiffness: 200, mass: 0.8 },
    smooth: { damping: 28, stiffness: 140, mass: 1 },
    bouncy: { damping: 12, stiffness: 160 },
  },
};
