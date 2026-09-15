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
      <div className="flex justify-center items-start w-full">
        <GenericRegistrationAccessRequestForm config={config} />
      </div>
    </Layout>
  );
};

export { getServerSideProps };
export default StudyRegistrationAccessRequestPage;
