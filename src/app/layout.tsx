import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import QueryClientProvider from "../../utils/ReactQueryProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Cyberdemia-student",
  description: "cyberdemia-student",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <QueryClientProvider>
        <html lang="en">
          <body className={poppins.className}>
            {children}
          </body>
        </html>
      </QueryClientProvider>
  );
}
