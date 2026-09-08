import React from 'react';
import {
  NavPageLayout,
  NavPageLayoutProps,
  getNavPageLayoutPropsFromConfig,
} from '@gen3/frontend';
import type { GetServerSideProps } from 'next';

const VLMDSubmissionAccessRequestPage = ({
  headerProps,
  footerProps,
}: NavPageLayoutProps) => {
  return (
    <NavPageLayout
      headerProps={headerProps}
      footerProps={footerProps}
      headerMetadata={{
        title: 'VLMD Submission Access Request',
        content: 'VLMD Submission Access Request',
        key: 'vlmd-submission-access-request',
      }}
    >
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800">
          VLMD Submission Access Request
        </h1>
      </div>
    </NavPageLayout>
  );
};

export default VLMDSubmissionAccessRequestPage;

export const getServerSideProps: GetServerSideProps<NavPageLayoutProps> =
  async () => {
    return {
      props: {
        ...(await getNavPageLayoutPropsFromConfig()),
      },
    };
  };
