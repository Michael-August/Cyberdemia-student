'use client';
import React, { useEffect } from 'react';

import { useLayoutContext } from '../../context/LayoutContext';
import { IoArrowDown, IoArrowForward } from 'react-icons/io5';

const Home = () => {
  const { dispatch } = useLayoutContext();
  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'webNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'none' });

    return () => {
      dispatch({ type: 'SET_NAVBAR', navbarType: 'none' });
      dispatch({ type: 'SET_SIDEBAR', sidebarType: 'none' });
    };
  }, [dispatch]);

  return (
    <main className='md:px-20 md:mt-20 overflow-x-clip'>
      <div className="banner w-full flex flex-col-reverse md:flex-row gap-10">
        <div className="desc">
          <div className="intro md:mb-5">
            <span className='text-5xl font-semibold leading-[67px]'>Get Technical Training on </span>
            <span className='text-5xl font-semibold leading-[67px] text-cp-secondary'>Cyber Security</span>
          </div>

          <span className='text-lg font-normal leading-[25px] text-[#000000CC]'>Training is essential for prepping the cybersecurity work force of tomorrow.</span>
          <div className="buttons flex gap-5 items-center mt-12">
            <button className='apply px-[30px] py-5 text-base font-bold flex items-center gap-2 text-white bg-[#2BDE48]'>
              Apply Now
              <IoArrowForward size={22} />
            </button>
            <button className='courses px-[30px] py-5 text-base font-bold border border-solid border-cp-secondary text-cp-secondary'>See Courses</button>
          </div>
          <div className="dots mt-20">
            <img src="/images/tracker.png" alt="" />
          </div>
        </div>
        <div className="banner-img">
          <img src="/images/banner-img.png" alt="" />
        </div>
      </div>

      <div className="why-us mt-32">
        <div className="secion-title relative mb-10 text-[#000000CC] text-[32px] font-semibold leading-[44px]">
          <span>Why CyberDemia</span>
        </div>

        <div className="paragraph">
          <div className="first mb-7">
            <span className='text-lg text-[#000000CC] leading-[25.2px]'>CyberDemia is a product from <span className='text-cp-secondary font-semibold'>CyberPlural</span> that focuses on CyberSecurity Education and Awareness</span>
          </div>
          <div className="second mb-7">
            <span className='text-[#000000B2] leading-25.2px] text-lg'>Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam. In posuere purus aliquet dolor pretium eget dictum.</span>
          </div>
        </div>

        <div className="video flex items-center justify-center">
          <video className='md:h-[547px]' src="" controls></video>
        </div>
      </div>

      <div className="values mt-32">
        <div className="secion-title relative mb-7 text-[#000000CC] text-[32px] font-semibold leading-[44px]">
          <span>Our Value Proposition</span>
        </div>
        <div className="values-list flex items-center justify-center gap-6">
          <div className="value">
            <img className='mb-8' src="images/idea.png" alt="" />
            <div className="value-title mb-4">
              <span className='text-[22px] font-semibold leading-[30.8px] text-[#000000CC]'>Awareness & Training</span>
            </div>
            <div className="details">
              <span className='text-[#000000B2] text-lg leading-[25.2px]'>Your in-house team will learn to approach cybersecurity offensively and defensively through real-world examples and exercises, hands-on labs and expert instruction.</span>
            </div>
          </div>
          <div className="value">
            <img className='mb-8' src="images/completed.png" alt="" />
            <div className="value-title mb-4">
              <span className='text-[22px] font-semibold leading-[30.8px] text-[#000000CC]'>Virtual Labs Access</span>
            </div>
            <div className="details">
              <span className='text-[#000000B2] text-lg leading-[25.2px]'>Test out cybersecurity virtual labs, they are cloud-based digital simulations that use real-world programs to emulate real-world environments and scenerios.</span>
            </div>
          </div>
          <div className="value">
            <img className='mb-8' src="images/certificate.png" alt="" />
            <div className="value-title mb-4">
              <span className='text-[22px] font-semibold leading-[30.8px] text-[#000000CC]'>Certification</span>
            </div>
            <div className="details">
              <span className='text-[#000000B2] text-lg leading-[25.2px]'>Our technical trainings are geared towards certification, be confident with the skills needed to pass your all required certifications in your career path.</span>
            </div>
          </div>
          <div className="value">
            <img className='mb-8' src="images/network.png" alt="" />
            <div className="value-title mb-4">
              <span className='text-[22px] font-semibold leading-[30.8px] text-[#000000CC]'>Transfer of knowledge</span>
            </div>
            <div className="details">
              <span className='text-[#000000B2] text-lg leading-[25.2px]'>Working alongside your technical team to transfer knowledge as it may be needed in real-time to drive security operations for the organization.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="courses mt-32">
        <div className="secion-title relative mb-10 text-[#000000CC] text-[32px] font-semibold leading-[44px]">
          <span>Our cybersecurity Courses</span>
        </div>

        <div className="course-thumbnails w-full flex flex-wrap flex-col md:flex-row gap-8 items-center justify-center">
          <div className="thumbnail w-[415px] p-5 border border-solid border-cp-secondary">
            <div className="course-count px-2 py-1 border w-fit border-solid border-black mb-4">
              <span className='text-sm font-semibold'>7 courses available</span>
            </div>
            <div className="cover-img mb-4">
              <img src="/images/course1.png" alt="" />
            </div>
            <div className="details mb-7">
              <div className="heading mb-4">
                <span className='text-[22px] font-medium'>Cyber Security Technical Training</span>
              </div>
              <div className="paragraph">
                <span className='text-base text-[#000000B2]'>Your in-house team will learn to approach cybersecurity offensively and defensively through real-world examples and exercises, hands-on labs and expert instruction.</span>
              </div>
            </div>
            <div className="foot-area flex flex-col gap-5">
              <div className="cert flex gap-2 items-center">
                <img src="/images/certificate-outine.png" alt="" />
                <span className='text-base font-medium text-[#000000CC]'>Earn Certificate on Completion</span>
              </div>
              <button className='flex items-center justify-center gap-2 px-[30px] py-5 bg-cp-secondary text-white'>
                Explore Courses
                <IoArrowDown size={22} />
              </button>
            </div>
          </div>
          <div className="thumbnail w-[415px] p-5 border border-solid border-cp-secondary">
            <div className="course-count px-2 py-1 border w-fit border-solid border-black mb-4">
              <span className='text-sm font-semibold'>3 courses available</span>
            </div>
            <div className="cover-img mb-4">
              <img src="/images/course2.png" alt="" />
            </div>
            <div className="details mb-7">
              <div className="heading mb-4">
                <span className='text-[22px] font-medium'>Cyber Security Awareness</span>
              </div>
              <div className="paragraph">
                <span className='text-base text-[#000000B2]'>Once users embrace cybersecurity awareness training, they become part of a security culture within your organization. Users keep cybersecurity at the top of their...</span>
              </div>
            </div>
            <div className="foot-area flex flex-col gap-5">
              <div className="cert flex gap-2 items-center">
                <img src="/images/certificate-outine.png" alt="" />
                <span className='text-base font-medium text-[#000000CC]'>Earn Certificate on Completion</span>
              </div>
              <button className='flex items-center justify-center gap-2 px-[30px] py-5 bg-cp-secondary text-white'>
                Explore Courses
                <IoArrowDown size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="trainings mt-32">
        <div className="mb-10 text-[#000000CC] text-[32px] font-semibold leading-[44px]">
          <span>Cyber Security Technical Training</span>
        </div>
        <div className="details mb-8">
          <div className="heading mb-4">
            <span className='text-[20px] text-cp-secondary font-medium leading-[28px]'>Workforce to secure your critical systems and assets</span>
          </div>
          <div className="paragraph">
            <span className='text-lg text-[#000000B2] leading-[25px]'>Training is essential to preparing the cybersecurity workforce of tomorrow, and for keeping current cybersecurity workers up-to-date on skills and evolving threats. Our vast cybersecurity training portfolio can help you and your team build fundamental to advanced cybersecurity techniques, prepare for top industry-recognized certifications or master product-specific skills. Your in-house team will learn to approach cybersecurity offensively and defensively through real-world examples and exercises, hands-on labs and expert instruction. Where they will gain knowledge to close skillset gaps, meet and maintain mandates and sustain and retain a highly-qualified workforce to secure your critical systems and assets.</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
