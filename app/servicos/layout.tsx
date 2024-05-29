import Hero from "@/components/Hero";

export default function DocsLayout({
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
