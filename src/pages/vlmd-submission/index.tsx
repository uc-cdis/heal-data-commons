import {
  GenericRegistrationAccessRequestForm,
  VLMDSubmissionAccessRequestPageGetServerSideProps as getServerSideProps,
} from '@gen3/frontend/pages';
import type { GenericRegistrationAccessRequestFormConfig } from '@gen3/frontend/pages';
import Layout from '@/lib/Layouts';
import PageTitle from '@/lib/HealNav/PageTitle';

interface Props {
  config: GenericRegistrationAccessRequestFormConfig;
}

const VLMDSubmissionPage = ({ config }: Props) => {
  return (
    <Layout>
      <PageTitle pageName="VLMD Submission" />
      <div className="flex flex-row justify-items-center">
        <div className="sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-xl mx-20">
          <GenericRegistrationAccessRequestForm config={config} />
        </div>
      </div>
    </Layout>
  );
};

export { getServerSideProps };
export default VLMDSubmissionPage;
