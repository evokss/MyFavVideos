import React from "react";
import VideoCard, { VideoCardProps } from "./VideoCard";

interface VideoGridProps {
  videoData: VideoCardProps[];
}

const VideoGrid: React.FC<VideoGridProps> = ({ videoData }) => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videoData.map((video) => (
          <VideoCard
            key={video.videoLink}
            thumbnail={video.thumbnail}
            videoLink={video.videoLink}
            videoTime={video.videoTime}
            profilePicture={video.profilePicture}
            channelLink={video.channelLink}
            channelName={video.channelName}
            subscribers={video.subscribers}
            videoTitle={video.videoTitle}
            views={video.views}
            uploaded={video.uploaded}
          />
        ))}
      </div>
    </div>
  );
};

VideoGrid.displayName = 'VideoGrid';

export default VideoGrid;
