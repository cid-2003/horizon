// Type fourni par Next.js pour décrire les métadonnées de la page
import type { Metadata } from "next";
// On charge nos styles globaux pour tout le site
import "./globals.css";

// Titres et descriptions utilisés par les navigateurs et les moteurs de recherche
export const metadata: Metadata = {
  title: "Horizon",
  description: "Blog personnel de Cid",
};

// Le layout racine entoure toutes les pages du site
export default function RootLayout({
  children, // le contenu de la page affiché
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // lang="fr" aide les lecteurs d'écran et la traduction automatique
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
