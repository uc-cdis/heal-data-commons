import React, { useState } from 'react';
import ArrowIcon from '../../Assets/Icons/IconArrow';

interface ButtonLinkProps {
  href: string;
  label: string;
}

const HealButtonLink: React.FC<ButtonLinkProps> = ({
  href = 'https://www.altavista.com',
  label,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        heal-button-link
        focus:border-4
        select-none border-2
        group
        hover:bg-heal-magenta
        border-heal-magenta
        bg-white
        text-white
        p-[0.0625rem]
        py-[0.2rem]
        rounded
        inline-block`}
      role="button"
    >
      <span
        className={`
          group-hover:bg-white
          group-hover:text-heal-magenta
          bg-heal-magenta
          p-1 rounded
        `}
      >
        {label}
      </span>
      <span className="bg-white group-hover:bg-heal-magenta group-hover:text-white  text-heal-magenta ml-1">
        <ArrowIcon />
      </span>
    </a>
  );
};

export default HealButtonLink;
