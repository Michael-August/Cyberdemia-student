import React from 'react';

import Checkout from '@/components/home/Checkout';
import { NavigationCrumbs } from '@/components/NavigationCrumbs';

const Page = () => {
  return (
    <>
      <NavigationCrumbs />
      <div className="flex items-center  w-[100vw] h-auto my-10">
        <Checkout />
      </div>
    </>
  );
};

export default Page;
