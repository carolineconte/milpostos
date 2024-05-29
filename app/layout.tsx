import "@/styles/globals.css";
import "@/styles/EmblaStyle.css";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Whatsbtn from "@/components/Whatsbtn";

export const metadata = {
  title: "Mil Postos",
  description:
    "Especialistas em manutenção de postos de combustíveis e venda de peças de alta qualidade. Confiança e eficiência para o seu negócio.",
  openGraph: {
    title: "Mil Postos",
    description:
      "Especialistas em manutenção de postos de combustíveis e venda de peças de alta qualidade. Confiança e eficiência para o seu negócio.",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Manutenção de Postos de Combustíveis",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="bg-background" lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="">
            <Navbar />
            <main className="">{children}</main>
            <Whatsbtn />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
