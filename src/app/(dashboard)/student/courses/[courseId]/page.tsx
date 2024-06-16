"use client";
import React, { useEffect, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import ReactPlayer from "react-player";

import Announcement from "@/components/coursePlayer/tabs/Announcement";
import Qforum from "@/components/coursePlayer/tabs/Qforum";
import Resources from "@/components/coursePlayer/tabs/Resources";
import CourseOverview from "@/components/home/tabs/CourseOverview";
import { Tab, Tabs } from "@/components/ui/Tab";

import { useLayoutContext } from "../../../../../../context/LayoutContext";

const Page: React.FC = () => {
  const { dispatch } = useLayoutContext();
  const [coursePlayer, setCoursePlayer] = useState(true);

  useEffect(() => {
    dispatch({ type: "SET_NAVBAR", navbarType: "dashboardNavbar" });
    dispatch({ type: "SET_SIDEBAR", sidebarType: "courseSideBar" });
  }, [dispatch]);

  const toggleVideoPlayer = () => {
    setCoursePlayer(!coursePlayer); // Toggle video player visibility
  };

  return (
    <div className="md:w-full grid gap-10">
      {coursePlayer ? (
        <div className="md:w-full flex flex-col gap-7">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=NWnBxQjssvQ"
            className="react-player"
            controls={true}
            style={{ pointerEvents: "auto" }}
          />
        </div>
      ) : (
        <div className="w-full h-max py-8 grid bg-[#3D3D3D] gap-5 px-8">
          <div className="grid text-[10px] text-gray-300 w-[80%] gap-3">
            <h1 className="text-[14px] font-bold text-white">
              Read Section Title will be written here
            </h1>
            Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra
            malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id
            pellentesque interdum. Vestibulum convallis velit feugiat aliquam
            pellentesque etiam.
            <br /> In posuere purus aliquet dolor pretium eget dictum. Ut auctor
            dui neque aliquet tempor. Elementum amet duis auctor interdum. Dolor
            in aliquam blandit lectus pretium. Aliquam malesuada aliquam ac in.
            Urna sit mauris faucibus lectus elementum ipsum. Proin quis velit
            elementum dui aliquam euismod a placerat consectetur. Arcu proin et
            parturient nisl semper bibendum enim eget etiam. Neque penatibus
            iaculis non ultrices augue. Platea tellus ut sit lectus. Ligula
            aliquam tristique egestas semper facilisis erat.
          </div>
          <div className="grid text-[10px] text-gray-300 gap-3">
            <h1 className="text-[14px] font-bold text-white">Subheading</h1>
            Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra
            malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id
            pellentesque interdum. Vestibulum convallis velit feugiat aliquam
            pellentesque etiam. In posuere purus aliquet dolor pretium eget
            dictum. Ut auctor dui neque aliquet tempor. Elementum amet duis
            auctor interdum. Dolor in aliquam blandit lectus pretium.
            <br /> Aliquam malesuada aliquam ac in. Urna sit mauris faucibus
            lectus elementum ipsum. Proin quis velit elementum dui aliquam
            euismod a placerat consectetur. Arcu proin et parturient nisl semper
            bibendum enim eget etiam. Neque penatibus iaculis non ultrices
            augue. Platea tellus ut sit lectus. Ligula aliquam tristique egestas
            semper facilisis erat. Ut auctor dui neque aliquet tempor. Elementum
            amet duis auctor interdum. Dolor in aliquam blandit lectus pretium.
            Aliquam malesuada aliquam ac in.
            <br /> Urna sit mauris faucibus lectus elementum ipsum. Proin quis
            velit elementum dui aliquam euismod a placerat consectetur. Arcu
            proin et parturient nisl semper bibendum enim eget etiam. Neque
            penatibus iaculis non ultrices augue. Platea tellus ut sit lectus.
            Ligula aliquam tristique egestas semper facilisis erat. Ut auctor
            dui neque aliquet tempor. Elementum amet duis auctor interdum. Dolor
            in aliquam blandit lectus pretium. Aliquam malesuada aliquam ac in.
            Urna sit mauris faucibus lectus elementum ipsum. Proin quis velit
            elementum dui aliquam euismod a placerat consectetur. Arcu proin et
            parturient nisl semper bibendum enim eget etiam. Neque penatibus
            iaculis non ultrices augue. Platea tellus ut sit lectus. Ligula
            aliquam tristique egestas semper facilisis erat. Ut auctor dui neque
            aliquet tempor. Elementum amet duis auctor interdum. Dolor in
            aliquam blandit lectus pretium. Aliquam malesuada aliquam ac in.
            Urna sit mauris faucibus lectus elementum ipsum. Proin quis velit
            elementum dui aliquam euismod a placerat consectetur. Arcu proin et
            parturient nisl semper bibendum enim eget etiam. Neque penatibus
            iaculis non ultrices augue. Platea tellus ut sit lectus. Ligula
            aliquam tristique egestas semper facilisis erat.
          </div>
        </div>
      )}
      <div className="md:w-full flex gap-10 items-center">
        <button onClick={toggleVideoPlayer} className="btn-toggle">
          Toggle Video Player
        </button>
        <div className="bg-[#DCF2FF] border-[1px] border-[#246938] text-[#246938] text-[12px] w-max h-max p-3 rounded-lg flex gap-2 items-center ml-8">
          Mark as completed
          <FaRegCircleCheck size={18} color="#246938" />
        </div>
      </div>
      <div className="">
        <Tabs>
          <Tab title="Course overview">
            <CourseOverview />
          </Tab>
          <Tab title="Q&A Forums">
            <Qforum />
          </Tab>
          <Tab title="Resources">
            <Resources />
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
