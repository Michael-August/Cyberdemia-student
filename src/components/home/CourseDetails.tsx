import Image from 'next/image';
import React from 'react';
import { IoCheckmark } from 'react-icons/io5';

function CourseDetails({ details }: any) {
  return (
    <div className="flex flex-col  md:w-[55%] gap-5">
      <div className="text-[12px] text-gray-600 mt-2">{details?.subtitle}</div>
      <Image
        src="/images/card3.svg"
        alt="card image"
        width={350}
        height={150}
        className="hidden md:flex"
      />
      <span className="text-[18px] font-extrabold">{details?.title}</span>
      <div className="text-[12px] font-medium text-gray-600">
        {/* {details?.description || ''} */}
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:items-center">
        <Image
          src="/images/certificate2.svg"
          alt="certificate"
          width={70}
          height={150}
          className=""
        />
        <div>
          <h1 className="text-[14px] font-extrabold">
            Earn Certificate on completion
          </h1>
          <div className="flex gap-2">
            <IoCheckmark />
            <span className="text-[12px] font-bold text-gray-600">
              Download or print out certificate as PDF
            </span>
          </div>
          <div className="flex gap-2">
            <IoCheckmark />
            <span className="text-[12px] font-bold text-gray-600">
              Share online to show your skill
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
