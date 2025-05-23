"use client";

import React, { useContext } from "react";
import MainHeader from "../header/MainHeader";
import Sidebar from "../sidebar/Sidebar";
import { useMenuContext } from "@/context/MenuContext";

const MainLayout = ({ children }) => {
  const { open } = useMenuContext();

  return (
    <div className="bg-gray-100 w-screen min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start">
        <Sidebar />
        <main
          className={`flex-1 ${
            open ? "hidden sm:block ml-60" : "flex-1 ml-0"
          } lg:ml-60`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
