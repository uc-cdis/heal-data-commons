import React from 'react';
import ArrowIconSVG from '../../../../../public/icons/HealIcons/Icon-Arrow.svg';

interface ButtonLinkProps {
  /** HREF for Button Link */
  href: string;
  /** Button Text */
  label: string;
}

const HealButtonLink: React.FC<ButtonLinkProps> = ({ href, label }) => {
  return (
    <a
      role="button"
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
        px-[0.0625rem]
        py-[0.25rem]
        rounded
        inline-block
      `}
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
          mx-1
          bg-white
          group-hover:bg-heal-magenta
          group-hover:text-white
          text-heal-magenta
        `}
      >
        <ArrowIconSVG className="inline-block fill-current" />
      </span>
    </a>
  );
};

export default HealButtonLink;
