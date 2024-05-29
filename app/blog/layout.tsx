import Hero from "@/components/Hero";

export const metadata = {
  title: "Blog | Mil Postos",
  description:
    "Dicas e novidades sobre manutenção de postos de combustíveis e peças de reposição. Fique por dentro das últimas tendências do setor.",
  openGraph: {
    title: "Blog | Mil Postos",
    description:
      "Dicas e novidades sobre manutenção de postos de combustíveis e peças de reposição. Fique por dentro das últimas tendências do setor.",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Blog sobre Manutenção de Postos",
      },
    ],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero
        background="bg-[url('/HEROAbout.jpg')]"
        subTitle="Tudo sobre postos de combustíveis"
        title="BLOG MIL POSTOS"
      />
      <main className=" text-black bg-background pb-10 text-center justify-center mt-5 px-2">
        {children}
      </main>
    </>
  );
}
