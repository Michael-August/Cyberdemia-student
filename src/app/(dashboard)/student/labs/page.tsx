'use client';
import React, { useEffect } from 'react';

import VirtualLab from '@/components/virtual-lab';

import { useLayoutContext } from '../../../../../context/LayoutContext';
const Page = () => {
  const { dispatch } = useLayoutContext();
  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'dashboardNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'defaultSidebar' });
  }, [dispatch]);
  return (
    <div className=" px-4 md:px-0 sm:mt-[3rem]">
      <VirtualLab />
    </div>
  );
};

export default Page;
