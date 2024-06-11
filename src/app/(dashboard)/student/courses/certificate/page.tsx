'use client';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import Certificate from '@/components/courses/Certificate';
import { NavigationCrumbs } from '@/components/NavigationCrumbs';

const Page = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="px-5 flex gap-10 flex-col">
      <NavigationCrumbs />
      <Certificate ref={componentRef} />
      <button onClick={handlePrint} className=" bg-red-500">
        Print this out!
      </button>
    </div>
  );
};

export default Page;
