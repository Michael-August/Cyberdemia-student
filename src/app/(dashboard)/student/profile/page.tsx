'use client';
import React, { useEffect } from 'react';

import Profile from '@/components/profile';

import { useLayoutContext } from '../../../../../context/LayoutContext';

const Page = () => {
  const { dispatch } = useLayoutContext();

  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'dashboardNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'defaultSidebar' });
  }, [dispatch]);
  return (
    <div className="profile mt-12 md:mt-5 px-4 md:px-0">
      <Profile />
    </div>
  );
};

export default Page;
