"use client";
import { createContext, useState, useContext, ReactNode, FC } from "react";

interface MenuContextType {
  open: boolean;
  menu: {
    toggleMenu: () => void;
  };
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

interface MenuProviderProps {
  children: ReactNode;
}

const MenuProvider: FC<MenuProviderProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);

  const menu = {
    toggleMenu: () => {
      console.log(`Menu clicked: ${open}`);
      setOpen((prev) => !prev);
    },
  };

  const contextValue: MenuContextType = { open, menu };

  return (
    <MenuContext.Provider value={contextValue}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;

export const useMenuContext = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
};
