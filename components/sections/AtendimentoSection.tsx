import { Image } from "@nextui-org/react";

import SectionTitle from "../SectionTitle";

export default function AtendimentoSection() {
  return (
    <section className="p-3">
      <SectionTitle
        subTitle="nossa equipe qualificada está pronta para atender todas as suas necessidades com qualidade e garantia."
        title="Atendemos em todo Mato Grosso do Sul"
      />
      <div>
        <ul className="p-10 text-dark list-disc text-2xl">
          <li>Postos de Combustíveis</li>
          <li>Aeroportos</li>
          <li>Bases</li>
          <li>Indústrias</li>
        </ul>
        <Image alt="" src="atendimento.png" />
      </div>
    </section>
  );
}
