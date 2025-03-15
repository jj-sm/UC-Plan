import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "UC-Plan",
  description: "Planea tus ramos con esta herramienta de estudiantes para estudiantes",
  keywords: [
    "PUC",
    "Pontificia Universidad Católica de Chile",
    "Ramos",
    "Planeador",
    "Planner",
    "Cursos",
    "Horarios",
    "Planeación de Cursos",
    "Degree Planning",
    "Pathway",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${GeistSans.variable}`}>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
