import React, { useState, useEffect } from 'react';
import { slideData } from './SlideData';
import Slide from './Slide';
import CarouselControls from './CarouselControls';

const CarouselBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const slideDisplayTime = 5000;
  const bannerOnly = slideData.length === 1; // used to render carousel as a banner if only one slide

  const advanceToNextSlide = () =>
    setCurrentSlide((prevIndex) => (prevIndex + 1) % slideData.length);

  useEffect(() => {
    // If autoplay is off or there is only one slide, don't run the interval
    if (!isPlaying || bannerOnly) return;
    const interval = setInterval(() => {
      advanceToNextSlide();
    }, slideDisplayTime);
    return () => clearInterval(interval);
  }, [isPlaying, bannerOnly]);

  if (slideData.length === 0 || 1 === 1) {
    return (
      <div className="text-center" data-testid="no-slides">
        No slides available
      </div>
    );
  }

  return (
    <div
      data-testid="carousel-banner"
      className="
        carousel-banner
        left-1/2
        transform
        -translate-x-1/2
        flex
        p-4
        bg-carousel-gradient
        h-36 lg:h-28
        overflow-hidden
        px-[10%] md:px-[33%]
        relative"
      aria-live="polite"
      aria-label="Carousel banner displaying slide images"
    >
      <div className="slide-container w-[100%] relative flex justify-center">
        {slideData.map((obj, i) => (
          <Slide
            key={i}
            currentSlide={currentSlide}
            numberOfSlides={slideData.length}
            iterator={i}
            href={obj.href}
            Icon={obj.icon}
            text={obj.text}
          />
        ))}
      </div>

      {!bannerOnly && (
        <CarouselControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          slideData={slideData}
          advanceToNextSlide={advanceToNextSlide}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
      )}
    </div>
  );
};

export default CarouselBanner;
