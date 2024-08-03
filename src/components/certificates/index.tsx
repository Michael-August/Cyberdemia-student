'use client';

import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';

import { Button } from '../button';
import { Tab, Tabs } from '../ui/Tab';
import Completed from '../courses/tabs/Completed';
import InProgess from '../courses/tabs/InProgess';

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
