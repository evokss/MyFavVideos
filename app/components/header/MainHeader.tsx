import React from 'react';
import HeaderWrapper from '../header/HeaderWrapper';
import LogoSection from '../header/LogoSection';
import SearchBar from '../header/SearchBar';
import ProfilePicture from '../header/ProfilePicture';

const MainHeader: React.FC = () => {
  return (
    <HeaderWrapper>
      <LogoSection />
      <SearchBar />
      <ProfilePicture />
    </HeaderWrapper>
  );
};

MainHeader.displayName = 'MainHeader';

export default MainHeader;
