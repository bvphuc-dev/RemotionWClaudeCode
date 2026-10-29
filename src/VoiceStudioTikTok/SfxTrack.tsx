import React from "react";
import { Audio, Sequence, staticFile } from "remotion";
import { SCENE_TIMINGS } from "../template/constants";

export const SfxTrack: React.FC = () => {
  return (
    <>
      {/* 1. Whoosh transition for every scene change (Scene 2 -> 15) */}
      {SCENE_TIMINGS.slice(1).map((s) => (
        <Sequence
          key={`whoosh-${s.id}`}
          from={s.from}
          durationInFrames={20}
        >
          <Audio src={staticFile("sfx/whoosh.wav")} volume={0.3} />
        </Sequence>
      ))}

      {/* 2. Pop sound for badge / element appearances on key scenes */}
      {[0, 1, 2, 4, 8, 10, 12].map((idx) => {
        const scene = SCENE_TIMINGS[idx];
        if (!scene) return null;
        return (
          <Sequence
            key={`pop-${idx}`}
            from={scene.from + 6}
            durationInFrames={15}
          >
            <Audio src={staticFile("sfx/pop.wav")} volume={0.35} />
          </Sequence>
        );
      })}

      {/* 3. Terminal typing / execution clicks on Scene 12 (index 11) */}
      <Sequence from={SCENE_TIMINGS[11].from + 10} durationInFrames={15}>
        <Audio src={staticFile("sfx/click.wav")} volume={0.4} />
      </Sequence>
      <Sequence from={SCENE_TIMINGS[11].from + 25} durationInFrames={15}>
        <Audio src={staticFile("sfx/click.wav")} volume={0.4} />
      </Sequence>

      {/* 4. Bell / Chime on Telegram CTA Scene 14 (index 13) */}
      <Sequence from={SCENE_TIMINGS[13].from + 8} durationInFrames={35}>
        <Audio src={staticFile("sfx/bell.wav")} volume={0.35} />
      </Sequence>
    </>
  );
};
