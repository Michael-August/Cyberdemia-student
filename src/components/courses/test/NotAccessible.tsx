import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
const NotAccessible = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center w-[70%] h-[500px] mt-[20px] border border-cp-secondary">
      <div className="md:w-[30%] p-3 h-max flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col justify-center items-center gap-4 ">
          <Image src="/images/lapttop.svg" alt="clock" width={60} height={50} />
          <h1 className="text-[15px] text-center font-[900] mt-2">
            Tests/Exams Accessibility
          </h1>
        </div>
        <p className="text-[12px] text-center w-[70%] text-gray-600">
          To take your test and exams kindly switch to a laptop or desktop for
          optimal performance.{' '}
        </p>
        <div className="flex items-center justify-center mt-10">
          <button
            className="flex text-[10px] hover:bg-cp-secondary hover:text-white items-center justify-center bg-white border border-cp-secondary text-cp-secondary w-full p-2 gap-1n cursor-pointer"
            onClick={() => router.back()}
          >
            I understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotAccessible;
