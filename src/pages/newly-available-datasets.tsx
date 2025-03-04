import React from 'react';
import HealHeader from '@/lib/HealNav/HealHeader';
import HealFooter from '@/lib/HealNav/HealFooter';
import CardedPageContent from '@/lib/NewlyAvailableDatasets/CardedPageContent';
import newDatasetsPageConfig from '../../config/heal/newDatasets.json';

const NewlyAvailableDatasetsPage = () => {
  return (
    <div className="w-full">
      <HealHeader />
      <div className="flex flex-row  justify-items-center">
        <div className="sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-xl mx-20">
          <CardedPageContent {...newDatasetsPageConfig} />
        </div>
      </div>
      <HealFooter />
    </div>
  );
};

export default NewlyAvailableDatasetsPage;
