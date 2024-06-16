"use client";
import React, { useEffect } from "react";
import { useLayoutContext } from "../../../../../context/LayoutContext";
import Profile from "@/components/profile";

const Page = () => {
  const { dispatch } = useLayoutContext();

  useEffect(() => {
    dispatch({ type: "SET_NAVBAR", navbarType: "dashboardNavbar" });
    dispatch({ type: "SET_SIDEBAR", sidebarType: "defaultSidebar" });
  }, [dispatch]);
  return (
    <div className="profile">
      <Profile />
    </div>
  );
};

export default Page;
