import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import useStickyNavbar from '@/hooks/useStickyNavBar';

function LandingPageNavbar() {
  const [expandNavBar, setExpandNavBar] = useState(false);

  const router = useRouter();

  const isSticky = useStickyNavbar();

  return (
    <>
      <div
        className={`w-screen ${isSticky ? 'stick-up' : ''} transition-all flex items-center justify-between py-[10px] px-4 xl:px-20 2xl:px-52 border-b border-0 border-solid border-[#AA167666]`}
      >
        <div className="logo cursor-pointer" onClick={() => router.push('/')}>
          <Image
            width={182.71}
            height={48.71}
            src="/images/logo.png"
            alt="Cyberdemia Logo"
            className="w-[157px] lg:w-[11.375rem]"
          />
        </div>
        <div
          className="lg:hidden"
          onClick={() => setExpandNavBar((value) => (value = !value))}
        >
          <Image
            width={32}
            height={32}
            src="/icons/hamburger.png"
            alt="show menu"
            className="w-8 cursor-pointer"
          />
        </div>
        <div className="hidden nav-links lg:flex items-center gap-4">
          <div className="link-item">
            <Link
              className="text-xs text-[#000000CC] font-normal hover:text-cp-secondary transition-all  hover:font-semibold"
              href="#why"
            >
              Why CyberDemia
            </Link>
          </div>
          <div className="link-item">
            <Link
              className="text-xs text-[#000000CC] font-normal hover:text-cp-secondary transition-all  hover:font-semibold"
              href="#courses"
            >
              Courses
            </Link>
          </div>
          <div className="link-item">
            <Link
              className="text-xs text-[#000000CC] font-normal hover:text-cp-secondary transition-all  hover:font-semibold"
              href="#school-outreach"
            >
              Cyber for Schools
            </Link>
          </div>
          <div className="link-item">
            <Link
              className="text-xs text-[#000000CC] font-normal hover:text-cp-secondary transition-all  hover:font-semibold"
              href="#faqs"
            >
              FAQs
            </Link>
          </div>
          <div className="link-item">
            <Link
              className="text-xs text-[#000000CC] font-normal hover:text-cp-secondary transition-all  hover:font-semibold"
              href="#news-and-updates"
            >
              News and Updates
            </Link>
          </div>
          <div className="link-item">
            <Link
              className="text-xs text-[#000000CC] font-normal hover:text-cp-secondary transition-all  hover:font-semibold"
              href=""
            >
              Become an Instructor
            </Link>
          </div>
          <div
            onClick={() => router.push('/signin')}
            className="link-item border-solid text-center text-[#AC1D7E] transition-all border-[#AC1D7E] p-2 cursor-pointer hover:bg-cp-secondary hover:text-white"
          >
            <span className="text-xs font-[700]">Log in</span>
          </div>
          <div
            onClick={() => router.push('/signup')}
            className="link-item bg-[#2BDE48] text-center p-2 cursor-pointer transition-all hover:bg-[#21712e]"
          >
            <span className="text-xs text-white font-[700]">Apply Now</span>
          </div>
        </div>
      </div>

      <div
        className={`absolute w-[100vw] top-0 bg-white mobile-menu flex flex-col h-[150%] nav-links lg:hidden ${expandNavBar ? 'open' : 'closed'}`}
      >
        <div
          className="close flex justify-end mt-5 mb-14 mr-3"
          onClick={() => setExpandNavBar(false)}
        >
          <Image
            width={32}
            height={32}
            src="/icons/close.png"
            alt="close"
            className="text-right w-8 cursor-pointer"
          />
        </div>
        <div className="logo mb-10 flex items-center flex-col">
          <Image
            width={157.36}
            height={42.36}
            src="/images/logo.png"
            alt="Cyberdemia Logo"
            className="w-[157px]"
          />
        </div>

        <div className="flex flex-col nav-links items-center gap-10">
          <div className="link-item">
            <Link
              onClick={() => setExpandNavBar(false)}
              className="text-xs text-[#000000CC] font-normal hover:text-cp-secondary transition-all  hover:font-semibold"
              href="#why"
            >
              Why CyberDemia
            </Link>
          </div>
          <div className="link-item">
            <Link
              onClick={() => setExpandNavBar(false)}
              className="text-xs text-[#000000CC] font-normal hover:text-cp-secondary transition-all  hover:font-semibold"
              href="#courses"
            >
              Courses
            </Link>
          </div>
          <div className="link-item">
            <Link
              onClick={() => setExpandNavBar(false)}
              className="text-xs text-[#000000CC] font-normal hover:text-cp-secondary transition-all  hover:font-semibold"
              href="#school-outreach"
            >
              Cyber for Schools
            </Link>
          </div>
          <div className="link-item">
            <Link
              onClick={() => setExpandNavBar(false)}
              className="text-xs text-[#000000CC] font-normal hover:text-cp-secondary transition-all  hover:font-semibold"
              href="#faqs"
            >
              FAQs
            </Link>
          </div>
          <div className="link-item">
            <Link
              onClick={() => setExpandNavBar(false)}
              className="text-xs text-[#000000CC] font-normal hover:text-cp-secondary transition-all  hover:font-semibold"
              href="#news-and-updates"
            >
              News and Updates
            </Link>
          </div>
          <div className="link-item">
            <Link
              onClick={() => setExpandNavBar(false)}
              className="text-xs text-[#000000CC] font-normal hover:text-cp-secondary transition-all  hover:font-semibold"
              href=""
            >
              Become an Instructor
            </Link>
          </div>
          <div className="link-item border-solid text-center border-[#AC1D7E] p-2">
            <Link
              className="text-xs text-[#AC1D7E] font-[700] hover:text-cp-secondary transition-all  hover:font-semibold"
              href="/signin"
            >
              Log in
            </Link>
          </div>
          <div className="link-item bg-[#2BDE48] text-center p-2">
            <Link
              className="text-xs text-white font-[700] hover:text-cp-secondary transition-all  hover:font-semibold"
              href="/signup"
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
