"use client";
import React, { useEffect } from "react";

import Completed from "@/components/courses/tabs/Completed";
import InProgess from "@/components/courses/tabs/InProgess";
import { Tab, Tabs } from "@/components/ui/Tab";
import { useLayoutContext } from "../../../../../context/LayoutContext";

const Page = () => {
  const { dispatch } = useLayoutContext();
  useEffect(() => {
    dispatch({ type: "SET_NAVBAR", navbarType: "dashboardNavbar" });
    dispatch({ type: "SET_SIDEBAR", sidebarType: "defaultSidebar" });
  }, [dispatch]);
  return (
    <div className="flex flex-col gap-8 overflow-x-hidden mt-12 md:mt-5  h-[100%] px-4 md:px-0">
      <Tabs>
        <Tab title="In Progress">
          <InProgess />
        </Tab>
        <Tab title="Completed">
          <Completed />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Page;
