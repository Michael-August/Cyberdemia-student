'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';

interface RecommendedCourseProps {
  availableCourses: string;
  image: string | StaticImageData;
  title: string;
  body: string;
  isCourseComing: boolean;
  isCourseAvailable: boolean;
  handleClick: () => void;
}

const RecommendedCourse: React.FC<RecommendedCourseProps> = ({
  availableCourses,
  image,
  title,
  body,
  isCourseComing,
  isCourseAvailable,
  handleClick,
}) => {
  return (
    <div className="border-[1px] border-[#AC1D7E]  w-[325px] mb-20 p-5 flex flex-col gap-4 relative">
      {isCourseAvailable && (
        <div className="py-1 px-1 border-[1.5px] w-[110px] border-[#AC1D7E] text-[10px] font-bold text-[#AC1D7E]">
          {availableCourses}
        </div>
      )}
      {isCourseComing && (
        <div className="py-1  border-[1px] w-[90px] bg-green-500 border-white rounded-[100px] text-[10px] font-extrabold text-white absolute top-7 left-7 justify-center flex items-center">
          Coming Soon
        </div>
      )}
      <div>
        <Image
          src={image}
          alt="Course Image"
          width={350}
          height={50}
          className="cursor-pointer"
        />
      </div>
      <span className="text-[14px] font-extrabold overflow-hidden">
        {title}
      </span>
      <span className="text-[12px] font-normal h-[140px] overflow-auto no-scrollbar">
        {body}
      </span>
      <div className="flex items-center gap-2">
        <Image
          src="/images/Certificate.svg"
          alt="Certificate Icon"
          width={30}
          height={50}
          className="cursor-pointer"
        />
        <div className="text-[14px] font-extrabold">Earn Certificates</div>
      </div>
      <div className="flex justify-end cursor-pointer">
        <div onClick={handleClick}>
          <div className="bg-cp-secondary text-white w-[150px] py-3 flex justify-center items-center text-[13px] gap-2">
            Explore Courses
            <GoArrowRight size={19} className="animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCourse;
