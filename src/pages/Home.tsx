import React from 'react';
import {
  NavPageLayout,
  NavPageLayoutProps,
  getNavPageLayoutPropsFromConfig,
} from '@gen3/frontend';
import { GetServerSideProps } from 'next';
import Hero from '../lib/Home/Components/Hero/Hero';
import CarouselBanner from '../lib/Home/Components/CarouselBanner/CarouselBanner';
import QuickLinks from '../lib/Home/Components/QuickLinks/QuickLinks';
import PhotoDivider from '../lib/Home/Components/PhotoDivider/PhotoDivider';
import ContentSpotlight from '../lib/Home/Components/ContentSpotlight/ContentSpotlight';
import QuoteSpotlight from '../lib/Home/Components/QuoteSpotlight/QuoteSpotlight';
import HealHeader from '@/lib/HealNav/HealHeader';
import HealFooter from '@/lib/HealNav/HealFooter';

const HealLandingPage = ({ headerProps, footerProps }: NavPageLayoutProps) => {
  // Included as placeholders for now.
  headerProps;
  footerProps;

  return (
    <div className="w-full">
      <HealHeader />
      <Hero />
      <CarouselBanner />
      <QuickLinks />
      <PhotoDivider />
      <ContentSpotlight />
      <QuoteSpotlight />
      <HealFooter />
    </div>
  );
};

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
