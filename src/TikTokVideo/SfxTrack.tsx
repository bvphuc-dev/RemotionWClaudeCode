import React from "react";
import { Audio, Sequence, staticFile } from "remotion";
import { SCENE_TIMINGS } from "./timings";

const STICKER_POP_FRAMES = [15, 45, 117, 147, 210, 240, 300, 330, 426, 456, 546, 576, 673, 703, 788, 818, 876, 906, 965, 995];

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
      <Sequence from={SCENE_TIMINGS[8].from + 20} durationInFrames={15}>
        <Audio src={staticFile("sfx/click.wav")} volume={0.4} />
      </Sequence>
      <Sequence from={SCENE_TIMINGS[8].from + 40} durationInFrames={15}>
        <Audio src={staticFile("sfx/click.wav")} volume={0.4} />
      </Sequence>

      {/* 4. Bell chime on Telegram CTA Scene */}
      <Sequence from={SCENE_TIMINGS[9].from + 10} durationInFrames={35}>
        <Audio src={staticFile("sfx/bell.wav")} volume={0.35} />
      </Sequence>
    </>
  );
};
