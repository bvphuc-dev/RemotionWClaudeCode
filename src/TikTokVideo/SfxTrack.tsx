import React from "react";
import { Audio, Sequence, staticFile } from "remotion";
import { SCENE_TIMINGS } from "./timings";

const STICKER_POP_FRAMES = [15, 45, 274, 304, 564, 594, 856, 886, 1141, 1171, 1433, 1463, 1741, 1771, 2020, 2050];

export const SfxTrack: React.FC = () => {
  return (
    <>
      {/* 1. Whoosh transition for scene changes */}
      {SCENE_TIMINGS.slice(1).map((s) => (
        <Sequence
          key={s.id}
          from={s.from}
          durationInFrames={20}
        >
          <Audio src={staticFile("sfx/whoosh.wav")} volume={0.25} />
        </Sequence>
      ))}

      {/* 2. Pop sound synced to each contextual sticker entrance */}
      {STICKER_POP_FRAMES.map((f, idx) => (
        <Sequence
          key={idx}
          from={f}
          durationInFrames={15}
        >
          <Audio src={staticFile("sfx/pop.wav")} volume={0.35} />
        </Sequence>
      ))}

      {/* 3. Terminal typing clicks on Command Scene */}
      <Sequence from={SCENE_TIMINGS[6].from + 20} durationInFrames={15}>
        <Audio src={staticFile("sfx/click.wav")} volume={0.4} />
      </Sequence>
      <Sequence from={SCENE_TIMINGS[6].from + 40} durationInFrames={15}>
        <Audio src={staticFile("sfx/click.wav")} volume={0.4} />
      </Sequence>

      {/* 4. Bell chime on Telegram CTA Scene */}
      <Sequence from={SCENE_TIMINGS[7].from + 10} durationInFrames={35}>
        <Audio src={staticFile("sfx/bell.wav")} volume={0.35} />
      </Sequence>
    </>
  );
};
