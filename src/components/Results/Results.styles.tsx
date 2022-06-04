import { colorPallete } from 'renderer/App.styles';
import styled from 'styled-components';

export const ResultsList = styled.ul`
  width: 100%;
  height: 100%
  overflow: auto;
  border-radius: 4px;
`;

export const ResultsListItem = styled.li`
  background-color: transparent;
  display: flex;
  position: relative;
  padding: 11px 0em 12px 18px;
  margin: -2px auto;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 4px;
  transition: opacity ease 0.3s, height ease 0.3s, margin ease 0.3s,
    padding ease 0.3s;
  color: ${colorPallete.text_primary};

  &:hover {
    background-color: ${colorPallete.secondary};
    color: ${colorPallete.text_primary_hover};
  }
`;
