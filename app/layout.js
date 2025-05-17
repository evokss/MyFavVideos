import MainLayout from "./components/layout/MainLayout";
import "./styles/globals.css";
import MenuProvider from "@/context/MenuContext";

export const metadata = {
  title: "My Favorite Videos",
  description:
    "This is React/Next/Tailwind project for displaying Eva's favorite YouTube videos",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MenuProvider>
          <MainLayout>{children}</MainLayout>
        </MenuProvider>
      </body>
    </html>
  );
}
