import React from "react";

const HeaderWrapper = ({ children }) => {
  return (
    <div className="bg-white flex justify-between items-center p-4 h-14 sticky top-0 z-50 shadow-md">
      {children}
    </div>
  );
};

export default HeaderWrapper;
