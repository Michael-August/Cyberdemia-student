// File: ./src/app/(dashboard)/student/support/Page.tsx

'use client';
import React, { useEffect } from 'react';

import HelpAndSupport from '@/components/help-support';

import { useLayoutContext } from '../../../../../context/LayoutContext';

const Page = () => {
  const { dispatch } = useLayoutContext();

  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'dashboardNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'defaultSidebar' });
  }, []);
  return (
    <div>
      <HelpAndSupport />
    </div>
  );
};

export default Page;
