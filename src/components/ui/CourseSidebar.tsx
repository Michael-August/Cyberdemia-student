import { useParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { GoArrowLeft } from 'react-icons/go';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  useGetCourseResource,
  useGetSingleCourse,
} from '@/hooks/react-query/useCourses';

import { useCourseStore } from '../../../utils/zustandStore/lectures';
import Loader from '../loader';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

const CourseSidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const Router = useRouter();
  const params = useParams<{ courseId: string }>();
  const { setCourseData, setResourceData, courseData, setLecture } =
    useCourseStore();

  const { data, refetch, isLoading } = useGetSingleCourse(params?.courseId);
  const {
    data: resourceData,
    refetch: resourceRefetch,
    isLoading: resourceisLoading,
  } = useGetCourseResource(params?.courseId);

  useEffect(() => {
    refetch();
    resourceRefetch();
  }, []);

  useEffect(() => {
    if (data) setCourseData(data);
    if (resourceData) setResourceData(resourceData);
  }, [data, resourceData]);

  const sections = courseData?.sections || [];

  console.log('sections', sections);

  const handleLectureClick = (lecture: any, sectionId: string) => {
    setLecture({ ...lecture, sectionId });
  };

  return (
    <>
      {isLoading || (resourceisLoading && <Loader />)}
      <div
        className={`bg-cp-primary w-[220px] py-3 text-white shadow-md z-[10000] h-full fixed top-10 left-0 bottom-0 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div
          className="bg-white w-full h-max p-3 py-4 flex justify-start items-center gap-2 text-black text-[16px] cursor-pointer hover:bg-cp-secondary hover:text-white"
          onClick={() => Router.push('/student/home')}
        >
          <GoArrowLeft size={26} />
          Home
        </div>
        <Accordion type="single" collapsible>
          {sections.map(
            (
              section: {
                id: React.Key | null | undefined;
                sectionTitle:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined;
                lectures: any[];
              },
              index: number,
            ) => (
              <AccordionItem key={section.id} value={`item-${index + 1}`}>
                <AccordionTrigger>
                  <div className="flex justify-between w-full text-[14px] p-1">
                    <div>
                      {index + 1}.0 {section.sectionTitle}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2">
                    {section.lectures.map((lecture) => (
                      <div
                        key={lecture.id}
                        className="flex justify-between items-center w-full p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer"
                        onClick={() =>
                          handleLectureClick(lecture, section.id as string)
                        }
                      >
                        <span className="text-gray-800">
                          {lecture.lectureTitle}
                        </span>
                        <span className="text-blue-500 text-sm">
                          {lecture.videoUrl
                            ? 'Watch'
                            : lecture.article
                              ? 'Read'
                              : 'N/A'}
                        </span>{' '}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ),
          )}
        </Accordion>
      </div>
    </>
  );
};

export default CourseSidebar;
