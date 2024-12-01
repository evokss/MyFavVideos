import MainLayout from "./components/MainLayout";
import "./globals.css";
import MenuProvider from "@/context/MenuContex";

export const metadata = {
  title: "My Favorite Videos",
  description:
    "This is React/Next/Tailwind project for displaying Eva's favorite YouTube videos",
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
