import React from "react";
import ResumeLearning from "@/components/home/ResumeLearning";
import CustomCourse from "@/components/home/CustomCourse";
import RecomendedCourse from "@/components/home/RecomendedCourse";
const Home = () => {
  return (
    <div className="flex flex-col gap-8  h-[100%] px-4 md:px-0">
      <div className="flex flex-col gap-2 ">
        <span className="text-[16px] font-extrabold text-[#AC1D7E]">
          In Progress
        </span>
        <div className="">
          <div className="w-[103px] h-[8px] bg-[#AC1D7E]"></div>
          <hr
            style={{
              height: "1px",
              backgroundColor: "#AC1D7E",
              border: "none",
            }}
          />
        </div>
      </div>

      <ResumeLearning />
      <hr
        style={{ height: "1px", backgroundColor: "#AC1D7E", border: "none" }}
      />
      <span className="text-[16px] font-extrabold">
        Request for custom course
      </span>
      <CustomCourse />
      <span className="text-[16px] font-extrabold">
        Top Recommended Courses
      </span>
      <RecomendedCourse />
    </div>
  );
};

export default Home;
