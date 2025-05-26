import React from 'react';
import Image from 'next/image';

interface ProfilePictureProps {}

const ProfilePicture: React.FC<ProfilePictureProps> = () => {
  const PORTFOLIO_URL = 'https://portfolio-website-evokss.vercel.app/';
  const PROFILE_IMAGE_SRC = '/profile-pictures/profile-photo.webp';
  const IMAGE_ALT = 'A user profile picture';
  const IMAGE_SIZE = 35;

  return (
    <div className="basis-1/6 p-2 flex justify-end">
      <a
        href={PORTFOLIO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
        aria-label="Visit portfolio website"
      >
        <Image
          className="rounded-3xl cursor-pointer"
          src={PROFILE_IMAGE_SRC}
          alt={IMAGE_ALT}
          quality={95}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          priority={true}
          loading="lazy"
        />
      </a>
    </div>
  );
};

ProfilePicture.displayName = 'ProfilePicture';

export default ProfilePicture;
