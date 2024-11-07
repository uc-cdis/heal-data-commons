import React from 'react';
import HealButtonLink from '../HealButtonLink/HealButtonLink';

const ContentSpotlight: React.FC = () => {
  return (
    <div
      data-testid="content-spotlight"
      className="content-spotlight   text-center p-4"
    >
      <h1 className="text-2xl font-bold">Content Spotlight</h1>
      <HealButtonLink href="https://lycos.com" label="Go to Semantic Search" />
    </div>
  );
};

export default ContentSpotlight;
