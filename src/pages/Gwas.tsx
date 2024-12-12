import React from 'react';
import {
  NavPageLayout,
  NavPageLayoutProps,
  getNavPageLayoutPropsFromConfig,
} from '@gen3/frontend';
import { GetServerSideProps } from 'next';
import GWASContainer from '@/lib/GWAS/GWASContainer';
import { MantineProvider, createTheme, Button } from '@mantine/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        color: 'cyan',
        variant: 'outline',
      },
    }),
  },
  colors: {
    // See here: https://mantine.dev/colors-generator/?color=2e77b8
    primary: [
      '#e8f6ff',
      '#d7e8f8',
      '#afcfeb',
      '#85b4df',
      '#2e77b8', // Default color for button
      '#2466ac', // hover color on button
      '#3d88cd',
      '#2d75b6',
      '#2268a4',
      '#085a92',
    ],
  },
  primaryColor: 'primary',
});

const Gwas = ({ headerProps, footerProps }: NavPageLayoutProps) => {
  return (
    <MantineProvider theme={theme}>
      <NavPageLayout
        {...{ headerProps, footerProps }}
        headerData={{
          title: 'Gwas',
          content: 'Gwas',
          key: 'Gwas',
        }}
      >
        <div className="w-full">
          <GWASContainer />
        </div>
      </NavPageLayout>
    </MantineProvider>
  );
};

export const getServerSideProps: GetServerSideProps<
  NavPageLayoutProps
> = async () => {
  return {
    props: {
      ...(await getNavPageLayoutPropsFromConfig()),
    },
  };
};

export default Gwas;
