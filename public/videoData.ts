/**
 * Represents a YouTube video with metadata.
 */
export interface Video {
  /**
   * Path to the video thumbnail image (relative to public folder).
   * Example: "/thumbnails/thumbnail-1.webp"
   */
  readonly thumbnail: string;

  /**
   * URL to the YouTube video.
   * Example: "https://www.youtube.com/watch?v=Ue4mNQbj9V4"
   */
  readonly videoLink: string;

  /**
   * Duration of the video in MM:SS or HH:MM:SS format.
   */
  readonly videoTime: `${number}:${number}` | `${number}:${number}:${number}`;

  /**
   * Path to the channel's profile picture (relative to public folder).
   * Example: "/profile-pictures/channel-1.jpg"
   */
  readonly profilePicture: string;

  /**
   * URL to the YouTube channel.
   * Example: "https://www.youtube.com/@DeltaSniperZRR"
   */
  readonly channelLink: string;

  /**
   * Name of the YouTube channel.
   */
  readonly channelName: string;

  /**
   * Number of subscribers, formatted as a string (e.g., "136K subscribers").
   */
  readonly subscribers: string;

  /**
   * Title of the video.
   */
  readonly videoTitle: string;

  /**
   * Number of views, formatted as a string (e.g., "1.7M views").
   */
  readonly views: string;

  /**
   * Time since the video was uploaded (e.g., "2 years ago").
   */
  readonly uploaded: string;
}

const videos: Video[] = [
  {
    thumbnail: "/thumbnails/thumbnail-1.webp",
    videoLink: "https://www.youtube.com/watch?v=Ue4mNQbj9V4&ab_channel=FlyingDutchman",
    videoTime: "7:03",
    profilePicture: "/profile-pictures/channel-1.jpg",
    channelLink: "https://www.youtube.com/@DeltaSniperZRR",
    channelName: "Flying Dutchman",
    subscribers: "136K subscribers",
    videoTitle: "The Doors - Riders On The Storm 1971 | Unofficial Music Video",
    views: "1.7M views",
    uploaded: "2 years ago",
  },
  {
    thumbnail: "/thumbnails/thumbnail-2.webp",
    videoLink: "https://www.youtube.com/watch?v=EFkyxzJtiv4&ab_channel=Aperture",
    videoTime: "12:51",
    profilePicture: "/profile-pictures/channel-2.jpg",
    channelLink: "https://www.youtube.com/@ApertureThinking",
    channelName: "Aperture",
    subscribers: "2.24M subscribers",
    videoTitle: "Stoicism: Become Undefeatable",
    views: "10M views",
    uploaded: "2 years ago",
  },
  {
    thumbnail: "/thumbnails/thumbnail-3.webp",
    videoLink: "https://www.youtube.com/watch?v=-IlG32Pb43g&ab_channel=Einzelg%C3%A4nger",
    videoTime: "11:44",
    profilePicture: "/profile-pictures/channel-3.jpg",
    channelLink: "https://www.youtube.com/@Einzelganger",
    channelName: "Einzelgänger",
    subscribers: "2.2M subscribers",
    videoTitle: "The Harder You Try, The Worse It Gets | Law of Reversed Effort",
    views: "4M views",
    uploaded: "1 year ago",
  },
  {
    thumbnail: "/thumbnails/thumbnail-4.webp",
    videoLink: "https://www.youtube.com/watch?v=apbSsILLh28",
    videoTime: "19:07",
    profilePicture: "/profile-pictures/channel-4.jpg",
    channelLink: "https://www.youtube.com/@TED",
    channelName: "TED",
    subscribers: "24.8M subscribers",
    videoTitle: "What really matters at the end of life | BJ Miller | TED",
    views: "12M views",
    uploaded: "8 years ago",
  },
  {
    thumbnail: "/thumbnails/thumbnail-5.webp",
    videoLink: "https://www.youtube.com/watch?v=wwSzpaTHyS8&t=2s&ab_channel=Kurzgesagt%E2%80%93InaNutshell",
    videoTime: "12:34",
    profilePicture: "/profile-pictures/channel-5.jpg",
    channelLink: "https://www.youtube.com/@kurzgesagt",
    channelName: "Kurzgesagt - In a Nutshell",
    subscribers: "22.2M subscribers",
    videoTitle: "Did The Future Already Happen? - The Paradox of Time",
    views: "7.6M views",
    uploaded: "2 months ago",
  },
  {
    thumbnail: "/thumbnails/thumbnail-6.webp",
    videoLink: "https://www.youtube.com/watch?v=l9DCxsz8iT8&t=1s&ab_channel=LofiAilurophile",
    videoTime: "11:54:58",
    profilePicture: "/profile-pictures/channel-6.jpg",
    channelLink: "https://www.youtube.com/@LofiAilurophile-lq4oi",
    channelName: "Lofi Ailurophile",
    subscribers: "22K subscribers",
    videoTitle: "Work & cat 💻 Listen to it to escape from a hard day 🐾 Relax/study/work [ Lofi Hip Hop ]",
    views: "184K views",
    uploaded: "Streamed 5 months ago",
  },
  {
    thumbnail: "/thumbnails/thumbnail-7.webp",
    videoLink: "https://www.youtube.com/watch?v=x1KDBuqviqg&ab_channel=Nerdstalgic",
    videoTime: "9:19",
    profilePicture: "/profile-pictures/channel-7.jpg",
    channelLink: "https://www.youtube.com/@Nerdstalgic",
    channelName: "Nerdstalgic",
    subscribers: "1.39M subscribers",
    videoTitle: "How Breaking Bad Pulled Off An Impossibly Perfect Finale",
    views: "1.8M views",
    uploaded: "1 year ago",
  },
  {
    thumbnail: "/thumbnails/thumbnail-8.webp",
    videoLink: "https://www.youtube.com/watch?v=g1GSXZOnKCc",
    videoTime: "9:03",
    profilePicture: "/profile-pictures/channel-8.jpg",
    channelLink: "https://www.youtube.com/@AncientWisdomModernLife",
    channelName: "Ancient Wisdom, Modern Life",
    subscribers: "118 subscribers",
    videoTitle: "The Unconscious: The Key to Understanding Your Problems",
    views: "512 views",
    uploaded: "4 days ago",
  },
  {
    thumbnail: "/thumbnails/thumbnail-9.webp",
    videoLink: "https://www.youtube.com/watch?v=3zVKdfnKok8",
    videoTime: "1:00:05",
    profilePicture: "/profile-pictures/channel-9.jpg",
    channelLink: "https://www.youtube.com/@BuddhasLounge",
    channelName: "Buddha's Lounge",
    subscribers: "1.53M subscribers",
    videoTitle: "You were born with wings | RUMI Spiritual Music",
    views: "562K views",
    uploaded: "1 year ago",
  },
  {
    thumbnail: "/thumbnails/thumbnail-10.webp",
    videoLink: "https://www.youtube.com/watch?v=DxL2HoqLbyA&t=588s",
    videoTime: "27:14",
    profilePicture: "/profile-pictures/channel-10.jpg",
    channelLink: "https://www.youtube.com/@veritasium",
    channelName: "Veritasium",
    subscribers: "16M subscribers",
    videoTitle: "The Most Misunderstood Concept in Physics",
    views: "14M views",
    uploaded: "1 year ago",
  },
  {
    thumbnail: "/thumbnails/thumbnail-11.webp",
    videoLink: "https://www.youtube.com/watch?v=uBmbI8dzc-M&t=1s&ab_channel=AmbientWorlds",
    videoTime: "6:00:00",
    profilePicture: "/profile-pictures/channel-11.jpg",
    channelLink: "https://www.youtube.com/@AmbientWorlds",
    channelName: "Ambient Worlds",
    subscribers: "120K subscribers",
    videoTitle: "Epic Fantasy Music to Get You Inspired | Ambient Worlds",
    views: "75K views",
    uploaded: "3 months ago",
  },
  {
    thumbnail: "/thumbnails/thumbnail-12.webp",
    videoLink: "https://www.youtube.com/watch?v=kYX1XEVvvXU&ab_channel=JafetMeza",
    videoTime: "4:27",
    profilePicture: "/profile-pictures/channel-12.jpg",
    channelLink: "https://www.youtube.com/@samuelkimmusic",
    channelName: "Samuel Kim Music",
    subscribers: "2M subscribers",
    videoTitle: "Agni Kai - Avatar The Last Airbender | EPIC VERSION",
    views: "6.3M views",
    uploaded: "4 years ago",
  },
];

export default videos;
