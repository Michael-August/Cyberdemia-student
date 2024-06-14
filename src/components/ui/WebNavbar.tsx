"use client";
import Image from "next/image"; // Importing Image from next/image
import React from "react";

import LandingPageNavbar from "./LandingPageNavbar";

const WebNavbar: React.FC = () => {
  return (
    <div className="w-[100vw] text-white z-[10000]">
      <div className="w-full flex items-center justify-center gap-1 md:gap-[10px] py-[13px] px-4 xl:px-0 bg-cp-primary text-white shadow-md z-[10000] h-[60px]">
        <Image
          src="/icons/notification1.png"
          alt="Notification Icon" // Adding alt text
          width={27} // Provide width
          height={27} // Provide height
          className="w-[1.65625rem] lg:w-[2rem]"
        />
        <div className="intro text-center">
          <span className="text-xs lg:text-sm font-extrabold">
            We are excited to announce the launch of Cyber Security &
            Infrastructure Engineering / SOC Management course.
          </span>
          <span className="text-xs ml-2 lg:text-sm font-medium">
            View Course Details
          </span>
        </div>
        <Image
          src="/icons/ArrowLeft.png"
          alt="Arrow Icon" // Adding alt text
          width={18} // Provide width
          height={18} // Provide height
          className="w-[1.140625rem] lg:w-[1.5rem]"
        />
      </div>
      <LandingPageNavbar />
      {/* <div className="flex py-8 h-[20px] border-b items-center justify-between lg:px-20 border-pink-200 ">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={130}
            height={130}
          />
        </Link>
        <div className="flex justify-center items-center gap-8">
          <ul className="flex">
            <Links direction="row" toggle={toggle} setToggle={setToggle} />
          </ul>
          <div className="text-cp-secondary font-extrabold text-[12px] border-[1.5px] border-[#AC1D7E] px-2 py-1">
            Log in
          </div>
          <div className="text-white bg-[#2BDE48] font-extrabold text-[12px] px-2 py-1.5 flex justify-center items-center">
            Apply Now
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default WebNavbar;
