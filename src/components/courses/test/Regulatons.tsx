import Image from 'next/image';
import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';

// Define the Props interface
interface RegulationsProps {
  image: string;
  title: string;
  body: string;
  time: string;
  date: string;
  button: string;
}

const Regulations: React.FC<RegulationsProps> = ({
  image,
  title,
  body,
  time,
  date,
  button,
}) => {
  return (
    <div className="flex w-full flex-col justify-center items-center">
      <div className="md:w-[30%] p-3 h-max flex flex-col justify-center gap-5">
        <div className="flex flex-col justify-center gap-4">
          <Image src={image} alt="clock" width={40} height={50} />
          <h1 className="text-[12px] font-bold">{title}</h1>
        </div>
        <p className="text-[10px] font-bold text-gray-600">{body}</p>
        <div className="flex flex-col gap-0 items-start">
          <p className="text-[9px] font-bold text-gray-500">{time}</p>
          <p className="text-[9px] font-bold text-gray-500">{date}</p>
        </div>
        <div className="mt-3">
          <h2 className="text-[14px] font-bold text-gray-700 mb-2">
            Guidelines & Rules
          </h2>
          <ul className="list-disc list-inside text-[11px] font-bold text-gray-500">
            <li>Egestas magna gravida dolor venenatis ultrices cursus</li>
            <li>Morbi arcu pellentesque. Mauris sed vivamus at in in</li>
            <li>Id ornare sed eget iaculis. Et arcu elementum vestibulum</li>
            <li>Etiam vitae vestibulum iaculis cursus. Vestibulum dictum</li>
            <li>In varius pellentesque justo justo. Nibh fermentum</li>
            <li>Purus augue auctor. Quis pharetra malesuada consequat</li>
          </ul>
        </div>
        <div className="flex items-center justify-center mt-10">
          <div className="flex text-[10px] items-center justify-center bg-cp-secondary w-full p-1 text-white gap-1">
            {button}
            <IoMdArrowForward size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regulations;
