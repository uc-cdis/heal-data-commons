/* import {
  ExplorerPage,
  ExplorerPageGetServerSideProps as getServerSideProps,
} from '@gen3/frontend';

import { registerCohortTableCustomCellRenderers } from '@/lib/CohortBuilder/CustomCellRenderers';
import { registerCustomExplorerDetailsPanels } from '@/lib/CohortBuilder/FileDetailsPanel';

registerCohortTableCustomCellRenderers();
registerCustomExplorerDetailsPanels();

export default ExplorerPage;

export { getServerSideProps }; */

/* import React, { JSX } from 'react';

import { registerCohortTableCustomCellRenderers } from '@/lib/CohortBuilder/CustomCellRenderers';
import { registerCustomExplorerDetailsPanels } from '@/lib/CohortBuilder/FileDetailsPanel';
import {
  ExplorerPage,
  ExplorerPageProps,
  ExplorerPageGetServerSideProps as getServerSideProps,
} from '@gen3/frontend';
import Layout from '@/lib/Layouts';

registerCohortTableCustomCellRenderers();
registerCustomExplorerDetailsPanels();

const GreenExplorerPage = (props: ExplorerPageProps): JSX.Element => {
  return (
    <Layout>
      <div style={{ backgroundColor: 'green' }}>
        <ExplorerPage {...props} />
      </div>
    </Layout>
  );
};

export default GreenExplorerPage;

export { getServerSideProps }; */

import React, { JSX } from 'react';
import { CohortBuilder, type CohortBuilderProps } from '@gen3/frontend';
import { ExplorerPageGetServerSideProps as getServerSideProps } from '@gen3/frontend';
import { useRouter } from 'next/router';
import Layout from '@/lib/Layouts';
// import your own header/footer here

const GreenExplorerPage = ({
  explorerConfig,
  tabsLayout,
  sharedFiltersMap,
}: CohortBuilderProps): JSX.Element => {
  const { query } = useRouter();
  const activeTab =
    typeof query.activeTab === 'string'
      ? query.activeTab
      : query.activeTab?.[0];

  return (
    <Layout>
      <div style={{ backgroundColor: 'green' }}>
        {/* your header here */}
        <CohortBuilder
          explorerConfig={explorerConfig}
          tabsLayout={tabsLayout}
          sharedFiltersMap={sharedFiltersMap}
        />
        {/* your footer here */}
      </div>
    </Layout>
  );
};

export default GreenExplorerPage;
export { getServerSideProps };
