import React, { useState, useEffect } from 'react';
import IconHdd from './../../Assets/Icons/Icon-Hdd.svg';
import IconAnalyses from '../../Assets/Icons/Icon-Analyses.svg';
import ArrowIconSVG from '../../Assets/Icons/Icon-Arrow.svg';
import styles from './CarouselAnimations.module.css';

type SlideProps = {
  key: number;
  href: string;
  Icon: React.ElementType<{ className: string }>;
  text: string;
};
const Slide: React.FC<SlideProps> = ({ key, href, Icon, text }: SlideProps) => (
  <a
    key={key}
    href={href}
    className="slide-1 text-white text-base flex group text-center justify-center w-[500px]"
  >
    <span className="w-[32px] h-[32px] border-1 border-white rounded-full  flex items-center justify-center text-white">
      <Icon className="fill-current" />
    </span>
    <span className="pl-3 pr-1  mt-1">{text}</span>
    <ArrowIconSVG className="inline-block fill-current mt-2 " />
  </a>
);

const slideData = [
  {
    href: 'https://www.askjeeves.com',
    icon: IconHdd,
    text: 'View the latest studies who have shared their data!',
  },
  {
    href: 'https://www.aol.com/',
    icon: IconAnalyses,
    text: 'Explore example analyses!',
  },
  {
    href: 'https://www.angelfire.com/',
    icon: IconAnalyses,
    text: 'Look it is another slide!',
  },
  {
    href: 'https://www.spacejam.com/1996/',
    icon: IconAnalyses,
    text: 'WOOOOOOOOOOOOOOOOOOO Look it is slide 4!',
  },
];

const CarouselBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const slideDisplayTime = 5000;
  const runCarousel = slideData.length > 1;
  const advanceToNextSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);

  useEffect(() => {
    if (!isPlaying || !runCarousel) return; // If autoplay is off or there is only one slide, don't run the interval
    const interval = setInterval(() => {
      advanceToNextSlide();
    }, slideDisplayTime);
    return () => clearInterval(interval); // Clean up interval on unmount or if autoplay is turned off
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  // Function to determine the class name based on the current slide index
  const getSlideClassName = (i: number) => {
    if (currentIndex === i) {
      return styles['current-slide'];
    } else if (currentIndex === (i - 1 + slideData.length) % slideData.length) {
      return styles['previous-slide'];
    } else if (currentIndex === (i + 1) % slideData.length) {
      return styles['next-slide'];
    } else {
      return styles['hidden-slide'];
    }
  };

  return (
    <div
      data-testid="carousel-banner"
      className="carousel-banner left-1/2 transform -translate-x-1/2 flex p-4 bg-carousel-gradient h-28 overflow-hidden px-[33%] relative"
    >
      <div className="w-[100%] relative">
        {slideData.map((obj, i) => (
          <div key={i} className={`flex absolute  ${getSlideClassName(i)}`}>
            <Slide key={i} href={obj.href} Icon={obj.icon} text={obj.text} />
          </div>
        ))}
      </div>
      {/* Controls Section */}
      {runCarousel && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          {/* Play/Pause Button */}

          <button
            className={`${
              !isPlaying && 'pb-[2px]'
            } border-1 h-[16px] w-[16px] border-white rounded-full text-white hover:bg-gray-200 flex items-center justify-center`}
            onClick={() => {
              togglePlayPause();
              advanceToNextSlide();
            }}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slideData.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex ? 'bg-white' : 'bg-gray-400'
                }`}
                onClick={() => {
                  setCurrentIndex(i);
                  setIsPlaying(false);
                }}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselBanner;
