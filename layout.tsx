import type { Metadata } from "next"; import "./globals.css";
export const metadata: Metadata = {title:"ACGPN Media Uploader",description:"Upload approved ACGPN campaign images and copy a public media URL for Metricool."};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }