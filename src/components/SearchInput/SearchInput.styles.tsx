import styled from 'styled-components';

const fontColor = 'rgba(255, 255, 255, 0.5)';

export const StyledSearchInput = styled.input`
  font-family: 'San Francisco Display Ultralight';
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  margin: 0em auto;
  transition: margin ease 0.3s;
  -webkit-font-smoothing: auto;

  &:-webkit-input-placeholder {
    color: ${fontColor};
    padding-left: 0px;
    transition: all 0.2s ease;
  }

  &:-ms-input-placeholder {
    color: ${fontColor};
    padding-left: 0px;
    transition: all 0.2s ease;
  }

  &::-webkit-search-cancel-button {
    -webkit-app-region: no-drag;
    color: ${fontColor};
    padding-right: 10px;
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 10px;
`;

export default StyledSearchInput;
