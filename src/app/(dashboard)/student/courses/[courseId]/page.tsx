'use client';
import React, { useEffect } from 'react';
import { FaRegCircleCheck } from 'react-icons/fa6';
import ReactPlayer from 'react-player';
import { toast } from 'react-toastify';

import Announcement from '@/components/coursePlayer/tabs/Announcement';
import Qforum from '@/components/coursePlayer/tabs/Qforum';
import Resources from '@/components/coursePlayer/tabs/Resources';
import CourseOverview from '@/components/home/tabs/CourseOverview';
import { Tab, Tabs } from '@/components/ui/Tab';
import { useMarkAsComplete } from '@/hooks/react-query/useCourses';

import { useLayoutContext } from '../../../../../../context/LayoutContext';
import { useCourseStore } from '../../../../../../utils/zustandStore/lectures';

const Page: React.FC = () => {
  const { dispatch } = useLayoutContext();
  const { selectedLecture, courseData, resourceData } = useCourseStore();
  const { mutate: markAsComplete, isLoading } = useMarkAsComplete();
  const studentData = JSON.parse(sessionStorage.getItem('userProfile') || '{}');

  const handleMarkAsComplete = () => {
    if (!selectedLecture?.sectionId) {
      return;
    }

    const payload = {
      studentId: studentData?.id,
      courseId: courseData?.id,
      sectionId: selectedLecture?.sectionId,
      lectureId: selectedLecture?.id,
    };

    try {
      markAsComplete(payload);
      toast.success('progress updated successfully');
    } catch (error) {
      toast.error('Failed to update progress');
    }
  };

  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'dashboardNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'courseSideBar' });
  }, [dispatch]);

  const renderLectureContent = () => {
    if (selectedLecture?.videoUrl) {
      return (
        <ReactPlayer
          url={selectedLecture.videoUrl}
          className="react-player"
          controls={true}
          style={{ pointerEvents: 'auto' }}
          config={{
            file: {
              attributes: {
                controlsList: 'nodownload',
                disablePictureInPicture: true,
              },
            },
          }}
        />
      );
    }

    if (selectedLecture?.article) {
      // Render Article Content
      return (
        <div className="h-max py-8 grid bg-[#3D3D3D] gap-5 px-8">
          <div className="text-[10px] text-gray-300 gap-3">
            <h1 className="text-[14px] font-bold text-white">
              {selectedLecture.lectureTitle}
            </h1>
            <div
              className="text-gray-300"
              dangerouslySetInnerHTML={{ __html: selectedLecture.article }}
            />
          </div>
        </div>
      );
    }

    return <p>No content available for this lecture.</p>;
  };

  return (
    <div className="md:w-full grid gap-10 mt-8 md:mt-0 overflow-x-hidden">
      <div className="w-[58%] md:w-full flex flex-col gap-7">
        {renderLectureContent()}
      </div>
      <div className="md:w-full flex gap-10 items-center px-2 ">
        <button
          className="bg-[#DCF2FF] hover:bg-green-200 border-[1px] border-[#246938] text-[#246938] text-[12px] w-max h-max p-3 rounded-lg flex gap-2 items-center"
          onClick={handleMarkAsComplete}
          disabled={isLoading} // Disable the button while the API call is in progress
        >
          Mark as completed
          <FaRegCircleCheck size={18} color="#246938" />
        </button>
      </div>
      <div className="px-3 w-[55%] md:w-full">
        <Tabs>
          <Tab title="Course overview">
            <CourseOverview details={courseData} />
          </Tab>
          <Tab title="Q&A Forums">
            <Qforum />
          </Tab>
          <Tab title="Resources">
            <Resources resources={resourceData} />
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
