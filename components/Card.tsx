import { Link, Button } from "@nextui-org/react";
import Image from "next/image";

import PostoIcon from "@/components/icons/PostoIcon";

interface Props {
  title: string;
  list: string[];
  icon?: any;
}
export default function Card({ title, list, icon }: Props) {
  const icones = [
    <PostoIcon key={100} />,
    <PostoIcon key={101} />,
    <PostoIcon key={102} />,
    <PostoIcon key={103} />,
    <PostoIcon key={104} />,
    <PostoIcon key={105} />,
  ];

  return (
    <section className="bg-cardBackground text-black p-3 rounded-lg flex flex-col grow justify-center gap-5">
      <div
        className={`${icon >= 0 ? "sm:flex items-end gap-5" : "flex items-center px-5"}`}
      >
        {icon >= 0 ? (
          icones[icon]
        ) : (
          <div>
            <Image alt="" height={50} src="/miniLogo.png" width={50} />
          </div>
        )}

        <h1
          className={`${icon >= 0 ? "mt-2 text-2xl leading-6 tracking-wider" : "mt-3 text-3xl"} font-bold text-primary`}
        >
          {title}
        </h1>
      </div>
      <ul className="grow flex flex-col justify-evenly text-lg px-2">
        {list.map((item, i) => (
          <li key={i} className="text-left">
            {item}
          </li>
        ))}
      </ul>
      {icon >= 0 && (
        <Button
          as={Link}
          className="w-1/2 self-center font-digib lg:text-lg"
          color="primary"
          href="https://github.com/nextui-org/nextui"
          variant="solid"
        >
          Saiba Mais
        </Button>
      )}
    </section>
  );
}
