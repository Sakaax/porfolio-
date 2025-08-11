import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Bryan Portfolio",
  description: "Contactez Bryan pour vos projets SaaS IA. Freelance full-stack disponible remote/alternance.",
  openGraph: {
    title: "Contact — Bryan Portfolio",
    description: "Contactez Bryan pour vos projets SaaS IA. Freelance full-stack disponible remote/alternance.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}