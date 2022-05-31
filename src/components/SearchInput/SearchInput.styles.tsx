import styled from 'styled-components';

export const StyledSearchInput = styled.input`
  font-family: 'San Francisco Display Ultralight';
  width: 100%;
  font-size: 24px;
  background-color: transparent;
  border: none;
  color: white;
  padding: 0.5em 1em 0.5em 0.5em;
  outline: none;
  margin: 0em auto;
  transition: margin ease 0.3s;
  -webkit-font-smoothing: auto;

  &:-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.3);
    padding-left: 0px;
    transition: all 0.2s ease;
  }

  &:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.3);
    padding-left: 0px;
    transition: all 0.2s ease;
  }

  &:-webkit-search-cancel-button {
    -webkit-app-region: no-drag;
  }
`;
