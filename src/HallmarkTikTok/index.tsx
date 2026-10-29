import React from "react";
import { Audio, Sequence, staticFile, useCurrentFrame } from "remotion";
import { theme } from "../theme";
import { HallmarkCaptions } from "./Captions";
import { HallmarkSfxTrack } from "./SfxTrack";
import { GridBackground } from "./GridBackground";
import {
  HALLMARK_TOTAL_FRAMES,
  HALLMARK_SCENE_TIMINGS,
} from "./timings";
import {
  Scene01Hook,
  Scene02Problem,
  Scene03Hero,
  Scene04Sloplint,
  Scene05Themes,
  Scene06Typography,
  Scene07Audit,
  Scene08Harness,
  Scene09Browser,
  Scene10Conversion,
  Scene11Free,
  Scene12Install,
  Scene13Save,
  Scene14Telegram,
  Scene15ScrollBio,
} from "./Scenes";

export const HallmarkTikTok: React.FC = () => {
  const frame = useCurrentFrame();

  const progressPercent = (frame / HALLMARK_TOTAL_FRAMES) * 100;

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
      {/* Clean Grid Background with glowing @titechmoingay header */}
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

      {/* 15 Structural Sequences matching Dynamic Audio */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", height: "100%" }}>
        <Sequence from={HALLMARK_SCENE_TIMINGS[0].from} durationInFrames={HALLMARK_SCENE_TIMINGS[0].durationInFrames} name={HALLMARK_SCENE_TIMINGS[0].name}>
          <Scene01Hook />
        </Sequence>

        <Sequence from={HALLMARK_SCENE_TIMINGS[1].from} durationInFrames={HALLMARK_SCENE_TIMINGS[1].durationInFrames} name={HALLMARK_SCENE_TIMINGS[1].name}>
          <Scene02Problem />
        </Sequence>

        <Sequence from={HALLMARK_SCENE_TIMINGS[2].from} durationInFrames={HALLMARK_SCENE_TIMINGS[2].durationInFrames} name={HALLMARK_SCENE_TIMINGS[2].name}>
          <Scene03Hero />
        </Sequence>

        <Sequence from={HALLMARK_SCENE_TIMINGS[3].from} durationInFrames={HALLMARK_SCENE_TIMINGS[3].durationInFrames} name={HALLMARK_SCENE_TIMINGS[3].name}>
          <Scene04Sloplint />
        </Sequence>

        <Sequence from={HALLMARK_SCENE_TIMINGS[4].from} durationInFrames={HALLMARK_SCENE_TIMINGS[4].durationInFrames} name={HALLMARK_SCENE_TIMINGS[4].name}>
          <Scene05Themes />
        </Sequence>

        <Sequence from={HALLMARK_SCENE_TIMINGS[5].from} durationInFrames={HALLMARK_SCENE_TIMINGS[5].durationInFrames} name={HALLMARK_SCENE_TIMINGS[5].name}>
          <Scene06Typography />
        </Sequence>

        <Sequence from={HALLMARK_SCENE_TIMINGS[6].from} durationInFrames={HALLMARK_SCENE_TIMINGS[6].durationInFrames} name={HALLMARK_SCENE_TIMINGS[6].name}>
          <Scene07Audit />
        </Sequence>

        <Sequence from={HALLMARK_SCENE_TIMINGS[7].from} durationInFrames={HALLMARK_SCENE_TIMINGS[7].durationInFrames} name={HALLMARK_SCENE_TIMINGS[7].name}>
          <Scene08Harness />
        </Sequence>

        <Sequence from={HALLMARK_SCENE_TIMINGS[8].from} durationInFrames={HALLMARK_SCENE_TIMINGS[8].durationInFrames} name={HALLMARK_SCENE_TIMINGS[8].name}>
          <Scene09Browser />
        </Sequence>

        <Sequence from={HALLMARK_SCENE_TIMINGS[9].from} durationInFrames={HALLMARK_SCENE_TIMINGS[9].durationInFrames} name={HALLMARK_SCENE_TIMINGS[9].name}>
          <Scene10Conversion />
        </Sequence>

        <Sequence from={HALLMARK_SCENE_TIMINGS[10].from} durationInFrames={HALLMARK_SCENE_TIMINGS[10].durationInFrames} name={HALLMARK_SCENE_TIMINGS[10].name}>
          <Scene11Free />
        </Sequence>

        <Sequence from={HALLMARK_SCENE_TIMINGS[11].from} durationInFrames={HALLMARK_SCENE_TIMINGS[11].durationInFrames} name={HALLMARK_SCENE_TIMINGS[11].name}>
          <Scene12Install />
        </Sequence>

        <Sequence from={HALLMARK_SCENE_TIMINGS[12].from} durationInFrames={HALLMARK_SCENE_TIMINGS[12].durationInFrames} name={HALLMARK_SCENE_TIMINGS[12].name}>
          <Scene13Save />
        </Sequence>

        <Sequence from={HALLMARK_SCENE_TIMINGS[13].from} durationInFrames={HALLMARK_SCENE_TIMINGS[13].durationInFrames} name={HALLMARK_SCENE_TIMINGS[13].name}>
          <Scene14Telegram />
        </Sequence>

        <Sequence from={HALLMARK_SCENE_TIMINGS[14].from} durationInFrames={HALLMARK_SCENE_TIMINGS[14].durationInFrames} name={HALLMARK_SCENE_TIMINGS[14].name}>
          <Scene15ScrollBio />
        </Sequence>
      </div>

      {/* Synchronized Word-by-Word Karaoke Subtitles */}
      <HallmarkCaptions />

      {/* Dynamic Sound Effects (Whoosh, Pop, Click, Bell) */}
      <HallmarkSfxTrack />

      {/* Edge-TTS Vietnamese Voiceover Track */}
      <Audio src={staticFile("hallmark_tiktok_voice.mp3")} />
    </div>
  );
};
