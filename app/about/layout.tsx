import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Bryan Portfolio",
  description: "Freelance full-stack spécialisé SaaS IA & automation. Remote/alternance.",
  openGraph: {
    title: "À propos — Bryan Portfolio",
    description: "Freelance full-stack spécialisé SaaS IA & automation. Remote/alternance.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}