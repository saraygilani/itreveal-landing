import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://itreveal.com"),
  title: {
    default: "ItReveal",
    template: "%s | ItReveal",
  },
  description:
    "ItReveal helps you simulate cities, compare options, and understand trade-offs before making relocation or lifestyle decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
