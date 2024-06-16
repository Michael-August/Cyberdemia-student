'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';
function CardDetails() {
  const router = useRouter();
  return (
    <div className="bg-[#f9dff1] border-[1px]  border-gray-500  md:h-[230px] pr-20 p-5 flex flex-col gap-5">
      <div className="flex gap-4 items-center">
        <Image
          src="/images/details.svg"
          alt="card image"
          width={23}
          height={150}
          className=""
        />
        <div className="text-[12px] font-extrabold flex flex-row gap-2 ">
          <span>Course Instructor:</span>
          <span>Jane Doe (Cyber Security Expert)</span>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Image
          src="/images/time.svg"
          alt="card image"
          width={22}
          height={150}
          className=""
        />
        <div className="text-[12px] font-extrabold flex flex-row gap-2">
          <span>Total learning hours:</span>
          <span>6 hours 45 mins</span>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Image
          src="/images/video.svg"
          alt="card image"
          width={23}
          height={150}
          className=""
        />
        <div className="text-[12px] font-extrabold flex flex-row gap-2">
          <span>Lectures:</span>
          <span>6</span>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Image
          src="/images/box.svg"
          alt="card image"
          width={23}
          height={150}
          className=""
        />
        <div className="text-[12px] font-extrabold flex flex-row gap-2">
          <span>Resources:</span>
          <span>4 PDFs, 2 external links</span>
        </div>
      </div>
      <div onClick={() => router.push('home/dhjfhjdfh/ksks')}>
        <div className="bg-cp-secondary text-white w-[150px] py-2 flex justify-center items-center text-[13px] gap-2">
          Enroll now
          <GoArrowRight size={19} className="animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
