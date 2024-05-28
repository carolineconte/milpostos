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
      <p className="mb-0 text-4xl font-bold">
        {finalValue ? contador.toString().padStart(2, "0") : value}
      </p>
      <h2 className="text-sm text-center m-auto text-highlight mt-0">{text}</h2>
    </div>
  );
};

export default Contador;
