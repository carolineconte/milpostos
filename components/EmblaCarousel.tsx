import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Image } from "@nextui-org/react";

import { DotButton, useDotButton } from "@/components/EmblaCarouselDotButtons";

type PropType = {
  slides: string[] | any;
  options?: EmblaOptionsType;
  img: boolean;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, img } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla text-black">
      <div ref={emblaRef} className="embla__viewport">
        <div className="embla__container my-2">
          {slides.map((item: any, index: number) => (
            <div key={index} className="embla__slide">
              {img === true ? <Image alt="" src={item} /> : item}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : "",
              )}
              onClick={() => onDotButtonClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
