import MainLayout from "./components/layout/MainLayout";
import "./styles/globals.css";
import MenuProvider from "@/context/MenuContext";

export const metadata = {
  title: "My Favorite Videos",
  description:
    "Check out a handpicked collection of YouTube videos in this clean, easy-to-use app built with TypeScript, React, Next.js, and Tailwind CSS.",
  icons: {
    icon: "/favicon.png",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
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
