import {
  StudyRegistrationForm,
  StudyRegistrationPageGetServerSideProps as getServerSideProps,
} from '@gen3/frontend/pages';
import type { StudyRegistrationFormConfig } from '@gen3/frontend/pages';
import Layout from '@/lib/Layouts';
import PageTitle from '@/lib/HealNav/PageTitle';

interface Props {
  configStudyRegistrationForm: StudyRegistrationFormConfig;
}

const StudyRegistrationPage = ({ configStudyRegistrationForm }: Props) => {
  return (
    <Layout>
      <PageTitle pageName="Study Registration" />
      <div className="flex justify-center items-start w-full">
        <StudyRegistrationForm
          configStudyRegistrationForm={configStudyRegistrationForm}
        />
      </div>
    </Layout>
  );
};

export { getServerSideProps };
export default StudyRegistrationPage;
