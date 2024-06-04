import './globals.css';

import { Poppins } from 'next/font/google';

import { Navbar } from '@/components/custom-hooks/useNavbar';
import { Sidebar } from '@/components/custom-hooks/useSidebar';

import { LayoutProvider } from '../../context/LayoutContext';

const inter = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutProvider>
          <Navbar />
          <Sidebar />
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}
