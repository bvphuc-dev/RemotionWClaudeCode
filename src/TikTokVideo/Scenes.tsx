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
    <div style={badgeStyle}>{"01 // C\u00d4NG TY \u1ea2O THU NH\u1ece"}</div>
    <div style={cardStyle}>
      <Sticker emoji="🔥" text={"6.9K STARS"} triggerFrame={15} rotate={-6} top={-24} left={30} />
      <Sticker emoji="⚡" text={"\u0110\u1ed8I NG\u0168 \u1ea2O"} triggerFrame={45} rotate={7} bottom={-24} right={30} />
      <h1 style={titleGold}>{"M\u1ed8T M\u00ccNH \u00d4M H\u1ebeT VI\u1ec6C?"}</h1>
      <h2 style={titleWhite}>{"\u0110\u1ed9i Ng\u0169 16 Nh\u00e2n Vi\u00ean \u1ea2o Mi\u1ec5n Ph\u00ed"}</h2>
      <div style={{ marginTop: 24, borderRadius: 20, overflow: "hidden", border: "2px solid #FFCC00" }}>
        <Img src={staticFile("assets/orkas-ai_orkas_github_repo.png")} style={{ width: 880, display: "block" }} />
      </div>
    </div>
  </div>
);

export const Scene02: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>{"02 // B\u1ea4T L\u1ef0C C\u00c1CH C\u0168"}</div>
    <div style={cardStyle}>
      <Sticker emoji="💸" text={"T\u1ed0N TI\u1ec0N TRI\u1ec6U"} triggerFrame={15} rotate={-7} top={-24} right={30} />
      <Sticker emoji="⏳" text={"KI\u1ec6T S\u1ee8C"} triggerFrame={45} rotate={6} bottom={-24} left={30} />
      <h1 style={titleGold}>{"M\u00d2 M\u1eaaM C\u1ea2 NG\u00c0Y"}</h1>
      <h2 style={titleWhite}>{"Thu\u00ea Ngo\u00e0i T\u1ed1n Ch\u1ee5c Tri\u1ec7u M\u1ed7i Th\u00e1ng"}</h2>
      <div style={{ marginTop: 32, fontSize: 80 }}>😫</div>
    </div>
  </div>
);

export const Scene03: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>{"03 // PH\u00c9P M\u00c0U \u0110\u1edcI TH\u1ef0C"}</div>
    <div style={cardStyle}>
      <Sticker emoji="🏢" text={"C\u00d4NG TY \u1ea2O"} triggerFrame={15} rotate={6} top={-24} left={30} />
      <Sticker emoji="🤖" text={"16 CHUY\u00caN VI\u00caN"} triggerFrame={45} rotate={-6} bottom={-24} right={30} />
      <h1 style={titleGold}>{"V\u0102N PH\u00d2NG THU NH\u1ece"}</h1>
      <h2 style={titleWhite}>{"16 Chuy\u00ean Vi\u00ean \u1ea2o Ngay Tr\u00ean M\u00e1y"}</h2>
      <div style={{ marginTop: 24, borderRadius: 20, overflow: "hidden", border: "2px solid #FFCC00" }}>
        <Img src={staticFile("assets/orkas-ai_orkas_asset_2.png")} style={{ width: 880, display: "block" }} />
      </div>
    </div>
  </div>
);

export const Scene04: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>{"04 // V\u00c0O X, RA Y"}</div>
    <div style={cardStyle}>
      <Sticker emoji="📥" text={"N\u00c9M M\u1ee4C TI\u00caU V\u00c0O"} triggerFrame={15} rotate={-6} top={-24} right={30} />
      <Sticker emoji="📤" text={"NH\u1eacN T\u1ec6P RA"} triggerFrame={45} rotate={7} bottom={-24} left={30} />
      <h1 style={titleGold}>{"GIAO VI\u1ec6C T\u1ef0 \u0110\u1ed8NG"}</h1>
      <h2 style={titleWhite}>{"Ch\u1ec9 Huy T\u1ef1 Chia Vi\u1ec7c Cho C\u1ea3 \u0110\u1ed9i"}</h2>
      <div style={{ marginTop: 32, fontSize: 80 }}>📋</div>
    </div>
  </div>
);

export const Scene05: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>{"05 // V\u00cd D\u1ee4 TH\u1ef0C T\u1ebe"}</div>
    <div style={cardStyle}>
      <Sticker emoji="🎯" text={"30 TRANG T\u00c0I LI\u1ec6U"} triggerFrame={15} rotate={-5} top={-24} left={30} />
      <Sticker emoji="⚡" text={"3 PH\u00daT XONG SLIDE"} triggerFrame={45} rotate={6} bottom={-24} right={30} />
      <h1 style={titleGold}>{"K\u1ebeT QU\u1ea2 C\u1ee4 TH\u1ec2"}</h1>
      <h2 style={titleWhite}>{"Xong B\u00e0i B\u00e1o C\u00e1o Trong V\u00e0i Ph\u00fat"}</h2>
      <div style={{ marginTop: 24, borderRadius: 20, overflow: "hidden", border: "2px solid #FFCC00" }}>
        <Img src={staticFile("assets/orkas-ai_orkas_asset_1.png")} style={{ width: 880, display: "block" }} />
      </div>
    </div>
  </div>
);

export const Scene06: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>{"06 // \u0110\u00c8 B\u1eb8P C\u00c1CH C\u0168"}</div>
    <div style={cardStyle}>
      <Sticker emoji="⏱️" text={"TI\u1ebeT KI\u1ec6M 90% GI\u1edc"} triggerFrame={15} rotate={6} top={-24} right={30} />
      <Sticker emoji="🛡️" text={"B\u1ea2O M\u1eacT C\u1ee4C B\u1ed8"} triggerFrame={45} rotate={-6} bottom={-24} left={30} />
      <h1 style={titleGold}>{"V\u01af\u1ee2T TR\u1ed8I C\u00c1CH C\u0168"}</h1>
      <h2 style={titleWhite}>{"D\u1eef Li\u1ec7u N\u1eb1m C\u1ee5c B\u1ed9 An To\u00e0n"}</h2>
      <div style={{ marginTop: 24, textAlign: "left", width: "100%", padding: "0 40px" }}>
        <p style={{ color: "#FFFFFF", fontSize: 26, margin: "8px 0", fontWeight: 900 }}>✓ {"C\u00e1ch c\u0169: T\u1ef1 l\u00e0m m\u1ea5t c\u1ea3 ng\u00e0y, thu\u00ea ngo\u00e0i t\u1ed1n k\u00e9m"}</p>
        <p style={{ color: "#FFCC00", fontSize: 26, margin: "8px 0", fontWeight: 900 }}>✓ {"C\u00e1ch m\u1edbi: 16 chuy\u00ean vi\u00ean \u1ea3o t\u1ef1 \u0111\u1ed9ng ph\u1ed1i h\u1ee3p"}</p>
        <p style={{ color: "#FFFFFF", fontSize: 26, margin: "8px 0", fontWeight: 900 }}>✓ {"B\u1ea3o m\u1eadt: Ch\u1ea1y c\u1ee5c b\u1ed9 tr\u00ean m\u00e1y, kh\u00f4ng l\u1ed9 d\u1eef li\u1ec7u"}</p>
      </div>
    </div>
  </div>
);

export const Scene07: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>{"07 // C\u00c0I \u0110\u1eb6T 0 \u0110\u1ed2NG"}</div>
    <div style={cardStyle}>
      <Sticker emoji="💰" text={"0 \u0110\u1ed2NG MI\u1ec4N PH\u00cd"} triggerFrame={15} rotate={-6} top={-24} left={30} />
      <Sticker emoji="💻" text={"MAC & WINDOWS"} triggerFrame={45} rotate={7} bottom={-24} right={30} />
      <h1 style={titleGold}>{"MI\u1ec4N PH\u00cd TR\u1eccN \u0110\u1edcI"}</h1>
      <h2 style={titleWhite}>{"T\u1ea3i V\u1ec1 D\u00f9ng Ngay Tr\u00ean M\u00e1y T\u00ednh"}</h2>
      <div style={{ marginTop: 24, backgroundColor: "#000000", border: "2px solid #FFCC00", borderRadius: 16, padding: "20px 24px", width: "100%", boxShadow: "0 0 24px rgba(255, 204, 0, 0.4)" }}>
        <code style={{ color: "#FFCC00", fontSize: 28, fontWeight: 900, fontFamily: "monospace" }}>{"git clone https://github.com/Orkas-AI/Orkas.git"}</code>
      </div>
    </div>
  </div>
);

export const Scene08: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>{"08 // TRANH LU\u1eacN & BIO"}</div>
    <div style={cardStyle}>
      <Sticker emoji="💬" text={"B\u00ccNH LU\u1eacN NGAY"} triggerFrame={15} rotate={-6} top={-24} right={30} />
      <Sticker emoji="🚀" text={"TELE TRONG BIO"} triggerFrame={45} rotate={7} bottom={-24} right={30} />
      <h1 style={titleGold}>{"B\u1ea0N D\u00c1M TH\u1eec KH\u00d4NG?"}</h1>
      <h2 style={titleWhite}>{"Nh\u00f3m Chat Tele \u1ede Link Bio"}</h2>
      <div style={{ marginTop: 24, textAlign: "left", width: "100%", padding: "0 40px" }}>
        <p style={{ color: "#FFCC00", fontSize: 26, margin: "8px 0", fontWeight: 900 }}>✓ {"Link repo v\u00e0 b\u1ed9 c\u00e0i \u0111\u1eb7t n\u1eb1m trong BIO TikTok"}</p>
        <p style={{ color: "#FFFFFF", fontSize: 26, margin: "8px 0", fontWeight: 900 }}>✓ {"Kh\u00e1m ph\u00e1 kho c\u00f4ng c\u1ee5 tr\u00ed tu\u1ec7 nh\u00e2n t\u1ea1o mi\u1ec5n ph\u00ed"}</p>
        <p style={{ color: "#FFFFFF", fontSize: 26, margin: "8px 0", fontWeight: 900 }}>✓ {"B\u00ecnh lu\u1eadn ngay g\u00f3c nh\u00ecn c\u1ee7a b\u1ea1n b\u00ean d\u01b0\u1edbi"}</p>
      </div>
    </div>
  </div>
);
