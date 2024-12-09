import React from 'react';
import ResourcesCallout from '../ResourceCallout/ResourceCallout';
import { resourceCalloutsData } from '../../../../../config/heal/home/resourceCalloutData';

const QuickLinks: React.FC = () => {
  return (
    <div
      data-testid="quick-links"
      className="quick-links text-center p-4 container mx-auto px-6"
    >
      <div className="font-bold text-heal-magenta text-2xl pb-3">
        Quick Links
      </div>
      <div className="flex flex-wrap">
        <div className="w-1/2 pt-4 pr-2 ">
          <ResourcesCallout ResourceCalloutData={resourceCalloutsData[0]} />
        </div>
        <div className="w-1/2 pt-4 pl-2 flex-1">
          <ResourcesCallout ResourceCalloutData={resourceCalloutsData[1]} />
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
