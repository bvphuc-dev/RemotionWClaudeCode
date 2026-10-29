import React from "react";
import { Audio, Sequence, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
import { Captions } from "./Captions";
import { GridBackground } from "./GridBackground";
import { Scene1Hook } from "./Scene1Hook";
import { Scene2Terminal } from "./Scene2Terminal";
import { Scene3Architecture } from "./Scene3Architecture";
import { Scene4CTA } from "./Scene4CTA";

export const HallmarkPromo: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Thin technical progress indicator
  const progressPercent = (frame / durationInFrames) * 100;

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        position: "relative",
        backgroundColor: theme.colors.background,
        color: theme.colors.textPrimary,
        overflow: "hidden",
      }}
    >
      {/* Structural Exposed Grid */}
      <GridBackground />

      {/* Top Thin Progress Line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: 2,
          width: `${progressPercent}%`,
          backgroundColor: theme.colors.accentPrimary,
          zIndex: 100,
        }}
      />

      {/* 4 Structural Sequences */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", height: "100%" }}>
        {/* Scene 1: Hook & Repo Identity (0s - 3.8s / 227 frames) */}
        <Sequence from={0} durationInFrames={227} name="01 // Hook & Identity">
          <Scene1Hook />
        </Sequence>

        {/* Scene 2: Terminal & Installation (3.8s - 11.5s / 466 frames) */}
        <Sequence from={227} durationInFrames={466} name="02 // Terminal Installation">
          <Scene2Terminal />
        </Sequence>

        {/* Scene 3: Three-Tier Gates (11.5s - 17.6s / 363 frames) */}
        <Sequence from={693} durationInFrames={363} name="03 // Architecture & Sloplint">
          <Scene3Architecture />
        </Sequence>

        {/* Scene 4: Call to Action (17.6s - 21.1s / 212 frames) */}
        <Sequence from={1056} durationInFrames={212} name="04 // Call to Action">
          <Scene4CTA />
        </Sequence>
      </div>

      {/* Synchronized Refined Captions */}
      <Captions />

      {/* Voiceover Track (1.3x speed, 150% volume) */}
      <Audio src={staticFile("hallmark_promo_voice.mp3")} />
    </div>
  );
};
