'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import RecomendedCourse from '@/components/home/RecomendedCourse';
import ResumeLearning from '@/components/home/ResumeLearning';
import Loader from '@/components/loader';
import {
  useGetCourses,
  usePersonalCourses,
} from '@/hooks/react-query/useCourses';

import { useLayoutContext } from '../../../../../context/LayoutContext';
import { Course } from '../../../../../types/Course.type';
import { Subscription } from '../../../../../types/SubscribedCourse.type';
import { EmptyState } from '@/components/EmptyState';
import { Timer } from 'lucide-react';
const Home = () => {
  const {
    data: coursesInProgress,
    refetch: refetchCoursesInProgress,
    isLoading: isLoadingCoursesInProgress,
  } = usePersonalCourses();

  const router = useRouter();
  const { data, refetch, isLoading } = useGetCourses();

  const { dispatch } = useLayoutContext();

  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'dashboardNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'defaultSidebar' });
  }, [dispatch]);

  useEffect(() => {
    refetch();
    refetchCoursesInProgress();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-8 overflow-x-hidden mt-12 md:mt-5  h-[100%] px-4 md:px-0">
        {coursesInProgress?.length > 0 && (
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
        )}

        {isLoadingCoursesInProgress ? (
          <Loader />
        ) : (
          <div className="flex flex-col gap-4">
            {coursesInProgress?.filter(
              (course: Subscription) => course.progressPercentage !== 100,
            ).length === 0 && (
              <span className="text-sm font-extrabold text-[#AC1D7E]">
                No Courses in Progress
              </span>
            )}
            {coursesInProgress
              ?.filter(
                (course: Subscription) => course.progressPercentage !== 100,
              )
              .map((course: Subscription) => (
                <ResumeLearning key={course?.id} course={course} />
              ))}
          </div>
        )}

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
            {data?.courses.length === 0 ? (
              <EmptyState
                title="No Course Posted Yet"
                description="Courses will be displayed here when tutors post"
                icon={Timer}
              />
            ) : (
              data?.courses.map((course: Course) => (
                <RecomendedCourse
                  key={course?.id}
                  availableCourses={`${course?.sections.length} Total sections are available`}
                  image={'/images/card1.svg'}
                  title={course?.title}
                  body={course?.subtitle}
                  handleClick={() => router.push(`home/${course?.id}`)}
                  isCourseAvailable={true}
                  isCourseComing={false}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
