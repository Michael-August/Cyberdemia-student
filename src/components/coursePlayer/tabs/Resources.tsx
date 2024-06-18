import Image from 'next/image';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

function Resources() {
  return (
    <div className="pb-20 pt-5">
      <div className="border border-gray-700 text-gray-800 text-[12px] h-max w-[35%]  ">
        <div className="p-4 flex justify-between items-center">
          <div>
            Downloadable file <span>(4) </span>
          </div>
          <IoIosArrowDown size={20} className="text-gray-700" />
        </div>
      </div>
      <div className="border border-gray-700 text-gray-800 text-[12px] border-t-0 h-max w-[35%]  ">
        <div className="p-4 flex flex-col justify-between  gap-3">
          <div className="flex gap-2 items-center">
            Document Title
            <Image src="/images/cloud.svg" alt="cloud" width={25} height={40} />
          </div>
          <div className="flex gap-2 items-center">
            Document Title
            <Image src="/images/cloud.svg" alt="cloud" width={25} height={40} />
          </div>
          <div className="flex gap-2 items-center">
            Document Title
            <Image src="/images/cloud.svg" alt="cloud" width={25} height={40} />
          </div>
          <div className="flex gap-2 items-center">
            Document Title
            <Image src="/images/cloud.svg" alt="cloud" width={25} height={40} />
          </div>
        </div>
      </div>
      <div className="border border-gray-700 text-gray-800 text-[12px] border-t-0 h-max w-[35%]  ">
        <div className="p-4 flex justify-between items-center">
          <div>
            External Resource <span>(4) </span>
          </div>
          <IoIosArrowDown size={20} className="text-gray-700" />
        </div>
      </div>
      <div className="border border-gray-700 text-gray-800 text-[12px] border-t-0 h-max w-[35%]  ">
        <div className="p-4 flex flex-col justify-between  gap-4">
          <div className="flex gap-2 items-center">
            Test documents
            <Image src="/images/chain.svg" alt="cloud" width={18} height={40} />
          </div>
          <div className="flex gap-2 items-center">
            Reference Reads
            <Image src="/images/chain.svg" alt="cloud" width={18} height={40} />
          </div>
          <div className="flex gap-2 items-center">
            Related Articles
            <Image src="/images/chain.svg" alt="cloud" width={18} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
