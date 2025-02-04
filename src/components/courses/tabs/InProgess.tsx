import React from 'react';

import ResumeLearning from '@/components/home/ResumeLearning';
import Loader from '@/components/loader';
import { usePersonalCourses } from '@/hooks/react-query/useCourses';

import { Subscription } from '../../../../types/SubscribedCourse.type';

function InProgess() {
  const { data, isLoading } = usePersonalCourses();

  console.log('xxxx', data);
  return (
    <div className="mt-5">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-4">
          {data
            ?.filter(
              (course: Subscription) => course.progressPercentage !== 100,
            )
            ?.map((course: Subscription) => (
              <ResumeLearning key={course?.id} course={course} />
            ))}
        </div>
      )}
      {/* <ResumeLearning />
      {
        isLoading && <Loader />
      }
      <div className="grid md:grid-cols-3  gap-6">
        {data?.map((e: any) => (
          <RecommendedCourse
            key={e.course?.id}
            availableCourses={`${e.course?.totalLearning} Total sections are available`}
            image={"/images/card1.svg"}
            title={e.course?.title}
            body={e.course?.subtitle}
            handleClick={() => router.push(`courses/${e.course?.id}`)}
            isCourseAvailable={true}
            isCourseComing={false}
          />
        ))}
      </div> */}
    </div>
  );
}

export default InProgess;
