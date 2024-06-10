import Image from 'next/image';
import React from 'react';
import { IoCubeOutline } from 'react-icons/io5';
import { PiBookOpenText } from 'react-icons/pi';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function CourseContent() {
  return (
    <div className="md:w-[55%] flex flex-col gap-7 pb-20 pt-8 px-2 md:px-0">
      <div className="flex flex-col gap-5 text-[12px] text-gray-600">
        <span>
          orem ipsum dolor sit amet consectetur. Ut porttitor et viverra
          malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id
          pellentesque interdum. Vestibulum convallis velit feugiat aliquam
          pellentesque etiam. In posuere purus aliquet dolor pretium eget
          dictum. Ut auctor dui neque aliquet tempor.
        </span>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex justify-between w-full text-[14px]">
              <div>1.0 Lecture title</div>
              <div className="flex gap-3 px-2">
                <span>4 lessons</span>
                <span>40 min</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <div className="py-2  flex items-center justify-between  px-3 hover:bg-pink-100">
                <div className="flex items-center gap-2  ">
                  <Image
                    src="/images/play.svg"
                    alt="play Icon"
                    width={18}
                    height={50}
                    className="cursor-pointer"
                  />
                  <span className="text-[12px]">1 Lesson title</span>
                </div>
                <div>12 min</div>
              </div>
              <div className="py-2  flex items-center justify-between  px-3 hover:bg-pink-100">
                <div className="flex items-center gap-2 ">
                  <Image
                    src="/images/play.svg"
                    alt="play Icon"
                    width={18}
                    height={50}
                    className="cursor-pointer"
                  />
                  <span className="text-[12px]">1 Lesson title</span>
                </div>
                <div>12 min</div>
              </div>
              <div className="py-2  flex items-center justify-between  px-3 hover:bg-pink-100">
                <div className="flex items-center gap-2 ">
                  <Image
                    src="/images/read.svg"
                    alt="read Icon"
                    width={18}
                    height={50}
                    className="cursor-pointer"
                  />
                  <span className="text-[12px]">Read section</span>
                </div>
                <div>12 min</div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="flex justify-between w-full text-[14px]">
              <div>2.0 Lecture title</div>
              <div className="flex gap-3 px-2">
                <span>4 lessons</span>
                <span>40 min</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <div className="flex justify-between w-full text-[14px]">
              <div>3.0 Lecture title</div>
              <div className="flex gap-3 px-2">
                <span>4 lessons</span>
                <span>40 min</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <div className="flex justify-between w-full text-[14px]">
              <div className="flex items-center gap-4">
                <PiBookOpenText color="white" size={25} />
                Assignment
              </div>
              <div className="flex gap-3 px-2">
                <span>2</span>
                <span>Assignments</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            <div className="flex justify-between w-full text-[14px]">
              <div>5.0 Lecture title</div>
              <div className="flex gap-3 px-2">
                <span>4 lessons</span>
                <span>40 min</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            <div className="flex justify-between w-full text-[14px]">
              <div className="flex items-center gap-4">
                <IoCubeOutline color="white" size={25} />
                Virtual Labs Tests
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>
            <div className="flex justify-between w-full text-[14px]">
              <div>6.0 Exam Quiz</div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>
            <div className="flex justify-between w-full text-[14px]">
              <div>7.0 Lecture title</div>
              <div className="flex gap-3 px-2">
                <span>4 lessons</span>
                <span>40 min</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>
            <div className="flex justify-between w-full text-[14px]">
              <div>8.0 Lecture title</div>
              <div className="flex gap-3 px-2">
                <span>4 lessons</span>
                <span>40 min</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default CourseContent;
