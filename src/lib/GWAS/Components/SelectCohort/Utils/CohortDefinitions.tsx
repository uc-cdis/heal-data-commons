import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useQuery } from 'react-query';
// import { Table, Spin, Radio } from 'antd';
import { IconDatabaseOff } from '@tabler/icons-react';
import { Loader, Table, Pagination, Radio } from '@mantine/core';

// import { fetchCohortDefinitions } from '../../../Utils/cohortMiddlewareApi';
// import queryConfig from '../../../../SharedUtils/QueryConfig';
import { useFetch, useFilter } from '../../../Utils/formHooks';
import { DataTable } from 'mantine-datatable';
// import { useSourceContext } from '../../../Utils/Source';

const CohortDefinitions = ({
  selectedCohort = undefined,
  handleCohortSelect,
  searchTerm,
  selectedTeamProject,
}) => {
  // State to manage selected row (only one row at a time)
  const [selectedRow, setSelectedRow] = useState(null);
  const [page, setPage] = useState(1); // Track current page
  const rowsPerPage = 10; // Number of rows to show per page

  // Handle row click
  /*
  const handleRowSelection = (rowKey: string) => {
    setSelectedRow((prevSelectedRow) =>
      prevSelectedRow === rowKey ? null : rowKey,
    );
  };
  */
  // const { source } = useSourceContext();

  /*
  const cohorts = useQuery(
    ['cohortdefinitions', source, selectedTeamProject],
    () => fetchCohortDefinitions(source, selectedTeamProject),
    // only call this once the source is not undefined
    { enabled: source !== undefined, ...queryConfig },
  );
  */
  const cohorts = [
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
  ];
  // const fetchedCohorts = useFetch(cohorts, 'cohort_definitions_and_stats');
  let displayedCohorts = useFilter(cohorts, searchTerm, 'cohort_name');
  displayedCohorts = displayedCohorts.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage,
  );

  const handleSelectCohort = (cohortId) => {
    setSelectedCohort(cohortId);
  };

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
  if (cohorts?.status === 'error')
    return <React.Fragment>Error getting data for table</React.Fragment>;

  cohorts.status = 'success';

  return cohorts?.status === 'success' ? (
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
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Select</Table.Th>
                <Table.Th>Cohort Name</Table.Th>
                <Table.Th>Size</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {displayedCohorts.map((cohort, i) => (
                <Table.Tr key={i}>
                  <Table.Td>
                    <Radio
                      value={cohort.cohort_definition_id}
                      checked={selectedCohort === cohort.cohort_definition_id}
                      onChange={() =>
                        handleCohortSelect(cohort.cohort_definition_id)
                      }
                      name="cohort-selection"
                    />
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

        <Pagination
          className="pt-5 flex justify-end"
          value={page}
          onChange={setPage}
          total={Math.ceil(cohorts.length / rowsPerPage)} // Calculate total pages
          color="blue"
          size="md"
          withEdges
        />
      </div>
    </>
  ) : (
    /*    <Table
      className="GWASUI-table1"
      rowKey="cohort_definition_id"
      size="middle"
      pagination={{
        defaultPageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '50', '100', '500'],
      }}
      onRow={(selectedRow) => ({
        onClick: () => {
          handleCohortSelect(selectedRow);
        },
      })}
      rowSelection={cohortSelection(selectedCohort)}
      columns={cohortTableConfig}
      dataSource={displayedCohorts}
    /> */
    <React.Fragment>
      <div className="GWASUI-spinnerContainer GWASUI-emptyTable">
        <Loader size="lg" variant="dots" />
      </div>
    </React.Fragment>
  );
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
