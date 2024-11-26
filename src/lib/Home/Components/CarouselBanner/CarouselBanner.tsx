import React from 'react';
import IconHdd from './../../Assets/Icons/Icon-Hdd.svg';
import IconAnalyses from '../../Assets/Icons/Icon-Analyses.svg';
import ArrowIconSVG from '../../Assets/Icons/Icon-Arrow.svg';


const Slide = ({href, Icon, text}) => (<a href="#" className="slide-1 text-white text-base flex group text-center ">
  <span className="w-[32px] h-[32px] border-1 border-white rounded-full  flex items-center justify-center text-white"><Icon/></span>
  <span className="pl-3 pr-1  mt-1">{text}</span>
  <ArrowIconSVG className="inline-block fill-current mt-2 " />
</a>);

const CarouselBanner: React.FC = () => {
  return (
    <div
      data-testid="carousel-banner"
      className="carousel-banner text-center p-4 bg-carousel-gradient h-28 overflow-visible px-[33%]"
    >
      <Slide href='#' Icon={()=><IconHdd className='fill-current' />} text='View the latest studies who have shared their data!'/>
      <Slide href='#' Icon={()=><IconAnalyses className='fill-current' />} text='Explore example analyses!'/>

    </div>
  );
};

export default CarouselBanner;
