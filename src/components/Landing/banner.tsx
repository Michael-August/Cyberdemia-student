'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoArrowForward } from 'react-icons/io5';

const Banner = () => {
  const router = useRouter();
  return (
    <div className="banner w-full flex flex-col-reverse lg:flex-row gap-4 lg:gap-10">
      <div className="desc">
        <div className="intro mb-3 md:mb-5">
          <span className="text-4xl md:text-5xl font-semibold leading-[3.125rem] md:leading-[4.1875rem]">
            Get Technical Training on{' '}
          </span>
          <span className=" text-4xl md:text-5xl font-semibold leading-[3.125rem] md:leading-[4.1875rem] text-cp-secondary">
            Cyber Security
          </span>
        </div>

        <span className="text-xs md:text-sm font-normal leading-[1.5625rem] text-[#000000CC]">
          Training is essential for prepping the cybersecurity work force of
          tomorrow.
        </span>
        <div className="buttons flex gap-5 items-center mt-8 md:mt-12">
          <button
            onClick={() => router.push('/signup')}
            className="apply py-[0.9375rem] px-[0.2rem] md:px-[1.875rem] md:py-5 text-xs font-bold flex items-center gap-2 transition-all text-white bg-[#2BDE48] hover:bg-[#33b048]"
          >
            Apply Now
            <IoArrowForward size={22} />
          </button>
          <button
            onClick={() => router.push('/#courses')}
            className="courses py-[0.9375rem] px-[1.25rem] md:px-[1.875rem] hover:text-white transition-all hover:bg-cp-secondary md:py-5 text-xs font-bold border border-solid border-cp-secondary text-cp-secondary"
          >
            See Courses
          </button>
        </div>
        <div className="dots mt-5 md:mt-20 flex items-center justify-center md:block">
          <Image
            width={54}
            height={11.66}
            src="/images/tracker.png"
            alt="dots"
          />
        </div>
      </div>
      <div className="banner-img -mx-4 md:mx-0">
        <Image
          width={725}
          height={488.45}
          src="/images/banner.svg"
          alt="banner image"
        />
      </div>
    </div>
  );
};

export default Banner;
