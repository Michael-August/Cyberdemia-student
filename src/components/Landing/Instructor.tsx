import Image from 'next/image';
import React from 'react';
import { IoArrowForward } from 'react-icons/io5';

const Instructor = () => {
  return (
    <div className="instructor mt-20 lg:mt-32 flex items-center lg:flex-row flex-col-reverse gap-10">
      <div className="banner -mx-4 lg:mx-0 lg:hidden xl:block">
        <Image width={643} height={455} src="/images/instructor.svg" alt="" />
      </div>

      <div className="details w-full lg:w-[52.75rem]">
        <div className="title mb-4">
          <span className="text-2xl md:text-[2rem] font-semibold text-[#000000CC]">
            Are you a school owner, teacher or student who wants to create
            awareness on Cybersecurity in your School?
          </span>
        </div>
        <span className="text-base md:text-lg text-[#000000B2]">
          Our team will curate a Cybersecurity awareness course that will suite
          your students and teachers then organize hands-on classes based on
          your schedule.
        </span>
        <button className="flex items-center text-base md:text-lg justify-center font-semibold gap-2 py-4 px-5 md:py-5 md:px-[1.875rem] bg-[#2BDE48] text-white w-full mt-8">
          Request for Training
          <IoArrowForward size={22} />
        </button>
      </div>
    </div>
  );
};

export default Instructor;
