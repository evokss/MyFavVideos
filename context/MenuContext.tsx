"use client";
import { createContext, useState, useContext, ReactNode, FC } from "react";

export interface MenuContextType {
  open: boolean;
  toggleMenu: () => void;
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: FC<MenuProviderProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    // Only log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Menu toggled: ${open}`);
    }
    setOpen((prev) => !prev);
  };

  const contextValue: MenuContextType = { open, toggleMenu };

  return (
    <MenuContext.Provider value={contextValue}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
};
