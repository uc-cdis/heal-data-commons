import React, { JSX } from 'react';
import { CohortBuilder, type CohortBuilderProps } from '@gen3/frontend';
import { ExplorerPageGetServerSideProps as getServerSideProps } from '@gen3/frontend';
import Layout from '@/lib/Layouts';

const ExplorerPage = ({
  explorerConfig,
  tabsLayout,
  sharedFiltersMap,
}: CohortBuilderProps): JSX.Element => {
  return (
    <Layout>
      <CohortBuilder
        explorerConfig={explorerConfig}
        tabsLayout={tabsLayout}
        sharedFiltersMap={sharedFiltersMap}
      />
    </Layout>
  );
};

export default ExplorerPage;
export { getServerSideProps };
