import React from 'react';
import IconExternalLink from '@/assets/icons/Icon-External-Link';

type ExternalLinkIndicatorProps = {
  className?: string;
};

const ExternalLinkIndicator: React.FC<ExternalLinkIndicatorProps> = ({
  className,
}: ExternalLinkIndicatorProps) => {
  return (
    <>
      <span
        aria-hidden="true"
        className={`inline-block ${className}`}
        data-testid="external-link-indicator"
      >
        <IconExternalLink />
      </span>
      <span
        className="sr-only"
        data-testid="external-link-indicator-accessible-text"
      >
        (opens in a new window)
      </span>
    </>
  );
};

export default ExternalLinkIndicator;
