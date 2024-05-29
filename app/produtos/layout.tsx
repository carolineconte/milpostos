import Hero from "@/components/Hero";
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
