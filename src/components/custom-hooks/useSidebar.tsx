'use client';
import { useLayoutContext } from '../../../context/LayoutContext';
import CourseSidebar from '../ui/CourseSidebar';
import DefaultSidebar from '../ui/DefaultSidebar';

export const Sidebar = () => {
  const { state } = useLayoutContext();
  if (state.sidebarType === 'defaultSidebar') return <DefaultSidebar />;
  if (state.sidebarType === 'courseSideBar') return <CourseSidebar />;
  return null;
};
