'use client';
import React, { useEffect } from 'react';
import { FaRegCircleCheck } from 'react-icons/fa6';
import ReactPlayer from 'react-player';

import Announcement from '@/components/coursePlayer/tabs/Announcement';
import Qforum from '@/components/coursePlayer/tabs/Qforum';
import Resources from '@/components/coursePlayer/tabs/Resources';
import CourseOverview from '@/components/home/tabs/CourseOverview';
import { Tab, Tabs } from '@/components/ui/Tab';

import { useLayoutContext } from '../../../../../context/LayoutContext';

const Page: React.FC = () => {
  const { dispatch } = useLayoutContext();

  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'dashboardNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'courseSideBar' });

    return () => {
      dispatch({ type: 'SET_NAVBAR', navbarType: 'none' });
      dispatch({ type: 'SET_SIDEBAR', sidebarType: 'none' });
    };
  }, [dispatch]);

  return (
    <div className="w-full  grid gap-10">
      <div className="w-full flex flex-col gap-7 ">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=NWnBxQjssvQ"
          className="react-player"
          controls
        />
        <div className="bg-[#DCF2FF] border-[1px] border-[#246938] text-[#246938] text-[12px] w-max h-max p-3 rounded-lg flex gap-2 items-center ml-8">
          Mark as completed
          <FaRegCircleCheck size={18} color="#246938" />
        </div>
      </div>
      <div className="">
        <Tabs>
          <Tab title="Course overview">
            <CourseOverview />
          </Tab>
          <Tab title="Q&A Forums">
            <Qforum />
          </Tab>
          <Tab title="Resources">
            <Resources />
          </Tab>
          <Tab title="Announcements">
            <Announcement />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
