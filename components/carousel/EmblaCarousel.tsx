import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

type PropType = {
    slides: number[];
    options?: EmblaOptionsType;
};

const Images = [
    { src: "/josman.png", name: "1" },
    { src: "/cover.png", name: "2" },
    { src: "/cover.png", name: "2" },
    { src: "/josman.png", name: "Josman" },
    { src: "/cover.png", name: "Josman" },
    { src: "/josman.png", name: "Josman" },
    { src: "/cover.png", name: "Josman" },
    { src: "/cover.png", name: "Josman" },
    { src: "/cover.png", name: "Josman" },
    { src: "/cover.png", name: "Josman" },
];

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

    return (
        <div className="embla">
            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                {/* <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={"embla__dot".concat(index === selectedIndex ? " embla__dot--selected" : "")}
                        />
                    ))}
                </div> */}
            </div>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className={`embla__slide ${index === 0 ? "ml-4" : null} ${index === 3 ? "mr-4" : null} embla__class-names`} key={index}>
                            <img className="embla__slide__img" src={Images[index].src} alt="Your alt text" />
                            <p className="text-white text-2xl font-garcia">{[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;
