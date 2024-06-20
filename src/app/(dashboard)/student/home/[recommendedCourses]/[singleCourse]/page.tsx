'use client';
import React, { useEffect } from 'react';

import CardDetails from '@/components/home/CardDetails';
import CourseDetails from '@/components/home/CourseDetails';
import CourseContent from '@/components/home/tabs/CourseContent';
import CourseOverview from '@/components/home/tabs/CourseOverview';
import LabQuestion from '@/components/home/tabs/LabQuestion';
import Resources from '@/components/home/tabs/Resources';
import { NavigationCrumbs } from '@/components/NavigationCrumbs';
import { Tab, Tabs } from '@/components/ui/Tab';

import { useLayoutContext } from '../../../../../../../context/LayoutContext';

function Page() {
  const { dispatch } = useLayoutContext();

  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'dashboardNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'defaultSidebar' });
  }, [dispatch]);
  return (
    <div className="flex flex-col md:gap-10 px-2 md:px-0">
      <NavigationCrumbs />
      <div className="flex flex-col px-5 md:flex-row w-full gap-10">
        <CourseDetails />
        <CardDetails />
      </div>
      <div className="mt-10">
        <Tabs>
          <Tab title="Course overview">
            <CourseOverview />
          </Tab>
          <Tab title="Course content">
            <CourseContent />
          </Tab>
          <Tab title="Lab Questions">
            <LabQuestion />
          </Tab>
          <Tab title="Resources">
            <Resources />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Page;
