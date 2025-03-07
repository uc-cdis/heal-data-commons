import Head from 'next/head';

interface PageTitleProps {
  pageName: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ pageName }) => {
  return (
    <Head>
      <title>{`${pageName} | HEAL Data Platform`}</title>
    </Head>
  );
};

export default PageTitle;
