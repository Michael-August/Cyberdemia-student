import Image from 'next/image';
import React from 'react';

import { Course } from '../../../../types/Course.type';

function CourseOverview({ details }: { details: Course | null }) {
  return (
    <div className="w-full  md:w-[55%] flex flex-col gap-7 pb-20 pt-8 px-2 md:px-0">
      <div>
        <h1 className="text-[13px] font-extrabold pb-1">Course Objectives:</h1>
        <div
          dangerouslySetInnerHTML={{ __html: details?.objective as string }}
        />
      </div>

      <div>
        <h1 className="text-[13px] font-extrabold pb-1">
          Prerequisite for learning:
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: details?.prerequisite as string }}
        />
      </div>
      <h1 className="text-[15px] font-extrabold pt-10 ">Instructor</h1>
      <div className="flex flex-col gap-5">
        <div className="flex gap-3 items-center">
          <Image
            src="/images/instructor.svg"
            alt="instructor Icon"
            width={50}
            height={50}
            className="cursor-pointer rounded-full "
          />
          <div>
            <h1 className="text-[13px] font-extrabold">
              {details?.courseInstructor?.email}
            </h1>
            <span className="text-[11px] font-bold text-gray-600">
              {/* (Cyber Security Expert) */}
            </span>
          </div>
        </div>
        <span className="text-[12px] font-normal text-gray-600"></span>
      </div>
    </div>
  );
}

export default CourseOverview;
