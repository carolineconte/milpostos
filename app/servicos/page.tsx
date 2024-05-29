"use client";
import { Accordion, AccordionItem, Button, Link } from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import PostoIcon from "@/components/icons/PostoIcon";
import MecanicoIcon from "@/components/icons/MecanicoIcon";
import TanqueIcon from "@/components/icons/TanqueIcon";
import BombaIcon from "@/components/icons/BombaIcon";
import BicoIcon from "@/components/icons/BicoIcon";
import MedidorIcon from "@/components/icons/MedidorIcon";

export default function Servicos() {
  const icones = [
    <PostoIcon key={100} />,
    <MecanicoIcon key={101} />,
    <TanqueIcon key={102} />,
    <BombaIcon key={103} />,
    <BicoIcon key={104} />,
    <MedidorIcon key={105} />,
  ];

  return (
    <>
      <section className="mt-5 flex w-full text-black accordionStyle px-2">
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
              className="flex flex-col w-full md:p-2 containerTitulo"
              startContent={icones[i]}
              subtitle={item.subtitulo}
              title={item.titulo}
            >
              {item.listas.map((listas, i) => (
                <div key={i} className="p-3 ">
                  <h3 className="font-bold text-left mt-3 md:text-xl">
                    {listas.titulo}
                  </h3>
                  <ul className="text-left ">
                    {listas.itens.map((itemLista, i) => (
                      <li key={i} className="md:text-lg">
                        {itemLista}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Button
                as={Link}
                className="rounded-full justify-self-center bg-dark w-1/2 self-center md:text-lg lg:w-1/3 lg:mt-5"
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
