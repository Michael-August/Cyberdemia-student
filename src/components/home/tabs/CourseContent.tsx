import Image from 'next/image';
import React from 'react';

import Loader from '@/components/loader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useGetAssignments } from '@/hooks/react-query/useCourses';

function CourseContent({ details }: any) {
  const sectionIds = details?.sections?.map((section: any) => section.id) || [];
  const { data: assignmentsData, isLoading } = useGetAssignments(sectionIds);

  const assignmentsBySection = assignmentsData?.reduce(
    (acc: any, assignment: any) => {
      acc[assignment.sectionId] = assignment.data || [];
      return acc;
    },
    {},
  );

  return (
    <div className="md:w-[55%] flex flex-col gap-7 pb-20 pt-8 px-2 md:px-0 h-full">
      <p className="text-[12px] text-gray-600">
        This section provides an organized view of all course content, broken
        down into sections and lectures. Each section may contain multiple
        lectures and any related assignments. You can navigate through the
        lectures to review the course material, and assignments will appear when
        available to reinforce your learning.
      </p>

      {isLoading && <Loader />}
      <Accordion type="single" collapsible>
        {details?.sections?.map((section: any, index: number) => (
          <AccordionItem value={`item-${index + 1}`} key={section.id}>
            <AccordionTrigger>
              <div className="flex justify-between w-full text-[14px]">
                <div>{`${index + 1}.0 ${section?.sectionTitle}`}</div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col">
                {/* Display lectures */}
                {section?.lectures?.map((lecture: any) => (
                  <div
                    key={lecture.id}
                    className="py-2 flex items-center justify-between px-3 hover:bg-pink-100"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/play.svg"
                        alt="Lecture Icon"
                        width={18}
                        height={50}
                        className="cursor-pointer"
                      />
                      <span className="text-[12px]">
                        {lecture?.lectureTitle}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Display assignment if available */}
                {assignmentsBySection &&
                  assignmentsBySection[section?.id] &&
                  assignmentsBySection[section?.id]?.length > 0 && (
                    <div className="mt-4 px-3 py-2 bg-gray-100 rounded">
                      <h3 className="text-sm font-semibold">Assignment:</h3>
                      {assignmentsBySection[section.id].map(
                        (assignment: any) => (
                          <div
                            key={assignment.id}
                            className="mt-2 flex items-center gap-2"
                          >
                            <Image
                              src="/images/read.svg"
                              alt="Assignment Icon"
                              width={18}
                              height={50}
                              className="cursor-pointer"
                            />
                            <span className="text-[12px]">
                              {assignment.assignmentTitle}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default CourseContent;
