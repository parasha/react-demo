import React from 'react';
import Tab from './tab';
import TabPanel from './tabPanel';


function Slot(){

  return (
    <div>
      <Tab>
        <TabPanel title='1'>
          <div>1：这是 content</div>
          <div>1：这个也是 content</div>
        </TabPanel>
        <TabPanel title='2'>
          <div>2：这是 content</div>
        </TabPanel>
      </Tab>
    </div>
  );
}

export default Slot;