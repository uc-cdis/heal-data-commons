import React from 'react';
import ResourcesCallout from '../ResourcesCallout/ResourcesCallout';

const QuickLinks: React.FC = () => {
  return (
    <div data-testid="quick-links" className="quick-links text-center p-4">
      <h1 className="text-2xl font-bold">Quick Links</h1>
      <div className="flex flex-wrap">
        <div className="w-1/2 p-4">
          <ResourcesCallout />
        </div>
        <div className="w-1/2 p-4">
          <ResourcesCallout />
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
