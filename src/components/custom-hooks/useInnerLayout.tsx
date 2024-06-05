"use client";
import { useLayoutContext } from "../../../context/LayoutContext";
import { Navbar } from "./useNavbar";
import { Sidebar } from "./useSidebar";

export function RootLayoutInner({ children }: any) {
  const { state } = useLayoutContext();

  console.log(state, "state");

  let dynamicClass = "";

  if (state.navbarType !== "none") {
    dynamicClass += "md:mt-[30px]";
  }

  if (state.sidebarType !== "none") {
    dynamicClass += " md:ml-[250px] md:mr-[30px]";
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className={` ${dynamicClass}`}>{children}</div>
    </>
  );
}
