import React from 'react';
import ResourcesCallout from '../ResourceCallout/ResourceCallout';

const ResourceCalloutsData = [
  {
    title: 'Resources for HEAL Investigators',
    links: [
      { title: 'Select a Repository', href: 'https://www.spacejam.com/1996/' },
      {
        title: 'Register Your Study',
        href: 'https://www.spacejam.com/1996/cmp/pressbox/pressboxframes.html',
      },
      {
        title: 'Submit Study-Level Metadata',
        href: 'https://www.spacejam.com/1996/cmp/lineup/lineupframes.html',
      },
      {
        title: 'Submit Variable-Level Metadata',
        href: 'https://www.spacejam.com/1996/cmp/junior/juniorframes.html',
      },
      {
        title: 'Link Data to the HEAL Platform',
        href: 'https://www.spacejam.com/1996/cmp/souvenirs/souvenirsframes.html',
      },
    ],
  },
  {
    title: 'Resources for Secondary Data Users',
    links: [
      {
        title: 'Browse Studies and Data',
        href: 'https://www.spacejam.com/1996/cmp/jamcentral/jamcentralframes.html',
      },
      {
        title: 'Request Access to Workspaces',
        href: 'https://www.spacejam.com/1996/cmp/bball/bballframes.html',
      },
      {
        title: 'Explore Example Analyses',
        href: 'https://www.spacejam.com/1996/cmp/tunes/tunesframes.html',
      },
      {
        title: 'View answers to FAQs',
        href: 'https://www.spacejam.com/1996/cmp/jump/jumpframes.html',
      },
      {
        title:
          'Watch tutorial videos to learn how to interact with the HEAL Platform',
        href: 'https://www.spacejam.com/1996cmp/behind/behindframes.html',
      },
    ],
  },
];

const QuickLinks: React.FC = () => {
  return (
    <div
      data-testid="quick-links"
      className="quick-links text-center p-4 container mx-auto px-6"
    >
      <div className="font-bold text-heal-magenta text-2xl pb-3">
        Quick Links
      </div>
      <div className="flex flex-wrap">
        <div className="w-1/2 pt-4 pr-2 ">
          <ResourcesCallout ResourceCalloutData={ResourceCalloutsData[0]} />
        </div>
        <div className="w-1/2 pt-4 pl-2 flex-1">
          <ResourcesCallout ResourceCalloutData={ResourceCalloutsData[1]} />
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
