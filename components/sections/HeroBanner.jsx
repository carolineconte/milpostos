import Contador from "../Contador";

export default function HeroBanner() {
  return (
    <div className="heroBanner pb-10 mt-12">
      <h1
        className="p-1 text-[2.5em] leading-10 font-bold
      md:text-[3em]"
      >
        Instalações e Manutenções <br />
        para Postos de Combustíveis
      </h1>
      <h2
        className="text-[1em] px-1 font-[200] leading-4
      md:text-[1.2em] md:w-3/4 md:leading-5"
      >
        Somos especialistas em instalação e manutenção de postos de
        combustíveis, oferecemos soluções completas e personalizadas para
        garantir que seu posto opere com segurança e eficiência máxima.
      </h2>
      <div className="flex gap-5 mt-5 md:text-[1.2em]">
        <button className="btn btn-primary" type="button">
          Entre em contato
        </button>
        <button className="btn btn-outline-primary" type="button">
          Saiba Mais
        </button>
      </div>
      <div className="containerContadores">
        <Contador finalValue={200} text="Postos Atendidos" />
        <Contador finalValue={180} text="Bombas Instaladas" />
        <Contador finalValue={100} text="Postos Abertos" />
      </div>
    </div>
  );
}
