import styled from 'styled-components';

export const ResultsList = styled.ul`
  -webkit-app-region: no-drag;
  width: 600px;
  margin: -5px auto;
  padding-top: 5px;
  height: 218px;
  overflow: auto;
  border-radius: 0 0 4px 4px;
`;

export const ResultsListItem = styled.li`
  background-color: transparent;
  display: flex;
  position: relative;
  color: rgba(255, 255, 255, 0.5);
  padding: 11px 0em 12px 18px;
  margin: -2px auto;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 0 0 4px 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: opacity ease 0.3s, height ease 0.3s, margin ease 0.3s,
    padding ease 0.3s;
`;
