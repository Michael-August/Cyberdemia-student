'use client';
import React, { useEffect, useState } from 'react';

import Loader from '@/components/ui/Loader';

import { useLayoutContext } from '../../../context/LayoutContext';
import { Navbar } from './useNavbar';
import { Sidebar } from './useSidebar';
interface RootLayoutInnerProps {
  children: React.ReactNode;
}

export function RootLayoutInner({ children }: RootLayoutInnerProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [client, setClient] = useState(false);
  const { state } = useLayoutContext();

  useEffect(() => {
    setClient(true);
  }, []);

  let dynamicClass = '';
  if (state.navbarType === 'dashboardNavbar') {
    dynamicClass += 'md:mt-[80px]';
  }

  if (
    state.sidebarType === 'defaultSidebar' ||
    state.sidebarType === 'courseSideBar'
  ) {
    dynamicClass += ' md:ml-[250px] md:mr-[30px]';
  }

  return (
    <div className="w-[100vw] h-[100vh] relative">
      <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className={` ${dynamicClass}`}>
        {!client ? <Loader /> : <>{children}</>}
      </div>
    </div>
  );
}
