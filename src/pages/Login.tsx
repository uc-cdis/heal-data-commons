import {
  LoginPanel,
  LoginPageGetServerSideProps as getServerSideProps,
} from '@gen3/frontend/pages';
import type { LoginPageLayoutProps } from '@gen3/frontend/pages';
import Layout from '@/lib/Layouts';
import PageTitle from '@/lib/HealNav/PageTitle';

const LoginPage = ({ loginConfig }: LoginPageLayoutProps) => {
  return (
    <Layout>
      <PageTitle pageName="Login" />
      <div className="flex flex-row justify-items-center">
        <div className="sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-xl mx-20">
          <LoginPanel {...loginConfig} />
        </div>
      </div>
    </Layout>
  );
};

export { getServerSideProps };
export default LoginPage;
