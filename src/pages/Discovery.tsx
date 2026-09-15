import {
  Discovery,
  DiscoveryPageGetServerSideProps as getServerSideProps,
} from '@gen3/frontend/pages';
import type { DiscoveryConfig } from '@gen3/frontend/pages';
import Layout from '@/lib/Layouts';
import PageTitle from '@/lib/HealNav/PageTitle';
import { registerDiscoveryCustomCellRenderers } from '@/lib/Discovery/CustomCellRenderers';

registerDiscoveryCustomCellRenderers();

interface Props {
  discoveryConfig: DiscoveryConfig;
}

const DiscoveryPage = ({ discoveryConfig }: Props) => {
  return (
    <Layout>
      <PageTitle pageName="Discovery" />
      <Discovery discoveryConfig={discoveryConfig} />
    </Layout>
  );
};

export { getServerSideProps };
export default DiscoveryPage;
