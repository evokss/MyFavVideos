import { ReactNode } from 'react';
import { Metadata } from 'next';
import MainLayout from '@/app/components/layout/MainLayout';
import { MenuProvider } from '@/context/MenuContext';
import './styles/globals.css';

export const metadata: Metadata = {
  title: 'My Favorite Videos',
  description:
    'A curated collection of YouTube videos in a clean, user-friendly app built with TypeScript, React, Next.js, and Tailwind CSS.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'My Favorite Videos',
    description: 'A curated collection of YouTube videos.',
    url: 'https://my-fav-videos.vercel.app/',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

/**
 * RootLayout component that wraps the entire application with necessary providers
 * and layout components.
 * @param props - The component props
 * @param props.children - The child components to render within the layout
 * @returns The root layout with context providers and main layout
 */
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <MenuProvider>
          <MainLayout>{children}</MainLayout>
        </MenuProvider>
      </body>
    </html>
  );
};

export default RootLayout;
