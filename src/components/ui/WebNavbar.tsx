import React from 'react';

function WebNavbar() {
  return (
    <div className="w-full flex items-center justify-center gap-[10px] py-[13px] px-4 md:px-0 bg-cp-primary text-white shadow-md z-[10000] h-[60px]">
      <img src='/icons/notification1.png' className='w-[26.5px] md:w-[32px]' />
      <div className="intro text-center">
        <span className='text-xs md:text-sm font-extrabold'>We are excited to announce the launch of Cyber Security & Infrastructure Engineering / SOC Management courser.</span>
        <span className='text-xs ml-2 md:text-sm font-medium'>View Course Details</span>
      </div>
      <img src='/icons/ArrowLeft.png' className='w-[18.25px] md:w-[24px]' />
    </div>
  );
}

export default WebNavbar;
