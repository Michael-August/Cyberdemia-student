'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoArrowDown } from 'react-icons/io5';

const Courses = () => {
  const router = useRouter();
  return (
    <div className="courses mt-20 md:mt-32">
      <div className="secion-title relative mb-6 md:mb-10 text-[#000000CC] text-base font-semibold">
        <span>Our cybersecurity Courses</span>
      </div>

      <div className="course-thumbnails w-full flex md:flex-wrap flex-col md:flex-row gap-8">
        <div className="thumbnail w-full md:w-[25.9375rem] p-5 border border-solid border-cp-secondary">
          <div className="course-count px-2 py-1 border w-fit border-solid border-black mb-4">
            <span className="text-xs font-semibold">7 courses available</span>
          </div>
          <div className="cover-img mb-4">
            <Image
              width={375}
              height={491.37}
              src="/images/course1.png"
              alt=""
            />
          </div>
          <div className="details mb-7">
            <div className="heading mb-4">
              <span className="text-xs  font-semibold">
                Cyber Security Technical Training
              </span>
            </div>
            <div className="paragraph">
              <span className="text-xs md:text-xs text-[#000000B2]">
                Your in-house team will learn to approach cybersecurity
                offensively and defensively through real-world examples and
                exercises, hands-on labs and expert instruction.
              </span>
            </div>
          </div>
          <div className="foot-area flex flex-col gap-5">
            <div className="cert flex gap-2 items-center">
              <Image
                width={40}
                height={40}
                src="/images/certificate-outline.svg"
                alt=""
              />
              <span className="text-xs font-medium text-[#000000CC]">
                Earn Certificate on Completion
              </span>
            </div>
            <button
              onClick={() => router.push('/student/courses')}
              className="flex hover:bg-cp-primary transition-all items-center justify-center text-xs md:text-xs gap-2 p-[0.625rem] md:px-[1.875rem] md:py-5 bg-cp-secondary text-white"
            >
              Explore Courses
              <IoArrowDown size={22} />
            </button>
          </div>
        </div>
        <div className="thumbnail w-full md:w-[25.9375rem] p-5 border border-solid border-cp-secondary">
          <div className="course-count px-2 py-1 border w-fit border-solid border-black mb-4">
            <span className="text-xs font-semibold">3 courses available</span>
          </div>
          <div className="cover-img mb-4">
            <Image
              width={375}
              height={491.37}
              src="/images/course2.png"
              alt=""
            />
          </div>
          <div className="details mb-7">
            <div className="heading mb-4">
              <span className="text-xs  font-semibold">
                Cyber Security Awareness
              </span>
            </div>
            <div className="paragraph">
              <span className="text-xs md:text-xs text-[#000000B2]">
                Once users embrace cybersecurity awareness training, they become
                part of a security culture within your organization. Users keep
                cybersecurity at the top of their...
              </span>
            </div>
          </div>
          <div className="foot-area flex flex-col gap-5">
            <div className="cert flex gap-2 items-center">
              <Image
                width={40}
                height={40}
                src="/images/certificate-outline.svg"
                alt=""
              />
              <span className="text-xs font-medium text-[#000000CC]">
                Earn Certificate on Completion
              </span>
            </div>
            <button
              onClick={() => router.push('/student/courses')}
              className="flex items-center hover:bg-cp-primary transition-all justify-center text-xs md:text-xs gap-2 p-[0.625rem] md:px-[1.875rem] md:py-5 bg-cp-secondary text-white"
            >
              Explore Courses
              <IoArrowDown size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
