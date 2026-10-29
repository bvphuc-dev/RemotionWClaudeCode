import json
import os

def generate_remotion_code(
    timings_data: dict,
    sub_chunks: list[dict],
    scenes_meta: list[dict],
    target_dir: str = "src/TikTokVideo"
):
    """Generate all Remotion TypeScript components for the TikTok video."""
    os.makedirs(target_dir, exist_ok=True)
    scenes = timings_data["scenes"]
    total_frames = timings_data["totalFrames"]
    total_seconds = timings_data["totalSeconds"]
    speedup_sec = round(total_seconds / 1.4, 2)
    speedup_frames = int(round(total_frames / 1.4))
    audio_file = os.path.basename(timings_data.get("audioFile", "current_voice.mp3"))

    # 1. Generate src/template/constants.ts
    constants_content = f'''/**
 * DYNAMIC CONSTANTS - GENERATED AUTOMATICALLY BY PIPELINE
 */

export const VIDEO_FPS = 30 as const;
export const VIDEO_WIDTH = 1080 as const;
export const VIDEO_HEIGHT = 1920 as const;

export const TOTAL_SCENES = {len(scenes)} as const;
export const TOTAL_DURATION_SECONDS = {total_seconds:.2f} as const;
export const TOTAL_DURATION_IN_FRAMES = {total_frames} as const;

export const SPEEDUP_FACTOR = 1.4 as const;
export const FINAL_VIDEO_DURATION_SECONDS = {speedup_sec} as const;
export const FINAL_VIDEO_FRAMES = {speedup_frames} as const;

export const MAX_WORDS_PER_SCENE = 16 as const;
export const MAX_TOTAL_WORDS = 150 as const;

export interface SceneTiming {{
  id: number;
  name: string;
  from: number;
  to: number;
  durationInFrames: number;
  fromSec: number;
  toSec: number;
  type: "intro" | "content" | "outro";
  speechDuration: number;
}}

export const SCENE_TIMINGS: readonly SceneTiming[] = {json.dumps(scenes, ensure_ascii=False, indent=2)} as const;
'''
    with open("src/template/constants.ts", "w", encoding="utf-8") as f:
        f.write(constants_content)

    # 2. Generate timings.ts
    timings_ts = f'''export const TOTAL_FRAMES = {total_frames};
export const TOTAL_SECONDS = {total_seconds};
export const SCENE_TIMINGS = {json.dumps(scenes, ensure_ascii=False, indent=2)} as const;
'''
    with open(os.path.join(target_dir, "timings.ts"), "w", encoding="utf-8") as f:
        f.write(timings_ts)

    # 3. Generate Captions.tsx
    captions_ts = '''import React from "react";
import { useCurrentFrame } from "remotion";
import { theme } from "../theme";

interface WordTiming {
  text: string;
  start: number;
  end: number;
}

interface SubtitleChunk {
  from: number;
  to: number;
  words: WordTiming[];
}

export const SUBTITLE_CHUNKS: SubtitleChunk[] = ''' + json.dumps(sub_chunks, ensure_ascii=False, indent=2) + ''';

export const Captions: React.FC = () => {
  const frame = useCurrentFrame();

  const currentChunk = SUBTITLE_CHUNKS.find(
    (c) => frame >= c.from && frame < c.to
  );
  if (!currentChunk) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 240,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 40px",
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(17, 18, 16, 0.94)",
          border: "2px solid #3A3D34",
          borderRadius: 28,
          padding: "20px 36px",
          maxWidth: 960,
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.8)",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 44,
            fontWeight: 900,
            lineHeight: 1.35,
            fontFamily: theme.typography.rounded,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            columnGap: "18px",
            rowGap: "8px",
          }}
        >
          {currentChunk.words.map((item, idx) => {
            const isCurrent = frame >= item.start && frame < item.end;
            const isSpoken = frame >= item.start;

            const color = isCurrent
              ? theme.colors.accentGold
              : isSpoken
              ? "#FFFFFF"
              : "rgba(255, 255, 255, 0.45)";

            return (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  margin: "0 2px",
                  color,
                  transform: isCurrent ? "scale(1.14)" : "scale(1)",
                  textShadow: isCurrent
                    ? "0 0 24px rgba(255, 204, 0, 0.95), 0 2px 4px #000"
                    : isSpoken
                    ? "0 2px 4px #000"
                    : "none",
                  transition: "color 0.04s ease, transform 0.04s ease",
                }}
              >
                {item.text}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};
'''
    with open(os.path.join(target_dir, "Captions.tsx"), "w", encoding="utf-8") as f:
        f.write(captions_ts)

    # 4. Generate SfxTrack.tsx with exact sticker trigger frames
    all_sticker_triggers = []
    for idx, sm in enumerate(scenes_meta):
        s_from = scenes[idx]["from"]
        for st in sm.get("stickers", []):
            rel_tf = st.get("triggerFrame", 30)
            all_sticker_triggers.append(s_from + rel_tf)

    cmd_scene_idx = next((i for i, sm in enumerate(scenes_meta) if sm.get("command")), max(0, len(scenes) - 1))
    cta_scene_idx = next((i for i, sm in enumerate(scenes_meta) if "tele" in sm.get("badge", "").lower() or "tele" in sm.get("titleWhite", "").lower()), 1)

    sfx_ts = f'''import React from "react";
import {{ Audio, Sequence, staticFile }} from "remotion";
import {{ SCENE_TIMINGS }} from "./timings";

const STICKER_POP_FRAMES = ''' + json.dumps(sorted(all_sticker_triggers)) + f''';

export const SfxTrack: React.FC = () => {{
  return (
    <>
      {{/* 1. Whoosh transition for scene changes */}}
      {{SCENE_TIMINGS.slice(1).map((s) => (
        <Sequence
          key={{s.id}}
          from={{s.from}}
          durationInFrames={{20}}
        >
          <Audio src={{staticFile("sfx/whoosh.wav")}} volume={{0.25}} />
        </Sequence>
      ))}}

      {{/* 2. Pop sound synced to each contextual sticker entrance */}}
      {{STICKER_POP_FRAMES.map((f, idx) => (
        <Sequence
          key={{idx}}
          from={{f}}
          durationInFrames={{15}}
        >
          <Audio src={{staticFile("sfx/pop.wav")}} volume={{0.35}} />
        </Sequence>
      ))}}

      {{/* 3. Terminal typing clicks on Command Scene */}}
      <Sequence from={{SCENE_TIMINGS[{cmd_scene_idx}].from + 20}} durationInFrames={{15}}>
        <Audio src={{staticFile("sfx/click.wav")}} volume={{0.4}} />
      </Sequence>
      <Sequence from={{SCENE_TIMINGS[{cmd_scene_idx}].from + 40}} durationInFrames={{15}}>
        <Audio src={{staticFile("sfx/click.wav")}} volume={{0.4}} />
      </Sequence>

      {{/* 4. Bell chime on Telegram CTA Scene */}}
      <Sequence from={{SCENE_TIMINGS[{cta_scene_idx}].from + 10}} durationInFrames={{35}}>
        <Audio src={{staticFile("sfx/bell.wav")}} volume={{0.35}} />
      </Sequence>
    </>
  );
}};
'''
    with open(os.path.join(target_dir, "SfxTrack.tsx"), "w", encoding="utf-8") as f:
        f.write(sfx_ts)

    # 5. Generate Scenes.tsx
    scenes_tsx = '''import React from "react";
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
'''
    # Generate 15 scene components
    for idx, sm in enumerate(scenes_meta):
        sid = idx + 1
        comp_name = f"Scene{sid:02d}"
        badge_txt = sm.get("badge", f"SCENE {sid:02d}")
        h1_txt = sm.get("titleGold", "")
        h2_txt = sm.get("titleWhite", "")
        img_path = sm.get("image", None)
        cmd_txt = sm.get("command", None)
        sub_list = sm.get("bullets", [])
        emoji_center = sm.get("centerEmoji", None)

        stickers_jsx = ""
        for st in sm.get("stickers", []):
            tf = st.get("triggerFrame", 30)
            rot = st.get("rotate", 0)
            em = st.get("emoji", "🔥")
            tx = st.get("text", "")
            pos_args = []
            if "top" in st: pos_args.append(f"top={{{st['top']}}}")
            if "bottom" in st: pos_args.append(f"bottom={{{st['bottom']}}}")
            if "left" in st: pos_args.append(f"left={{{st['left']}}}")
            if "right" in st: pos_args.append(f"right={{{st['right']}}}")
            pos_str = " ".join(pos_args)
            stickers_jsx += f'\n      <Sticker emoji="{em}" text={{{json.dumps(tx)}}} triggerFrame={{{tf}}} rotate={{{rot}}} {pos_str} />'

        inner_extra = ""
        if img_path:
            inner_extra += f'''
      <div style={{{{ marginTop: 24, borderRadius: 20, overflow: "hidden", border: "2px solid #FFCC00" }}}}>
        <Img src={{staticFile("{img_path}")}} style={{{{ width: 880, display: "block" }}}} />
      </div>'''
        elif cmd_txt:
            inner_extra += f'''
      <div style={{{{ marginTop: 24, backgroundColor: "#000000", border: "2px solid #FFCC00", borderRadius: 16, padding: "20px 24px", width: "100%", boxShadow: "0 0 24px rgba(255, 204, 0, 0.4)" }}}}>
        <code style={{{{ color: "#FFCC00", fontSize: 28, fontWeight: 900, fontFamily: "monospace" }}}}>{{{json.dumps(cmd_txt)}}}</code>
      </div>'''
        elif sub_list:
            bullets_str = "\n".join([f'        <p style={{{{ color: "{col}", fontSize: 26, margin: "8px 0", fontWeight: 900 }}}}>✓ {{{json.dumps(b)}}}</p>' for b, col in sub_list])
            inner_extra += f'''
      <div style={{{{ marginTop: 24, textAlign: "left", width: "100%", padding: "0 40px" }}}}>
{bullets_str}
      </div>'''
        elif emoji_center:
            inner_extra += f'''
      <div style={{{{ marginTop: 32, fontSize: 80 }}}}>{emoji_center}</div>'''

        scenes_tsx += f'''
export const {comp_name}: React.FC = () => (
  <div style={{sceneWrapper}}>
    <div style={{badgeStyle}}>{{{json.dumps(badge_txt)}}}</div>
    <div style={{cardStyle}}>{stickers_jsx}
      <h1 style={{titleGold}}>{{{json.dumps(h1_txt)}}}</h1>
      <h2 style={{titleWhite}}>{{{json.dumps(h2_txt)}}}</h2>{inner_extra}
    </div>
  </div>
);
'''
    with open(os.path.join(target_dir, "Scenes.tsx"), "w", encoding="utf-8") as f:
        f.write(scenes_tsx)

    # 6. Generate TikTokVideo/index.tsx
    scene_imports = ", ".join([f"Scene{i+1:02d}" for i in range(len(scenes))])
    scene_sequences = "\n        ".join([
        f'<Sequence from={{SCENE_TIMINGS[{i}].from}} durationInFrames={{SCENE_TIMINGS[{i}].durationInFrames}} name={{SCENE_TIMINGS[{i}].name}}><Scene{i+1:02d} /></Sequence>'
        for i in range(len(scenes))
    ])

    index_tsx = f'''import React from "react";
import {{ Audio, Sequence, staticFile, useCurrentFrame }} from "remotion";
import {{ theme }} from "../theme";
import {{ Captions }} from "./Captions";
import {{ SfxTrack }} from "./SfxTrack";
import {{ GridBackground }} from "../template/GridBackground";
import {{ TOTAL_FRAMES, SCENE_TIMINGS }} from "./timings";
import {{ {scene_imports} }} from "./Scenes";

export const TikTokVideo: React.FC = () => {{
  const frame = useCurrentFrame();
  const progressPercent = (frame / TOTAL_FRAMES) * 100;

  return (
    <div
      style={{{{
        width: 1080,
        height: 1920,
        position: "relative",
        backgroundColor: theme.colors.background,
        color: theme.colors.textPrimary,
        overflow: "hidden",
      }}}}
    >
      <GridBackground />

      {{/* Top Thin Progress Line */}}
      <div
        style={{{{
          position: "absolute",
          top: 0,
          left: 0,
          height: 6,
          width: `${{progressPercent}}%`,
          backgroundColor: theme.colors.accentGold,
          boxShadow: "0 0 16px rgba(255, 204, 0, 0.9)",
          zIndex: 100,
        }}}}
      />

      <div style={{{{ position: "relative", zIndex: 10, width: "100%", height: "100%" }}}}>
        {scene_sequences}
      </div>

      <Captions />
      <SfxTrack />
      <Audio src={{staticFile("{audio_file}")}} />
    </div>
  );
}};
'''
    with open(os.path.join(target_dir, "index.tsx"), "w", encoding="utf-8") as f:
        f.write(index_tsx)

    print(f"📁 Remotion components generated in {target_dir}/ successfully!")
