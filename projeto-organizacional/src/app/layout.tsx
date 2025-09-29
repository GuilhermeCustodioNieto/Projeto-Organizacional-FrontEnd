import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
  subsets: ["latin"],
  /* light - normal - medium - semibold - bold */
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Calendar",
  description: "Eu sou o Melhor - Capitão Patria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppinsFont.className}>
    <body>
      {children}
    </body>
  </html>
  );
}
