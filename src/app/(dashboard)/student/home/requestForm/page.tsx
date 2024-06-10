"use client";
import { useRouter } from "next/navigation";
import React from "react";

import { NavigationCrumbs } from "@/components/NavigationCrumbs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Page = () => {
  const router = useRouter();
  const handleClick = () => router.push("confirmation");
  return (
    <div className="flex flex-col gap-10 px-4 md:px-0 overflow-y-auto pb-40">
      <NavigationCrumbs />
      <div className=" md:w-[50%] ml-2">
        <h1 className="text-[16px] font-extrabold mb-3 ">
          Course & Training Request Form
        </h1>
        <span className="text-[14px] font-normal text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra
          malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id
          pellentesque interdum. Vestibulum convallis velit feugiat aliquam
          pellentesque etiam. In posuere purus aliquet dolor pretium eget
          dictum.
        </span>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-[14px] font-extrabold">
          1. Course Topic and Subject Matter
        </h1>
        <div className=" flex flex-col md:flex-row gap-10">
          <div className=" flex flex-col gap-3">
            <h1 className="question-input-label ">Question 1</h1>
            <textarea
              placeholder="Enter your answer here"
              itemType="text"
              className="custom-textarea"
            />
          </div>

          <div className=" flex flex-col gap-3">
            <h1 className="question-input-label ">Question 2</h1>
            <textarea
              placeholder="Enter your answer here"
              itemType="text"
              className="custom-textarea"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <h1 className="text-[14px] font-extrabold">2. Learning Objectives</h1>
          <div className=" flex flex-col md:flex-row gap-10">
            <div className=" flex flex-col gap-3">
              <h1 className="question-input-label ">Question 1</h1>
              <textarea
                placeholder="Enter your answer here"
                itemType="text"
                className="custom-textarea"
              />
            </div>
            <div className=" flex flex-col gap-3 mt-2 ml-2">
              <h1 className="question-input-label ">Question 2</h1>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <label
                    htmlFor="option-one"
                    className="text-[12px] text-gray-600"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <label
                    htmlFor="option-two"
                    className="text-[12px] text-gray-600"
                  >
                    No
                  </label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className="question-input-label ">Level of expertise</h1>
          <Select>
            <SelectTrigger className="md:w-[33%] bg-[#f5f5f5] py-8 text-[12px] text-gray-600 w-full h-[55px] scroll-m-0 md;h-auto ">
              <SelectValue
                placeholder="select level"
                className="text-[12px] text-gray-600"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-5 mt-8">
          <h1 className="text-[14px] font-extrabold">
            1. Course Topic and Subject Matter
          </h1>
          <div className=" flex flex-col md:flex-row gap-10">
            <div className=" flex flex-col gap-3">
              <h1 className="question-input-label ">Question 1</h1>
              <textarea
                placeholder="Enter your answer here"
                itemType="text"
                className="custom-textarea"
              />
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-3 mt-2 ml-2">
          <h1 className="question-input-label ">Question 2</h1>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <label htmlFor="option-one" className="text-[12px] text-gray-600">
                Option 1
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <label htmlFor="option-two" className="text-[12px] text-gray-600">
                Option 2
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three" id="option-three" />
              <label
                htmlFor="option-three"
                className="text-[12px] text-gray-600"
              >
                Option 3
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-four" id="option-four" />
              <label
                htmlFor="option-four"
                className="text-[12px] text-gray-600"
              >
                Option 4
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-five" id="option-five" />
              <label
                htmlFor="option-five"
                className="text-[12px] text-gray-600"
              >
                Option 5
              </label>
            </div>
          </RadioGroup>
        </div>
        <div className=" text-white text-[12px] mt-10 ">
          <div
            className="md:w-[70%] py-2 bg-[#AC1D7E] flex justify-center items-center cursor-pointer"
            onClick={handleClick}
          >
            Submit Application
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
