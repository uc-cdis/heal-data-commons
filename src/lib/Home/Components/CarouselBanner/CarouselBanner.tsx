import React, { useState } from 'react';
import IconHdd from './../../Assets/Icons/Icon-Hdd.svg';
import IconAnalyses from '../../Assets/Icons/Icon-Analyses.svg';
import ArrowIconSVG from '../../Assets/Icons/Icon-Arrow.svg';

const Slide = ({ href, Icon, text }) => (
  <a href="#" className="slide-1 text-white text-base flex group text-center ">
    <span className="w-[32px] h-[32px] border-1 border-white rounded-full  flex items-center justify-center text-white">
      <Icon />
    </span>
    <span className="pl-3 pr-1  mt-1">{text}</span>
    <ArrowIconSVG className="inline-block fill-current mt-2 " />
  </a>
);

const CarouselBanner: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };
  return (
    <div
      data-testid="carousel-banner"
      className="carousel-banner text-center p-4 bg-carousel-gradient h-28 overflow-visible px-[33%] relative"
    >
      <Slide
        href="#"
        Icon={() => <IconHdd className="fill-current" />}
        text="View the latest studies who have shared their data!"
      />
      <Slide
        href="#"
        Icon={() => <IconAnalyses className="fill-current" />}
        text="Explore example analyses!"
      />

      {/* Controls Section */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        {/* Play/Pause Button */}
        <button
          className={`${
            !isPlaying && 'pb-[2px]'
          } border-1 h-[16px] w-[16px] border-white rounded-full text-white hover:bg-gray-200 flex items-center justify-center`}
          onClick={() => togglePlayPause()}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        {/* Slide Indicators */}
        <div className="flex space-x-2">
          <button className="w-3 h-3 rounded-full bg-gray-400"></button>
        </div>
      </div>
    </div>
  );
};

export default CarouselBanner;
