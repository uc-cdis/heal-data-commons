import React from 'react';
import { Center, Text, Paper } from '@mantine/core';
import {
  NavPageLayout,
  NavPageLayoutProps,
  getNavPageLayoutPropsFromConfig,
} from '@gen3/frontend';
import { GetServerSideProps } from 'next';
import { ExampleComponent } from '@/lib/home/ExampleComponent';

const HealLandingPage = ({ headerProps, footerProps }: NavPageLayoutProps) => {
  return (
    <NavPageLayout
      {...{ headerProps, footerProps }}
      headerData={{
        title: 'Heal Landing Page',
        content: 'Heal Landing Page',
        key: 'heal-landing-page',
      }}
    >
      <div className="w-full bg-purple-500 w-full">
        This is a colored background!
        <div className="w-full bg-blue-500 text-white p-4 bg-blue-600">
          This is a blue background!
        </div>
        <h1 className="text-4xl font-bold text-center text-green-200 bg-cyan-100">
          lol
        </h1>
        <ExampleComponent />
      </div>
    </NavPageLayout>
  );
};

// TODO: replace this with a custom getServerSideProps function
export const getServerSideProps: GetServerSideProps<
  NavPageLayoutProps
> = async () => {
  return {
    props: {
      ...(await getNavPageLayoutPropsFromConfig()),
    },
  };
};

export default HealLandingPage;
