interface Props {
  title: string;
  subTitle: string;
  background: string;
}
export default function Hero({ title, subTitle, background }: Props) {
  return (
    <section
      className={`heroPage w-full mt-20 h-[20vh] md:h-[30vh] lg:h-[40vh] ${background}`}
    >
      <h2
        className="flex flex-col justify-center text-3xl font-extrabold text-white
      md:text-5xl"
      >
        {title}
      </h2>
      <h1 className="p-1 leading-4 -mt-2 md:text-lg md:w-3/4 md:leading-4 lg:text-xl lg:leading-5 lg:mt-1">
        {subTitle}
      </h1>
    </section>
  );
}
