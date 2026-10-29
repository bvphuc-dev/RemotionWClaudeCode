import timingsJson from "../../hallmark_scene_timings.json";

export interface SceneTiming {
  id: number;
  name: string;
  from: number;
  to: number;
  durationInFrames: number;
  fromSec: number;
  toSec: number;
  type: string;
  speechDuration: number;
}

export const HALLMARK_TOTAL_FRAMES = timingsJson.totalFrames;
export const HALLMARK_TOTAL_SECONDS = timingsJson.totalSeconds;
export const HALLMARK_SCENE_TIMINGS: readonly SceneTiming[] = timingsJson.scenes as SceneTiming[];
