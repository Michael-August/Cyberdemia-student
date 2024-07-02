'use client';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import NotAccessible from '@/components/courses/test/NotAccessible';
import QuestionBar from '@/components/courses/test/testid/QuestionBar';
import Questions from '@/components/courses/test/testid/Questions';

import { useLayoutContext } from '../../../../../../../context/LayoutContext';

function Page() {
  const router = useRouter(); // Use useRouter inside the function
  const { dispatch } = useLayoutContext();
  const isSmallScreen = useMediaQuery('(max-width:768px)');

  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'dashboardNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'none' });
  }, [dispatch]);

  const handleSubmit = () => {
    router.push('testid/congratulations'); // Use router here
  };

  return (
    <div className="flex gap-10 justify-center mt-10">
      {isSmallScreen ? (
        <div className="w-full h-full flex items-center justify-center">
          <NotAccessible />
        </div>
      ) : (
        <>
          <div className="flex w-[40%]">
            <Questions
              showImage={false}
              time={'19min : 24s'}
              question={
                'Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus.'
              }
              questionNumber={'Question 1'}
              image={'/images/examImage.svg'}
              handleSubmit={handleSubmit}
            />
          </div>
          <div className="flex w-[30%]">
            <QuestionBar numberOfQuestion={30} />
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
