import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';
function CompletedCourse() {
  const Router = useRouter();
  const handleClick = () => Router.push('/student/courses/certificate');
  return (
    <div className="h-[153px] w-[382px] md:w-[752px] bg-[#f8cfeb] p-5 flex gap-5">
      <div className="hidden md:flex">
        <Image
          src="/images/completedCourses.svg"
          alt="Completed Courses"
          width={100}
          height={100}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 justify-between">
        <span className="text-[14px] font-extrabold ">
          Cyber Security Defense Analyst
        </span>
        <div className="flex items-center gap-2">
          <Image
            src="/images/CheckCircle.svg"
            alt="Check Circle"
            width={25}
            height={25}
            className="cursor-pointer"
          />
          <span className="text-[10px] text-gray-700 ">
            4/8 Lessons Completed
          </span>
        </div>
        <div className="flex justify-end gap-4">
          <div className="border  cursor-pointer border-black py-2 px-4 md:px-2 w-[90%] md:w-auto text-black text-[12px] flex justify-center items-center gap-2">
            Rate Course
            <Image
              src="/images/starImage.svg"
              alt="Star"
              width={15}
              height={15}
              className="cursor-pointer"
            />
          </div>
          <div
            className="bg-cp-secondary cursor-pointer py-2 px-4 md:px-2 w-[90%] md:w-auto text-white text-[12px] flex justify-center items-center gap-2"
            onClick={handleClick}
          >
            View Certificate
            <GoArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedCourse;
