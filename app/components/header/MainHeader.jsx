import React from "react";
import HeaderWrapper from "../header/HeaderWrapper";
import LogoSection from "../header/LogoSection";
import SearchBar from "../header/SearchBar";
import ProfilePicture from "../header/ProfilePicture";

const MainHeader = () => {
  return (
    <HeaderWrapper>
      <LogoSection />
      <SearchBar />
      <ProfilePicture />
    </HeaderWrapper>
  );
};

export default MainHeader;
