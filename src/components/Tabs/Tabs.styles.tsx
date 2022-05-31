import styled from 'styled-components';

export const TabsContainer = styled.ul`
  text-align: left;
  padding: 0em 0.5em;
`;

export const Tab = styled.li`
  padding: 5px 0px;
  display: inline-block;
  background: transparent;
  font-family: 'San Francisco Display Medium';
  font-size: 15px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -webkit-app-region: no-drag;
  &.active {
    color: #fbd159;
  }
`;
