import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Abhyudaya CMS | Modern Content Management",
    template: "%s | Abhyudaya CMS",
  },
  description:
    "Abhyudaya CMS delivers modern content management solutions—custom CMS development, websites, consulting, and support for growing businesses.",
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
