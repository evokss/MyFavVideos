import React from "react";

const HeaderWrapper = ({ children }) => {
  return (
    <div className="bg-white flex justify-between items-center p-4 h-14 mb-4">
      {children}
    </div>
  );
};

export default HeaderWrapper;
