'use client';
import React, { useEffect } from 'react';
import Questions from '@/components/courses/test/testid/Questions';
import { useLayoutContext } from '../../../../../../../context/LayoutContext';
import QuestionBar from '@/components/courses/test/testid/QuestionBar';
import { useRouter } from 'next/navigation';

function page() {
  const { dispatch } = useLayoutContext();
  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'dashboardNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'none' });
  }, [dispatch]);
  const Router = useRouter();
  const handleSubmit = () => {
    Router.push('testid/congratulations');
  };

  return (
    <div className="flex gap-10 justify-center  mt-10">
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
    </div>
  );
}

export default page;
