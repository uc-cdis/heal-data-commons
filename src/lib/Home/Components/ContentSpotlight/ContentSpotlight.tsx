import React from 'react';
import HealButtonLink from '../HealButtonLink/HealButtonLink';
import Image from 'next/image';
import search from './../../Assets/Images/Search.webp';

/** UI component for highlighting content */
const ContentSpotlight: React.FC = () => {
  return (
    <div
      data-testid="content-spotlight"
      className="flex flex-col md:flex-row justify-between px-8 lg:px-36 py-8 mt-5"
    >
      <div className="flex-1 h-full min-h-full mb-6 md:mb-0 relative">
        <Image
          src={search}
          alt=""
          className="h-[240px]  md:h-[450px] lg:h-full lg:max-h-[320px] object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className=" flex-1 md:pl-8 pt-1 relative flex justify-between flex-col">
        <div>
          <div className="font-bold text-heal-magenta text-2xl pb-6">
            HEAL Semantic Search
          </div>
          <p className="text-md mb-8 leading-relaxed">
            The NIH HEAL Initiative also provides HEAL Semantic Search, a
            complementary tool to use with the HEAL Data Platform. HEAL Semantic
            Search allows users to explore connections between biomedical
            concepts, identify variables related to a concept and discover
            datasets containing these variables. Uncovering novel relationships
            between concepts and variables may help researchers pose relevant
            research questions and identify potential collaborations.
          </p>
        </div>
        <div className="mb-4">
          <HealButtonLink
            href="https://www.healdatafair.org/resources/semanticsearch"
            label="Go to Semantic Search"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentSpotlight;
