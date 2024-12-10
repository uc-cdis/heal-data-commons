import React from 'react';
import ResourcesCallout from '../ResourceCallout/ResourceCallout';
import { resourceCalloutsData } from '../../../../../config/heal/home/resourceCalloutData';

const QuickLinks: React.FC = () => {
  return (
    <div
      data-testid="quick-links"
      className="quick-links text-center md:p-4 container md:mx-auto md:px-6"
    >
      <div className="font-bold text-heal-magenta text-2xl pb-3">
        Quick Links
      </div>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 pt-4 pr-2 ">
          <ResourcesCallout resourceCalloutData={resourceCalloutsData[0]} />
        </div>
        <div className="w-full md:w-1/2 pt-4 pl-2 flex-1">
          <ResourcesCallout resourceCalloutData={resourceCalloutsData[1]} />
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
