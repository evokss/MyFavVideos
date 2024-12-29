import React from "react";
import Image from "next/image";

const ProfilePicture = () => {
  return (
    <div className="basis-1/6 p-2 flex justify-end">
      <a
        href="https://portfolio-website-evokss.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Image
          className="rounded-3xl cursor-pointer"
          src="/profile-pictures/profile-photo.webp"
          alt="A user profile picture"
          quality={95}
          width={35}
          height={35}
        />
      </a>
    </div>
  );
};

export default ProfilePicture;
