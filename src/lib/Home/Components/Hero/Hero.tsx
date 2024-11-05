import React from 'react';
import HealButtonLink from '../HealButtonLink/HealButtonLink';

const Hero: React.FC = () => {
  return (
    <div data-testid="hero" className="photo-divider text-center p-4">
      <h1 className="text-2xl font-bold">Hero</h1>
      <HealButtonLink
        href="https://askjeeves.com"
        label="Search for HEAL Data"
      />
    </div>
  );
};

export default Hero;
