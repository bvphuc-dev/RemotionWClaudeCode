import React from "react";
import { Audio, Sequence, staticFile, useCurrentFrame } from "remotion";
import { theme } from "../theme";
import { Captions } from "./Captions";
import { SfxTrack } from "./SfxTrack";
import { GridBackground } from "../template/GridBackground";
import { TOTAL_FRAMES, SCENE_TIMINGS } from "./timings";
import { Scene01, Scene02, Scene03, Scene04, Scene05, Scene06, Scene07, Scene08 } from "./Scenes";

export const TikTokVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const progressPercent = (frame / TOTAL_FRAMES) * 100;

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        position: "relative",
        backgroundColor: theme.colors.background,
        color: theme.colors.textPrimary,
        overflow: "hidden",
      }}
    >
      <GridBackground />

      {/* Top Thin Progress Line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: 6,
          width: `${progressPercent}%`,
          backgroundColor: theme.colors.accentGold,
          boxShadow: "0 0 16px rgba(255, 204, 0, 0.9)",
          zIndex: 100,
        }}
      />

      <div style={{ position: "relative", zIndex: 10, width: "100%", height: "100%" }}>
        <Sequence from={SCENE_TIMINGS[0].from} durationInFrames={SCENE_TIMINGS[0].durationInFrames} name={SCENE_TIMINGS[0].name}><Scene01 /></Sequence>
        <Sequence from={SCENE_TIMINGS[1].from} durationInFrames={SCENE_TIMINGS[1].durationInFrames} name={SCENE_TIMINGS[1].name}><Scene02 /></Sequence>
        <Sequence from={SCENE_TIMINGS[2].from} durationInFrames={SCENE_TIMINGS[2].durationInFrames} name={SCENE_TIMINGS[2].name}><Scene03 /></Sequence>
        <Sequence from={SCENE_TIMINGS[3].from} durationInFrames={SCENE_TIMINGS[3].durationInFrames} name={SCENE_TIMINGS[3].name}><Scene04 /></Sequence>
        <Sequence from={SCENE_TIMINGS[4].from} durationInFrames={SCENE_TIMINGS[4].durationInFrames} name={SCENE_TIMINGS[4].name}><Scene05 /></Sequence>
        <Sequence from={SCENE_TIMINGS[5].from} durationInFrames={SCENE_TIMINGS[5].durationInFrames} name={SCENE_TIMINGS[5].name}><Scene06 /></Sequence>
        <Sequence from={SCENE_TIMINGS[6].from} durationInFrames={SCENE_TIMINGS[6].durationInFrames} name={SCENE_TIMINGS[6].name}><Scene07 /></Sequence>
        <Sequence from={SCENE_TIMINGS[7].from} durationInFrames={SCENE_TIMINGS[7].durationInFrames} name={SCENE_TIMINGS[7].name}><Scene08 /></Sequence>
      </div>

      <Captions />
      <SfxTrack />
      <Audio src={staticFile("current_voice.mp3")} />
    </div>
  );
};
