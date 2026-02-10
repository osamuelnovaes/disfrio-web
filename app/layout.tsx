import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Disfrio - Distribuidora de Ar Condicionado e Peças",
  description: "Distribuidora de Ar Condicionado e Peças",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${roboto.variable}`} suppressHydrationWarning>
      <body className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-body min-h-screen transition-colors duration-300" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
