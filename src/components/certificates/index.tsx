'use client';

import Completed from '../courses/tabs/Completed';
import { Tab, Tabs } from '../ui/Tab';

const Certificates = () => {
  return (
    <div>
      <Tabs>
        <Tab title="Completed Course">
          {/* <InProgess /> */}
          <Completed />
        </Tab>
        <Tab title="Custom Training Courses">Incoming!!</Tab>
      </Tabs>
    </div>
  );
};

export default Certificates;
