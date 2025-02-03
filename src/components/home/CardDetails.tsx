'use client';
import Image from 'next/image';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { toast } from 'react-toastify';

import { usePayCourseSubscription } from '@/hooks/react-query/useCourses';

import Loader from '../loader';

function CardDetails({ details, resourceData }: any) {
  const { mutate, isLoading } = usePayCourseSubscription();

  const handleCheckout = () => {
    const coursePrice = details?.price?.price || 200;
    const instructorId = details?.courseInstructor?.id;
    const courseId = details?.id;

    if (!instructorId || !courseId) {
      toast.error('Course or Instructor data is missing');
      return;
    }

    mutate(
      {
        amount: coursePrice,
        courseId,
        instructorId,
      },
      {
        onSuccess: (response) => {
          const authorizationUrl = response?.authorizationUrl;

          if (authorizationUrl) {
            window.location.href = authorizationUrl;
          } else {
            toast.error('Failed to retrieve payment URL. Please try again.');
          }
        },
        onError: () => {
          toast.error('An error occurred while initiating the transaction.');
        },
      },
    );
  };

  return (
    <div className="bg-[#f9dff1] border-[1px] border-gray-500 md:h-[270px] pr-20 p-5 flex flex-col gap-5">
      {isLoading && <Loader />}
      <div className="flex gap-4 items-center">
        <Image
          src="/images/details.svg"
          alt="card image"
          width={23}
          height={150}
          className=""
        />
        <div className="text-[12px] font-extrabold flex flex-row gap-2">
          <span>Course Instructor:</span>
          <span>{details?.courseInstructor?.email || 'N/A'}</span>
        </div>
      </div>
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
          <span>{details?.sections?.length || 0}</span>
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
          <span>{`${resourceData?.length || 0} `}</span>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Image
          src="/images/Money.svg"
          alt="card image"
          width={23}
          height={150}
        />
        <div className="text-[12px] font-extrabold flex flex-row gap-2">
          <span>Price:</span>
          <span>
            {details?.price?.price} {details?.price?.currency}
          </span>
        </div>
      </div>
      <div onClick={handleCheckout}>
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
