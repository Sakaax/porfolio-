import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bryan — Portfolio",
  description: "Full-stack & IA — circular glass landing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
