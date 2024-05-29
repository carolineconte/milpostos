import type { Metadata } from "next";

import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Serviços de Manutenção para Postos de Combustíveis | Mil Postos",
  description:
    "Oferecemos serviços completos de manutenção para postos de combustíveis, garantindo segurança e eficiência para o seu negócio.",
  openGraph: {
    title: "Serviços de Manutenção para Postos de Combustíveis | Mil Postos",
    description:
      "Oferecemos serviços completos de manutenção para postos de combustíveis, garantindo segurança e eficiência para o seu negócio.",
    images: [
      {
        url: "/Logo.jpg",
        width: 1200,
        height: 630,
        alt: "Serviços de Manutenção",
      },
    ],
  },
};

export default function ServicesPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero
        background="bg-[url('/HEROServicos.jpg')]"
        subTitle="Instalações e Manutenção para postos de combustíveis, entregamos 
          excelência e qualidade dos nossos serviços para os nossos clientes "
        title="Como podemos ajudar?"
      />
      <main className=" bg-background pb-10 text-center justify-center mt-5 px-2">
        {children}
      </main>
    </>
  );
}
