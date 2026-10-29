import React from "react";
import { Audio, Sequence, staticFile } from "remotion";
import { HALLMARK_SCENE_TIMINGS } from "./timings";

// Exact moments stickers pop up to match voiceover
const STICKER_POP_FRAMES = [
  42, 148,       // Scene 1
  345, 469,      // Scene 2
  606, 655,      // Scene 3
  808, 937,      // Scene 4
  1047, 1118,    // Scene 5
  1304, 1394,    // Scene 6
  1521, 1618,    // Scene 7
  1809, 1863,    // Scene 8
  2043, 2133,    // Scene 9
  2285, 2354,    // Scene 10
  2482, 2517,    // Scene 11
  2795, 2844,    // Scene 12
  3012, 3073,    // Scene 13
  3274, 3368,    // Scene 14
  3551, 3627,    // Scene 15
];

export const HallmarkSfxTrack: React.FC = () => {
  return (
    <>
      {/* 1. Whoosh transition for scene changes (Scene 2 -> 15) */}
      {HALLMARK_SCENE_TIMINGS.slice(1).map((s) => (
        <Sequence
          key={`whoosh-${s.id}`}
          from={s.from}
          durationInFrames={20}
        >
          <Audio src={staticFile("sfx/whoosh.wav")} volume={0.25} />
        </Sequence>
      ))}

      {/* 2. Pop sound synced EXACTLY to each contextual sticker pop-in */}
      {STICKER_POP_FRAMES.map((f, idx) => (
        <Sequence
          key={`pop-${idx}`}
          from={f}
          durationInFrames={15}
        >
          <Audio src={staticFile("sfx/pop.wav")} volume={0.35} />
        </Sequence>
      ))}

      {/* 3. Terminal typing / execution clicks on Scene 12 */}
      <Sequence from={HALLMARK_SCENE_TIMINGS[11].from + 20} durationInFrames={15}>
        <Audio src={staticFile("sfx/click.wav")} volume={0.4} />
      </Sequence>
      <Sequence from={HALLMARK_SCENE_TIMINGS[11].from + 40} durationInFrames={15}>
        <Audio src={staticFile("sfx/click.wav")} volume={0.4} />
      </Sequence>

      {/* 4. Bell chime on Telegram CTA Scene 14 */}
      <Sequence from={HALLMARK_SCENE_TIMINGS[13].from + 10} durationInFrames={35}>
        <Audio src={staticFile("sfx/bell.wav")} volume={0.35} />
      </Sequence>
    </>
  );
};
