"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import IntroCard from "@/components/courses/test/IntroCard";
import Regulatons from "@/components/courses/test/Regulatons";

import { useLayoutContext } from "../../../../../../context/LayoutContext";

function Page() {
  const { dispatch } = useLayoutContext();
  const [render, setRender] = useState(true);

  const nextPage = () => {
    setRender(!render);
  };

  useEffect(() => {
    dispatch({ type: "SET_NAVBAR", navbarType: "dashboardNavbar" });
    dispatch({ type: "SET_SIDEBAR", sidebarType: "courseSideBar" });
  }, [dispatch]);

  return (
    <div className="flex flex-row m-10 mt-40 md:mt-10">
      {render === true ? (
        <IntroCard
          title={"Certificate Exams"}
          body={
            "orem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus"
          }
          image={"/images/certificate.svg"}
          button={"Take Exam"}
          time={"20 Minutes"}
          questions={"60 Questions"}
          nextPage={nextPage}
        />
      ) : (
        <Regulatons
          image={"/images/certificate.svg"}
          title={"Certificate Exams"}
          body={
            "Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus."
          }
          time={"20 Minutes"}
          date={"60 Questions"}
          button={"Take Exam"}
        />
      )}
    </div>
  );
}

export default Page;
