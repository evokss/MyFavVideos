import React from "react";
import Image from "next/image";

const ProfilePicture = () => {
  return (
    <div className="basis-1/6 justify-items-end">
      <Image
        className="rounded-3xl"
        src="/images/profile-photo.webp"
        alt="A user profile picture"
        quality={95}
        width={35}
        height={35}
      />
    </div>
  );
};

export default ProfilePicture;
