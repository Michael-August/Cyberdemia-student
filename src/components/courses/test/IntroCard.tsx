import Image from 'next/image';
import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';

interface IntroCardProps {
  title: string;
  body: string;
  time?: string; // Optional
  questions?: string; // Optional
  image: string;
  button: string;
  nextPage: () => void;
}

const IntroCard: React.FC<IntroCardProps> = ({
  title,
  body,
  time,
  questions,
  image,
  nextPage,
  button,
}) => {
  return (
    <div className="border-black border-[0.5px] md:w-[25%] p-5 h-max flex flex-col justify-center gap-5">
      <div className="flex flex-col items-center justify-center gap-5">
        <Image src={image} alt="image" width={60} height={50} />
        <h1 className="text-[14px] font-bold">{title}</h1>
      </div>
      <p className="text-[12px] font-bold text-gray-600 ">{body}</p>
      <div className="flex flex-col gap-0 items-start">
        <p className="text-[11px] font-bold text-gray-500">{time}</p>
        <p className="text-[11px] font-bold text-gray-500">{questions}</p>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="flex text-[10px] hover:bg-pink-700 items-center justify-center bg-cp-secondary w-max p-2 text-white cursor-pointer gap-1"
          onClick={nextPage}
        >
          {button}
          <IoMdArrowForward size={18} />
        </button>
      </div>
    </div>
  );
};

export default IntroCard;
