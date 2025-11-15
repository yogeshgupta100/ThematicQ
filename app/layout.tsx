import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ThematicQ - Landing Page",
  description: "Modern landing page with hero carousel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
