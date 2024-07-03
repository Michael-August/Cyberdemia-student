'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import CustomCourse from '@/components/home/CustomCourse';
import RecomendedCourse from '@/components/home/RecomendedCourse';
import ResumeLearning from '@/components/home/ResumeLearning';

import { useLayoutContext } from '../../../../../context/LayoutContext';
const Home = () => {
  const { dispatch } = useLayoutContext();

  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'dashboardNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'defaultSidebar' });
  }, [dispatch]);
  const router = useRouter();
  return (
    <div className="flex flex-col gap-8 overflow-x-hidden mt-12 md:mt-5  h-[100%] px-4 md:px-0">
      <div className="flex flex-col gap-2 ">
        <span className="text-sm font-extrabold text-[#AC1D7E]">
          In Progress
        </span>
        <div className="">
          <div className="w-[108px] h-[7px] bg-[#AC1D7E]"></div>
          <hr
            style={{
              height: '1px',
              backgroundColor: '#AC1D7E',
              border: 'none',
            }}
          />
        </div>
      </div>

      <ResumeLearning />

      <hr
        style={{ height: '1px', backgroundColor: '#AC1D7E', border: 'none' }}
      />
      <span className="text-base font-extrabold">
        Request for custom course
      </span>
      <CustomCourse />
      <span className="text-base font-extrabold">Top Recommended Courses</span>
      <div className="flex flex-col md:flex-row  gap-6">
        <RecomendedCourse
          availableCourses="7 Courses Available"
          image={'/images/card1.svg'}
          title="Cyber Security Technical Training"
          body="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam. In posuere purus aliquet dolor pretium eget dictum."
          handleClick={() => router.push('home/dhjfhjdfh')}
          isCourseAvailable={true}
          isCourseComing={false}
        />
        <RecomendedCourse
          availableCourses="3 Courses Available"
          image={'/images/card2.svg'}
          title="Cyber Security Awareness "
          body="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam. In posuere purus aliquet dolor pretium eget dictum."
          handleClick={() => router.push('home/shfdhf')}
          isCourseAvailable={true}
          isCourseComing={false}
        />
      </div>
    </div>
  );
};

export default Home;
