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
    <div className="profile">
      <Profile />
    </div>
  );
};

export default Page;
