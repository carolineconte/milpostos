interface Props {
  title: string;
  subTitle?: string;
}

export default function SectionTitle({ title, subTitle }: Props) {
  return (
    <>
      <h1
        className="font-bold text-3xl text-primary text-center
      md:text-4xl md:w-3/4 md:mx-auto lg:mt-10"
      >
        {title}
      </h1>
      {subTitle && (
        <h2
          className="text-xl leading-5 font-light text-dark text-center
        md:text-2xl md:w-3/4 md:mx-auto md:leading-5 lg:mb-10"
        >
          {subTitle}
        </h2>
      )}
    </>
  );
}
