import React from 'react';
import Hero from '../lib/Home/Components/Hero/Hero';
import CarouselBanner from '../lib/Home/Components/CarouselBanner/CarouselBanner';
import QuickLinks from '../lib/Home/Components/QuickLinks/QuickLinks';
import PhotoDivider from '../lib/Home/Components/PhotoDivider/PhotoDivider';
import ContentSpotlight from '../lib/Home/Components/ContentSpotlight/ContentSpotlight';
import QuoteSpotlight from '../lib/Home/Components/QuoteSpotlight/QuoteSpotlight';
import PageTitle from '@/lib/HealNav/PageTitle';

const HealLandingPage = () => {
  return (
    <>
      <PageTitle pageName="Home" />
      <Hero />
      <CarouselBanner />
      <QuickLinks />
      <PhotoDivider />
      <ContentSpotlight />
      <QuoteSpotlight />
    </>
  );
};

export default HealLandingPage;
