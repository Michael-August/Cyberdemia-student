"use client";
import React from "react";
import Completed from "@/components/courses/tabs/Completed";
import InProgess from "@/components/courses/tabs/InProgess";
import { Tab, Tabs } from "@/components/ui/Tab";

const page = () => {
  return (
    <div className="mt-5">
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

export default page;
