import { Image } from "@nextui-org/react";
import React from "react";

interface Props {
  titulo: string;
  img: string;
}
export default function ProductCard({ titulo, img }: Props) {
  return (
    <div className="flex flex-col items-center">
      <Image alt={titulo} src={img} />
      <h2 className="font-bold text-dark">{titulo}</h2>
    </div>
  );
}
