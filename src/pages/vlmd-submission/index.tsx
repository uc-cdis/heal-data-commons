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
    <div className="px-32">
      <VLMDSubmissionForm config={config} />
    </div>
  </Layout>
);

export { getServerSideProps };
export default VLMDSubmissionPage;
