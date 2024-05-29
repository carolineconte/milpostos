"use client";

import AtendimentoSection from "@/components/sections/AtendimentoSection";
import CTA from "@/components/CTA";
import ClientsSection from "@/components/sections/ClientsSection";
import FornecedoresSection from "@/components/sections/FornecedoresSection";
import HeroBanner from "@/components/sections/HeroBanner";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <section className="flex flex-col items-center w-full justify-center gap-4 py-8 md:py-10">
      <HeroBanner />
      <ServicesSection />
      <ClientsSection />
      <FornecedoresSection />
      <AtendimentoSection />
      <CTA />
    </section>
  );
}
