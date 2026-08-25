import React, { JSX } from 'react';
import { LoginPanel, } from '@gen3/frontend';
import { LoginPageGetServerSideProps as getServerSideProps } from '@gen3/frontend';
import Layout from '@/lib/Layouts';

const LoginPage = ({
  loginConfig,
}: any) => {
  return (
    <Layout>
      <LoginPanel {...loginConfig} />
    </Layout>
  );
};

export default LoginPage;
export { getServerSideProps };
