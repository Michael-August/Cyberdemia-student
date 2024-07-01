import React from 'react';

import Checkout from '@/components/home/Checkout';
import { NavigationCrumbs } from '@/components/NavigationCrumbs';

const Page = () => {
  return (
    <>
      <NavigationCrumbs />
      <div className="flex items-center justify-start w-[100vw] h-[80vh]">
        <Checkout />
      </div>
    </>
  );
};

export default Page;
