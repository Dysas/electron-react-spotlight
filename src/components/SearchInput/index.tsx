import React, { forwardRef } from 'react';
import { GrSearch } from 'react-icons/gr';
import { SearchContainer, StyledSearchInput } from './SearchInput.styles';

type SearchInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onChange }: SearchInputProps, ref) => {
    return (
      <SearchContainer>
        <GrSearch />
        <StyledSearchInput
          id="searchBox"
          ref={ref}
          onChange={onChange}
          type="search"
          placeholder="Search for..."
          onBlur={(e) => e.currentTarget.focus()}
        />
      </SearchContainer>
    );
  }
);

export default SearchInput;
