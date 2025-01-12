"use client";
import React, { useEffect } from "react";

import CardDetails from "@/components/home/CardDetails";
import CourseDetails from "@/components/home/CourseDetails";
import CourseContent from "@/components/home/tabs/CourseContent";
import CourseOverview from "@/components/home/tabs/CourseOverview";
import Resources from "@/components/home/tabs/Resources";
import Loader from "@/components/loader";
import { NavigationCrumbs } from "@/components/NavigationCrumbs";
import { Tab, Tabs } from "@/components/ui/Tab";
import {
  useGetCourseResource,
  useGetSingleCourse,
} from "@/hooks/react-query/useCourses";

import { useLayoutContext } from "../../../../../../context/LayoutContext";

function Page({ params }: { params: { singleCourse: string } }) {
  const { dispatch } = useLayoutContext();
  useEffect(() => {
    dispatch({ type: "SET_NAVBAR", navbarType: "dashboardNavbar" });
    dispatch({ type: "SET_SIDEBAR", sidebarType: "defaultSidebar" });
  }, [dispatch]);

  const { data, refetch, isLoading } = useGetSingleCourse(params?.singleCourse);

  const {
    data: resourceData,
    refetch: resourceRefetch,
    isLoading: resourceisLoading,
  } = useGetCourseResource(params?.singleCourse);

  useEffect(() => {
    refetch();
    resourceRefetch();
  }, []);

  return (
    <div className="flex flex-col md:gap-10 px-2 md:px-0 mt-10 md:mt-0">
      {isLoading || (resourceisLoading && <Loader />)}
      <NavigationCrumbs />
      <div className="flex flex-col px-5 md:flex-row w-full gap-10">
        <CourseDetails details={data} />
        <CardDetails details={data}resourceData={resourceData}  />
      </div>
      <div className="mt-10">
        <Tabs>
          <Tab title="Course overview">
            <CourseOverview details={data} />
          </Tab>
          <Tab title="Course content">
            <CourseContent details={data} />
          </Tab>
          {/* <Tab title="Lab Questions">
            <LabQuestion details={data} />
          </Tab> */}
          <Tab title="Resources">
            <Resources resourceData={resourceData} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Page;
