import Card from "../Card";
import EmblaCarousel from "../EmblaCarousel";
import SectionTitle from "../SectionTitle";

import { siteConfig } from "@/config/site";
export default function ServicesSection() {
  return (
    <section className="px-3 mt-16 md:mt-20">
      <SectionTitle
        subTitle="De tanques a bombas de combustível, nossa equipe qualificada está pronta
        para atender todas as suas necessidades com qualidade e garantia."
        title="Soluções para Postos de Combustíveis"
      />
      <div className="cardContainer CardServices mt-5 px-2 grid grid-cols-1 gap-5">
        <EmblaCarousel
          img={false}
          slides={siteConfig.servicesCards.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        />
      </div>
    </section>
  );
}
