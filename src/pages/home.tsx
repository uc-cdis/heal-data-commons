import React from 'react';
import { Center, Text, Paper } from '@mantine/core';
import {
  NavPageLayout,
  NavPageLayoutProps,
  getNavPageLayoutPropsFromConfig,
} from '@gen3/frontend';
import { GetServerSideProps } from 'next';
import { ExampleComponent } from '@/lib/Home/ExampleComponent';
import Hero from '@/lib/Home/Components/Hero/Hero';
import CarouselBanner from '@/lib/Home/Components/CarouselBanner/CarouselBanner';
import QuickLinks from '@/lib/Home/Components/QuickLinks/QuickLinks';
import PhotoDivider from '@/lib/Home/Components/PhotoDivider/PhotoDivider';
import ContentSpotlight from '@/lib/Home/Components/ContentSpotlight/ContentSpotlight';
import QuoteSpotlight from '@/lib/Home/Components/QuoteSpotlight/QuoteSpotlight';

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
      <div className="w-full">
        <Hero />
        <CarouselBanner />
        <QuickLinks />
        <PhotoDivider />
        <ContentSpotlight />
        <QuoteSpotlight />
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
