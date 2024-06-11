import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../button";

function CompletedCourse() {
  const stars = document.querySelectorAll(".star");

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      stars.forEach((s, i) => {
        const imgElement = s as HTMLImageElement; // Explicitly cast to HTMLImageElement
        if (i <= index) {
          imgElement.src = "/images/starImage.svg"; // Change the image source for selected stars
        } else {
          imgElement.src = "/images/star2.svg"; // Change the image source for unselected stars
        }
      });
    });
  });
  const Router = useRouter();
  const handleClick = () => Router.push("/student/courses/certificate");
  return (
    <div className="h-[153px] w-[382px] md:w-[752px] bg-[#f8cfeb] p-5 flex gap-5">
      <div className="hidden md:flex">
        <Image
          src="/images/completedCourses.svg"
          alt="Completed Courses"
          width={100}
          height={100}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 justify-between">
        <span className="text-[14px] font-extrabold ">
          Cyber Security Defense Analyst
        </span>
        <div className="flex items-center gap-2">
          <Image
            src="/images/CheckCircle.svg"
            alt="Check Circle"
            width={25}
            height={25}
            className="cursor-pointer"
          />
          <span className="text-[10px] text-gray-700 ">
            4/8 Lessons Completed
          </span>
        </div>
        <div className="flex justify-end gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <div className="border  cursor-pointer border-black py-2 px-4 md:px-2 w-[90%] md:w-auto text-black text-[12px] flex justify-center items-center gap-2">
                Rate Course
                <Image
                  src="/images/starImage.svg"
                  alt="Star"
                  width={15}
                  height={15}
                  className="cursor-pointer"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="w-max p-8">
              <DialogHeader>
                <DialogTitle className="flex gap-5">
                  <Image
                    src="/images/completedCourses.svg"
                    alt="Completed Courses"
                    width={200}
                    height={100}
                    className="cursor-pointer"
                  />
                  <div className="mr-20 flex flex-col gap-5 mt-2">
                    <span className="text-[17px] font-bold  ">
                      Cyber Security Defense Analyst
                    </span>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/CheckCircle.svg"
                        alt="Check Circle"
                        width={25}
                        height={25}
                        className="cursor-pointer"
                      />
                      <span className="text-[10px] text-gray-700 ">
                        8/8 Lessons Completed
                      </span>
                    </div>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid items-center gap-2">
                  <h1 className=" text-[10px] text-gray-800">
                    Enter your review here
                  </h1>
                  <input
                    type="text"
                    placeholder="Enter text (up to 2000 characters)"
                    maxLength={2000}
                    className="border bg-[#F5F5F5] border-gray-300 rounded-md p-4 pb-20 shadow-sm w-full text-sm text-gray-700 placeholder-gray-400 outline-none resize-none"
                  />
                </div>
                <div className="flex flex-col items-end">
                  <span className=" text-[10px] text-gray-700">
                    Give star rating
                  </span>
                  <div className="star-rating flex gap-1">
                    <img
                      src="/images/star2.svg"
                      alt="Inactive Star"
                      className="star inactive cursor-pointer"
                    />
                    <img
                      src="/images/star2.svg"
                      alt="Inactive Star"
                      className="star inactive cursor-pointer"
                    />
                    <img
                      src="/images/star2.svg"
                      alt="Inactive Star"
                      className="star inactive cursor-pointer"
                    />
                    <img
                      src="/images/star2.svg"
                      alt="Inactive Star"
                      className="star inactive cursor-pointer"
                    />
                    <img
                      src="/images/star2.svg"
                      alt="Inactive Star"
                      className="star inactive cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <DialogFooter className="flex gap-3">
                <div className=" text-[10px] text-gray-400">
                  Your feedback will help us make the <br /> platform better for
                  the community. Thanks.
                </div>
                <div className=" flex gap-4">
                  <DialogClose asChild>
                    <div className="border  cursor-pointer border-cp-secondary py-2 px-4 md:px-2 w-[90%] md:w-auto text-black text-[12px] flex justify-center items-center gap-2 ">
                      cancel
                    </div>
                  </DialogClose>
                  <div className="bg-cp-secondary cursor-pointer py-2 px-4 md:px-2 w-[90%] md:w-auto text-white text-[12px] flex justify-center items-center gap-2">
                    Submit
                    <GoArrowRight size={20} />
                  </div>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <div
            className="bg-cp-secondary cursor-pointer py-2 px-4 md:px-2 w-[90%] md:w-auto text-white text-[12px] flex justify-center items-center gap-2"
            onClick={handleClick}
          >
            View Certificate
            <GoArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedCourse;
