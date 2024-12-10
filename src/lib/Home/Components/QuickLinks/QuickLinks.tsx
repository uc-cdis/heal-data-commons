import React from 'react';
import ResourcesCallout from '../ResourceCallout/ResourceCallout';
import { resourceCalloutsData } from '../../../../../config/heal/home/resourceCalloutData';

const QuickLinks: React.FC = () => {
  return (
    <div
      data-testid="quick-links"
      className="text-center md:p-4 container md:mx-auto md:px-6"
    >
      <div className="font-bold text-heal-magenta text-2xl pb-3">
        Quick Links
      </div>
      <div className="flex flex-wrap">
        <div className="px-5 md:px-0 md:w-1/2 pt-4 md:pr-2 ">
          <ResourcesCallout resourceCalloutData={resourceCalloutsData[0]} />
        </div>
        <div className="px-5 md:px-0 md:w-1/2 pt-4 md:pl-2 flex-1">
          <ResourcesCallout resourceCalloutData={resourceCalloutsData[1]} />
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
