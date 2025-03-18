import Image from 'next/image';
import React from 'react';

import SignupForm from './Signup-form';
import moment from 'moment';

const Signup = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen m-10">
      <div className="hidden sm:flex flex-col justify-center items-center gap-5 sm:w-1/2">
        <Image
          src={'/images/loginImage.svg'}
          width={600}
          height={600}
          alt={'signup image'}
        />

        <h1 className="text-3xl font-extrabold text-center px-[10rem]">
          Gain Industry Standard Skills & Become a Cybersecurity Expert
        </h1>
        <p className="text-black py-20">© {moment().year()} CyberDemia</p>
      </div>
      <div className="flex flex-col sm:w-1/2 overflow-y-auto h-full">
        <div className="flex flex-col justify-center mb-15 items-start gap-10 sm:pt-10">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
