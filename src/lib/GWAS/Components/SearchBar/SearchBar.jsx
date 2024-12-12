import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const SearchBar = ({ searchTerm, handleSearch, field = 'variable name' }) => (
  <div data-tour="search-bar" className="GWASUI-searchContainer pr-4">
    <div>
      <TextInput
        className="GWASUI-searchInput text-sm"
        type="text"
        rightSection={<IconSearch />}
        placeholder={`Search by ${field}...`}
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  </div>
);

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  field: PropTypes.string.isRequired,
};

export default SearchBar;
