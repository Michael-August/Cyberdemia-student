'use client';
import React, { useRef } from 'react';
import { IoIosShareAlt } from 'react-icons/io';
import { RiDownload2Line } from 'react-icons/ri';
import { useReactToPrint } from 'react-to-print';

import Certificate from '@/components/courses/Certificate';
import { NavigationCrumbs } from '@/components/NavigationCrumbs';

const Page = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="px-5 mt-14 mb-5 md:mt-0 md:mb-0 flex gap-10 flex-col overflow-x-hidden">
      <NavigationCrumbs />
      <Certificate ref={componentRef} />
      <div className="flex flex-col md:flex-row gap-5 mt-10">
        <button
          onClick={handlePrint}
          className=" bg-cp-secondary p-2 md:sw-max text-white text-[12px] flex justify-center items-end gap-2"
        >
          Download Certificate PDF
          <RiDownload2Line size={20} />
        </button>
        <button className="border  cursor-pointer border-black py-2 px-4 md:px-2  md:w-max text-black text-[12px] flex justify-center items-center gap-2">
          Share
          <IoIosShareAlt size={20} />
        </button>
      </div>
      <div className=" w-full md:w-1/2 text-[12px] text-gray-600">
        This certificate above verifies that John Doe successfully completed the
        course Cyber Security Defense Analyst on 24th May, 2024 as taught by
        CyberDemia. The certificate indicates the entire course was completed as
        validated by the student.
      </div>
    </div>
  );
};

export default Page;
