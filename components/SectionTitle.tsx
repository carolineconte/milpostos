interface Props {
  title: string;
  subTitle?: string;
}

export default function SectionTitle({ title, subTitle }: Props) {
  return (
    <>
      <h1 className="font-bold text-3xl text-primary text-center">{title}</h1>
      {subTitle && (
        <h2 className="text-xl leading-5 font-light text-dark text-center">
          {subTitle}
        </h2>
      )}
    </>
  );
}
