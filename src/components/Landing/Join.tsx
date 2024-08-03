import Image from 'next/image';
import React from 'react';
import { IoArrowForward } from 'react-icons/io5';

const Join = () => {
  return (
    <div className="flex mt-20 flex-col xl:flex-row xl:mt-32">
      <div className="bg-[#571C42] flex flex-col justify-center innerbg xl:p-[2rem] py-[2rem] xl:flex-1 px-[0.9375rem] -mx-4 md:mx-0">
        <div className="heading flex mb-5">
          <span className="text-white font-semibold text-base">
            Join the CyberDermia Team as a Learner or Instructor
          </span>
        </div>
        <div className="mb-8">
          <span className="text-white text-sm">
            Your in-house team will learn to approach cybersecurity offensively
            and defensively through real-world examples and exercises, hands-on
            labs and expert instruction. Training is essential to preparing the
            cybersecurity workforce of tomorrow, and for keeping current
            cybersecurity workers up-to-date on skills and evolving threats.{' '}
          </span>
        </div>
        <div className="buttons flex flex-wrap md:gap-6 gap-3 w-full">
          <button className="md:py-5 md:px-[1.875rem] px-5 py-[0.9375rem] flex items-center gap-2 hover:bg-cp-secondary hover:text-white transition-all text-cp-secondary bg-white font-bold text-sm">
            Enroll Now
            <IoArrowForward size={22} className="text-cp-secondary hover:text-white" />
          </button>
          <button className="md:py-5 md:px-[1.875rem] px-5 py-[0.9375rem] flex items-center gap-2 hover:bg-cp-secondary hover:text-white transition-all text-cp-secondary bg-white font-bold text-sm">
            Become an Instructor
            <IoArrowForward size={22} className="text-cp-secondary hover:text-white" />
          </button>
        </div>
      </div>
      <div className="hidden xl:block -mx-4">
        <Image
          width={474}
          height={453}
          className="-mx-4 md:mx-0"
          src="/images/student.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Join;
