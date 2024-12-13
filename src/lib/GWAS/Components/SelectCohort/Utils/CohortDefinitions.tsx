import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useQuery } from 'react-query';
// import { Table, Spin, Radio } from 'antd';
import { IconDatabaseOff } from '@tabler/icons-react';
import { Loader, Table, Pagination, Radio, Select } from '@mantine/core';

// import { fetchCohortDefinitions } from '../../../Utils/cohortMiddlewareApi';
// import queryConfig from '../../../../SharedUtils/QueryConfig';
import { useFetch, useFilter } from '../../../Utils/formHooks';
// import { DataTable } from 'mantine-datatable';
// import { useSourceContext } from '../../../Utils/Source';
import useSWR from 'swr';

const CohortDefinitions = ({
  selectedCohort = undefined,
  handleCohortSelect,
  searchTerm,
  selectedTeamProject,
}) => {
  // State to manage selected row (only one row at a time)
  // const [selectedRow, setSelectedRow] = useState(null);
  const [page, setPage] = useState(1); // Track current page
  const [rowsPerPage, setRowsPerPage] = useState(10); // Number of rows to show per page

  // const { source } = useSourceContext();

  /*
  const cohorts = useQuery(
    ['cohortdefinitions', source, selectedTeamProject],
    () => fetchCohortDefinitions(source, selectedTeamProject),
    // only call this once the source is not undefined
    { enabled: source !== undefined, ...queryConfig },
  );
  */
  /*   const cohorts = [
    {
      cohort_definition_id: 573,
      cohort_name: 'team2 - test new cohort - catch all',
      size: 70240,
    },
    {
      cohort_definition_id: 559,
      cohort_name: 'test new cohort - catch all',
      size: 70240,
    },
    {
      cohort_definition_id: 574,
      cohort_name: 'team2 - test new cohort - medium + large',
      size: 23800,
    },
    {
      cohort_definition_id: 575,
      cohort_name: 'team2 - test new cohort - small',
      size: 80,
    },
  ]; */
  // const fetchedCohorts = useFetch(cohorts, 'cohort_definitions_and_stats');

  // SWR CODE
  const mockAPIEndpoint = `https://6759f999099e3090dbe376bc.mockapi.io/cohort-middleware/cohortdefination-stats#${selectedTeamProject}`;
  const { data, error, isLoading } = useSWR(mockAPIEndpoint, (...args) =>
    fetch(...args).then((res) => res.json()),
  );
  let displayedCohorts = useFilter(data, searchTerm, 'cohort_name');

  /*
  const handleSelectCohort = (cohortId) => {
    setSelectedCohort(cohortId);
  };
 */
  /*
  const cohortSelection = (inputSelectedCohort) => ({
    type: 'radio',
    columnTitle: 'Select',
    selectedRowKeys: inputSelectedCohort
      ? [inputSelectedCohort.cohort_definition_id]
      : [],
    onChange: (_, selectedRows) => {
      handleCohortSelect(selectedRows[0]);
    },
    renderCell: (checked, record) => null,

    */
  /*      <Radio
        checked={checked}
        value={record.cohort_definition_id}
        aria-label={'Row action: study population selection'}
      />
  });*/
  /*
  const cohortTableConfig = [
    {
      title: 'Cohort Name',
      dataIndex: 'cohort_name',
      key: 'cohort_name',
    },
    {
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
    },
  ];
  */
  if (error)
    return <React.Fragment>Error getting data for table</React.Fragment>;

  if (isLoading)
    return (
      <React.Fragment>
        <div className="GWASUI-spinnerContainer GWASUI-emptyTable flex justify-center pt-8 min-h-[300px]">
          <Loader size="lg" variant="dots" />
        </div>
      </React.Fragment>
    );

  if (data) {
    displayedCohorts = displayedCohorts.slice(
      (page - 1) * rowsPerPage,
      page * rowsPerPage,
    );
    return (
      <>
        {/*}
      <DataTable
        striped
        highlightOnHover
        withTableBorder
        withColumnBorders
        records={cohorts}
        columns={[
          { accessor: 'cohort_name', title: 'Cohort Name' },
          { accessor: 'size' },
        ]}
        selectedRowKeys={selectedRow ? [selectedRow] : []} // Only allow one selection
        onRowClick={(rowKey) => handleRowSelection(rowKey)}
        rowSelection={{
          type: 'radio', // Ensures that only one row can be selected at a time
          selectedRowKeys: selectedRow ? [selectedRow] : [],
          onChange: (keys) => setSelectedRow(keys[0] || null),
        }}
      />
      */}
        {/* VANILLA TABLE */}
        <div className="w-full min-h-[200px] py-5">
          {displayedCohorts?.length > 0 ? (
            <Table className="shadow">
              <Table.Thead className="bg-vadc-slate_blue font-light">
                <Table.Tr>
                  <Table.Th>Select</Table.Th>
                  <Table.Th>Cohort Name</Table.Th>
                  <Table.Th>Size</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {displayedCohorts.map((cohort, i) => (
                  <Table.Tr
                    key={i}
                    className={i % 2 ? 'bg-vadc-alternate_row' : ''}
                  >
                    <Table.Td>
                      <input
                        type="radio"
                        id={`radio-buttion-${i}`}
                        checked={selectedCohort === cohort.cohort_definition_id}
                        onChange={() => {
                          handleCohortSelect(cohort.cohort_definition_id);
                        }}
                      />
                      <label htmlFor={`radio-buttion-${i}`} className="sr-only">
                        Select this row
                      </label>
                    </Table.Td>
                    <Table.Td>{cohort.cohort_name}</Table.Td>
                    <Table.Td>{cohort.size}</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          ) : (
            <div className="flex flex-col items-center justify-center py-10">
              <div>
                <IconDatabaseOff />
              </div>
              <div>No Data</div>
            </div>
          )}
          <div
            data-testid="pagination-controls"
            className="flex justify-between w-full"
          >
            <Pagination
              className="pt-5 flex justify-end"
              value={page}
              onChange={setPage}
              total={Math.ceil(data.length / rowsPerPage)} // Calculate total pages
              color="blue"
              size="md"
              withEdges
            />
            <Select
              className="pt-5 pl-3 w-32"
              value={rowsPerPage.toString()}
              onChange={(value) => setRowsPerPage(Number(value))}
              size="sm"
              data={[
                { value: '10', label: '10 /page' },
                { value: '20', label: '20 /page' },
                { value: '50', label: '50 /page' },
                { value: '100', label: '100 /page' },
              ]}
            />
          </div>
        </div>
      </>
    );
  }
};

CohortDefinitions.propTypes = {
  selectedCohort: PropTypes.any,
  handleCohortSelect: PropTypes.any.isRequired,
  searchTerm: PropTypes.string.isRequired,
  selectedTeamProject: PropTypes.string.isRequired,
};

CohortDefinitions.defaultProps = {
  selectedCohort: undefined,
};

export default CohortDefinitions;
