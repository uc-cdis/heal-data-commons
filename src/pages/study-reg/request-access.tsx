import {
  GenericRegistrationAccessRequestForm,
  StudyRegistrationAccessRequestPageGetServerSideProps as getServerSideProps,
} from '@gen3/frontend/pages';
import type { GenericRegistrationAccessRequestFormConfig } from '@gen3/frontend/pages';
import Layout from '@/lib/Layouts';
import PageTitle from '@/lib/HealNav/PageTitle';

interface Props {
  config: GenericRegistrationAccessRequestFormConfig;
}

const StudyRegistrationAccessRequestPage = ({ config }: Props) => {
  return (
    <Layout>
      <PageTitle pageName="Study Registration Access Request" />
      <div className="w-full max-w-2xl mx-auto px-6">
        <GenericRegistrationAccessRequestForm config={config} />
      </div>
    </Layout>
  );
};

export { getServerSideProps };
export default StudyRegistrationAccessRequestPage;
