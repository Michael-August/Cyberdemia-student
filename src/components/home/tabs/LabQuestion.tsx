'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';

import QuestionList from '../QuestionList';

function LabQuestion() {
  const router = useRouter();
  return (
    <div className="md:w-[55%] flex flex-col gap-7 pb-20 pt-8 px-2 md:px-0">
      <div className="flex flex-col gap-4 text-[12px] text-gray-600">
        <h1 className=" text-[14px] text-black">Requirements</h1>
        <span>
          orem ipsum dolor sit amet consectetur. Ut porttitor et viverra
          malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id
          pellentesque interdum.Vestibulum convallis velit feugiat aliquam
          pellentesque etiam.
        </span>
      </div>
      <div className=" border-[1px]  border-gray-500 w-[60%]  p-5 flex flex-col gap-5">
        <div className="flex gap-4 items-center">
          <Image
            src="/images/lock.svg"
            alt="card image"
            width={23}
            height={150}
            className=""
          />
          <div className="text-[12px] font-extrabold flex flex-row gap-2 ">
            <span>Zip file password:</span>
            <span>cyberdemia.com</span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Image
            src="/images/list.svg"
            alt="card image"
            width={22}
            height={150}
            className=""
          />
          <div className="text-[12px] font-extrabold flex flex-row gap-2">
            <span>Questions:</span>
            <span>8</span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Image
            src="/images/database.svg"
            alt="card image"
            width={23}
            height={150}
            className=""
          />
          <div className="text-[12px] font-extrabold flex flex-row gap-2">
            <span>File size:</span>
            <span>3mb</span>
          </div>
        </div>
        <div onClick={() => router.push('home/dhjfhjdfh/ksks')}>
          <div className="bg-cp-secondary text-white px-2 py-2 flex justify-center items-center text-[13px] gap-2">
            Enroll now to Access Labs
            <GoArrowRight size={19} className="animate-pulse" />
          </div>
        </div>
      </div>
      <QuestionList />
      <div className="flex flex-col gap-3 mt-3">
        <h1 className=" text-[14px] font-extrabold">
          Learn how to answer Virtual labs questions
        </h1>
        <span className="text-[12px] text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra
          malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id
          pellentesque interdum. Vestibulum convallis velit feugiat aliquam
          pellentesque etiam. In posuere purus aliquet dolor pretium eget
          dictum.
        </span>
      </div>
      <div className="border grid w-[240px] justify-center gap-4 border-black p-3">
        <Image
          src="/images/videoPlay.svg"
          alt="card image"
          width={200}
          height={150}
          className=""
        />
        <div className="text-[14px] font-extrabold">
          Watch a video tutorials on how to use Virtual Labs.
        </div>
      </div>
    </div>
  );
}

export default LabQuestion;
