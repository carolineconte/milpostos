"use client";
import { Accordion, AccordionItem, Button, Link } from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import PostoIcon from "@/components/icons/PostoIcon";

export default function Servicos() {
  const icones = [
    <PostoIcon key={100} />,
    <PostoIcon key={101} />,
    <PostoIcon key={102} />,
    <PostoIcon key={103} />,
    <PostoIcon key={104} />,
    <PostoIcon key={105} />,
  ];

  return (
    <>
      <section className="heroPage h-[60vh] bg-[url('/HEROServicos.jpg')]">
        <h2>Como podemos ajudar?</h2>
        <h1>
          Instalações e Manutenção para postos de combustíveis, entregamos 
          excelência e qualidade dos nossos serviços para os nossos clientes 
        </h1>
      </section>
      <section className="mt-5 w-full text-black accordionStyle px-2">
        <Accordion
          className="p-2 flex text-black flex-col gap-1"
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
          variant="bordered"
        >
          {siteConfig.contentSevices.map((item, i) => (
            <AccordionItem
              key={i}
              aria-label={item.titulo}
              className="flex flex-col"
              startContent={<PostoIcon />}
              subtitle={item.subtitulo}
              title={item.titulo}
            >
              {item.listas.map((listas, i) => (
                <div key={i} className="p-3 ">
                  <h3 className="font-bold text-left mt-3">{listas.titulo}</h3>
                  <ul className="text-left ">
                    {listas.itens.map((itemLista, i) => (
                      <li key={i} className="">
                        {itemLista}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Button
                as={Link}
                className="w-1/2 rounded-full bg-dark self-center"
                color="primary"
                href="https://github.com/nextui-org/nextui"
                variant="solid"
              >
                {item.botao}
              </Button>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
