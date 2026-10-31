import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACGPN Media Uploader",
  description: "Upload approved ACGPN media and create public image links.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
