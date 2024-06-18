'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
const Page = () => {
  const router = useRouter();
  const handleClick = () => router.push('/student/home');
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] gap-5">
      <Image
        src="/images/confirmation.svg"
        alt="confimation image"
        width={200}
        height={300}
      />
      <div className="md:w-[25%] w-[80%] flex flex-col gap-5 ">
        <h1 className="text-[14px] font-extrabold md:text-center">
          Your application has been received, our team will reach out to you via
          email
        </h1>

        <div
          className=" py-2 bg-[#AC1D7E] text-white text-[12px]  justify-center items-center cursor-pointer hidden md:flex"
          onClick={handleClick}
        >
          Go Home
        </div>
        <div
          className=" py-2 bg-[#AC1D7E] text-white text-[12px] flex justify-center items-center cursor-pointer md:hidden "
          onClick={handleClick}
        >
          Done
        </div>
      </div>
    </div>
  );
};

export default Page;
