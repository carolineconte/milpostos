import EmblaCarousel from "../EmblaCarousel";
import SectionTitle from "../SectionTitle";

export default function FornecedoresSection() {
  const slides = [
    "Fornecedores1.png",
    "Fornecedores1.png",
    "Fornecedores1.png",
  ];

  return (
    <section className="mt-5 bg-light/30 p-5">
      <SectionTitle
        subTitle="Trabalhamos com as melhores soluções para postos de combustíveis  do mercado."
        title="Nossos Parceiros"
      />
      <EmblaCarousel img={true} slides={slides} />
    </section>
  );
}
