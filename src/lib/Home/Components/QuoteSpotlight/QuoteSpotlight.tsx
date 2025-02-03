import React from 'react';
import { BackgroundImage } from '@mantine/core';
import Background from '../../Assets/Images/background.webp';

/** UI component for displaying a quote and attribution */
const QuoteSpotlight: React.FC = () => {
  return (
    <div data-testid="quote-spotlight" className="text-center mt-6 text-white">
      <BackgroundImage
        className="m:h-[269px] md:h-[321px] lg:h-[272px] flex items-center justify-center"
        src={Background.src}
      >
        <div className="px-6 md:px-32 lg:px-36 pb-6 lg:pb-0">
          <blockquote className="text-[28px] md:text-4xl italic leading-tight lg:leading-relaxed p-4">
            “Data are both a product of research, and also an engine for new
            discovery.”
          </blockquote>
          <cite data-testid="citation" className="sm:text-sm text-base px-6 ">
            Rebecca G. Baker, Ph.D., former Director of the NIH HEAL
            Initiative®
          </cite>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default QuoteSpotlight;
