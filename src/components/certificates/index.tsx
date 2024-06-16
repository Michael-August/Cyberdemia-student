'use client';

import Image from 'next/image';
import { useState } from 'react';
import { IoArrowForward } from 'react-icons/io5';

import { Button } from '../button';

const Certificates = () => {
  const [tab, setTab] = useState('completed');
  const switchTab = (tab: string) => setTab(tab);

  return (
    <div>
      <div className="tabs flex items-center justify-between md:justify-start md:gap-8 border-b border-solid border-cp-secondary pb-4 mb-5 mt-7">
        <div
          onClick={() => switchTab('completed')}
          className={`tab relative cursor-pointer ${tab === 'completed' ? 'active' : ''} font-semibold text-xs md:text-[1.25rem] text-[#00000099]`}
        >
          <span>Completed Course</span>
        </div>
        <div
          onClick={() => switchTab('custom')}
          className={`tab relative cursor-pointer ${tab === 'custom' ? 'active' : ''} font-semibold text-xs md:text-[1.25rem] text-[#00000099]`}
        >
          <span>Custom Training Courses</span>
        </div>
      </div>

      <div className="completed">
        <div className="ongoings-certs md:hidden">
          <div className="cert bg-[#AC1D7E29] p-4 w-full flex flex-col gap-4">
            <div className="mb-3">
              <span className="text-base font-semibold">
                Cyber Security Defense Analyst
              </span>
            </div>
            <div className="progress flex flex-col gap-1">
              <span className="text-sm text-right">4/8 Lessons Completed</span>
              <div className="progress-bar bg-white w-full h-2">
                <div className="progress-length bg-[#5595F5] w-1/2 h-full"></div>
              </div>
            </div>
            <Button className="!bg-cp-secondary !text-white flex items-center gap-3 text-sm mt-3">
              Resume Learning
              <IoArrowForward size={22} />
            </Button>
          </div>
        </div>

        <div className="ongoings-certs w-full lg:w-[75%] hidden md:block">
          <div className="cert bg-[#AC1D7E29] p-4 w-full flex flex-col gap-4">
            <div className="details flex items-center gap-7">
              <Image
                src="/images/ongoing-course.png"
                width={121.7}
                height={79}
                alt="completed course image"
              />
              <div className="flex flex-col gap-3">
                <span className="text-lg font-semibold">
                  Cyber Security Defense Analyst
                </span>
                <div className="progress-detail">
                  {/* <div className="in-progress">
                                        <div className="progress flex flex-col gap-1">
                                            <span className="text-sm text-right">4/8 Lessons Completed</span>
                                            <div className="progress-bar bg-white w-full h-2">
                                                <div className="progress-length bg-[#5595F5] w-1/2 h-full"></div>
                                            </div>
                                        </div>
                                    </div> */}
                  <div className="completed flex gap-1 items-center">
                    <Image
                      src="/icons/check.png"
                      width={32}
                      height={32}
                      alt="Completed"
                    />
                    <span className="text-sm font-bold">
                      8/8 Lessons Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons flex gap-5 justify-end">
              <Button className="bg-transparent border border-solid text-[#000000CC] flex items-center gap-3 text-sm font-medium mt-3">
                Rate Course
                <Image
                  src="/icons/star.png"
                  width={24}
                  height={24}
                  alt="Star"
                />
              </Button>
              {/* <Button className="!bg-cp-secondary !text-white flex items-center gap-3 text-sm mt-3">
                                    Resume Learning
                                    <IoArrowForward size={22} />
                                </Button> */}
              <Button className="!bg-cp-secondary !text-white flex items-center gap-3 text-sm mt-3">
                View Certificate
                <IoArrowForward size={22} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
