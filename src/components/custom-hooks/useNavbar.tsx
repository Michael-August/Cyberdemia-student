'use client';
import { useState } from 'react';

import { useLayoutContext } from '../../../context/LayoutContext';
import DashboardNavbar from '../ui/DashboardNavbar';
import WebNavbar from '../ui/WebNavbar';

export const Navbar = () => {
  const { state } = useLayoutContext();

  // Define state for the sidebar
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  if (state.navbarType === 'webNavbar') return <WebNavbar />;
  if (state.navbarType === 'dashboardNavbar') {
    return (
      <DashboardNavbar
        setSidebarOpen={setSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
    );
  }
  return null;
};
