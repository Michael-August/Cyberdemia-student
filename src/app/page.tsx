'use client';
import React, { useEffect } from 'react';

import { useLayoutContext } from '../../context/LayoutContext';

const Home = () => {
  const { dispatch } = useLayoutContext();
  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'webNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'none' });

    return () => {
      dispatch({ type: 'SET_NAVBAR', navbarType: 'none' });
      dispatch({ type: 'SET_SIDEBAR', sidebarType: 'none' });
    };
  }, [dispatch]);

  return (
    <main>
      <div className="banner"></div>
    </main>
  );
};

export default Home;
