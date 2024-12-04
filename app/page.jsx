import path from "path";
import fs from "fs/promises";
import VideoGrid from "./components/grid/VideoGrid";

export default async function Page() {
  const filePath = path.join(process.cwd(), "public", "videoData.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const videoData = JSON.parse(fileContents);

  return <VideoGrid videoData={videoData} />;
}

export const revalidate = 60;
