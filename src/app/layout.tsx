import './globals.css';

import { Poppins } from 'next/font/google';

import { RootLayoutInner } from '@/components/custom-hooks/useInnerLayout';

import { LayoutProvider } from '../../context/LayoutContext';

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'CyberDemia',
  description: '',
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <LayoutProvider>
          <RootLayoutInner>{children}</RootLayoutInner>
        </LayoutProvider>
      </body>
    </html>
  );
}
