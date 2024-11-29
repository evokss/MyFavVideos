import React from "react";
import MainHeader from "./MainHeader";

const MainLayout = ({ children }) => {
  return (
    <div>
      <MainHeader />
      <h1>Main Layout</h1>
      <hr />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
