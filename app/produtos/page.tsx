import { Button } from "@nextui-org/button";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import ProductCard from "@/components/ProductCard";
import CTA from "@/components/CTA";

export default function Produtos() {
  const categories = [
    "Bombas de Abastecimento",
    "Bicos de Abastecimento",
    "Mangueiras e Acessorios",
    "Breakaway",
  ];

  return (
    <>
      {/* FILTROS */}
      <h3 className="text-dark text-xl text-center my-6 md:my-3">
        O que voce esta procurando?
      </h3>
      <div className="flex flex-wrap gap-2 font-bold justify-center">
        {categories.map((cat, i) => (
          <Button
            key={i}
            as={Link}
            color="primary"
            href={`#${cat}`}
            variant="solid"
          >
            {cat}
          </Button>
        ))}
      </div>
      {/* FINAL FILTROS */}
      <div>
        {siteConfig.produtos.map((cat) => (
          <section
            key={cat.categoria}
            className="flex flex-col mt-10 p-5 scroll-mt-24 bg-cardBackground lg:p-10"
            id={cat.categoria}
          >
            <h1 className="font-extrabold text-primary text-2xl md:text-left md:text-3xl">
              {cat.categoria}
            </h1>
            <div className="w-[90%] -ml-8 bg-primary h-[5px] rounded-full md:w-[55%] lg:-ml-12 lg:w-[35%] lg:mb-10" />
            <div className="grid grid-cols-2 mt-2 py-2 bg-background rounded md:grid-cols-3">
              {cat.produtos.map((item, i) => (
                <ProductCard key={i} {...item} />
              ))}
            </div>
            <Button
              key={cat.categoria}
              as={Link}
              className="self-center mt-5 w-1/2 lg:w-1/3"
              color="primary"
              href={`#${cat}`}
              variant="solid"
            >
              Solicite sua cotaçao
            </Button>
          </section>
        ))}
      </div>
      <CTA
        conteudo="Oferecemos uma ampla gama de peças e acessórios para postos de combustíveis, garantindo que você tenha tudo o que precisa para manter suas operações funcionando sem problemas. Nossos produtos são de alta qualidade, projetados para garantir durabilidade e desempenho superior."
        cta="Entre em contato conosco para obter mais informações e solicitar um orçamento personalizado. 
Estamos aqui para fornecer tudo o que você precisa para manter seu posto funcionando perfeitamente."
      />
    </>
  );
}
