import Hero from "@/components/Hero";

export const metadata = {
  title: "Sobre Nós | Mil Postos",
  description:
    "Conheça mais sobre a nossa empresa, nossa missão e os valores que nos guiam na entrega de serviços e produtos de qualidade para postos de combustíveis.",
  openGraph: {
    title: "Sobre Nós | Mil Postos",
    description:
      "Conheça mais sobre a nossa empresa, nossa missão e os valores que nos guiam na entrega de serviços e produtos de qualidade para postos de combustíveis.",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Sobre a Nossa Empresa",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero
        background="bg-[url('/HEROAbout.jpg')]"
        subTitle="Conheca nossa empresa"
        title="Quem Somos"
      />
      <main className=" bg-background pb-10 text-center justify-center mt-5 px-10 md:px-20">
        {children}
      </main>
    </>
  );
}
