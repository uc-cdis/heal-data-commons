import React from 'react';
import { Center, Text, Paper } from '@mantine/core';
import {
  NavPageLayout,
  NavPageLayoutProps,
  getNavPageLayoutPropsFromConfig,
} from '@gen3/frontend';
import { GetServerSideProps } from 'next';

const SamplePage = ({ headerProps, footerProps }: NavPageLayoutProps) => {
  return (
    <NavPageLayout
      {...{ headerProps, footerProps }}
      headerData={{
        title: 'Gen3 Sample Page',
        content: 'Sample Data',
        key: 'gen3-sample-page',
      }}
    >
      <div className="w-full m-10 bg-heal-light_purple">
        <Center>
          <Paper classNames={{
            root: "bg-heal-purple"
          }} shadow="md" p="xl" withBorder >
            <Text  className="text-gen3-white">This is a example custom page in Gen3</Text>
            <Text className="text-gen3-smoke">
              You can add your own content here, and add a link to this page in
              the navigation bar by editing the config file in navigation.json
            </Text>
          </Paper>
        </Center>
      </div>
    </NavPageLayout>
  );
};

// TODO: replace this with a custom getServerSideProps function
export const getServerSideProps: GetServerSideProps<
  NavPageLayoutProps
> = async () => {
  return {
    props: {
      ...(await getNavPageLayoutPropsFromConfig()),
    },
  };
};

export default SamplePage;
