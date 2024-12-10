import React from 'react';
import IconLinkArrow from './../../Assets/Icons/Icon-Link-Arrow.svg';

interface resourceCalloutLink {
  title: string;
  href: string;
}

interface resourceCalloutProps {
  resourceCalloutData: {
    title: string;
    links: resourceCalloutLink[];
  };
}

const ResourceCallout: React.FC<resourceCalloutProps> = ({
  resourceCalloutData,
}) => {
  return (
    <div
      data-testid="resource-callout"
      className="rounded shadow text-left h-full bg-heal-light_purple"
    >
      <div
        data-testid="resource-callout-header"
        className="bg-heal-magenta text-white h-15 rounded-t text-xl font-bold p-4"
      >
        {resourceCalloutData.title}
      </div>
      <div className="p-4">
        <ul className="list-none">
          {resourceCalloutData.links.map(
            (resourceLink: resourceCalloutLink, i: number) => (
              <li className="flex space-x-2 align-top pb-2" key={i}>
                <span className="mr-1 pt-2" data-testid="icon-link-arrow">
                  <IconLinkArrow />
                </span>
                <a
                  href={resourceLink.href}
                  className="text-heal-blue underline hover:text-heal-magenta"
                >
                  {resourceLink.title}
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
};

export default ResourceCallout;
