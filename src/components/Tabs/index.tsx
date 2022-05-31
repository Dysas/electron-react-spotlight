import React from 'react';
import { Tab, TabsContainer } from './Tabs.styles';

type TabsProps = {
  className?: string;
};

const Tabs: React.FC<TabsProps> = ({ className }) => {
  return (
    <TabsContainer id="tabs" className={className}>
      <Tab id="run" className="active">
        search
      </Tab>
    </TabsContainer>
  );
};

export default Tabs;
