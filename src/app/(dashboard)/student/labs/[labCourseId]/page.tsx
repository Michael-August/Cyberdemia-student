'use client';
import React, { useEffect } from 'react';

import { useLayoutContext } from '../../../../../../context/LayoutContext';
import { useCourseLabs } from '@/hooks/react-query/useCourses';
import { useParams } from 'next/navigation';
import { ExternalLinkIcon } from 'lucide-react';
import { EmptyState } from '@/components/EmptyState';
import { NavigationCrumbs } from '@/components/NavigationCrumbs';

const Page = () => {
  const { dispatch } = useLayoutContext();
  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'dashboardNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'defaultSidebar' });
  }, [dispatch]);

  const { labCourseId } = useParams();

  const { data } = useCourseLabs(labCourseId as string);

  return (
    <div className="flex flex-col gap-8 overflow-x-hidden mt-12 md:mt-5  h-[100%] px-4 md:px-0">
      <NavigationCrumbs />
      <div className="flex flex-col gap-4">
        {data?.length === 0 && (
          <EmptyState
            title="No Labs Available"
            description="You will see labs here when a tutor creates a lab for this course"
            icon={ExternalLinkIcon}
          />
        )}
        {data?.map((lab: any) => (
          <div
            key={lab.title}
            className="w-[100%] md:w-[752px] bg-cp-primary pl-0 md:pl-5 p-5 flex flex-col gap-2"
          >
            <h2 className="text-xl font-semibold mb-2 text-white">
              {lab.title}
            </h2>
            <p className="mb-4 text-white">{lab.instruction}</p>
            <a
              href={lab.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              Open Lab
              <ExternalLinkIcon size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
