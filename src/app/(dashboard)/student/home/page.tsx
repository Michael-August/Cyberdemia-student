'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import RecomendedCourse from '@/components/home/RecomendedCourse';
import ResumeLearning from '@/components/home/ResumeLearning';
import Loader from '@/components/loader';
import { useGetCourses } from '@/hooks/react-query/useCourses';

import { useLayoutContext } from '../../../../../context/LayoutContext';
const Home = () => {
  const { dispatch } = useLayoutContext();
  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'dashboardNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'defaultSidebar' });
  }, [dispatch]);
  const router = useRouter();
  const { data, refetch, isLoading } = useGetCourses();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
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
        {/* <div className="flex flex-col gap-3">
          <span className="text-[16px] font-extrabold">
            Request for custom course
          </span>
          <CustomCourse />
        </div> */}
        <div className="flex flex-col gap-3">
          {isLoading && <Loader />}
          <span className="text-[16px] font-extrabold">
            Top Recommended Courses
          </span>
          <div className="grid md:grid-cols-3  gap-6">
            {data?.courses.map((course: any) => (
              <RecomendedCourse
                key={course?.id}
                availableCourses={`${course?.totalLearning} Total sections are available`}
                image={'/images/card1.svg'}
                title={course?.title}
                body={course?.subtitle}
                handleClick={() => router.push(`courses/${course?.id}`)}
                isCourseAvailable={true}
                isCourseComing={false}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
