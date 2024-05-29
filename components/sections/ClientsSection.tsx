import EmblaCarousel from "../EmblaCarousel";
import SectionTitle from "../SectionTitle";

export default function ClientsSection() {
  const slides = ["/clients1.png", "/clients1.png", "/clients1.png"];

  return (
    <section className="mt-10 bg-light/30 p-5">
      <SectionTitle
        subTitle="Nosso maior patrimônio são nossos cliente por isso que entregamos qualidade e excelência."
        title="Nossos Clientes"
      />
      <EmblaCarousel img={true} slides={slides} />
    </section>
  );
}
