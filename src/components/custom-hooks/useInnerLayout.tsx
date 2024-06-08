'use client';
import React, { useEffect, useState } from 'react';

import { Skeleton } from '@/components/ui/skeleton';

import { useLayoutContext } from '../../../context/LayoutContext';
import DashboardNavbar from '../ui/DashboardNavbar';
import Sidebar from '../ui/DefaultSidebar';
interface RootLayoutInnerProps {
  children: React.ReactNode;
}

export function RootLayoutInner({ children }: RootLayoutInnerProps) {
  const [client, setClient] = useState(false);
  const { state } = useLayoutContext();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

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
      <div className={` ${dynamicClass}`}>
        {!client ? (
          <div className="h-full w-[80%] md:mt-[80px] md:ml-[250px] grid gap-10 flex-col">
            <Skeleton className="h-[125px] rounded-xl bg-gray-300" />
            <div className="grid gap-10">
              <Skeleton className="h-4 " />
              <Skeleton className="h-4 " />
            </div>
            <Skeleton className="h-[125px]  rounded-xl bg-gray-300" />
            <div className="grid gap-10">
              <Skeleton className="h-4 " />
              <Skeleton className="h-4 " />
            </div>
          </div>
        ) : (
          <>{children}</>
        )}
      </div>
    </div>
  );
}
