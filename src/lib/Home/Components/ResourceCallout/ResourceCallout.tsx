import React from 'react';
import IconLinkArrow from '../../../../../public/icons/HealIcons/Icon-Link-Arrow.svg';

interface resourceCalloutLink {
  /** Each Link contains a title */
  title: string;
  /** Each Link contains a href */
  href: string;
}

interface resourceCalloutProps {
  /** Resource Callout Data is an object with a title and array of links with titles and hrefs */
  resourceCalloutData: {
    title: string;
    links: resourceCalloutLink[];
  };
}

/** Used to display groups of links in the Quick Links Component */
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
              <li key={i} className="flex space-x-2 align-top pb-2">
                <span data-testid="icon-link-arrow" className="mr-1 pt-2">
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
