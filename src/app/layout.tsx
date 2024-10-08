import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import 'app/sass/global.sass';

export const metadata: Metadata = {
  title: "Future world",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
