import Image from 'next/image';
import React from 'react';
import { IoCheckmark } from 'react-icons/io5';

function CourseDetails() {
  return (
    <div className="flex flex-col  md:w-[55%] gap-5">
      <div className="text-[12px] text-gray-600 mt-2">
        Cyber Security Fundamentals
      </div>
      <Image
        src="/images/card3.svg"
        alt="card image"
        width={350}
        height={150}
        className="hidden md:flex"
      />
      <span className="text-[18px] font-extrabold">
        Cyber Security Fundamentals
      </span>
      <div className="text-[12px] font-medium text-gray-600">
        Are you an enthusiast, are you in the phase of transiting to Cyber
        Security and you are in need of grabbing the fundamental? This course is
        the right one for you as you will be going through the basis of what you
        need to know to start with practical intense labs and exercise. Having
        to understand the basis of confidentiality, integrity and availability
        (CIA), how they apply to individual businesses and nation states in
        their everyday activities. How information and systems on which they
        reside requires continuous protection to ensure their continuous
        servicing of business goals and objective.
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
