import { NavLink } from 'react-router-dom';
import { colorPallete } from 'renderer/App.styles';
import styled from 'styled-components';

export const TabLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 3px;
  text-decoration: none;
  color: inherit;
`;

export const Tab = styled.li`
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  gap: 3px;
  padding: 5px 10px;
  background: transparent;
  font-family: 'San Francisco Display Medium';
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  color: ${colorPallete.text_primary};
  border-radius: 4px;

  &.active,
  &:hover {
    background-color: ${colorPallete.button_hover};
    color: ${colorPallete.text_primary_hover};
    path {
      stroke: ${colorPallete.icon_hover};
    }
  }
`;

export const TabsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  text-align: left;
  padding: 0em 0.5em;
`;
