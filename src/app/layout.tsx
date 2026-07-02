import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emily Jao — Cybersecurity Portfolio",
  description: "Cybersecurity student",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
