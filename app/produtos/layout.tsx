import Hero from "@/components/Hero";

export const metadata = {
  title: "Peças para Postos de Combustíveis | Mil Postos",
  description:
    "Venda de peças de alta qualidade para postos de combustíveis. Encontre tudo o que precisa para manter seu posto em funcionamento.",
  openGraph: {
    title: "Peças para Postos de Combustíveis | Mil Postos",
    description:
      "Venda de peças de alta qualidade para postos de combustíveis. Encontre tudo o que precisa para manter seu posto em funcionamento.",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Peças para Postos de Combustíveis",
      },
    ],
  },
};

export default function Produtos({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <Hero
        background="bg-[url('/HEROprodutos.jpg')]"
        subTitle="excelência e qualidade"
        title="Produtos"
      />
      <main className=" bg-background pb-10 text-center justify-center mt-5">
        {children}
      </main>
    </div>
  );
}
