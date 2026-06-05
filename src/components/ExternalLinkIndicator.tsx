import React from 'react';
import ExternalLinkSVG from '../../public/icons/HealIcons/Icon-External-Link.svg';

type ExternalLinkIndicatorProps = {
  className?: string;
};

const ExternalLinkIndicator: React.FC<ExternalLinkIndicatorProps> = ({
  className,
}: ExternalLinkIndicatorProps) => {
  return (
    <>
      <span aria-hidden="true" className={`inline-block ${className}`}>
        <ExternalLinkSVG />
      </span>
      <span className="sr-only">(opens in a new window)</span>
    </>
  );
};

export default ExternalLinkIndicator;
