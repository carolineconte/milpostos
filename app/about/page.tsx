"use client";
import { siteConfig } from "../../config/site";

import CTA from "@/components/CTA";
import Card from "@/components/Card";
import Contador from "@/components/Contador";
import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <>
      <SectionTitle
        subTitle="Há mais de uma década, a Mil Postos tem se estabelecido como a principal empresa de manutenção de postos de combustíveis em Campo Grande, MS. Nosso foco é oferecer serviços de manutenção eficientes e confiáveis, assegurando a operação contínua e segura dos postos de combustíveis. Contamos com uma equipe altamente qualificada e utilizamos tecnologias de ponta para proporcionar soluções inovadoras e sustentáveis. Comprometidos com a excelência e a transparência, buscamos continuamente superar as expectativas de nossos clientes, promovendo práticas responsáveis e seguras para todos os envolvidos."
        title="A Mil Postos"
      />
      <div className="cardContainer mt-5 mb-5 grid grid-cols-1 gap-5 md:px-20 lg:grid-cols-3 lg:px-10 lg:mb-10">
        {siteConfig.aboutCards.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
      <SectionTitle title="Nossos Diferenciais" />
      <div className="grid gap-5 mb-10 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.diferenciais.map((item, i) => (
          <div
            key={i}
            className="text-black rounded text-left px-3 my-3 bg-cardBackground/20 
            md:p-2 md:my-0 "
          >
            <div className="flex items-end gap-3 font-black">
              <p className="text-5xl font-['Kdam'] text-highlight/50 m-0 p-0">{`0${i + 1}.`}</p>
              <h2 className="text-xl">{item.title}</h2>
            </div>
            <p>
              Ouvimos com atenção as necessidades dos nossos clientes e
              proporcionamos um atendimento adequado. Como responsáveis por suas
              instalações, trabalhando com profissionalismo, adaptando as
              exigências do proprietário dentro das normas técnicas.
            </p>
          </div>
        ))}
      </div>
      <SectionTitle title="Nossos Numeros" />
      <div className="grid grid-cols-3 max-w-[600px] last:col-span-3 my-5 md:mx-auto md:mb-10">
        <Contador finalValue={200} text="Postos Atendidos" />
        <Contador finalValue={180} text="Bombas Instaladas" />
        <Contador finalValue={100} text="Postos Abertos" />
        <div className="col-span-3 mt-3 px-5">
          <Contador text="SATISFAÇÃO" value="100%" />
        </div>
      </div>
      <CTA />
    </>
  );
}
