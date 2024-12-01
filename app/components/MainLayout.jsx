"use client";

import React, { useContext } from "react";
import MainHeader from "./MainHeader";
import Sidebar from "./layout/Sidebar";
import { MenuContext } from "@/context/MenuContex";

const MainLayout = ({ children }) => {
  const { open } = useContext(MenuContext);

  return (
    <div className="bg-gray-100 w-screen min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start">
        <Sidebar />
        <main className={`flex-1 ${open ? "hidden sm:block" : "flex-1"}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
