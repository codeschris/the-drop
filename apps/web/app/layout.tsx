import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "[the drop.] is coming to a browser near you",
  description: "A project created by mwml and Josh, The Curator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
