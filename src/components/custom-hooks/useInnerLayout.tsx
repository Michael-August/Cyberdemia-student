'use client';
import React, { useState } from 'react';

import { useLayoutContext } from '../../../context/LayoutContext';
import DashboardNavbar from '../ui/DashboardNavbar';
import Sidebar from '../ui/DefaultSidebar';
interface RootLayoutInnerProps {
  children: React.ReactNode;
}

export function RootLayoutInner({ children }: RootLayoutInnerProps) {
  const { state } = useLayoutContext();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  let dynamicClass = '';

  if (state.navbarType !== 'none') {
    dynamicClass += 'md:mt-[80px]';
  }

  if (state.sidebarType !== 'none') {
    dynamicClass += ' md:ml-[250px] md:mr-[30px]';
  }

  return (
    <div className="w-[100vw] h-[100vh] relative">
      <DashboardNavbar
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      <div className={` ${dynamicClass}`}>{children}</div>
    </div>
  );
}
