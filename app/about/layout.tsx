import Hero from "@/components/Hero";
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
