"use client";
import { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const menu = {
    toggleMenu: () => {
      console.log(`Menu clicked: ${open}`);
      setOpen((prev) => !prev);
    },
  };

  return (
    <MenuContext.Provider value={{ open, menu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
