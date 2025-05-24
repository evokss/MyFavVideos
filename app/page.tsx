import videos from "@/public/videoData";
import VideoGrid from "./components/grid/VideoGrid";

export default function Page() {
  return <VideoGrid videoData={videos} />;
}

export const revalidate = 60;
