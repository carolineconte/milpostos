import { Image } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

import FacebookIcon from "@/components/icons/FacebookIcon";
import InstaIcon from "@/components/icons/InstaIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import WhatsIcon from "@/components/icons/WhatsIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import ClockIcon from "@/components/icons/ClockIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";

export default function Footer() {
  const Links = [
    {
      icon: <FacebookIcon />,
      href: "face",
    },
    {
      icon: <InstaIcon />,
      href: "insta",
    },
    {
      icon: <LinkedinIcon />,
      href: "Linkedin",
    },
    {
      icon: <WhatsIcon />,
      href: "Whats",
    },
  ];
  const siteMap = [
    {
      label: "Site Map:",
      href: "#",
    },
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Serviços",
      href: "/servicos",
    },
    {
      label: "Produtos",
      href: "/produtos",
    },
    {
      label: "Quem Somos",
      href: "about",
    },
    {
      label: "Blog",
      href: "blog",
    },
  ];

  return (
    <footer className="">
      <div
        className="w-full flex flex-col p-3 bg-gray
      md:flex-row flex-wrap lg:justify-center lg:px-10
      "
      >
        <div className="flex flex-col items-center">
          <Image src="/Logo.png" />
          <strong className="text-sm text-center leading-3 font-extralight px-3 text-white md:text-lg md:leading-5">
            A Mil Postos conta com mais de 10 anos no mercado de instalações e
            manutenções de postos de combustíveis.
          </strong>
          {/* Links Sociais */}
          <div className="flex items-center justify-end gap-1 my-3">
            {Links.map((item) => (
              <Link
                key={item.href}
                className=" flex justify-center items-end rounded p-1 w-[30px] h-[30px] bg-highlight"
                href="#"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        {/* Links Contato */}
        <ul className="contactsList my-3">
          <li>Contato</li>
          <li>
            <LocationIcon /> RUA MELCHIADES BRANDÃO 104, Campo Grande, Brasil
            79081340
          </li>
          <li>
            <ClockIcon />
            Horário: 8:00 - 17:00, Seg - Sex
          </li>
          <li>
            <EmailIcon />
            milpostos@gmail.com
          </li>
          <li>
            <PhoneIcon />
            (67) 3045 - 4059
          </li>
        </ul>
        {/* Mapa do site */}
        <ul className="flex flex-col md:mx-auto">
          {siteMap.map((item) => (
            <li key={item.href}>
              <Link
                className="text-white text-left cursor-pointer hover:bg-white/70 w-fit"
                href="#"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t text-center text-small bg-gray leading-3 p-2">
        <small className="  ">
          Mil Postos - EWJ INSTALAÇÃO E MANUTENÇÃO DE EQUIPAMENTOS PARA POSTOS
          DE COMBUSTÍVEIS LTDA © 2024 | Desenvolvido por Caroline Conte.
        </small>
      </div>
    </footer>
  );
}
