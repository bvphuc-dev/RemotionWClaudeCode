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
  triggerFrame: number; // Frame relative to this scene when keyword is spoken
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

  // Hidden until voice reaches this keyword
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

// Scene 01: Hook Cảnh Báo
export const Scene01Hook: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>⚠️ CẢNH BÁO THIẾT KẾ</div>
    <div style={cardStyle}>
      {/* 42f: "DỪNG LẠI NGAY!" */}
      <Sticker emoji="🛑" text="DỪNG LẠI NGAY" triggerFrame={42} rotate={5} bottom={-24} left={20} />
      {/* 148f: "CLAUDE HAY CURSOR TỰ VẼ WEB" */}
      <Sticker emoji="🚨" text="KHÔNG TỰ VẼ WEB" triggerFrame={148} rotate={-6} top={-24} right={20} />
      <h1 style={titleGold}>DỪNG LẠI NGAY!</h1>
      <h2 style={titleWhite}>ĐỪNG ĐỂ CLAUDE HAY CURSOR TỰ VẼ WEB</h2>
      <div style={{ marginTop: 32, fontSize: 80 }}>⚠️</div>
    </div>
  </div>
);

// Scene 02: Hook AI Slop
export const Scene02Problem: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>❌ THẢM HỌA GIAO DIỆN</div>
    <div style={cardStyle}>
      {/* 62f: "RÁC CÔNG NGHỆ" */}
      <Sticker emoji="🗑️" text="AI SLOP RÁC" triggerFrame={62} rotate={-5} top={-24} left={20} />
      {/* 186f: "KHÁCH NHÌN VÀO LÀ MUỐN THOÁT NGAY" */}
      <Sticker emoji="📉" text="KHÁCH THOÁT NGAY" triggerFrame={186} rotate={6} bottom={-24} right={20} />
      <h1 style={titleGold}>RÁC CÔNG NGHỆ (AI SLOP)</h1>
      <h2 style={titleWhite}>KHÁCH VÀO LÀ BẤM THOÁT NGAY LẬP TỨC</h2>
      <div style={{ marginTop: 24, color: "#FFFFFF", fontSize: 28, opacity: 0.85 }}>
        Màu mè lòe loẹt • Chữ to nhỏ vô lý • Trông cực phèn
      </div>
    </div>
  </div>
);

// Scene 03: Hero Reveal
export const Scene03Hero: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>⭐ CỨU TINH THIẾT KẾ WEB AI</div>
    <div style={cardStyle}>
      {/* 99f: "HALLMARK" */}
      <Sticker emoji="👑" text="TOP GITHUB" triggerFrame={99} rotate={5} bottom={-22} left={24} />
      {/* 148f: "HƠN 38.000 SAO" */}
      <Sticker emoji="🔥" text="38.2K STARS" triggerFrame={148} rotate={-4} top={-22} right={24} />
      <h1 style={titleGold}>HALLMARK</h1>
      <h2 style={titleWhite}>DỰ ÁN HƠN 38.000 SAO TRÊN GITHUB</h2>
      <div style={{ marginTop: 24, borderRadius: 20, overflow: "hidden", border: "2px solid #FFCC00" }}>
        <Img src={staticFile("assets/hallmark_og.png")} style={{ width: 880, display: "block" }} />
      </div>
    </div>
  </div>
);

// Scene 04: Chống AI Slop Linter
export const Scene04Sloplint: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>🛡️ ANTI-AI-SLOP SKILL</div>
    <div style={cardStyle}>
      {/* 49f: "CHẤM DỨT HOÀN TOÀN" */}
      <Sticker emoji="🧹" text="DIỆT LỖI GIAO DIỆN" triggerFrame={49} rotate={-5} top={-22} left={24} />
      {/* 178f: "PHÈN KHÔNG THỂ TẢ CỦA AI" */}
      <Sticker emoji="✨" text="CLEAN 100%" triggerFrame={178} rotate={4} bottom={-22} right={24} />
      <h1 style={titleGold}>CHẤM DỨT AI SLOP</h1>
      <h2 style={titleWhite}>DIỆT SẠCH MỌI DẤU VẾT GIAO DIỆN MÁY TẠO</h2>
      <div style={{ marginTop: 20, borderRadius: 16, overflow: "hidden", border: "1px solid #333" }}>
        <Img src={staticFile("assets/hallmark_banner.png")} style={{ width: 880, display: "block" }} />
      </div>
    </div>
  </div>
);

// Scene 05: 50 Themes
export const Scene05Themes: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>🎨 KHO GIAO DIỆN CAO CẤP</div>
    <div style={cardStyle}>
      {/* 36f: "50 BỘ TEMPLATE" */}
      <Sticker emoji="💎" text="50+ THEMES" triggerFrame={36} rotate={-6} top={-24} right={20} />
      {/* 107f: "CHUẨN THIẾT KẾ GIAO DIỆN CAO CẤP" */}
      <Sticker emoji="✨" text="CHUẨN DESIGN" triggerFrame={107} rotate={4} bottom={-24} left={20} />
      <h1 style={titleGold}>50 THEME TUYỆT ĐẸP</h1>
      <h2 style={titleWhite}>TỪNG CHẤT LIỆU, MÀU SẮC ĐỀU NGHỆ THUẬT</h2>
      <div style={{ marginTop: 24, display: "flex", gap: 16 }}>
        <div style={{ padding: "16px 28px", border: "1px solid #FFCC00", borderRadius: 16, color: "#FFCC00", fontWeight: 900, fontSize: 24 }}>Paper & Print</div>
        <div style={{ padding: "16px 28px", border: "1px solid #FFFFFF", borderRadius: 16, color: "#FFFFFF", fontWeight: 900, fontSize: 24 }}>Editorial Type</div>
        <div style={{ padding: "16px 28px", border: "1px solid #FFCC00", borderRadius: 16, color: "#FFCC00", fontWeight: 900, fontSize: 24 }}>Minimal Surface</div>
      </div>
    </div>
  </div>
);

// Scene 06: Craft Typography
export const Scene06Typography: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>✍️ TYPOGRAPHY CHUYÊN NGHIỆP</div>
    <div style={cardStyle}>
      {/* 72f: "PHÔNG CHỮ, BỐ CỤC" */}
      <Sticker emoji="📰" text="CHUẨN TẠP CHÍ" triggerFrame={72} rotate={-4} top={-22} left={24} />
      {/* 162f: "NHƯ TẠP CHÍ NGHỆ THUẬT" */}
      <Sticker emoji="🎯" text="PIXEL PERFECT" triggerFrame={162} rotate={5} bottom={-22} right={24} />
      <h1 style={titleGold}>BỐ CỤC CHUẨN TẠP CHÍ</h1>
      <h2 style={titleWhite}>PHÔNG CHỮ SẮC NÉT, TINH TẾ TỪNG PIXEL</h2>
      <div style={{ marginTop: 24, color: "#FFCC00", fontSize: 32, fontWeight: 900 }}>
        Refuse To Look Machine-Made
      </div>
    </div>
  </div>
);

// Scene 07: Design Audit
export const Scene07Audit: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>🔍 AUTOMATED DESIGN AUDIT</div>
    <div style={cardStyle}>
      {/* 48f: "TỰ ĐỘNG QUÉT VÀ DIỆT SẠCH" */}
      <Sticker emoji="🤖" text="AUTO AUDIT" triggerFrame={48} rotate={-5} top={-22} right={24} />
      {/* 145f: "LỖI THIẾT KẾ MÁY TẠO" */}
      <Sticker emoji="🛡️" text="CHỐNG LỖI" triggerFrame={145} rotate={4} bottom={-22} left={24} />
      <h1 style={titleGold}>QUÉT & DIỆT LỖI</h1>
      <h2 style={titleWhite}>CHẤM ĐIỂM FLOOR • REFLEX • FINISH</h2>
      <div style={{ marginTop: 24, textAlign: "left", width: "100%", padding: "0 40px" }}>
        <p style={{ color: "#FFCC00", fontSize: 26, margin: "8px 0", fontWeight: 900 }}>✓ Kiểm tra độ tương phản màu sắc</p>
        <p style={{ color: "#FFFFFF", fontSize: 26, margin: "8px 0", fontWeight: 800 }}>✓ Loại bỏ nút bấm & form giả lập</p>
        <p style={{ color: "#FFCC00", fontSize: 26, margin: "8px 0", fontWeight: 900 }}>✓ Đảm bảo chuẩn Responsive 100%</p>
      </div>
    </div>
  </div>
);

// Scene 08: Multi-harness
export const Scene08Harness: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>⚡ ĐA NỀN TẢNG AI CODING</div>
    <div style={cardStyle}>
      {/* 111f: "CLAUDE CODE, CURSOR" */}
      <Sticker emoji="🚀" text="ALL-IN-ONE" triggerFrame={111} rotate={-4} top={-22} left={24} />
      {/* 165f: "CODEX VÀ OPENCODE" */}
      <Sticker emoji="⚡" text="PLUG & PLAY" triggerFrame={165} rotate={5} bottom={-22} right={24} />
      <h1 style={titleGold}>TƯƠNG THÍCH MỌI TOOL</h1>
      <h2 style={titleWhite}>CLAUDE CODE • CURSOR • CODEX • OPENCODE</h2>
      <div style={{ marginTop: 28, fontSize: 60 }}>💻 🤖 ⚡ 🚀</div>
    </div>
  </div>
);

// Scene 09: Real Browser
export const Scene09Browser: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>📱 TEST TRÊN THIẾT BỊ THẬT</div>
    <div style={cardStyle}>
      {/* 74f: "TRÌNH DUYỆT KIỂM TRA ĐỘ TƯƠNG PHẢN" */}
      <Sticker emoji="🌐" text="REAL BROWSER" triggerFrame={74} rotate={-5} top={-22} right={24} />
      {/* 164f: "TRÊN PHONE THẬT" */}
      <Sticker emoji="📲" text="MOBILE FIRST" triggerFrame={164} rotate={4} bottom={-22} left={24} />
      <h1 style={titleGold}>KIỂM TRA TRÌNH DUYỆT</h1>
      <h2 style={titleWhite}>TỰ ĐỘNG CHẠY AUDIT TRÊN MOBILE & DESKTOP</h2>
      <div style={{ marginTop: 24, color: "#FFCC00", fontSize: 28, fontWeight: 900 }}>
        Zero Layout Shift • Perfect Contrast
      </div>
    </div>
  </div>
);

// Scene 10: Tỷ lệ chuyển đổi
export const Scene10Conversion: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>📈 TĂNG TỶ LỆ CHUYỂN ĐỔI</div>
    <div style={cardStyle}>
      {/* 77f: "TĂNG TỶ LỆ KHÁCH MUA HÀNG" */}
      <Sticker emoji="💰" text="X3 DOANH SỐ" triggerFrame={77} rotate={-6} top={-22} left={24} />
      {/* 146f: "VÀ DÙNG THỬ" */}
      <Sticker emoji="⭐" text="TRUSTED UI" triggerFrame={146} rotate={5} bottom={-22} right={24} />
      <h1 style={titleGold}>GIỮ CHÂN KHÁCH HÀNG</h1>
      <h2 style={titleWhite}>GIAO DIỆN UY TÍN TĂNG GẤP 3 LẦN ĐƠN HÀNG</h2>
      <div style={{ marginTop: 24, fontSize: 72 }}>⭐️⭐️⭐️⭐️⭐️</div>
    </div>
  </div>
);

// Scene 11: 100% Free
export const Scene11Free: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>🎁 HOÀN TOÀN MIỄN PHÍ</div>
    <div style={cardStyle}>
      {/* 35f: "HOÀN TOÀN MIỄN PHÍ" */}
      <Sticker emoji="💯" text="FREE FOREVER" triggerFrame={35} rotate={-4} top={-22} right={24} />
      {/* 70f: "MÃ NGUỒN MỞ" */}
      <Sticker emoji="🔓" text="OPEN SOURCE" triggerFrame={70} rotate={5} bottom={-22} left={24} />
      <h1 style={titleGold}>MÃ NGUỒN MỞ 100%</h1>
      <h2 style={titleWhite}>KHÔNG SUBSCRIPTION • KHÔNG TỐN CHI PHÍ</h2>
      <div style={{ marginTop: 24, color: "#FFCC00", fontSize: 32, fontWeight: 900 }}>
        Made By Together AI
      </div>
    </div>
  </div>
);

// Scene 12: Terminal Install
export const Scene12Install: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>⚡ CÀI ĐẶT 1 DÒNG LỆNH</div>
    <div style={cardStyle}>
      {/* 84f: "ĐÚNG MỘT DÒNG LỆNH" */}
      <Sticker emoji="⚡" text="1 DÒNG LỆNH" triggerFrame={84} rotate={-5} top={-24} right={24} />
      {/* 133f: "TRONG TERMINAL" */}
      <Sticker emoji="💻" text="TERMINAL READY" triggerFrame={133} rotate={4} bottom={-24} left={24} />
      <h1 style={titleGold}>DÙNG NGAY TRONG TERMINAL</h1>
      <div
        style={{
          marginTop: 24,
          backgroundColor: "#000000",
          border: "2px solid #FFCC00",
          borderRadius: 16,
          padding: "20px 24px",
          width: "100%",
          boxShadow: "0 0 24px rgba(255, 204, 0, 0.4)",
        }}
      >
        <code style={{ color: "#FFCC00", fontSize: 28, fontWeight: 900, fontFamily: "monospace" }}>
          npx skills add nutlope/hallmark -g
        </code>
      </div>
    </div>
  </div>
);

// Scene 13: Lưu video
export const Scene13Save: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>📌 LƯU LẠI DÙNG KHI CẦN</div>
    <div style={cardStyle}>
      {/* 80f: "ĐẸP NHƯ CHUYÊN GIA" */}
      <Sticker emoji="🔥" text="BÍ KÍP SENIOR" triggerFrame={80} rotate={-5} top={-22} left={24} />
      {/* 141f: "HÃY LƯU VIDEO LẠI!" */}
      <Sticker emoji="💾" text="BOOKMARK NGAY" triggerFrame={141} rotate={5} bottom={-22} right={24} />
      <h1 style={titleGold}>LƯU VIDEO NGAY!</h1>
      <h2 style={titleWhite}>BÍ KÍP ĐỂ AI CODE WEB ĐẸP NHƯ SENIOR</h2>
      <div style={{ marginTop: 24, fontSize: 80 }}>💾</div>
    </div>
  </div>
);

// Scene 14: Telegram CTA 1
export const Scene14Telegram: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>💬 CỘNG ĐỒNG CÔNG NGHỆ</div>
    <div style={cardStyle}>
      {/* 100f: "THAM GIA NHÓM CHAT TELE" */}
      <Sticker emoji="🚀" text="NHẬN PROMPT & CODE" triggerFrame={100} rotate={4} bottom={-24} left={24} />
      {/* 194f: "Ở LINK TRONG BIO TIKTOK NHÉ" */}
      <Sticker emoji="📲" text="VÀO BIO TIKTOK" triggerFrame={194} rotate={-6} top={-24} right={24} />
      <h1 style={titleGold}>THAM GIA TELEGRAM</h1>
      <h2 style={titleWhite}>LINK TRONG BIO TIKTOK CỦA MÌNH</h2>
      <div style={{ marginTop: 24, fontSize: 80 }}>📲</div>
    </div>
  </div>
);

// Scene 15: Telegram CTA 2
export const Scene15ScrollBio: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>👇 HƯỚNG DẪN THAM GIA</div>
    <div style={cardStyle}>
      {/* 38f: "LƯỚT XUỐNG XÍU" */}
      <Sticker emoji="👇" text="LƯỚT XUỐNG XÍU" triggerFrame={38} rotate={-5} top={-24} left={24} />
      {/* 114f: "LÀ THẤY LINK NHÓM NHÉ" */}
      <Sticker emoji="🔗" text="LINK NHÓM CHAT" triggerFrame={114} rotate={5} bottom={-24} right={24} />
      <h1 style={titleGold}>LƯỚT XUỐNG XÍU</h1>
      <h2 style={titleWhite}>LÀ THẤY NGAY LINK NHÓM CHAT TELE NHÉ</h2>
      <div style={{ marginTop: 24, fontSize: 80 }}>👇</div>
    </div>
  </div>
);
