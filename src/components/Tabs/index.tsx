import React from 'react';
import { GrSearch } from 'react-icons/gr';
import { useLocation } from 'react-router-dom';
import { Tab, TabLink, TabsContainer } from './Tabs.styles';

type TabsProps = {
  className?: string;
};

const Tabs: React.FC<TabsProps> = ({ className }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const tabs = [
    {
      name: 'Search',
      path: '/',
      icon: <GrSearch />,
    },
    {
      name: 'Servers',
      path: '/servers',
      icon: null,
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: null,
    },
  ];

  return (
    <TabsContainer id="tabs" className={className}>
      {tabs.map((item) => (
        <TabLink to={item.path}>
          <Tab key={item.name} className={isActive(item.path) ? 'active' : ''}>
            {item.icon}
            {item.name}
          </Tab>
        </TabLink>
      ))}
    </TabsContainer>
  );
};

export default Tabs;
