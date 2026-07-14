import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyChunav",
  description: "Create, discover, vote, and rank anything — India's collective opinion, in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
