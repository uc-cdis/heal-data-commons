import React from 'react';
import { Button } from '@mantine/core';
import { atlasDomain } from '../../../Utils/cohortMiddlewareApi';

const AddCohortButton = () => (
  <Button
    data-tour="cohort-add"
    type="button"
    onClick={() => window.open(atlasDomain(), '_blank')}
  >
    Add New Cohort
  </Button>
);

export default AddCohortButton;
