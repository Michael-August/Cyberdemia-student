import Image from 'next/image'; // Importing Image from next/image
import Link from 'next/link';
import React, { useState } from 'react';

function LandingPageNavbar() {
  const [expandNavBar, setExpandNavBar] = useState(false);

  return (
    <>
      <div className="w-screen flex items-center justify-between py-[10px] px-4 xl:px-20 2xl:px-52 border-b border-0 border-solid border-[#AA167666]">
        <div className="logo">
          <Image
            src="/images/logo.png"
            alt="Cyberdemia Logo"
            width={157}
            height={50} // Provide dimensions for better layout stability
            className="w-[157px] lg:w-[11.375rem]"
          />
        </div>
        <div className="lg:hidden" onClick={() => setExpandNavBar(true)}>
          <Image
            src="/icons/hamburger.png"
            alt="show menu"
            width={32}
            height={32}
            className="w-8"
          />
        </div>
        <div className="hidden nav-links lg:flex items-center gap-4">
          <div className="link-item">
            <Link
              className="text-base xl:text-sm text-[#000000CC] font-normal no-underline"
              href=""
            >
              Why CyberDemia
            </Link>
          </div>
          <div className="link-item">
            <Link
              className="text-base text-[#000000CC] font-normal no-underline"
              href=""
            >
              Courses
            </Link>
          </div>
          <div className="link-item">
            <Link
              className="text-base text-[#000000CC] font-normal no-underline"
              href=""
            >
              Cyber for Schools
            </Link>
          </div>
          <div className="link-item">
            <Link
              className="text-base text-[#000000CC] font-normal no-underline"
              href=""
            >
              FAQs
            </Link>
          </div>
          <div className="link-item">
            <Link
              className="text-base text-[#000000CC] font-normal no-underline"
              href=""
            >
              News and Updates
            </Link>
          </div>
          <div className="link-item">
            <Link
              className="text-base text-[#000000CC] font-normal no-underline"
              href=""
            >
              Become an Instructor
            </Link>
          </div>
          <div className="link-item border-solid text-center border-[#AC1D7E] p-2">
            <Link
              className="text-base text-[#AC1D7E] font-[700] no-underline"
              href=""
            >
              Log in
            </Link>
          </div>
          <div className="link-item bg-[#2BDE48] text-center p-2">
            <Link
              className="text-base text-white font-[700] no-underline"
              href=""
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`absolute w-[100vw] top-0 bg-white mobile-menu flex flex-col h-screen nav-links lg:hidden ${expandNavBar ? 'open' : 'closed'}`}
      >
        <div
          className="close flex justify-end mt-5 mb-14 mr-3"
          onClick={() => setExpandNavBar(false)}
        >
          <Image
            src="/icons/close.png"
            alt="close"
            width={32}
            height={32}
            className="text-right w-8"
          />
        </div>
        <div className="logo mb-10 flex items-center flex-col">
          <Image
            src="/images/logo.png"
            alt="Cyberdemia Logo"
            width={157}
            height={50}
            className="w-[157px]"
          />
        </div>

        <div className="flex flex-col nav-links items-center gap-10">
          <div className="link-item">
            <Link
              className="text-base text-[#000000CC] font-normal no-underline"
              href=""
            >
              Why CyberDemia
            </Link>
          </div>
          <div className="link-item">
            <Link
              className="text-base text-[#000000CC] font-normal no-underline"
              href=""
            >
              Courses
            </Link>
          </div>
          <div className="link-item">
            <Link
              className="text-base text-[#000000CC] font-normal no-underline"
              href=""
            >
              Cyber for Schools
            </Link>
          </div>
          <div className="link-item">
            <Link
              className="text-base text-[#000000CC] font-normal no-underline"
              href=""
            >
              FAQs
            </Link>
          </div>
          <div className="link-item">
            <Link
              className="text-base text-[#000000CC] font-normal no-underline"
              href=""
            >
              News and Updates
            </Link>
          </div>
          <div className="link-item">
            <Link
              className="text-base text-[#000000CC] font-normal no-underline"
              href=""
            >
              Become an Instructor
            </Link>
          </div>
          <div className="link-item border-solid text-center border-[#AC1D7E] p-2">
            <Link
              className="text-base text-[#AC1D7E] font-[700] no-underline"
              href=""
            >
              Log in
            </Link>
          </div>
          <div className="link-item bg-[#2BDE48] text-center p-2">
            <Link
              className="text-base text-white font-[700] no-underline"
              href=""
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPageNavbar;
