import React from "react";
import { Audio, Sequence, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { Captions } from "./Captions";
import { SceneCTA } from "./SceneCTA";
import { SceneHook } from "./SceneHook";
import { SceneProblem } from "./SceneProblem";
import { SceneSolution } from "./SceneSolution";
import { SceneTerminal } from "./SceneTerminal";

export const HallmarkVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Progress percentage (0 to 100%)
  const progressPercent = (frame / durationInFrames) * 100;

  // Background subtle pulsing glow
  const glowX = 50 + Math.sin(frame * 0.02) * 20;
  const glowY = 30 + Math.cos(frame * 0.03) * 15;

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        position: "relative",
        background: "#08090d",
        color: "#ffffff",
        overflow: "hidden",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Background Animated Gradient Mesh */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at ${glowX}% ${glowY}%, rgba(0, 242, 254, 0.18) 0%, transparent 60%),
            radial-gradient(circle at ${100 - glowX}% ${80 - glowY}%, rgba(255, 45, 85, 0.15) 0%, transparent 55%),
            radial-gradient(circle at 50% 50%, rgba(88, 86, 214, 0.12) 0%, transparent 70%)
          `,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Cyberpunk Grid Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Top Video Progress Bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: 10,
          width: `${progressPercent}%`,
          background: "linear-gradient(90deg, #ff3b30, #ff9500, #ffcc00, #00f2fe)",
          boxShadow: "0 0 16px rgba(0, 242, 254, 0.8)",
          zIndex: 100,
        }}
      />

      {/* Scene Sequences */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", height: "100%" }}>
        {/* Scene 1: Hook (0 - 294 frames) */}
        <Sequence from={0} durationInFrames={294} name="Scene 1: Hook">
          <SceneHook />
        </Sequence>

        {/* Scene 2: The Problem (294 - 617 frames) */}
        <Sequence from={294} durationInFrames={323} name="Scene 2: Problem">
          <SceneProblem />
        </Sequence>

        {/* Scene 3: The Solution (617 - 1002 frames) */}
        <Sequence from={617} durationInFrames={385} name="Scene 3: Solution">
          <SceneSolution />
        </Sequence>

        {/* Scene 4: CMD Installation (1002 - 1309 frames) */}
        <Sequence from={1002} durationInFrames={307} name="Scene 4: Terminal CMD">
          <SceneTerminal />
        </Sequence>

        {/* Scene 5: Outro & CTA (1309 - 1545 frames) */}
        <Sequence from={1309} durationInFrames={236} name="Scene 5: Outro CTA">
          <SceneCTA />
        </Sequence>
      </div>

      {/* Synchronized Captions Overlay */}
      <Captions />

      {/* Voiceover Audio Track */}
      <Audio src={staticFile("hallmark_voice.mp3")} />
    </div>
  );
};
