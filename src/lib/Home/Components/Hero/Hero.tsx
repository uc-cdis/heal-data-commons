import React from 'react';
import HealButtonLink from '../HealButtonLink/HealButtonLink';
import Image from 'next/image';
import hero from './../../Assets/Images/Hero.webp';
import background from './../../Assets/Images/background.webp';

const Hero: React.FC = () => {
  return (
    <div data-testid="hero" className="photo-divider text-center p-4">
      <h1 className="text-2xl font-bold">Hero</h1>
      <HealButtonLink
        href="https://askjeeves.com"
        label="Search for HEAL Data"
      />

      {/* GENERATED CODE */}

      <div className="relative bg-cover bg-center bg-heal-background">
        <div className="container mx-auto py-24 px-6">
          <div className="lg:flex items-center justify-between">
            <div className="text-white max-w-xl text-left">
              <h1 className="text-4xl font-bold leading-[36px] tracking-tight font-montserrat">
                The Heal Data Platform
              </h1>
              <p className="mt-4 text-lg font-normal leading-[36px] tracking-tight font-montserrat">
                is a single web interface which allows visitors to discover,
                access, and analyze data generated by Heal Studies.
              </p>
              <HealButtonLink href={'#'} label={'Search for Heal Data'} />
            </div>
            <div className="hidden lg:block lg:w-1/2">
              <Image
                src={hero}
                alt="Hero Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* END GENERATED CODE */}
    </div>
  );
};

export default Hero;
