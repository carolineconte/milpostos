"use client";
import React, { useState, useEffect } from "react";
interface Props {
  finalValue?: number;
  text: string;
  value?: string;
}
const Contador = ({ finalValue, text, value }: Props) => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    if (finalValue) {
      if (contador < finalValue) {
        const timer = setInterval(() => {
          setContador((prevContador) => prevContador + 1);
        }, 10);

        return () => clearInterval(timer);
      }
    }
  }, [contador, finalValue]);

  return (
    <div className="contador">
      <p
        className="mb-0 text-4xl font-bold font-digiLG  sm:font-digib
      md:text-6xl"
      >
        {finalValue ? contador.toString().padStart(2, "0") : value}
      </p>
      <h2
        className="text-sm text-center m-auto mt-0 font-light  font-digiLG
      md:text-[1.5em] md:w-1/2"
      >
        {text}
      </h2>
    </div>
  );
};

export default Contador;
