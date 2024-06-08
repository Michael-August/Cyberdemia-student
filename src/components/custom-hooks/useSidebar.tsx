"use client";
import { useState } from "react";
import { useLayoutContext } from "../../../context/LayoutContext";
import CourseSidebar from "../ui/CourseSidebar";
import DashboardNavbar from "../ui/DashboardNavbar";

export const Sidebar = () => {
  const { state } = useLayoutContext();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  if (state.sidebarType === "defaultSidebar")
    return (
      <DashboardNavbar
        setSidebarOpen={setSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
    );
  if (state.sidebarType === "courseSideBar") return <CourseSidebar />;
  return null;
};
