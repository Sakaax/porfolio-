import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stack & Outils — Bryan Portfolio",
  description: "Technologies production-ready : Next.js, TypeScript, Supabase, IA",
  openGraph: {
    title: "Stack & Outils — Bryan Portfolio", 
    description: "Technologies production-ready : Next.js, TypeScript, Supabase, IA",
  },
};

export default function StackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}