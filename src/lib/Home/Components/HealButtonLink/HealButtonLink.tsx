import React from 'react';
import ArrowIcon from '../../Assets/Icons/Icon-Arrow.svg';
import Image from 'next/image';

interface ButtonLinkProps {
  href: string; // Link destination
  label: string; // Button text
}

const HealButtonLink: React.FC<ButtonLinkProps> = ({ href, label }) => {
  return (
    <a
      href={href} // Prevent navigation if disabled
      className={
        'heal-button-link select-none border-2 border-heal-magenta bg-white text-white p-[0.0625rem] py-[0.2rem] rounded inline-block'
      }
      role="button" // Ensures screen readers treat it like a button
    >
      <span className="bg-heal-magenta p-1 rounded  ">{label}</span>
      <span className="bg-white text-heal-magenta ml-1">
        <Image className="inline" src={ArrowIcon} alt="" />
      </span>
    </a>
  );
};

export default HealButtonLink;
