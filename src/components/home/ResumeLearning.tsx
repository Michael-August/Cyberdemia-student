import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';

import { Subscription } from '../../../types/SubscribedCourse.type';

function ResumeLearning({ course }: { course: Subscription }) {
  const Router = useRouter();
  const handleClick = () => Router.push(`courses/${course?.course.id}`);

  return (
    <div className="h-[153px] w-[100%] md:w-[752px] bg-[#f8cfeb] pl-0 md:pl-5 p-5 flex gap-5">
      <div>
        <div className="hidden md:flex">
          <Image
            src="/images/home1.svg"
            alt="Menu"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <span className="text-[14px] font-extrabold">
          {course?.course?.title}
        </span>
        <div>
          <span className="text-[10px] flex justify-end text-gray-700 ">
            {course.completedSections.length}/{course.course.sections.length}{' '}
            Lessons Completed
          </span>
          <div className="h-[10px] w-[100%] md:w-[567px] bg-white">
            <div
              style={{ width: `${course.progressPercentage}%` }}
              className={`h-full bg-[#5595F5] `}
            ></div>
          </div>
        </div>
        <div className="flex md:justify-end mt-3 md:mt-0">
          <div
            className="bg-cp-secondary hover:bg-pink-700  py-2 w-[100%] md:w-[158px] text-white text-[12px] cursor-pointer flex justify-center items-center gap-2"
            onClick={handleClick}
          >
            Resume Learning
            <GoArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeLearning;
