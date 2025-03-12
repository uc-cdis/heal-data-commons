import React from 'react';
import CardedPageContent from '@/lib/NewlyAvailableDatasets/CardedPageContent';
import newDatasetsPageConfig from '../../config/heal/newDatasets.json';
import PageTitle from '@/lib/HealNav/PageTitle';
import Layout from '@/lib/Layouts';

const NewlyAvailableDatasetsPage = () => {
  return (
    <Layout>
      <PageTitle pageName="Newly Available Datasets" />
      <div className="flex flex-row  justify-items-center">
        <div className="sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-xl mx-20">
          <CardedPageContent {...newDatasetsPageConfig} />
        </div>
      </div>
    </Layout>
  );
};

export default NewlyAvailableDatasetsPage;
