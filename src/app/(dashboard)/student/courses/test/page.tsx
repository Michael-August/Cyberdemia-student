'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import IntroCard from '@/components/courses/test/IntroCard';
import Regulatons from '@/components/courses/test/Regulatons';

import { useLayoutContext } from '../../../../../../context/LayoutContext';

function Page() {
  const { dispatch } = useLayoutContext();
  const [render, setRender] = useState(true);

  const nextPage = () => {
    setRender(!render);
  };
  const Router = useRouter();
  const handleNext = () => {
    Router.push('test/testid');
  };

  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'dashboardNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'courseSideBar' });
  }, [dispatch]);

  return (
    <div className="flex m-10 mt-40 md:mt-10 overflow-y-hidden">
      {render === true ? (
        <IntroCard
          title={'Test'}
          body={
            'orem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus'
          }
          image={'/images/clock.svg'}
          button={'Take Test'}
          time={'20 Minutes'}
          questions={'60 Questions'}
          nextPage={nextPage}
        />
      ) : (
        <Regulatons
          image={'/images/clock.svg'}
          title={'Test'}
          body={
            'Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus.'
          }
          time={'20 Minutes'}
          date={'60 Questions'}
          button={'Take Test'}
          handleNext={handleNext}
        />
      )}
    </div>
  );
}

export default Page;
