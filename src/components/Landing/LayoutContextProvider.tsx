'use client';
import React, { ReactNode, useEffect } from 'react';

import { useLayoutContext } from '../../../context/LayoutContext';

interface LayoutContextProviderProps {
  children: ReactNode;
}

const LayoutContextProvider = ({ children }: LayoutContextProviderProps) => {
  const { dispatch } = useLayoutContext();

  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'webNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'none' });
  }, [dispatch]);

  return <>{children}</>;
};

export default LayoutContextProvider;
