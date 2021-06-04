import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./ProjectCarouselButtons";
import { useEmblaCarousel } from "embla-carousel/react";
import "./ProjectCarousel.css";
// import { GatsbyImage } from "gatsby-plugin-image";
import Img from "gatsby-image/withIEPolyfill";

const ProjectCarousel = ({ projectSelected }) => {
  const { projectData, imagesData } = projectSelected;

  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla,
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport rounded" ref={viewportRef}>
          <div className="embla__container">
            {imagesData.map((imageData, i) => {
              // const imgSrc = imageData.childrenImageSharp[0].gatsbyImageData;
              const fluidData = imageData.childrenImageSharp[0].fluid;

              return (
                <div className="embla__slide" key={i}>
                  <div className="embla__slide__inner">
                    <Img
                      alt={`${projectData.name} Image`}
                      className="embla__slide__img"
                      // objectFit="scale-down"
                      objectFit="contain"
                      fluid={fluidData}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectCarousel;
