import "./index.css";
import { Composition, staticFile } from "remotion";
import {
  CaptionedVideo,
  calculateCaptionedVideoMetadata,
  captionedVideoSchema,
} from "./CaptionedVideo";
import { HallmarkPromo } from "./HallmarkPromo";
import { HallmarkTikTok } from "./HallmarkTikTok";
import { HallmarkVideo } from "./HallmarkVideo";
import { VoiceStudioTikTok } from "./VoiceStudioTikTok";
import { TikTokVideo } from "./TikTokVideo";
import { HALLMARK_TOTAL_FRAMES } from "./HallmarkTikTok/timings";
import {
  VIDEO_FPS,
  VIDEO_WIDTH,
  VIDEO_HEIGHT,
  TOTAL_DURATION_IN_FRAMES,
} from "./template/constants";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TikTokVideo"
        component={TikTokVideo}
        durationInFrames={TOTAL_DURATION_IN_FRAMES}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
      />
      <Composition
        id="VoiceStudioTikTok"
        component={VoiceStudioTikTok}
        durationInFrames={TOTAL_DURATION_IN_FRAMES}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
      />
      <Composition
        id="HallmarkTikTok"
        component={HallmarkTikTok}
        durationInFrames={HALLMARK_TOTAL_FRAMES}
        fps={60}
        width={1080}
        height={1920}
      />
      <Composition
        id="HallmarkPromo"
        component={HallmarkPromo}
        durationInFrames={1268}
        fps={60}
        width={1920}
        height={1080}
      />
      <Composition
        id="HallmarkVideo"
        component={HallmarkVideo}
        durationInFrames={1545}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="CaptionedVideo"
        component={CaptionedVideo}
        calculateMetadata={calculateCaptionedVideoMetadata}
        schema={captionedVideoSchema}
        width={1080}
        height={1920}
        defaultProps={{
          src: staticFile("sample-video.mp4"),
        }}
      />
    </>
  );
};

