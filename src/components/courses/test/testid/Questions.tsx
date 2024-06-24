import React, { useState } from 'react';
import { LuClock4 } from 'react-icons/lu';
import { MdArrowForward, MdOutlineArrowBack } from 'react-icons/md';
import Image from 'next/image';
import { IoWarningOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { GoArrowRight } from 'react-icons/go';
interface QuestionsProps {
  showImage: boolean;
  time: string;
  question: string;
  questionNumber: string;
  image: string;
  handleSubmit: () => void;
}

function Questions({
  showImage,
  time,
  question,
  questionNumber,
  image,
  handleSubmit,
}: QuestionsProps) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="w-full bg-[#CBF0D5] h-max py-7 flex items-center justify-center gap-5 font-bold text-gray-700 text-[16px]">
        <div className="flex items-center justify-center gap-1">
          <LuClock4 size={24} /> <p>Time Left:</p>
        </div>
        <p>{time}</p>
      </div>
      <div className="grid gap-3 text-[13px] text-gray-600 mb-3">
        <h1 className="text-[14px] text-gray-800 font-bold">
          {questionNumber}
        </h1>
        {question}
      </div>
      {showImage && (
        <div className="flex justify-center items-center">
          <Image src={image} alt="exam image" width={250} height={30} />
        </div>
      )}
      <div className="grid gap-3 mb-5">
        <div
          className={`border-[0.5px] border-black w-full h-max p-2 gap-5 flex text-[12px] cursor-pointer font-bold ${
            selectedOption === 'A' ? 'bg-[#2F82FF] text-white' : ''
          }`}
          onClick={() => handleOptionClick('A')}
        >
          <p>A.</p>
          Option 1
        </div>
        <div
          className={`border-[0.5px] border-black w-full h-max p-2 gap-5 flex text-[12px] cursor-pointer font-bold ${
            selectedOption === 'B' ? 'bg-[#2F82FF]  text-white' : ''
          }`}
          onClick={() => handleOptionClick('B')}
        >
          <p>B.</p>
          Option 2
        </div>
        <div
          className={`border-[0.5px] border-black w-full h-max p-2 gap-5 flex text-[12px] cursor-pointer font-bold ${
            selectedOption === 'C' ? 'bg-[#2F82FF]  text-white' : ''
          }`}
          onClick={() => handleOptionClick('C')}
        >
          <p>C.</p>
          Option 3
        </div>
        <div
          className={`border-[0.5px] border-black w-full h-max p-2 gap-5 flex text-[12px] cursor-pointer font-bold ${
            selectedOption === 'D' ? 'bg-[#2F82FF]  text-white' : ''
          }`}
          onClick={() => handleOptionClick('D')}
        >
          <p>D.</p>
          Option 4
        </div>
      </div>
      <div className="w-full gap-3 flex">
        <div className="border-[1px] border-gray-500 text-gray-500 w-[50%] gap-1 flex items-center justify-center text-[12px] py-2 cursor-pointer">
          <MdOutlineArrowBack size={20} />
          Previous
        </div>
        <div className=" flex items-center justify-center ">
          <Dialog>
            <DialogTrigger>
              <div className="bg-[#11BA40] px-[120px] flex-1 text-white flex items-center justify-center gap-1 text-[12px] py-2 hover:bg-green-300 cursor-pointer">
                Next
                <MdArrowForward size={21} />
              </div>
            </DialogTrigger>
            <DialogContent className="w-max p-8">
              <div className="flex flex-col gap-4 py-4 justify-start items-center">
                <IoWarningOutline size={70} color="red" />
                <p className="text-[14px] font-extrabold w-[55%] text-center">
                  Are you sure you are done? Kindly check and confirm before you
                  submit.
                </p>
              </div>
              <DialogFooter className="flex gap-3">
                <div className="flex justify-center items-center w-full gap-4">
                  <div
                    className="bg-[#2F82FF] cursor-pointer py-2 px-6 md:px-2 w-max md:w-auto text-white text-[12px] flex justify-center items-center gap-2"
                    onClick={handleSubmit}
                  >
                    Yes, Submit!
                  </div>
                  <DialogClose asChild>
                    <div className="border cursor-pointer border-red-500 py-2 px-6 md:px-2 w-max md:w-auto text-red-500 text-[12px] flex justify-center items-center gap-2">
                      Cancel
                    </div>
                  </DialogClose>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Questions;
