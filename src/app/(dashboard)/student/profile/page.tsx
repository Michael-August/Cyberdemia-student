'use client';
import React, { useEffect } from 'react';

import { useLayoutContext } from '../../../../../context/LayoutContext';

const Page = () => {
  const { dispatch } = useLayoutContext();

  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'dashboardNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'defaultSidebar' });
  }, [dispatch]);

  return <div>page</div>;
};

export default Page;
