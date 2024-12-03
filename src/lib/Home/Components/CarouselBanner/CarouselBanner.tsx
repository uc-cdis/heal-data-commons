import React, { useState, useEffect } from 'react';
import { slideData } from './SlideData';

import Slide from './Slide';

const CarouselBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const slideDisplayTime = 5000;
  const bannerOnly = slideData.length === 1; // render carousel like a banner if only one slide

  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

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
      <div className="w-[100%] relative flex justify-center">
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

      {/* Controls Section */}
      {!bannerOnly && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          {/* Play/Pause Button */}
          <button
            className={`
              ${!isPlaying && 'pb-[1px]'}
              hover:opacity-90
              h-[12px] w-[12px]
            border-white
              rounded-full
              flex
              items-center
              justify-center
            bg-white
              text-xs
              text-heal-carousel_button
            `}
            aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
            onClick={() => {
              togglePlayPause();
              if (!isPlaying) advanceToNextSlide();
            }}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slideData.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                className={`
                  w-3
                  h-3
                  rounded-full
                  hover:opacity-90
                  border border-white ${
                    i === currentSlide ? 'bg-white' : 'bg-transparent'
                  }`}
                onClick={() => {
                  setCurrentSlide(i);
                  setIsPlaying(false);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselBanner;
