import Hero from "@/components/Hero";
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
