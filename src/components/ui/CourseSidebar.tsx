import { useRouter } from "next/navigation";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { IoMdStopwatch } from "react-icons/io";
import { IoCubeOutline } from "react-icons/io5";
import { PiBookOpenTextLight } from "react-icons/pi";
import { PiCertificate } from "react-icons/pi";
import { RxReader } from "react-icons/rx";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import AccordionContents from "../coursePlayer/AccordionContent";
interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

const CourseSidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const Router = useRouter();
  const handleClick = () => Router.push("test");
  const handleClick2 = () => Router.push("exams");
  const handleClick3 = () => Router.push("/student/home");

  return (
    <div
      className={`bg-cp-primary w-[220px] py-3 text-white shadow-md z-[10000] h-full fixed top-10 left-0 bottom-0 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div
        className="bg-white w-full h-max p-3 py-4 flex justify-start items-center gap-2 text-black text-[16px] cursor-pointer hover:bg-cp-secondary hover:text-white"
        onClick={handleClick3}
      >
        <GoArrowLeft size={26} />
        Home
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex justify-between w-full text-[14px] p-1">
              <div>1.0 Lecture title</div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <AccordionContents />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="flex justify-between w-full text-[14px] p-1">
              <div>2.0 Lecture title</div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <AccordionContents />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            <div className="flex justify-between w-full text-[14px] p-1">
              <div>3.0 Lecture title</div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <AccordionContents />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <div className="flex w-full text-[14px] items-center gap-2">
              <PiBookOpenTextLight size={20} />
              Assignment
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="h-max w-full p-3 py-3  flex flex-col gap-1  justify-between text-gray-600 hover:bg-pink-100  text-[10px] font-medium ">
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2 items-center ">
                  <RxReader size={18} className="text-gray-800" />
                  <p className="text-gray-700 text-[13px]">Read section</p>
                </div>
              </div>
              10 mins
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            <div className="flex justify-between w-full text-[14px] p-1">
              <div>5.0 Lecture title</div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <AccordionContents />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            <div className="flex w-full text-[14px] items-center gap-2">
              <IoCubeOutline size={20} />
              Virtual Labs Tests
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="h-max w-full p-3 py-3  flex flex-col gap-1  justify-between text-gray-600 hover:bg-pink-100  text-[10px] font-medium ">
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2 items-center ">
                  <RxReader size={18} className="text-gray-800" />
                  <p className="text-gray-700 text-[13px]">Read section</p>
                </div>
              </div>
              10 mins
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>
            <div className="flex justify-between w-full text-[14px] p-1">
              <div>6.0 Lecture title</div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <AccordionContents />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>
            <div className="flex w-full text-[14px] items-center gap-2">
              7.0 Exam Quiz
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid">
              <div
                className="h-max w-full p-3 py-3  flex flex-col gap-1  justify-between text-gray-600 hover:bg-pink-100  text-[10px] font-medium  cursor-pointer "
                onClick={handleClick}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex gap-2 items-center ">
                    <IoMdStopwatch size={22} className="text-gray-800 " />
                    <p className="text-gray-700 text-[13px]">Test</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  10 mins <p>20 Questions</p>
                </div>
              </div>
              <div
                className="h-max w-full p-3 py-3  flex flex-col gap-1  justify-between text-gray-600 hover:bg-pink-100  text-[10px] font-medium cursor-pointer "
                onClick={handleClick2}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex gap-2 items-center ">
                    <PiCertificate size={22} className="text-gray-800" />
                    <p className="text-gray-700 text-[13px]">
                      Certificate Exams{" "}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between">
                  12 mins <p>60 Questions</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>
            <div className="flex justify-between w-full text-[14px] p-1">
              <div>8.0 Lecture title</div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <AccordionContents />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CourseSidebar;
