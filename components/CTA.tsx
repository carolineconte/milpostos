import { Image } from "@nextui-org/react";
import { Link, Button } from "@nextui-org/react";

interface Props {
  titulo?: string;
  conteudo?: string;
  cta?: string;
}

export default function CTA({
  titulo = "Soluções Completas para a Eficiência e Segurança do Seu Posto",
  conteudo = "Somos especialistas em garantir o funcionamento impecável do seu posto de combustíveis. Nossa equipe altamente qualificada está comprometida com a segurança, a eficiência e a conformidade regulatória, proporcionando tranquilidade e confiança para o seu negócio.",
  cta = " Precisa de Manutenção ou Instalação?",
}: Props) {
  return (
    <section className="py-4 mt-5 max-w-[900px] mx-auto rounded-lg bg-light flex flex-col text-center text-black items-center">
      <Image alt="" src="Logo.png" />
      <h1 className="mx-5 leading-4 md:text-xl md:w-1/2 md:leading-4">
        {titulo}
      </h1>
      <p className="p-3 md:text-lg md:leading-5 md:px-10">{conteudo}</p>
      <h2 className="font-bold text-lg px-3 font-['Kdam'] my-5 md:my-2 md:text-2xl">
        {cta}
      </h2>
      <Button
        as={Link}
        className="w-1/2 rounded-full bg-dark self-center md:text-xl"
        color="primary"
        href="https://github.com/nextui-org/nextui"
        variant="solid"
      >
        Solicite Seu Orçamento
      </Button>
    </section>
  );
}
