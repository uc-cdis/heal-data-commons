import React from 'react';
import IconLinkArrow from './../../Assets/Icons/Icon-Link-Arrow.svg';

interface ResourceCalloutLink {
  title: string;
  href: string;
}

interface ResourceCalloutProps {
  ResourceCalloutData: {
    title: string;
    links: ResourceCalloutLink[];
  };
}

const ResourceCallout: React.FC<ResourceCalloutProps> = ({
  ResourceCalloutData,
}) => {
  return (
    <div data-testid="resource-callout" className="rounded shadow text-left">
      <div
        data-testid="resource-callout"
        className="bg-heal-magenta text-white h-15 rounded-t text-xl font-bold  p-4"
      >
        {ResourceCalloutData.title}
      </div>
      <div className="p-4">
        <ul className="list-none">
          {ResourceCalloutData.links.map(
            (resourceLink: ResourceCalloutLink, i: number) => (
              <li
                className="flex items-center space-x-2 align-top pb-2"
                key={i}
              >
                <span className="mr-1">
                  <IconLinkArrow />
                </span>
                <a
                  href={resourceLink.href}
                  className="text-heal-blue underline
                decoration-solid hover:text-heal-magenta"
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
