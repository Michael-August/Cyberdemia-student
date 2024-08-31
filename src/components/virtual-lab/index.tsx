"use client";
import React from "react";
import ReactPlayer from "react-player";
import { coursesData } from "../../../utils/datas";
import Header from "./Header";
import StandardCard from "./StandardCard";
import { useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <div className="w-[58%] pt-[2rem] sm:w-full flex flex-col gap-7">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=NWnBxQjssvQ"
          className="react-player"
          controls={true}
          style={{ pointerEvents: "auto" }}
        />
      </div>
      <div>
        <h1 className="text-[16px] font-extrabold  py-10 text-center sm:text-start">
          Courses with Virtual Labs included
        </h1>
        <div className="flex justify-between items-center gap-2  overflow-x-scroll">
          {coursesData?.map((course, index) => (
            <StandardCard
              key={index}
              imageSrc={course.imageSrc}
              imageAlt={course.imageAlt}
              title={course.title}
              description={course.description}
              buttonText={course.buttonText}
              isComingSoon={course.isComingSoon}
              handleViewCourse={() => {
                router.push(`/student/home/dhjfhjdfh/${course?.title}`);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
