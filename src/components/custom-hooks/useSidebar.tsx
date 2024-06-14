'use client';
import { useLayoutContext } from '../../../context/LayoutContext';
import CourseSidebar from '../ui/CourseSidebar';
import DefaultSidebar from '../ui/DefaultSidebar';

export const Sidebar = ({ isSidebarOpen, setSidebarOpen }: any) => {
  const { state } = useLayoutContext();
  console.log(state.sidebarType, 'state.sidebarType');
  {
    state.sidebarType === 'defaultSidebar' && (
      <DefaultSidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    );
  }

  {
    state.sidebarType === 'courseSideBar' && <CourseSidebar />;
  }
  return null;
};
