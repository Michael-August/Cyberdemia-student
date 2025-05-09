import React, { useEffect } from 'react';

import Loader from '@/components/loader';
import { usePersonalCourses } from '@/hooks/react-query/useCourses';

import { Subscription } from '../../../../types/SubscribedCourse.type';
import CompletedCourse from '../CompletedCourse';
import { EmptyState } from '@/components/EmptyState';
import { Timer } from 'lucide-react';

function Completed() {
  const { data, isLoading, refetch } = usePersonalCourses();
  console.log(' -> ', data);

  useEffect(() => {
    refetch();
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-4">
          {data?.filter(
            (course: Subscription) => course.progressPercentage === 100,
          ).length === 0 && (
            <EmptyState
              title="No completed Course yet"
              description="Courses will be displayed here when you complete a course"
              icon={Timer}
            />
          )}
          {data
            ?.filter(
              (course: Subscription) => course.progressPercentage === 100,
            )
            .map((course: Subscription) => (
              <CompletedCourse key={course.id} course={course} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Completed;
