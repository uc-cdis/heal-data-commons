import { GetServerSideProps } from 'next';
import React from 'react';
import HealFooter from '@/lib/HealNav/HealFooter';

const StandaloneFooterPage = () => {
  return (
    <div className="w-full">
      <HealFooter />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default StandaloneFooterPage;
