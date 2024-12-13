import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const SearchBar = ({ searchTerm, handleSearch, field = 'variable name' }) => (
  <div data-tour="search-bar" className="text-sm w-64">
    <TextInput
      type="text"
      rightSection={<IconSearch size={16} />}
      placeholder={`Search by ${field}...`}
      value={searchTerm}
      onChange={(e) => handleSearch(e.target.value)}
      styles={{
        placeholder: {
          fontSize: '10px',
        },
      }}
    />
  </div>
);

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  field: PropTypes.string.isRequired,
};

export default SearchBar;
