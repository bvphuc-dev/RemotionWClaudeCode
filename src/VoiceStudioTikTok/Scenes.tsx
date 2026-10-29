import React from "react";
import { Img, staticFile } from "remotion";
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
};

// Frame 01 (0s - 4s): Hook Cảnh Báo
export const Frame01Hook: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>⚠️ CẢNH BÁO CHI PHÍ</div>
    <div style={cardStyle}>
      <h1 style={titleGold}>DỪNG LẠI NGAY!</h1>
      <h2 style={titleWhite}>ĐỪNG TỐN TIỀN CHO ELEVENLABS</h2>
      <div
        style={{
          marginTop: 40,
          display: "flex",
          gap: 24,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: "rgba(30, 20, 20, 0.8)",
            border: "2px solid #552222",
            borderRadius: 20,
            padding: 24,
          }}
        >
          <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 22, fontWeight: 700 }}>
            ELEVENLABS STARTER
          </div>
          <div
            style={{
              fontSize: 46,
              fontWeight: 900,
              color: "#FFFFFF",
              textDecoration: "line-through",
              marginTop: 8,
            }}
          >
            $264 / NĂM
          </div>
          <div style={{ color: "#FFCC00", fontSize: 20, marginTop: 8 }}>GIỚI HẠN KÝ TỰ</div>
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: "rgba(30, 30, 20, 0.8)",
            border: "2px solid #FFCC00",
            borderRadius: 20,
            padding: 24,
            boxShadow: "0 0 30px rgba(255,204,0,0.2)",
          }}
        >
          <div style={{ color: "#FFCC00", fontSize: 22, fontWeight: 800 }}>VOICESTUDIO</div>
          <div style={{ fontSize: 46, fontWeight: 900, color: "#FFCC00", marginTop: 8 }}>
            0 ĐỒNG
          </div>
          <div style={{ color: "#FFFFFF", fontSize: 20, marginTop: 8 }}>MIỄN PHÍ TRỌN ĐỜI</div>
        </div>
      </div>
    </div>
  </div>
);

// Frame 02 (4s - 8s): Hook Giải Pháp
export const Frame02Solution: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>⚡ GIẢI PHÁP THAY THẾ</div>
    <div style={cardStyle}>
      <h1 style={titleGold}>MÃ NGUỒN MỞ</h1>
      <h2 style={titleWhite}>HOÀN TOÀN MIỄN PHÍ</h2>
      <div
        style={{
          marginTop: 40,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          width: "100%",
        }}
      >
        {["100% LOCAL & OFFLINE TRÊN MÁY", "KHÔNG CẦN TRẢ PHÍ HÀNG THÁNG", "KHÔNG GIỚI HẠN KÝ TỰ"].map(
          (text, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "2px solid #2A2C26",
                borderRadius: 18,
                padding: "20px 28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: 26, fontWeight: 800, color: "#FFFFFF" }}>{text}</span>
              <span style={{ color: "#FFCC00", fontSize: 30, fontWeight: 900 }}>✓</span>
            </div>
          )
        )}
      </div>
    </div>
  </div>
);

// Frame 03 (8s - 12s): Hero Reveal VoiceStudio
export const Frame03Hero: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>⭐ GITHUB SPOTLIGHT</div>
    <div style={cardStyle}>
      <Img
        src={staticFile("assets/voicestudio_logo.png")}
        style={{ width: 140, height: 140, marginBottom: 20, filter: "drop-shadow(0 0 20px #FFCC00)" }}
      />
      <h1 style={titleGold}>VOICESTUDIO</h1>
      <h2 style={titleWhite}>DỰ ÁN SIÊU HOT TRÊN GITHUB</h2>
      <div
        style={{
          marginTop: 30,
          backgroundColor: "rgba(255,204,0,0.08)",
          border: "2px solid #FFCC00",
          borderRadius: 18,
          padding: "16px 36px",
          display: "inline-flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span style={{ fontSize: 26, fontWeight: 900, color: "#FFCC00" }}>debpalash / VoiceStudio</span>
      </div>
    </div>
  </div>
);

// Frame 04 (12s - 16s): Desktop Interface
export const Frame04Desktop: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>🖥️ GIAO DIỆN DESKTOP</div>
    <div style={cardStyle}>
      <h1 style={titleGold}>GIAO DIỆN CỰC ĐẸP</h1>
      <h2 style={titleWhite}>KHÔNG CẦN GÕ LỆNH CODE</h2>
      <div
        style={{
          marginTop: 24,
          borderRadius: 20,
          overflow: "hidden",
          border: "2px solid #3A3D34",
          width: "100%",
        }}
      >
        <Img
          src={staticFile("assets/voicestudio_launchpad.png")}
          style={{ width: "100%", display: "block" }}
        />
      </div>
    </div>
  </div>
);

// Frame 05 (16s - 20s): Clone Voice
export const Frame05Clone: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>🎙️ ZERO-SHOT CLONING</div>
    <div style={cardStyle}>
      <h1 style={titleGold}>CLONE GIỌNG NÓI</h1>
      <h2 style={titleWhite}>CHỈ VỚI 3 GIÂY ÂM THANH MẪU</h2>
      <div
        style={{
          marginTop: 24,
          borderRadius: 20,
          overflow: "hidden",
          border: "2px solid #3A3D34",
          width: "100%",
        }}
      >
        <Img
          src={staticFile("assets/voicestudio_voice-cloning.png")}
          style={{ width: "100%", display: "block" }}
        />
      </div>
    </div>
  </div>
);

// Frame 06 (20s - 24s): 646 Languages
export const Frame06Languages: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>🌍 TOÀN CẦU HÓA</div>
    <div style={cardStyle}>
      <h1 style={{ ...titleGold, fontSize: 80, margin: 0 }}>646</h1>
      <h2 style={{ ...titleWhite, color: "#FFCC00", fontSize: 42, marginBottom: 28 }}>
        NGÔN NGỮ THẾ GIỚI
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          width: "100%",
        }}
      >
        {[
          "🇻🇳 TIẾNG VIỆT",
          "🇺🇸 TIẾNG ANH",
          "🇯🇵 TIẾNG NHẬT",
          "🇨🇳 TIẾNG TRUNG",
          "🇫🇷 TIẾNG PHÁP",
          "🇩🇪 TIẾNG ĐỨC",
        ].map((lang, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "2px solid #2A2C26",
              borderRadius: 16,
              padding: "16px 20px",
              fontSize: 24,
              fontWeight: 800,
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            {lang}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Frame 07 (24s - 28s): Video Dubbing
export const Frame07Dubbing: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>🎬 TIMED VIDEO DUBBING</div>
    <div style={cardStyle}>
      <h1 style={titleGold}>TỰ ĐỘNG LỒNG TIẾNG</h1>
      <h2 style={titleWhite}>KHỚP CHUẨN TỪNG KHUNG HÌNH</h2>
      <div
        style={{
          marginTop: 24,
          borderRadius: 20,
          overflow: "hidden",
          border: "2px solid #3A3D34",
          width: "100%",
        }}
      >
        <Img
          src={staticFile("assets/voicestudio_dubbing.png")}
          style={{ width: "100%", display: "block" }}
        />
      </div>
    </div>
  </div>
);

// Frame 08 (28s - 32s): Audiobook & Batch
export const Frame08Audiobook: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>📚 SÁCH NÓI & BATCH JOBS</div>
    <div style={cardStyle}>
      <h1 style={titleGold}>TẠO SÁCH NÓI</h1>
      <h2 style={titleWhite}>XUẤT HÀNG LOẠT KHÔNG GIỚI HẠN</h2>
      <div
        style={{
          marginTop: 36,
          display: "flex",
          flexDirection: "column",
          gap: 18,
          width: "100%",
        }}
      >
        {[
          { label: "ĐỘ DÀI VĂN BẢN", val: "VÔ HẠN KÝ TỰ" },
          { label: "XUẤT FILE HÀNG LOẠT", val: "BATCH PROCESSING" },
          { label: "CHẤT LƯỢNG AUDIO", val: "24KHZ STUDIO MONO" },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "rgba(255,204,0,0.06)",
              border: "2px solid #FFCC00",
              borderRadius: 18,
              padding: "20px 28px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 24, fontWeight: 800, color: "#FFFFFF" }}>{item.label}</span>
            <span style={{ fontSize: 24, fontWeight: 900, color: "#FFCC00" }}>{item.val}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Frame 09 (32s - 36s): 15+ Models
export const Frame09Models: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>🧠 MODEL CATALOGUE</div>
    <div style={cardStyle}>
      <h1 style={titleGold}>HƠN 15 MODEL AI</h1>
      <h2 style={titleWhite}>ĐỈNH CAO THẾ GIỚI</h2>
      <div
        style={{
          marginTop: 24,
          borderRadius: 20,
          overflow: "hidden",
          border: "2px solid #3A3D34",
          width: "100%",
        }}
      >
        <Img
          src={staticFile("assets/voicestudio_models.png")}
          style={{ width: "100%", display: "block" }}
        />
      </div>
    </div>
  </div>
);

// Frame 10 (36s - 40s): Offline & Privacy
export const Frame10Offline: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>🔒 100% LOCAL & OFFLINE</div>
    <div style={cardStyle}>
      <h1 style={titleGold}>CHẠY OFFLINE</h1>
      <h2 style={titleWhite}>BẢO MẬT DỮ LIỆU MÁY TÍNH</h2>
      <div
        style={{
          marginTop: 36,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          width: "100%",
        }}
      >
        {[
          { icon: "⚡", title: "NVIDIA CUDA GPU", desc: "TỐC ĐỘ CAO NHẤT" },
          { icon: "🍏", title: "APPLE SILICON MPS", desc: "M1 / M2 / M3 / M4" },
          { icon: "💻", title: "CPU CHẠY BẢN GGUF", desc: "KHÔNG CẦN CARD ĐỒ HỌA" },
        ].map((hw, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "2px solid #2A2C26",
              borderRadius: 18,
              padding: "18px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ fontSize: 32 }}>{hw.icon}</span>
              <span style={{ fontSize: 24, fontWeight: 800, color: "#FFFFFF" }}>{hw.title}</span>
            </div>
            <span style={{ fontSize: 20, fontWeight: 900, color: "#FFCC00" }}>{hw.desc}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Frame 11 (40s - 44s): API & Agent Connect
export const Frame11AgentAPI: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>🤖 KẾT NỐI AI AGENT</div>
    <div style={cardStyle}>
      <h1 style={titleGold}>LOCAL API & MCP</h1>
      <h2 style={titleWhite}>KẾT NỐI TRỢ LÝ THÔNG MINH</h2>
      <div
        style={{
          marginTop: 32,
          backgroundColor: "#070808",
          border: "2px solid #2A2C26",
          borderRadius: 20,
          padding: 28,
          width: "100%",
          textAlign: "left",
          fontFamily: theme.typography.mono,
        }}
      >
        <div style={{ color: "#FFCC00", fontSize: 20, marginBottom: 12 }}>// TÍCH HỢP REST API VÀ MCP</div>
        <div style={{ color: "#FFFFFF", fontSize: 22, lineHeight: 1.6 }}>
          POST http://localhost:8080/generate
        </div>
        <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 20, marginTop: 8 }}>
          HỖ TRỢ CLAUDE CODE, CURSOR & AUTO-AGENTS
        </div>
      </div>
    </div>
  </div>
);

// Frame 12 (44s - 48s): 1-Line Terminal Install
export const Frame12Terminal: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>⚡ CÀI ĐẶT 1 DÒNG LỆNH</div>
    <div style={cardStyle}>
      <h1 style={titleGold}>CÀI ĐẶT SIÊU NHANH</h1>
      <h2 style={titleWhite}>ĐÚNG 1 DÒNG TRONG TERMINAL</h2>
      <div
        style={{
          marginTop: 32,
          backgroundColor: "#070808",
          border: "2px solid #FFCC00",
          borderRadius: 20,
          padding: 30,
          width: "100%",
          textAlign: "left",
          fontFamily: theme.typography.mono,
          boxShadow: "0 0 30px rgba(255,204,0,0.15)",
        }}
      >
        <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 18, marginBottom: 12 }}>
          $ MACOS & LINUX AUTO-INSTALL:
        </div>
        <div style={{ color: "#FFCC00", fontSize: 26, fontWeight: 700, wordBreak: "break-all" }}>
          curl -fsSL https://voicestudio.sh/install | sh
        </div>
      </div>
    </div>
  </div>
);

// Frame 13 (48s - 52s): Free & Save Video
export const Frame13Recap: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>⭐ HOÀN TOÀN MIỄN PHÍ</div>
    <div style={cardStyle}>
      <h1 style={titleGold}>MIỄN PHÍ TRỌN ĐỜI</h1>
      <h2 style={titleWhite}>LƯU NGAY VIDEO LẠI ĐỂ DÙNG</h2>
      <div
        style={{
          marginTop: 36,
          backgroundColor: "rgba(255,204,0,0.08)",
          border: "2px solid #FFCC00",
          borderRadius: 20,
          padding: 28,
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <span style={{ fontSize: 50 }}>💾</span>
        <div style={{ textAlign: "left" }}>
          <div style={{ color: "#FFCC00", fontSize: 26, fontWeight: 900 }}>BẤM LƯU VIDEO NGAY</div>
          <div style={{ color: "#FFFFFF", fontSize: 20, marginTop: 4 }}>
            ĐỂ KHÔNG BỎ LỠ CÔNG CỤ XỊN NÀY!
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Frame 14 (52s - 56s): Telegram CTA Part 1
export const Frame14Telegram: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>🚀 CỘNG ĐỒNG TECH</div>
    <div style={cardStyle}>
      <h1 style={titleGold}>NHÓM CHAT TELEGRAM</h1>
      <h2 style={titleWhite}>LINK Ở TRONG BIO TIKTOK NHÉ</h2>
      <div
        style={{
          marginTop: 36,
          backgroundColor: "rgba(255,204,0,0.08)",
          border: "2px solid #FFCC00",
          borderRadius: 24,
          padding: "28px 36px",
          display: "flex",
          alignItems: "center",
          gap: 24,
          boxShadow: "0 0 30px rgba(255,204,0,0.2)",
        }}
      >
        <span style={{ fontSize: 56 }}>✈️</span>
        <div style={{ textAlign: "left" }}>
          <div style={{ color: "#FFCC00", fontSize: 32, fontWeight: 900 }}>TELEGRAM GROUP</div>
          <div style={{ color: "#FFFFFF", fontSize: 22, marginTop: 6 }}>
            BẤM VÀO BIO TIKTOK CỦA MÌNH
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Frame 15 (56s - 60s): Telegram CTA Part 2
export const Frame15ScrollBio: React.FC = () => (
  <div style={sceneWrapper}>
    <div style={badgeStyle}>👇 HƯỚNG DẪN VÀO NHÓM</div>
    <div style={cardStyle}>
      <h1 style={titleGold}>LƯỚT XUỐNG XÍU</h1>
      <h2 style={titleWhite}>TRONG TRANG WEB LÀ THẤY NGAY</h2>
      <div
        style={{
          marginTop: 36,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            fontSize: 48,
            color: "#FFCC00",
            textShadow: "0 0 20px #FFCC00",
          }}
        >
          ⬇️
        </div>
        <div
          style={{
            backgroundColor: "#FFCC00",
            color: "#000000",
            fontSize: 26,
            fontWeight: 900,
            borderRadius: 16,
            padding: "16px 36px",
            fontFamily: theme.typography.rounded,
            letterSpacing: "0.04em",
          }}
        >
          THAM GIA NHÓM CHAT TELEGRAM
        </div>
        <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 20, marginTop: 4 }}>
          @titechmoingay
        </div>
      </div>
    </div>
  </div>
);
