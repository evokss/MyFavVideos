import React from 'react';

export interface VideoCardProps {
  thumbnail: string;
  videoLink: string;
  videoTime: string;
  profilePicture: string;
  channelLink: string;
  channelName: string;
  subscribers: string;
  videoTitle: string;
  views: string;
  uploaded: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  thumbnail,
  videoLink,
  videoTime,
  profilePicture,
  channelLink,
  channelName,
  subscribers,
  videoTitle,
  views,
  uploaded,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <a href={videoLink} target="_blank" rel="noopener noreferrer">
        <div className="relative">
          <img
            src={thumbnail}
            alt={videoTitle}
            className="w-full object-cover"
            loading="lazy"
          />
          <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-1 py-0.5 rounded">
            {videoTime}
          </span>
        </div>
      </a>
      <div className="p-4">
        <a href={channelLink} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center gap-2">
            <img
              src={profilePicture}
              alt={`${channelName} profile`}
              className="w-8 h-8 rounded-full"
              loading="lazy"
            />
            <div>
              <h3 className="text-sm font-bold">{channelName}</h3>
              <p className="text-xs text-gray-500">{subscribers}</p>
            </div>
          </div>
        </a>
        <h2 className="mt-2 text-lg font-semibold">
          <a href={videoLink} target="_blank" rel="noopener noreferrer">
            {videoTitle}
          </a>
        </h2>
        <div className="mt-1 text-sm text-gray-600">
          <p>{views}</p>
          <p>{uploaded}</p>
        </div>
      </div>
    </div>
  );
};

VideoCard.displayName = 'VideoCard';

export default VideoCard;
