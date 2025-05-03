'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import ReactPlayer from 'react-player';

import Header from './Header';
import StandardCard from './StandardCard';
import { usePersonalCourses } from '@/hooks/react-query/useCourses';
import { Subscription } from '../../../types/SubscribedCourse.type';
import { EmptyState } from '../EmptyState';
import { Timer } from 'lucide-react';

const Index = () => {
  const router = useRouter();

  const { data } = usePersonalCourses();

  return (
    <div>
      <Header />
      <div className="w-[58%] pt-[2rem] sm:w-full flex flex-col gap-7">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=NWnBxQjssvQ"
          className="react-player"
          controls={true}
          style={{ pointerEvents: 'auto' }}
        />
      </div>
      <div>
        <h1 className="text-[16px] font-extrabold  py-10 text-center sm:text-start">
          Courses with Virtual Labs included
        </h1>
        <div className="flex items-center gap-2  overflow-x-scroll">
          {data?.length === 0 ? (
            <EmptyState
              title="No Course in progress"
              description="You will see courses here when you enroll in a course"
              icon={Timer}
            />
          ) : (
            data?.map((course: Subscription) => (
              <StandardCard
                key={course?.id}
                imageSrc={'/images/card1.svg'}
                imageAlt={'course Image'}
                title={course?.course.title}
                handleViewCourse={() => {
                  router.push(`/student/labs/${course?.course.id}`);
                }}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
