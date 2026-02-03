import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto", // optional but recommended
});

export const metadata: Metadata = {
  title: "Khizar Hayat",
  description: "Top Rated Plus Freelance Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
