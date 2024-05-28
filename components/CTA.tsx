import { Image } from "@nextui-org/react";
import { Link, Button } from "@nextui-org/react";
export default function CTA() {
  return (
    <section className="p-3 mx-3 rounded-lg bg-light flex flex-col text-center text-black items-center">
      <Image alt="" src="Logo.png" />
      <h1 className="mx-5 leading-4">
        Soluções Completas para a Eficiência e Segurança do Seu Posto
      </h1>
      <p className="p-3">
        Somos especialistas em garantir o funcionamento impecável do seu posto
        de combustíveis. Nossa equipe altamente qualificada está comprometida
        com a segurança, a eficiência e a conformidade regulatória,
        proporcionando tranquilidade e confiança para o seu negócio.
      </p>
      <h2 className="font-bold text-xl mt-5">
        Precisa de Manutenção ou Instalação?
      </h2>
      <Button
        as={Link}
        className="w-1/2 rounded-full bg-dark self-center"
        color="primary"
        href="https://github.com/nextui-org/nextui"
        variant="solid"
      >
        Solicite Seu Orçamento
      </Button>
    </section>
  );
}
