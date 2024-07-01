'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
function Page() {
  const Router = useRouter();
  const handleSubmit = () => {
    Router.push('/student/courses');
  };
  return (
    <div className="flex flex-col h-[80vh] justify-center items-center gap-8">
      <Image src="/images/examc.svg" alt="exam image" width={150} height={30} />
      <div className="md:w-[20%]">
        <span>Congratulations! Your scored </span>
        <div className="flex justify-center items-center mr-10">
          <span className="text-green-500 mr-[5px]">28/30</span>
          <span>marks.</span>
        </div>
      </div>
      <div className="text-[12px] px-10 text-center md:text-start text-gray-600 md:w-[20%]">
        You did great on your test. You can continue taking your course and keep
        learning!
      </div>
      <div
        className="bg-cp-secondary cursor-pointer py-2 px-6 md:px-2 w-max md:w-[25%] text-white text-[12px] flex justify-center items-center gap-2"
        onClick={handleSubmit}
      >
        Continue with course
      </div>
    </div>
  );
}

export default Page;
