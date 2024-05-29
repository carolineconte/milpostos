import { Image } from "@nextui-org/react";

import CTA from "@/components/CTA";

export default function BlogPage() {
  return (
    <>
      <div className="px-5">
        <section
          className="pt-5 bg-cardBackground/60 flex flex-col justify-center items-center rounded cursor-pointer hover:bg-cardBackground
        md:flex-row md:p-5 md:gap-5 max-w-[80%] mx-auto"
        >
          <Image alt="" src="/post.png" />

          <div className="py-5 px-10 md:text-left md:px-0">
            <h1 className="font-bold md:text-xl md:grow">
              Por que investir em um bico de abastecimento OPW?
            </h1>
            <p className="font-semibold text-gray">
              Bico feito para revolucionar o mercado...
            </p>
          </div>
        </section>
      </div>
      <CTA />
    </>
  );
}
