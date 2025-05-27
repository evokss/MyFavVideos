import React from 'react';

interface HeaderWrapperProps {
  children: React.ReactNode;
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
  return (
    <header
      className="bg-white flex justify-between items-center p-4 h-14 sticky top-0 z-50 shadow-md"
      role="banner"
    >
      {children}
    </header>
  );
};

HeaderWrapper.displayName = 'HeaderWrapper';

export default HeaderWrapper;
