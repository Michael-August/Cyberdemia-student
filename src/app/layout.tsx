import './globals.css';

import { Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import { RootLayoutInner } from '@/components/custom-hooks/useInnerLayout';

import { LayoutProvider } from '../../context/LayoutContext';
import QueryClientProvider from '../../utils/ReactQueryProvider';

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
        <QueryClientProvider>
          <LayoutProvider>
            <Toaster position="top-right" />
            <RootLayoutInner>{children}</RootLayoutInner>
          </LayoutProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
