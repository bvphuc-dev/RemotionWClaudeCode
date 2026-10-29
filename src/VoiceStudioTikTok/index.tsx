import React from "react";
import { Audio, Sequence, staticFile, useCurrentFrame } from "remotion";
import { theme } from "../theme";
import { Captions } from "./Captions";
import { SfxTrack } from "./SfxTrack";
import { GridBackground } from "../HallmarkTikTok/GridBackground";
import {
  VIDEO_WIDTH,
  VIDEO_HEIGHT,
  TOTAL_DURATION_IN_FRAMES,
  SCENE_TIMINGS,
} from "../template/constants";
import {
  Frame01Hook,
  Frame02Solution,
  Frame03Hero,
  Frame04Desktop,
  Frame05Clone,
  Frame06Languages,
  Frame07Dubbing,
  Frame08Audiobook,
  Frame09Models,
  Frame10Offline,
  Frame11AgentAPI,
  Frame12Terminal,
  Frame13Recap,
  Frame14Telegram,
  Frame15ScrollBio,
} from "./Scenes";

export const VoiceStudioTikTok: React.FC = () => {
  const frame = useCurrentFrame();

  // Progress line percentage locked strictly to TOTAL_DURATION_IN_FRAMES
  const progressPercent = (frame / TOTAL_DURATION_IN_FRAMES) * 100;

  return (
    <div
      style={{
        width: VIDEO_WIDTH,
        height: VIDEO_HEIGHT,
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

      {/* 15 Structural Sequences: Exactly 15 frames x 240 frames = 3600 frames locked in constants.ts */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", height: "100%" }}>
        {/* Frame 01 (0s - 4s / 0 - 240 frames) */}
        <Sequence
          from={SCENE_TIMINGS[0].from}
          durationInFrames={SCENE_TIMINGS[0].durationInFrames}
          name={SCENE_TIMINGS[0].name}
        >
          <Frame01Hook />
        </Sequence>

        {/* Frame 02 (4s - 8s / 240 - 480 frames) */}
        <Sequence
          from={SCENE_TIMINGS[1].from}
          durationInFrames={SCENE_TIMINGS[1].durationInFrames}
          name={SCENE_TIMINGS[1].name}
        >
          <Frame02Solution />
        </Sequence>

        {/* Frame 03 (8s - 12s / 480 - 720 frames) */}
        <Sequence
          from={SCENE_TIMINGS[2].from}
          durationInFrames={SCENE_TIMINGS[2].durationInFrames}
          name={SCENE_TIMINGS[2].name}
        >
          <Frame03Hero />
        </Sequence>

        {/* Frame 04 (12s - 16s / 720 - 960 frames) */}
        <Sequence
          from={SCENE_TIMINGS[3].from}
          durationInFrames={SCENE_TIMINGS[3].durationInFrames}
          name={SCENE_TIMINGS[3].name}
        >
          <Frame04Desktop />
        </Sequence>

        {/* Frame 05 (16s - 20s / 960 - 1200 frames) */}
        <Sequence
          from={SCENE_TIMINGS[4].from}
          durationInFrames={SCENE_TIMINGS[4].durationInFrames}
          name={SCENE_TIMINGS[4].name}
        >
          <Frame05Clone />
        </Sequence>

        {/* Frame 06 (20s - 24s / 1200 - 1440 frames) */}
        <Sequence
          from={SCENE_TIMINGS[5].from}
          durationInFrames={SCENE_TIMINGS[5].durationInFrames}
          name={SCENE_TIMINGS[5].name}
        >
          <Frame06Languages />
        </Sequence>

        {/* Frame 07 (24s - 28s / 1440 - 1680 frames) */}
        <Sequence
          from={SCENE_TIMINGS[6].from}
          durationInFrames={SCENE_TIMINGS[6].durationInFrames}
          name={SCENE_TIMINGS[6].name}
        >
          <Frame07Dubbing />
        </Sequence>

        {/* Frame 08 (28s - 32s / 1680 - 1920 frames) */}
        <Sequence
          from={SCENE_TIMINGS[7].from}
          durationInFrames={SCENE_TIMINGS[7].durationInFrames}
          name={SCENE_TIMINGS[7].name}
        >
          <Frame08Audiobook />
        </Sequence>

        {/* Frame 09 (32s - 36s / 1920 - 2160 frames) */}
        <Sequence
          from={SCENE_TIMINGS[8].from}
          durationInFrames={SCENE_TIMINGS[8].durationInFrames}
          name={SCENE_TIMINGS[8].name}
        >
          <Frame09Models />
        </Sequence>

        {/* Frame 10 (36s - 40s / 2160 - 2400 frames) */}
        <Sequence
          from={SCENE_TIMINGS[9].from}
          durationInFrames={SCENE_TIMINGS[9].durationInFrames}
          name={SCENE_TIMINGS[9].name}
        >
          <Frame10Offline />
        </Sequence>

        {/* Frame 11 (40s - 44s / 2400 - 2640 frames) */}
        <Sequence
          from={SCENE_TIMINGS[10].from}
          durationInFrames={SCENE_TIMINGS[10].durationInFrames}
          name={SCENE_TIMINGS[10].name}
        >
          <Frame11AgentAPI />
        </Sequence>

        {/* Frame 12 (44s - 48s / 2640 - 2880 frames) */}
        <Sequence
          from={SCENE_TIMINGS[11].from}
          durationInFrames={SCENE_TIMINGS[11].durationInFrames}
          name={SCENE_TIMINGS[11].name}
        >
          <Frame12Terminal />
        </Sequence>

        {/* Frame 13 (48s - 52s / 2880 - 3120 frames) */}
        <Sequence
          from={SCENE_TIMINGS[12].from}
          durationInFrames={SCENE_TIMINGS[12].durationInFrames}
          name={SCENE_TIMINGS[12].name}
        >
          <Frame13Recap />
        </Sequence>

        {/* Frame 14 (52s - 56s / 3120 - 3360 frames) */}
        <Sequence
          from={SCENE_TIMINGS[13].from}
          durationInFrames={SCENE_TIMINGS[13].durationInFrames}
          name={SCENE_TIMINGS[13].name}
        >
          <Frame14Telegram />
        </Sequence>

        {/* Frame 15 (56s - 60s / 3360 - 3600 frames) */}
        <Sequence
          from={SCENE_TIMINGS[14].from}
          durationInFrames={SCENE_TIMINGS[14].durationInFrames}
          name={SCENE_TIMINGS[14].name}
        >
          <Frame15ScrollBio />
        </Sequence>
      </div>

      {/* Synchronized Word-by-Word Karaoke Subtitles */}
      <Captions />

      {/* Dynamic Sound Effects (Whoosh, Pop, Click, Bell) */}
      <SfxTrack />

      {/* Dynamic Studio Quality Edge-TTS Vietnamese Voiceover Track */}
      <Audio src={staticFile("voicestudio_vietnamese_voice.mp3")} />
    </div>
  );
};
