import React, { forwardRef } from 'react';
import { StyledSearchInput } from './SearchInput.styles';

type SearchInputProps = {
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
};

const SearchInput: React.FC<SearchInputProps> = forwardRef(
  ({ onChange, className }, ref) => {
    return (
      <StyledSearchInput
        className={className}
        id="searchBox"
        ref={ref}
        onChange={onChange}
        type="search"
        placeholder="Search for..."
      />
    );
  }
);

export default SearchInput;
