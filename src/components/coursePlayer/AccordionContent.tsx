import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FiPlayCircle } from 'react-icons/fi';
import { RxReader } from 'react-icons/rx';

function AccordionContents() {
  return (
    <div className="grid">
      <div className="h-max w-full p-3 py-3  flex flex-col gap-1  justify-between text-gray-600 hover:bg-pink-100  text-[10px] font-medium ">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2 items-center ">
            <FiPlayCircle size={18} className="text-gray-800" />
            <p className="text-gray-700 text-[13px]">Lesson title</p>
          </div>
          <FaCheckCircle size={16} className="text-green-400" />
        </div>
        12 mins
      </div>
      <div className="h-max w-full p-3 py-3  flex flex-col gap-1  justify-between text-gray-600 hover:bg-pink-100  text-[10px] font-medium ">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2 items-center ">
            <FiPlayCircle size={18} className="text-gray-800" />
            <p className="text-gray-700 text-[13px]">Lesson title</p>
          </div>
        </div>
        12 mins
      </div>
      <div className="h-max w-full p-3 py-3  flex flex-col gap-1  justify-between text-gray-600 hover:bg-pink-100  text-[10px] font-medium ">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2 items-center ">
            <RxReader size={18} className="text-gray-800" />
            <p className="text-gray-700 text-[13px]">Read section</p>
          </div>
        </div>
        10 mins
      </div>
      <div className="h-max w-full p-3 py-3  flex flex-col gap-1  justify-between text-gray-600 hover:bg-pink-100  text-[10px] font-medium ">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2 items-center ">
            <FiPlayCircle size={18} className="text-gray-800" />
            <p className="text-gray-700 text-[13px]">Lesson title</p>
          </div>
        </div>
        12 mins
      </div>
    </div>
  );
}

export default AccordionContents;
