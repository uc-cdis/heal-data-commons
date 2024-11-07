import React from 'react';
import ArrowIconSVG from '../../Assets/Icons/Icon-Arrow.svg';

interface ButtonLinkProps {
  href: string;
  label: string;
}

const HealButtonLink: React.FC<ButtonLinkProps> = ({ href, label }) => {
  return (
    <a
      href={href}
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
        inline-block
      `}
      role="button"
    >
      <span
        className={`
          px-2
          group-hover:bg-white
          group-hover:text-heal-magenta
          bg-heal-magenta
          p-1 rounded
        `}
      >
        {label}
      </span>
      <span
        className={`
          bg-white
          group-hover:bg-heal-magenta
          group-hover:text-white
          text-heal-magenta ml-1
        `}
      >
        <ArrowIconSVG className="inline-block fill-current" />
      </span>
    </a>
  );
};

export default HealButtonLink;
