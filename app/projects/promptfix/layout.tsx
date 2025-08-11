import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets — PromptFix & CodeLens",
  description: "Découvrez mes projets IA : PromptFix (optimiseur de prompts) et CodeLens (analyseur de code automatique).",
  openGraph: {
    title: "Projets — PromptFix & CodeLens",
    description: "Découvrez mes projets IA : PromptFix (optimiseur de prompts) et CodeLens (analyseur de code automatique).",
  },
};

export default function PromptFixLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}