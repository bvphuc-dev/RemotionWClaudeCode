import React from "react";
import { Img, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

const cardStyle: React.CSSProperties = {
  backgroundColor: "rgba(17, 18, 16, 0.94)",
  border: "2px solid #2A2C26",
  borderRadius: 28,
  padding: "36px 40px",
  width: 960,
  boxShadow: "0 24px 60px rgba(0, 0, 0, 0.85)",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
};

const badgeStyle: React.CSSProperties = {
  border: "2px solid #FFCC00",
  borderRadius: 999,
  padding: "10px 28px",
  color: "#FFCC00",
  fontSize: 22,
  fontWeight: 900,
  letterSpacing: "0.08em",
  fontFamily: theme.typography.rounded,
  marginBottom: 24,
  textShadow: "0 0 16px rgba(255, 204, 0, 0.7)",
  backgroundColor: "rgba(255, 204, 0, 0.08)",
};

const titleGold: React.CSSProperties = {
  fontSize: 54,
  fontWeight: 900,
  color: "#FFCC00",
  lineHeight: 1.25,
  fontFamily: theme.typography.rounded,
  letterSpacing: "0.02em",
  margin: "0 0 12px 0",
  textShadow: "0 0 20px rgba(255, 204, 0, 0.6)",
};

const titleWhite: React.CSSProperties = {
  fontSize: 40,
  fontWeight: 800,
  color: "#FFFFFF",
  lineHeight: 1.3,
  fontFamily: theme.typography.rounded,
  margin: 0,
};

const sceneWrapper: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 80,
  paddingBottom: 260,
  position: "relative",
};

interface StickerProps {
  emoji: string;
  text: string;
  triggerFrame: number;
  rotate?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

const Sticker: React.FC<StickerProps> = ({
  emoji,
  text,
  triggerFrame,
  rotate = 0,
  top,
  bottom,
  left,
  right,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  if (frame < triggerFrame) return null;

  const spr = spring({
    frame: frame - triggerFrame,
    fps,
    config: { damping: 12, stiffness: 240 },
  });

  return (
    <div
      style={{
        position: "absolute",
        top,
        bottom,
        left,
        right,
        backgroundColor: "#1B1D17",
        border: "2px solid #FFCC00",
        borderRadius: 16,
        padding: "10px 20px",
        color: "#FFCC00",
        fontSize: 22,
        fontWeight: 900,
        fontFamily: theme.typography.rounded,
        letterSpacing: "0.04em",
        transform: `rotate(${rotate}deg) scale(${spr})`,
        transformOrigin: "center center",
        boxShadow: "0 12px 30px rgba(0, 0, 0, 0.8), 0 0 16px rgba(255, 204, 0, 0.4)",
        zIndex: 30,
        display: "flex",
        alignItems: "center",
        gap: 10,
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ fontSize: 26 }}>{emoji}</span>
      <span style={{ color: "#FFFFFF" }}>{text}</span>
    </div>
  );
};

export const Scene01: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>{"01 // C\u00c2U H\u1eceI L\u1edaN"}</div>
    <div style={cardStyle}>
      <Sticker emoji="🔥" text={"AI HAY QU\u00caN?"} triggerFrame={15} rotate={-6} top={-24} left={30} />
      <Sticker emoji="⚡" text={"G\u00c2Y B\u1ea4T NG\u1edc"} triggerFrame={45} rotate={8} bottom={-24} right={30} />
      <h1 style={titleGold}>{"AI HAY QU\u00caN?"}</h1>
      <h2 style={titleWhite}>{"Tr\u1ee3 l\u00fd AI b\u1ecb m\u1ea5t tr\u00ed nh\u1edb sau m\u1ed7i phi\u00ean"}</h2>
      <div style={{ marginTop: 32, fontSize: 80 }}>🔥</div>
    </div>
  </div>
);

export const Scene02: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>{"02 // D\u1ef0 \u00c1N GITHUB"}</div>
    <div style={cardStyle}>
      <Sticker emoji="🐙" text={"GITHUB REPO"} triggerFrame={15} rotate={-5} top={-24} left={30} />
      <Sticker emoji="🚀" text={"CLAUDE MEM"} triggerFrame={45} rotate={6} bottom={-24} right={30} />
      <h1 style={titleGold}>{"CLAUDE-MEM"}</h1>
      <h2 style={titleWhite}>{"T\u00e1c Gi\u1ea3: @thedotmack"}</h2>
      <div style={{ marginTop: 32, fontSize: 80 }}>🐙</div>
    </div>
  </div>
);

export const Scene03: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>{"03 // UY T\u00cdN C\u1ed8NG \u0110\u1ed2NG"}</div>
    <div style={cardStyle}>
      <Sticker emoji="⭐" text={"104,471 SAO"} triggerFrame={15} rotate={-7} top={-24} left={30} />
      <Sticker emoji="🔥" text={"VIRAL GITHUB"} triggerFrame={45} rotate={6} bottom={-24} right={30} />
      <h1 style={titleGold}>{"\u2b50 104,471 STARS"}</h1>
      <h2 style={titleWhite}>{"C\u1ed9ng \u0110\u1ed3ng \u0110\u00f3n Nh\u1eadn N\u1ed3ng Nhi\u1ec7t"}</h2>
      <div style={{ marginTop: 24, borderRadius: 20, overflow: "hidden", border: "2px solid #FFCC00" }}>
        <Img src={staticFile("assets/thedotmack_claude-mem_github_repo.png")} style={{ width: 880, display: "block" }} />
      </div>
    </div>
  </div>
);

export const Scene04: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>{"04 // N\u00d3 L\u00c0 G\u00cc"}</div>
    <div style={cardStyle}>
      <Sticker emoji="💡" text={"\u0110\u1ecaNH NGH\u0128A"} triggerFrame={15} rotate={-6} top={-24} left={30} />
      <Sticker emoji="⚡" text={"G\u1eaeN B\u1ed8 NH\u1eda AI"} triggerFrame={45} rotate={7} bottom={-24} right={30} />
      <h1 style={titleGold}>{"G\u1eaeN B\u1ed8 NH\u1eda AI"}</h1>
      <h2 style={titleWhite}>{"S\u1ed5 nh\u1edb v\u0129nh vi\u1ec5n cho tr\u1ee3 l\u00fd AI"}</h2>
      <div style={{ marginTop: 32, fontSize: 80 }}>💡</div>
    </div>
  </div>
);

export const Scene05: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>{"05 // C\u00c1CH HO\u1ea0T \u0110\u1ed8NG"}</div>
    <div style={cardStyle}>
      <Sticker emoji="📥" text={"\u0110\u01afA V\u00c0O X"} triggerFrame={15} rotate={6} top={-24} right={30} />
      <Sticker emoji="📤" text={"L\u01afU TR\u1eee T\u1ef0 \u0110\u1ed8NG"} triggerFrame={45} rotate={-6} bottom={-24} left={30} />
      <h1 style={titleGold}>{"L\u01afU TR\u1eee T\u1ef0 \u0110\u1ed8NG"}</h1>
      <h2 style={titleWhite}>{"T\u1ef1 \u0111\u1ed9ng ghi ch\u00e9p t\u00f3m t\u1eaft ti\u1ebfn \u0111\u1ed9"}</h2>
      <div style={{ marginTop: 32, fontSize: 80 }}>🔄</div>
    </div>
  </div>
);

export const Scene06: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>{"06 // V\u00cd D\u1ee4 TH\u1ef0C T\u1ebe"}</div>
    <div style={cardStyle}>
      <Sticker emoji="📊" text={"NH\u1eda R\u00d5 10 L\u1ed6I"} triggerFrame={15} rotate={-6} top={-24} left={30} />
      <Sticker emoji="✨" text={"K\u1ebeT QU\u1ea2"} triggerFrame={45} rotate={6} bottom={-24} right={30} />
      <h1 style={titleGold}>{"NH\u1eda R\u00d5 10 L\u1ed6I"}</h1>
      <h2 style={titleWhite}>{"M\u1edf l\u1ea1i m\u00e1y sau 1 tu\u1ea7n v\u1eabn nh\u1edb chi ti\u1ebft"}</h2>
      <div style={{ marginTop: 24, borderRadius: 20, overflow: "hidden", border: "2px solid #FFCC00" }}>
        <Img src={staticFile("assets/thedotmack_claude-mem_website.png")} style={{ width: 880, display: "block" }} />
      </div>
    </div>
  </div>
);

export const Scene07: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>{"07 // D\u00c0NH CHO AI"}</div>
    <div style={cardStyle}>
      <Sticker emoji="🎯" text={"KH\u00d4NG C\u1ea6N NH\u1eaeC"} triggerFrame={15} rotate={6} top={-24} right={30} />
      <Sticker emoji="⚡" text={"\u0110\u00daNG NHU C\u1ea6U"} triggerFrame={45} rotate={-6} bottom={-24} left={30} />
      <h1 style={titleGold}>{"KH\u00d4NG C\u1ea6N NH\u1eaeC"}</h1>
      <h2 style={titleWhite}>{"Kh\u00f4ng ph\u1ea3i g\u00f5 l\u1ea1i b\u1ed1i c\u1ea3nh t\u1eeb \u0111\u1ea7u"}</h2>
      <div style={{ marginTop: 32, fontSize: 80 }}>🎯</div>
    </div>
  </div>
);

export const Scene08: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>{"08 // HO\u00c0N TO\u00c0N MI\u1ec4N PH\u00cd"}</div>
    <div style={cardStyle}>
      <Sticker emoji="💵" text={"0 \u0110\u1ed2NG CHI PH\u00cd"} triggerFrame={15} rotate={7} top={-24} right={30} />
      <Sticker emoji="🆓" text={"FREE TR\u1eccN \u0110\u1edcI"} triggerFrame={45} rotate={-6} bottom={-24} left={30} />
      <h1 style={titleGold}>{"0 \u0110\u1ed2NG CHI PH\u00cd"}</h1>
      <h2 style={titleWhite}>{"Ho\u00e0n To\u00e0n Mi\u1ec5n Ph\u00ed"}</h2>
      <div style={{ marginTop: 32, fontSize: 80 }}>💰</div>
    </div>
  </div>
);

export const Scene09: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>{"09 // C\u00c0I \u0110\u1eb6T 1 D\u00d2NG L\u1ec6NH"}</div>
    <div style={cardStyle}>
      <Sticker emoji="💻" text={"1 D\u00d2NG L\u1ec6NH"} triggerFrame={15} rotate={-6} top={-24} left={30} />
      <Sticker emoji="⚡" text={"CH\u1ea0Y NGAY"} triggerFrame={45} rotate={7} bottom={-24} right={30} />
      <h1 style={titleGold}>{"C\u00c0I \u0110\u1eb6T 1 D\u00d2NG"}</h1>
      <h2 style={titleWhite}>{"Copy & Ch\u1ea1y Ngay"}</h2>
      <div style={{ marginTop: 24, backgroundColor: "#000000", border: "2px solid #FFCC00", borderRadius: 16, padding: "20px 24px", width: "100%", boxShadow: "0 0 24px rgba(255, 204, 0, 0.4)" }}>
        <code style={{ color: "#FFCC00", fontSize: 28, fontWeight: 900, fontFamily: "monospace" }}>{"npx claude-mem install --ide grok-bot"}</code>
      </div>
    </div>
  </div>
);

export const Scene10: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>{"10 // THAM GIA TELEGRAM"}</div>
    <div style={cardStyle}>
      <Sticker emoji="📌" text={"L\u01afU VIDEO L\u1ea0I"} triggerFrame={15} rotate={-6} top={-24} left={30} />
      <Sticker emoji="💬" text={"NH\u00d3M CHAT TELE"} triggerFrame={45} rotate={7} bottom={-24} right={30} />
      <h1 style={titleGold}>{"LINK TRONG BIO"}</h1>
      <h2 style={titleWhite}>{"Tham Gia Nh\u00f3m Chat Tele"}</h2>
      <div style={{ marginTop: 24, textAlign: "left", width: "100%", padding: "0 40px" }}>
        <p style={{ color: "#FFCC00", fontSize: 26, margin: "8px 0", fontWeight: 900 }}>✓ {"Link nh\u00f3m n\u1eb1m trong BIO TikTok"}</p>
        <p style={{ color: "#FFFFFF", fontSize: 26, margin: "8px 0", fontWeight: 900 }}>✓ {"C\u1eadp nh\u1eadt repo AI \u0111\u1ec9nh m\u1ed7i ng\u00e0y"}</p>
        <p style={{ color: "#FFFFFF", fontSize: 26, margin: "8px 0", fontWeight: 900 }}>✓ {"Th\u1ea3o lu\u1eadn c\u00f9ng c\u1ed9ng \u0111\u1ed3ng coder"}</p>
      </div>
    </div>
  </div>
);
