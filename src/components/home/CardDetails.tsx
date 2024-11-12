'use client';
import Image from 'next/image';
// import { useRouter } from 'next/navigation';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { toast } from 'react-toastify';

import { usePayCourseSubscription } from '@/hooks/react-query/useCourses';
import Loader from '../loader';

function CardDetails({ details }: any) {
  const { mutate, data, isLoading } = usePayCourseSubscription();
  // const router = useRouter();

  const handleCheckout = () => {
    const coursePrice = 200;
    const instructorId = details?.courseInstructor?.id;
    const courseId = details?.id;

    if (!instructorId || !courseId) {
      toast.error('Course or Instructor data is missing');
      return;
    }

    console.log(data, 'data');
    mutate(
      {
        amount: coursePrice,
        courseId,
        instructorId,
      },
      // {
      //   onSuccess: (data) => {
      //     toast.success('Payment Successful');
      //     // Navigate to checkout page or payment success page
      //     router.push('/student/home/checkout');
      //   },
      //   onError: (error) => {
      //     toast.error(`Payment Failed: ${error?.message || 'Unknown error'}`);
      //   },
      // }
    );
  };

  return (
    <div className="bg-[#f9dff1] border-[1px]  border-gray-500  md:h-[230px] pr-20 p-5 flex flex-col gap-5">
      {isLoading && <Loader />}
      <div className="flex gap-4 items-center">
        <Image
          src="/images/details.svg"
          alt="card image"
          width={23}
          height={150}
          className=""
        />
        <div className="text-[12px] font-extrabold flex flex-row gap-2 ">
          <span>Course Instructor:</span>
          <span>{details?.courseInstructor?.email}</span>
        </div>
      </div>
      {/* <div className="flex gap-4 items-center">
        <Image
          src="/images/time.svg"
          alt="card image"
          width={22}
          height={150}
          className=""
        />
        <div className="text-[12px] font-extrabold flex flex-row gap-2">
          <span>Total learning hours:</span>
          <span>6 hours 45 mins</span>
        </div>
      </div> */}
      <div className="flex gap-4 items-center">
        <Image
          src="/images/video.svg"
          alt="card image"
          width={23}
          height={150}
          className=""
        />
        <div className="text-[12px] font-extrabold flex flex-row gap-2">
          <span>Lectures:</span>
          <span>{details?.totalLearning}</span>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Image
          src="/images/box.svg"
          alt="card image"
          width={23}
          height={150}
          className=""
        />
        <div className="text-[12px] font-extrabold flex flex-row gap-2">
          <span>Resources:</span>
          <span>4 PDFs, 2 external links</span>
        </div>
      </div>
      <div onClick={() => handleCheckout()}>
        <button
          className="bg-cp-secondary hover:bg-pink-700 cursor-pointer text-white w-[150px] py-2 flex justify-center items-center text-[13px] gap-2"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Enroll now'}
          <GoArrowRight size={19} className="animate-pulse" />
        </button>
      </div>
    </div>
  );
}

export default CardDetails;
