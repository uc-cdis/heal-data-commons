import {
  VLMDSubmissionForm,
  VLMDSubmissionPageGetServerSideProps as getServerSideProps,
} from '@gen3/frontend/pages';
import type { VLMDSubmissionConfig } from '@gen3/frontend/pages';
import Layout from '@/lib/Layouts';
import PageTitle from '@/lib/HealNav/PageTitle';

interface Props {
  config: VLMDSubmissionConfig;
}

const VLMDSubmissionPage = ({ config }: Props) => (
  <Layout>
    <PageTitle pageName="VLMD Submission" />
    <VLMDSubmissionForm config={config} />
  </Layout>
);

export { getServerSideProps };
export default VLMDSubmissionPage;
