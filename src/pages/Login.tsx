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
      <div className="flex justify-center items-start w-full">
        <LoginPanel {...loginConfig} />
      </div>
    </Layout>
  );
};

export { getServerSideProps };
export default LoginPage;
