'use client';
import React, { useEffect } from 'react';

import LandingPageNavbar from '@/components/ui/LandingPageNavbar';

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
    <div className="landing-page w-screen">
      <nav className="main-nav">
        <LandingPageNavbar />
      </nav>

      <main className="px-4 md:px-10 md:mt-20">
        {/* <div className="banner flex flex-col-reverse md:flex-row items-center gap-4">
          <div className="details flex flex-col">
            <div className="title text-5xl font-semibold leading-[67px]">
              <span>Get Technical Training on </span>
              <span className='text-[#AC1D7E]'>Cyber Security</span>
            </div>
          </div>
          <div className="banner-img w-full">
            <img src="/images/banner-img.png" alt="banner image" className='' />
          </div>
        </div> */}
      </main>
    </div>
  );
};

export default Home;
