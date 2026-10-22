import React from 'react';
import {
  WorkspaceRequestForm,
  WorkspacePageGetServerSideProps as getServerSideProps,
} from '@gen3/frontend/pages';
import type { WorkspacePageLayoutProps } from '@gen3/frontend/pages';
import Layout from '@/lib/Layouts';
import PageTitle from '@/lib/HealNav/PageTitle';

const WorkspaceRequestAccessPage = ({
  workspaceProps,
}: WorkspacePageLayoutProps) => {
  return (
    <Layout>
      <PageTitle pageName="Workspace Request Access" />
      <div className="w-full max-w-2xl mx-auto px-6 py-4">
        {workspaceProps?.requestAccessForm && (
          <WorkspaceRequestForm
            requestAccessForm={workspaceProps.requestAccessForm}
          />
        )}
      </div>
    </Layout>
  );
};

export { getServerSideProps };
export default WorkspaceRequestAccessPage;
