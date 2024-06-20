'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { IoArrowForward } from 'react-icons/io5';
import Banner from '@/components/Landing/banner';
import Courses from '@/components/Landing/Courses';
import FAQs from '@/components/Landing/FAQs';
import Footer from '@/components/Landing/Footer';
import NewsAndUpdates from '@/components/Landing/News';
import Testimonials from '@/components/Landing/Testimonials';
import Trainings, { AwarenessTraining } from '@/components/Landing/Trainings';
import Values from '@/components/Landing/Values';

import { useLayoutContext } from '../../context/LayoutContext';

const Home = () => {
  const { dispatch } = useLayoutContext();
  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'webNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'none' });
  }, [dispatch]);

  return (
    <main className="px-4 lg:px-20 lg:mt-20 2xl:px-52 overflow-x-clip">
      <div className="">
        <Banner />
      </div>

      <div className="why-us mt-32">
        <div className="secion-title relative mb-6 md:mb-10 text-[#000000CC] text-2xl md:text-[2rem] font-semibold md:leading-[2.75rem]">
          <span>Why CyberDemia</span>
        </div>

        <div className="paragraph">
          <div className="first mb-7">
            <span className="text-base md:text-lg text-[#000000CC]">
              CyberDemia is a product from{' '}
              <span className="text-cp-secondary font-semibold">
                CyberPlural
              </span>{' '}
              that focuses on CyberSecurity Education and Awareness
            </span>
          </div>
          <div className="second mb-7">
            <span className="text-[#000000B2] text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra
              malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id
              pellentesque interdum. Vestibulum convallis velit feugiat aliquam
              pellentesque etiam. In posuere purus aliquet dolor pretium eget
              dictum.
            </span>
          </div>
        </div>

        <div className="video flex items-center justify-center">
          <video className="md:h-[34.185rem]" src="" controls></video>
        </div>
      </div>

      <div className="values mt-20 md:mt-32">
        <Values />
      </div>

      <div className="courses mt-20 md:mt-32">
        <Courses />
      </div>

      <div className="trainings mt-20 md:mt-32">
        <div className="mb-6 md:mb-10 text-[#000000CC] text-2xl md:text-[2rem] font-semibold md:leading-[2.75rem]">
          <span>Cyber Security Technical Training</span>
        </div>
        <div className="details mb-8">
          <div className="heading mb-4">
            <span className="text-lg md:text-[1.25rem] text-cp-secondary font-semibold leading-[1.75rem]">
              Workforce to secure your critical systems and assets
            </span>
          </div>
          <div className="paragraph">
            <span className="text-base md:text-lg text-[#000000B2] leading-[1.5625rem]">
              Training is essential to preparing the cybersecurity workforce of
              tomorrow, and for keeping current cybersecurity workers up-to-date
              on skills and evolving threats. Our vast cybersecurity training
              portfolio can help you and your team build fundamental to advanced
              cybersecurity techniques, prepare for top industry-recognized
              certifications or master product-specific skills. Your in-house
              team will learn to approach cybersecurity offensively and
              defensively through real-world examples and exercises, hands-on
              labs and expert instruction. Where they will gain knowledge to
              close skillset gaps, meet and maintain mandates and sustain and
              retain a highly-qualified workforce to secure your critical
              systems and assets.
            </span>
          </div>
        </div>
        <Trainings />
      </div>
      <div className="trainings mt-20 md:mt-32">
        <div className="mb-6 md:mb-10 text-[#000000CC] text-2xl md:text-[2rem] font-semibold md:leading-[2.75rem]">
          <span>Cyber Security Awareness</span>
        </div>
        <div className="details mb-8">
          <div className="heading mb-4">
            <span className="text-lg md:text-[1.25rem] text-cp-secondary font-semibold leading-[1.75rem]">
              Workforce to secure your critical systems and assets
            </span>
          </div>
          <div className="paragraph">
            <span className="text-base md:text-lg text-[#000000B2] leading-[1.5625rem]">
              The objective of our Cybersecurity Awareness Training (CAT)
              program is to empower and encourage your employees to become
              proactive security assets that are always aware of and vigilant
              against cyber threats. Once users embrace cybersecurity awareness
              training, they become part of a security culture within your
              organization. Users keep cybersecurity at the top of their thought
              processes in everything they do; This is your human firewall.
            </span>
          </div>
        </div>
        <AwarenessTraining />
      </div>

      <div className="school-outreach mt-20 lg:mt-32 flex items-center lg:flex-row flex-col gap-10">
        <div className="details w-full md:w-[43.75rem]">
          <div className="secion-title relative mb-6 md:mb-10 text-[#000000CC] text-2xl md:text-[2rem] font-semibold md:leading-[2.75rem]">
            <span>Cyber Security for School Program</span>
          </div>
          <span className="intro text-base md:text-lg text-[#000000B2]">
            Promote a culture in which employees, staffs, and students share the
            responsibility of defending the school against cyber-incident with
            holistic cybersecurity strategy.
          </span>
          <div className="sub mt-8 flex flex-col gap-5">
            <span className="font-semibold text-lg md:text-[1.25rem] text-[#000000CC]">
              Get Started with Cybersecurity for School Program
            </span>
            <span className="text-base md:text-lg text-[#000000B2]">
              The program has four primary activities: Education, Prevention,
              Detection, and Response to Incidents. Together, these activities
              will give your school a strong Cybersecurity framework, expose
              both the staff and students to current cybersecurity trends and
              best practices and also a powerful defense against cyber-attacks.
              You can reach out for quote and more information
              through cyberdemia@cyberplural.com
            </span>
          </div>
        </div>
        <div className="banner -mx-4 md:mx-0 lg:hidden xl:block">
          <Image
            width={694}
            height={514.42}
            src="/images/children.svg"
            alt=""
          />
        </div>
      </div>

      <div className="instructor mt-20 lg:mt-32 flex items-center lg:flex-row flex-col-reverse gap-10">
        <div className="banner -mx-4 lg:mx-0 lg:hidden xl:block">
          <Image width={643} height={455} src="/images/instructor.svg" alt="" />
        </div>

        <div className="details w-full lg:w-[52.75rem]">
          <div className="title mb-4">
            <span className="text-2xl md:text-[2rem] font-semibold text-[#000000CC]">
              Are you a school owner, teacher or student who wants to create
              awareness on Cybersecurity in your School?
            </span>
          </div>
          <span className="text-base md:text-lg text-[#000000B2]">
            Our team will curate a Cybersecurity awareness course that will
            suite your students and teachers then organize hands-on classes
            based on your schedule.
          </span>
          <button className="flex items-center text-base md:text-lg justify-center font-semibold gap-2 py-4 px-5 md:py-5 md:px-[1.875rem] bg-[#2BDE48] text-white w-full mt-8">
            Request for Training
            <IoArrowForward size={22} />
          </button>
        </div>
      </div>

      <div className="testimonials mt-20 md:mt-32">
        <div className="secion-title relative mb-6 md:mb-10 text-[#000000CC] text-2xl md:text-[2rem] font-semibold md:leading-[2.75rem]">
          <span>See what our students say</span>
        </div>
        <Testimonials />
      </div>

      <div className="flex mt-20 flex-col xl:flex-row xl:mt-32">
        <div className="bg-[#571C42] innerbg xl:p-[2rem] py-[2rem] xl:flex-1 px-[0.9375rem] -mx-4 md:mx-0">
          <div className="heading mb-5">
            <span className="text-white font-semibold text-2xl xl:text-[2rem]">
              Join the CyberDermia Team as a Learner or Instructor
            </span>
          </div>
          <div className="mb-8">
            <span className="text-white text-lg">
              Your in-house team will learn to approach cybersecurity
              offensively and defensively through real-world examples and
              exercises, hands-on labs and expert instruction. Training is
              essential to preparing the cybersecurity workforce of tomorrow,
              and for keeping current cybersecurity workers up-to-date on skills
              and evolving threats.{' '}
            </span>
          </div>
          <div className="buttons flex flex-wrap md:gap-6 gap-3 w-full">
            <button className="md:py-5 md:px-[1.875rem] px-5 py-[0.9375rem] flex items-center gap-2 text-cp-secondary bg-white font-bold text-base">
              Enroll Now
              <IoArrowForward size={22} className="text-cp-secondary" />
            </button>
            <button className="md:py-5 md:px-[1.875rem] px-5 py-[0.9375rem] flex items-center gap-2 text-cp-secondary bg-white font-bold text-base">
              Become an Instructor
              <IoArrowForward size={22} className="text-cp-secondary" />
            </button>
          </div>
        </div>
        <div className="hidden xl:block -mx-4">
          <Image
            width={474}
            height={453}
            className="-mx-4 md:mx-0"
            src="/images/student.svg"
            alt=""
          />
        </div>
      </div>

      <div className="faqs mt-20 md:mt-40">
        <div className="mb-6 md:mb-10 text-[#000000CC] text-2xl md:text-[2rem] flex items-center justify-center font-semibold md:leading-[2.75rem]">
          <span>FAQs</span>
        </div>
        <div className="questions">
          <FAQs />
        </div>
      </div>

      <div className="news mt-20 md:mt-32">
        <div className="mb-6 md:mb-10 text-[#000000CC] text-2xl md:text-[2rem] font-semibold md:leading-[2.75rem]">
          <span>News & Updates</span>
        </div>
        <span className="intro text-base md:text-lg text-[#000000B2]">
          Promote a culture in which employees, staffs, and students share the
          responsibility of defending the school against cyber-incident with
          holistic cybersecurity strategy.
        </span>
        <NewsAndUpdates />
      </div>

      <Footer />
    </main>
  );
};

export default Home;
