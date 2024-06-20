"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  IoArrowDown,
  IoArrowForward,
  IoChevronDown,
  IoChevronUp,
} from "react-icons/io5";

import { useLayoutContext } from "../../context/LayoutContext";
import { faqsArray } from "../../utils/constants/faqs";

const Home = () => {
  const { dispatch } = useLayoutContext();
  useEffect(() => {
    dispatch({ type: "SET_NAVBAR", navbarType: "webNavbar" });
    dispatch({ type: "SET_SIDEBAR", sidebarType: "none" });
  }, [dispatch]);

  const [tab, setTab] = useState("available-tech");
  const [tab2, setTab2] = useState("available");
  const switchTab = (tab: string) => setTab(tab);
  const switchTab2 = (tab: string) => setTab2(tab);

  const [faqs, setFaqs] = useState(faqsArray);

  const expandFaq = (faqId: number) => {
    const faqsUpdated = faqs.map((faq) => {
      if (faq.id === faqId) {
        faq.expanded = !faq.expanded;
      }
      return faq;
    });
    setFaqs(faqsUpdated);
  };

  return (
    <main className="px-4 lg:px-20 lg:mt-20 2xl:px-52 overflow-x-clip">
      <div className="banner w-full flex flex-col-reverse lg:flex-row gap-4 lg:gap-10">
        <div className="desc">
          <div className="intro mb-3 md:mb-5">
            <span className="text-4xl md:text-5xl font-semibold leading-[3.125rem] md:leading-[4.1875rem]">
              Get Technical Training on{" "}
            </span>
            <span className=" text-4xl md:text-5xl font-semibold leading-[3.125rem] md:leading-[4.1875rem] text-cp-secondary">
              Cyber Security
            </span>
          </div>

          <span className="text-base md:text-lg font-normal leading-[1.5625rem] text-[#000000CC]">
            Training is essential for prepping the cybersecurity work force of
            tomorrow.
          </span>
          <div className="buttons flex gap-5 items-center mt-8 md:mt-12">
            <button className="apply py-[0.9375rem] px-[0.2rem] md:px-[1.875rem] md:py-5 text-base font-bold flex items-center gap-2 text-white bg-[#2BDE48]">
              Apply Now
              <IoArrowForward size={22} />
            </button>
            <button className="courses py-[0.9375rem] px-[1.25rem] md:px-[1.875rem] md:py-5 text-base font-bold border border-solid border-cp-secondary text-cp-secondary">
              See Courses
            </button>
          </div>
          <div className="dots mt-5 md:mt-20 flex items-center justify-center md:block">
            <Image
              src="/images/tracker.png"
              alt="tracker"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="banner-Image -mx-4 md:mx-0">
          <Image
            src="/images/banner-Image.png"
            alt="banner"
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="why-us mt-32">
        <div className="secion-title relative mb-6 md:mb-10 text-[#000000CC] text-2xl md:text-[2rem] font-semibold md:leading-[2.75rem]">
          <span>Why CyberDemia</span>
        </div>

        <div className="paragraph">
          <div className="first mb-7">
            <span className="text-base md:text-lg text-[#000000CC]">
              CyberDemia is a product from{" "}
              <span className="text-cp-secondary font-semibold">
                CyberPlural
              </span>{" "}
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
        <div className="secion-title relative mb-6 md:mb-10 text-[#000000CC] text-2xl md:text-[2rem] font-semibold md:leading-[2.75rem]">
          <span>Our Value Proposition</span>
        </div>
        <div className="values-list flex flex-wrap items-center justify-center gap-6">
          <div className="value w-full md:w-[20rem] flex flex-col items-center justify-center md:block">
            <Image
              className="mb-8"
              src="/images/idea.png"
              alt="idea"
              width={100}
              height={100}
            />
            <div className="value-title mb-4">
              <span className="text-[1.25rem] md:text-[1.375rem] font-semibold md:leading-[1.925rem] text-[#000000CC]">
                Awareness & Training
              </span>
            </div>
            <div className="details text-center md:text-left">
              <span className="text-[#000000B2]  text-base md:text-lg ">
                Your in-house team will learn to approach cybersecurity
                offensively and defensively through real-world examples and
                exercises, hands-on labs and expert instruction.
              </span>
            </div>
          </div>
          <div className="value w-full md:w-[20rem] flex flex-col items-center justify-center md:block">
            <Image
              className="mb-8"
              src="/images/completed.png"
              alt="completed"
              width={100}
              height={100}
            />
            <div className="value-title mb-4">
              <span className="text-[1.25rem] md:text-[1.375rem] font-semibold md:leading-[1.925rem] text-[#000000CC]">
                Virtual Labs Access
              </span>
            </div>
            <div className="details text-center md:text-left">
              <span className="text-[#000000B2] text-base md:text-lg ">
                Test out cybersecurity virtual labs, they are cloud-based
                digital simulations that use real-world programs to emulate
                real-world environments and scenerios.
              </span>
            </div>
          </div>
          <div className="value w-full md:w-[20rem] flex flex-col items-center justify-center md:block">
            <Image
              className="mb-5 md:mb-8"
              src="/images/certificate.png"
              alt="certificate"
              width={100}
              height={100}
            />
            <div className="value-title mb-4">
              <span className="text-[1.25rem] md:text-[1.375rem] font-semibold md:leading-[1.925rem] text-[#000000CC]">
                Certification
              </span>
            </div>
            <div className="details text-center md:text-left">
              <span className="text-[#000000B2] text-base md:text-lg ">
                Our technical trainings are geared towards certification, be
                confident with the skills needed to pass your all required
                certifications in your career path.
              </span>
            </div>
          </div>
          <div className="value w-full md:w-[20rem] flex flex-col items-center justify-center md:block">
            <Image
              className="mb-5 md:mb-8"
              src="/images/network.png"
              alt="network"
              width={100}
              height={100}
            />
            <div className="value-title mb-4">
              <span className="text-[1.25rem] md:text-[1.375rem] font-semibold md:leading-[1.925rem] text-[#000000CC]">
                Transfer of knowledge
              </span>
            </div>
            <div className="details text-center md:text-left">
              <span className="text-[#000000B2] text-base md:text-lg ">
                Working alongside your technical team to transfer knowledge as
                it may be needed in real-time to drive security operations for
                the organization.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="courses mt-20 md:mt-32">
        <div className="secion-title relative mb-6 md:mb-10 text-[#000000CC] text-2xl md:text-[2rem] font-semibold md:leading-[2.75rem]">
          <span>Our cybersecurity Courses</span>
        </div>

        <div className="course-thumbnails w-full flex md:flex-wrap flex-col md:flex-row gap-8 items-center justify-center">
          <div className="thumbnail w-full md:w-[25.9375rem] p-5 border border-solid border-cp-secondary">
            <div className="course-count px-2 py-1 border w-fit border-solid border-black mb-4">
              <span className="text-sm font-semibold">7 courses available</span>
            </div>
            <div className="cover-Image mb-4">
              <Image
                src="/images/course1.png"
                alt="course"
                width={100}
                height={100}
              />
            </div>
            <div className="details mb-7">
              <div className="heading mb-4">
                <span className="text-base md:text-[1.375rem] font-semibold">
                  Cyber Security Technical Training
                </span>
              </div>
              <div className="paragraph">
                <span className="text-sm md:text-base text-[#000000B2]">
                  Your in-house team will learn to approach cybersecurity
                  offensively and defensively through real-world examples and
                  exercises, hands-on labs and expert instruction.
                </span>
              </div>
            </div>
            <div className="foot-area flex flex-col gap-5">
              <div className="cert flex gap-2 items-center">
                <Image
                  src="/images/certificate-outine.png"
                  alt="certificate"
                  width={100}
                  height={100}
                />
                <span className="text-base font-medium text-[#000000CC]">
                  Earn Certificate on Completion
                </span>
              </div>
              <button className="flex items-center justify-center text-sm md:text-base gap-2 p-[0.625rem] md:px-[1.875rem] md:py-5 bg-cp-secondary text-white">
                Explore Courses
                <IoArrowDown size={22} />
              </button>
            </div>
          </div>
          <div className="thumbnail w-full md:w-[25.9375rem] p-5 border border-solid border-cp-secondary">
            <div className="course-count px-2 py-1 border w-fit border-solid border-black mb-4">
              <span className="text-sm font-semibold">3 courses available</span>
            </div>
            <div className="cover-Image mb-4">
              <Image
                src="/images/course2.png"
                alt="course"
                width={100}
                height={100}
              />
            </div>
            <div className="details mb-7">
              <div className="heading mb-4">
                <span className="text-base md:text-[1.375rem] font-semibold">
                  Cyber Security Awareness
                </span>
              </div>
              <div className="paragraph">
                <span className="text-sm md:text-base text-[#000000B2]">
                  Once users embrace cybersecurity awareness training, they
                  become part of a security culture within your organization.
                  Users keep cybersecurity at the top of their...
                </span>
              </div>
            </div>
            <div className="foot-area flex flex-col gap-5">
              <div className="cert flex gap-2 items-center">
                <Image
                  src="/images/certificate-outine.png"
                  alt="certificate"
                  width={100}
                  height={100}
                />
                <span className="text-base font-medium text-[#000000CC]">
                  Earn Certificate on Completion
                </span>
              </div>
              <button className="flex items-center justify-center text-sm md:text-base gap-2 p-[0.625rem] md:px-[1.875rem] md:py-5 bg-cp-secondary text-white">
                Explore Courses
                <IoArrowDown size={22} />
              </button>
            </div>
          </div>
        </div>
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
        <div className="tab-area">
          <div className="tabs flex items-center gap-8 border-b border-solid border-cp-secondary pb-4 mb-6">
            <div
              onClick={() => switchTab("available-tech")}
              className={`tab relative cursor-pointer ${tab === "available-tech" ? "active" : ""} font-semibold text-lg md:text-[1.25rem] text-[#00000099]`}
            >
              <span>Available</span>
            </div>
            <div
              onClick={() => switchTab("coming-tech")}
              className={`tab relative cursor-pointer ${tab === "coming-tech" ? "active" : ""} font-semibold text-lg md:text-[1.25rem] text-[#00000099]`}
            >
              <span>Coming Soon</span>
            </div>
          </div>
          <div className="tab-contents hidden lg:block">
            <div className="available-tech">
              <div className="w-full flex gap-5 overflow-x-scroll">
                <div className="border h-fit border-solid border-cp-secondary p-5">
                  <Image
                    className="w-full"
                    src="/images/tech-banner.png"
                    alt=""
                  />
                  <div className="details mb-6">
                    <div className="head mt-4 mb-6">
                      <span className="text-lg font-semibold text-[#000000CC]">
                        Table Top Exercises
                      </span>
                    </div>
                    <span className="md:hidden w-[334px] lg:block">
                      This course provides essential cybersecurity training for
                      enthusiasts transitioning into the field, emphasizing CIA
                      principles and continuous protection of information and
                      systems for business objectives.
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
                      View Course
                      <IoArrowForward size={22} />
                    </button>
                  </div>
                </div>
                <div className="border h-fit border-solid border-cp-secondary p-5">
                  <Image
                    className="w-full"
                    src="/images/tech-banner.png"
                    alt=""
                  />
                  <div className="details mb-6">
                    <div className="head mt-4 mb-6">
                      <span className="text-lg font-semibold text-[#000000CC]">
                        Table Top Exercises
                      </span>
                    </div>
                    <span className="md:hidden w-[334px] lg:block">
                      This course provides essential cybersecurity training for
                      enthusiasts transitioning into the field, emphasizing CIA
                      principles and continuous protection of information and
                      systems for business objectives.
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
                      View Course
                      <IoArrowForward size={22} />
                    </button>
                  </div>
                </div>
                <div className="border h-fit border-solid border-cp-secondary p-5">
                  <Image
                    className="w-full"
                    src="/images/tech-banner.png"
                    alt=""
                  />
                  <div className="details mb-6">
                    <div className="head mt-4 mb-6">
                      <span className="text-lg font-semibold text-[#000000CC]">
                        Table Top Exercises
                      </span>
                    </div>
                    <span className="md:hidden w-[334px] lg:block">
                      This course provides essential cybersecurity training for
                      enthusiasts transitioning into the field, emphasizing CIA
                      principles and continuous protection of information and
                      systems for business objectives.
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
                      View Course
                      <IoArrowForward size={22} />
                    </button>
                  </div>
                </div>
                <div className="border h-fit border-solid border-cp-secondary p-5">
                  <Image
                    className="w-full"
                    src="/images/tech-banner.png"
                    alt=""
                  />
                  <div className="details mb-6">
                    <div className="head mt-4 mb-6">
                      <span className="text-lg font-semibold text-[#000000CC]">
                        Table Top Exercises
                      </span>
                    </div>
                    <span className="md:hidden w-[334px] lg:block">
                      This course provides essential cybersecurity training for
                      enthusiasts transitioning into the field, emphasizing CIA
                      principles and continuous protection of information and
                      systems for business objectives.
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
                      View Course
                      <IoArrowForward size={22} />
                    </button>
                  </div>
                </div>
                <div className="border h-fit border-solid border-cp-secondary p-5">
                  <Image
                    className="w-full"
                    src="/images/tech-banner.png"
                    alt=""
                  />
                  <div className="details mb-6">
                    <div className="head mt-4 mb-6">
                      <span className="text-lg font-semibold text-[#000000CC]">
                        Table Top Exercises
                      </span>
                    </div>
                    <span className="md:hidden w-[334px] lg:block">
                      This course provides essential cybersecurity training for
                      enthusiasts transitioning into the field, emphasizing CIA
                      principles and continuous protection of information and
                      systems for business objectives.
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
                      View Course
                      <IoArrowForward size={22} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-contents block lg:hidden">
            <div className="tab-contents block lg:hidden">
              <div className="available flex">
                <div className="w-full flex gap-5 overflow-x-scroll">
                  <div>
                    <div className="border w-[264px] border-solid border-cp-secondary p-5">
                      <Image src="/images/tech-banner.png" alt="" />
                      <div className="details mb-6">
                        <div className="head mt-4 mb-6">
                          <span className="text-lg font-semibold text-[#000000CC]">
                            Table Top Exercises
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
                          View Course
                          <IoArrowForward size={22} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border w-[264px] border-solid border-cp-secondary p-5">
                      <Image src="/images/tech-banner.png" alt="" />
                      <div className="details mb-6">
                        <div className="head mt-4 mb-6">
                          <span className="text-lg font-semibold text-[#000000CC]">
                            Table Top Exercises
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
                          View Course
                          <IoArrowForward size={22} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border w-[264px] border-solid border-cp-secondary p-5">
                      <Image src="/images/awareness-banner.png" alt="" />
                      <div className="details mb-6">
                        <div className="head mt-4 mb-6">
                          <span className="text-lg font-semibold text-[#000000CC]">
                            Cyber Security Fundamentals
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
                          View Course
                          <IoArrowForward size={22} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border border-solid w-[264px] border-cp-secondary p-5">
                      <Image src="/images/tech-banner.png" alt="" />
                      <div className="details mb-6">
                        <div className="head mt-4 mb-6">
                          <span className="text-lg font-semibold text-[#000000CC]">
                            Cyber Security Fundamentals
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
                          View Course
                          <IoArrowForward size={22} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border border-solid w-[264px] border-cp-secondary p-5">
                      <Image src="/images/awareness-banner.png" alt="" />
                      <div className="details mb-6">
                        <div className="head mt-4 mb-6">
                          <span className="text-lg font-semibold text-[#000000CC]">
                            Cyber Security Fundamentals
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
                          View Course
                          <IoArrowForward size={22} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <div className="tab-area">
          <div className="tabs flex items-center gap-8 border-b border-solid border-cp-secondary pb-4 mb-6">
            <div
              onClick={() => switchTab2("available")}
              className={`tab relative cursor-pointer ${tab2 === "available" ? "active" : ""} font-semibold text-lg md:text-[1.25rem] text-[#00000099]`}
            >
              <span>Available</span>
            </div>
            <div
              onClick={() => switchTab2("coming")}
              className={`tab relative cursor-pointer ${tab2 === "coming" ? "active" : ""} font-semibold text-lg md:text-[1.25rem] text-[#00000099]`}
            >
              <span>Coming Soon</span>
            </div>
          </div>
          <div className="tab-contents hidden lg:block">
            <div className="available flex">
              <div className="w-full flex gap-5 overflow-x-scroll">
                <div className="border h-fit border-solid border-cp-secondary p-5">
                  <Image
                    className="w-full"
                    src="/images/tech-banner.png"
                    alt=""
                  />
                  <div className="details mb-6">
                    <div className="head mt-4 mb-6">
                      <span className="text-lg font-semibold text-[#000000CC]">
                        Table Top Exercises
                      </span>
                    </div>
                    <span className="md:hidden w-[334px] lg:block">
                      This course provides essential cybersecurity training for
                      enthusiasts transitioning into the field, emphasizing CIA
                      principles and continuous protection of information and
                      systems for business objectives.
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
                      View Course
                      <IoArrowForward size={22} />
                    </button>
                  </div>
                </div>
                <div className="border h-fit border-solid border-cp-secondary p-5">
                  <Image
                    className="w-full"
                    src="/images/tech-banner.png"
                    alt=""
                  />
                  <div className="details mb-6">
                    <div className="head mt-4 mb-6">
                      <span className="text-lg font-semibold text-[#000000CC]">
                        Table Top Exercises
                      </span>
                    </div>
                    <span className="md:hidden w-[334px] lg:block">
                      This course provides essential cybersecurity training for
                      enthusiasts transitioning into the field, emphasizing CIA
                      principles and continuous protection of information and
                      systems for business objectives.
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
                      View Course
                      <IoArrowForward size={22} />
                    </button>
                  </div>
                </div>
                <div className="border h-fit border-solid border-cp-secondary p-5">
                  <Image
                    className="w-full"
                    src="/images/awareness-banner.png"
                    alt=""
                  />
                  <div className="details mb-6">
                    <div className="head mt-4 mb-6">
                      <span className="text-lg font-semibold text-[#000000CC]">
                        Cyber Security Fundamentals
                      </span>
                    </div>
                    <span className="md:hidden w-[334px] lg:block">
                      This course provides essential cybersecurity training for
                      enthusiasts transitioning into the field, emphasizing CIA
                      principles and continuous protection of information and
                      systems for business objectives.
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
                      View Course
                      <IoArrowForward size={22} />
                    </button>
                  </div>
                </div>
                <div className="h-fit border border-solid border-cp-secondary p-5">
                  <Image
                    className="w-full"
                    src="/images/tech-banner.png"
                    alt=""
                  />
                  <div className="details mb-6">
                    <div className="head mt-4 mb-6">
                      <span className="text-lg font-semibold text-[#000000CC]">
                        Cyber Security Fundamentals
                      </span>
                    </div>
                    <span className="md:hidden w-[334px] lg:block">
                      This course provides essential cybersecurity training for
                      enthusiasts transitioning into the field, emphasizing CIA
                      principles and continuous protection of information and
                      systems for business objectives.
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
                      View Course
                      <IoArrowForward size={22} />
                    </button>
                  </div>
                </div>
                <div className="border h-fit border-solid border-cp-secondary p-5">
                  <Image
                    className="w-full"
                    src="/images/awareness-banner.png"
                    alt=""
                  />
                  <div className="details mb-6">
                    <div className="head mt-4 mb-6">
                      <span className="text-lg font-semibold text-[#000000CC]">
                        Cyber Security Fundamentals
                      </span>
                    </div>
                    <span className="md:hidden lg:block w-[334px]">
                      This course provides essential cybersecurity training for
                      enthusiasts transitioning into the field, emphasizing CIA
                      principles and continuous protection of information and
                      systems for business objectives.
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
                      View Course
                      <IoArrowForward size={22} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-contents block lg:hidden">
            <div className="available flex">
              <div className="w-full flex gap-5 overflow-x-scroll">
                <div>
                  <div className="border w-[264px] border-solid border-cp-secondary p-5">
                    <Image src="/images/tech-banner.png" alt="" />
                    <div className="details mb-6">
                      <div className="head mt-4 mb-6">
                        <span className="text-lg font-semibold text-[#000000CC]">
                          Table Top Exercises
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
                        View Course
                        <IoArrowForward size={22} />
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="border w-[264px] border-solid border-cp-secondary p-5">
                    <Image src="/images/tech-banner.png" alt="" />
                    <div className="details mb-6">
                      <div className="head mt-4 mb-6">
                        <span className="text-lg font-semibold text-[#000000CC]">
                          Table Top Exercises
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
                        View Course
                        <IoArrowForward size={22} />
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="border w-[264px] border-solid border-cp-secondary p-5">
                    <Image src="/images/awareness-banner.png" alt="" />
                    <div className="details mb-6">
                      <div className="head mt-4 mb-6">
                        <span className="text-lg font-semibold text-[#000000CC]">
                          Cyber Security Fundamentals
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
                        View Course
                        <IoArrowForward size={22} />
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="border border-solid w-[264px] border-cp-secondary p-5">
                    <Image src="/images/tech-banner.png" alt="" />
                    <div className="details mb-6">
                      <div className="head mt-4 mb-6">
                        <span className="text-lg font-semibold text-[#000000CC]">
                          Cyber Security Fundamentals
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
                        View Course
                        <IoArrowForward size={22} />
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="border border-solid w-[264px] border-cp-secondary p-5">
                    <Image src="/images/awareness-banner.png" alt="" />
                    <div className="details mb-6">
                      <div className="head mt-4 mb-6">
                        <span className="text-lg font-semibold text-[#000000CC]">
                          Cyber Security Fundamentals
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
                        View Course
                        <IoArrowForward size={22} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          <Image src="/images/children.png" alt="" />
        </div>
      </div>

      <div className="instructor mt-20 lg:mt-32 flex items-center lg:flex-row flex-col-reverse gap-10">
        <div className="banner -mx-4 lg:mx-0 lg:hidden xl:block">
          <Image src="/images/instructor.png" alt="" />
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
        <div className="testimonies flex flex-wrap items-center justify-center gap-5">
          <div className="testimony px-5 py-2 md:p-[2rem] w-full md:w-[48%] bg-[#FFE5F7]">
            <div className="words mb-7">
              <span className="text-base md:text-lg font-medium text-[#000000CC]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
              </span>
            </div>
            <div className="profile flex items-center gap-5">
              <Image src="/images/profile.png" alt="" />
              <div className="flex flex-col">
                <span className="text-base md:text-[1.25rem] font-bold text-[#000000CC]">
                  Full name
                </span>
                <span className="text-sm md:text-base text-[#000000CC]">
                  Position, Company name
                </span>
              </div>
            </div>
          </div>
          <div className="testimony px-5 py-2 md:p-[2rem] w-full md:w-[48%] bg-[#FFE5F7]">
            <div className="words mb-7">
              <span className="text-base md:text-lg font-medium text-[#000000CC]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
              </span>
            </div>
            <div className="profile flex items-center gap-5">
              <Image src="/images/profile.png" alt="" />
              <div className="flex flex-col">
                <span className="text-base md:text-[1.25rem] font-bold text-[#000000CC]">
                  Full name
                </span>
                <span className="text-sm md:text-base text-[#000000CC]">
                  Position, Company name
                </span>
              </div>
            </div>
          </div>
          <div className="testimony px-5 py-2 md:p-[2rem] w-full md:w-[48%] bg-[#FFE5F7]">
            <div className="words mb-7">
              <span className="text-base md:text-lg font-medium text-[#000000CC]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
              </span>
            </div>
            <div className="profile flex items-center gap-5">
              <Image src="/images/profile.png" alt="" />
              <div className="flex flex-col">
                <span className="text-base md:text-[1.25rem] font-bold text-[#000000CC]">
                  Full name
                </span>
                <span className="text-sm md:text-base text-[#000000CC]">
                  Position, Company name
                </span>
              </div>
            </div>
          </div>
          <div className="testimony px-5 py-2 md:p-[2rem] w-full md:w-[48%] bg-[#FFE5F7]">
            <div className="words mb-7">
              <span className="text-base md:text-lg font-medium text-[#000000CC]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
              </span>
            </div>
            <div className="profile flex items-center gap-5">
              <Image src="/images/profile.png" alt="" />
              <div className="flex flex-col">
                <span className="text-base md:text-[1.25rem] font-bold text-[#000000CC]">
                  Full name
                </span>
                <span className="text-sm md:text-base text-[#000000CC]">
                  Position, Company name
                </span>
              </div>
            </div>
          </div>
        </div>
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
              and evolving threats.{" "}
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
          <Image className="-mx-4 md:mx-0" src="/images/student.png" alt="" />
        </div>
      </div>

      <div className="faqs mt-20 md:mt-40">
        <div className="mb-6 md:mb-10 text-[#000000CC] text-2xl md:text-[2rem] flex items-center justify-center font-semibold md:leading-[2.75rem]">
          <span>FAQs</span>
        </div>
        <div className="questions">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="question md:py-8 py-5 border-t border-solid border-cp-secondary"
            >
              <div className="question-head flex items-center justify-between">
                <span className="text-base md:text-lg font-semibold text-[#000000]">
                  {faq.question}
                </span>
                {faq.expanded ? (
                  <IoChevronUp
                    onClick={() => expandFaq(faq.id)}
                    size={22}
                    className="text-cp-secondary cursor-pointer"
                  />
                ) : (
                  <IoChevronDown
                    onClick={() => expandFaq(faq.id)}
                    size={22}
                    className="text-cp-secondary cursor-pointer"
                  />
                )}
              </div>
              <div className={`answer mt-8 ${faq.expanded ? "expanded" : ""}`}>
                <span className="text-base md:text-lg font-normal text-[#000000B2]">
                  {faq.answer}
                </span>
              </div>
            </div>
          ))}
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
        <div className="mt-7 hidden lg:block">
          <div className="">
            <div className="flex gap-5 overflow-x-scroll">
              <div className="border h-fit border-solid border-cp-secondary p-5">
                <Image
                  className="w-full"
                  src="/images/tech-banner.png"
                  alt=""
                />
                <div className="details mb-6">
                  <div className="head mt-4 mb-6">
                    <span className="text-lg font-semibold text-[#000000CC]">
                      New Course on Cyber Threat Intelligence
                    </span>
                  </div>
                  <span className="md:hidden lg:block w-[334px]">
                    This course provides essential cybersecurity training for
                    enthusiasts transitioning into the field, emphasizing CIA
                    principles and continuous protection of information and
                    systems for business objectives...
                  </span>
                </div>
                <div className="flex justify-end">
                  <button className="py-5 px-[30px] flex items-center gap-2 bg-transparent border border-solid border-cp-secondary text-cp-secondary">
                    Read more
                    <IoArrowForward size={22} />
                  </button>
                </div>
              </div>
              <div className="border h-fit border-solid border-cp-secondary p-5">
                <Image
                  className="w-full"
                  src="/images/tech-banner.png"
                  alt=""
                />
                <div className="details mb-6">
                  <div className="head mt-4 mb-6">
                    <span className="text-lg font-semibold text-[#000000CC]">
                      Update on Emerging Table Top Exercises
                    </span>
                  </div>
                  <span className="md:hidden lg:block w-[334px]">
                    This course provides essential cybersecurity training for
                    enthusiasts transitioning into the field, emphasizing CIA
                    principles and continuous protection of information and
                    systems for business objectives...
                  </span>
                </div>
                <div className="flex justify-end">
                  <button className="py-5 px-[30px] flex items-center gap-2 bg-transparent border border-solid border-cp-secondary text-cp-secondary">
                    Read more
                    <IoArrowForward size={22} />
                  </button>
                </div>
              </div>
              <div className="border h-fit border-solid border-cp-secondary p-5">
                <Image
                  className="w-full"
                  src="/images/tech-banner.png"
                  alt=""
                />
                <div className="details mb-6">
                  <div className="head mt-4 mb-6">
                    <span className="text-lg font-semibold text-[#000000CC]">
                      New Course on Cyber Threat Intelligence
                    </span>
                  </div>
                  <span className="md:hidden lg:block w-[334px]">
                    This course provides essential cybersecurity training for
                    enthusiasts transitioning into the field, emphasizing CIA
                    principles and continuous protection of information and
                    systems for business objectives...
                  </span>
                </div>
                <div className="flex justify-end">
                  <button className="py-5 px-[30px] flex items-center gap-2 bg-transparent border border-solid border-cp-secondary text-cp-secondary">
                    Read more
                    <IoArrowForward size={22} />
                  </button>
                </div>
              </div>
              <div className="border h-fit border-solid border-cp-secondary p-5">
                <Image
                  className="w-full"
                  src="/images/tech-banner.png"
                  alt=""
                />
                <div className="details mb-6">
                  <div className="head mt-4 mb-6">
                    <span className="text-lg font-semibold text-[#000000CC]">
                      New Course on Cyber Threat Intelligence
                    </span>
                  </div>
                  <span className="md:hidden lg:block w-[334px]">
                    This course provides essential cybersecurity training for
                    enthusiasts transitioning into the field, emphasizing CIA
                    principles and continuous protection of information and
                    systems for business objectives...
                  </span>
                </div>
                <div className="flex justify-end">
                  <button className="py-5 px-[30px] flex items-center gap-2 bg-transparent border border-solid border-cp-secondary text-cp-secondary">
                    Read more
                    <IoArrowForward size={22} />
                  </button>
                </div>
              </div>
              <div className="border h-fit border-solid border-cp-secondary p-5">
                <Image
                  className="w-full"
                  src="/images/tech-banner.png"
                  alt=""
                />
                <div className="details mb-6">
                  <div className="head mt-4 mb-6">
                    <span className="text-lg font-semibold text-[#000000CC]">
                      New Course on Cyber Threat Intelligence
                    </span>
                  </div>
                  <span className="md:hidden lg:block w-[334px]">
                    This course provides essential cybersecurity training for
                    enthusiasts transitioning into the field, emphasizing CIA
                    principles and continuous protection of information and
                    systems for business objectives...
                  </span>
                </div>
                <div className="flex justify-end">
                  <button className="py-5 px-[30px] md:p-3 flex items-center gap-2 bg-transparent border border-solid border-cp-secondary text-cp-secondary">
                    Read more
                    <IoArrowForward size={22} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 block lg:hidden">
          <div className="available flex">
            <div className="w-full flex gap-5 overflow-x-scroll">
              <div className="border h-fit border-solid border-cp-secondary p-5">
                <Image src="/images/awareness-banner.png" alt="" />
                <div className="details mb-6">
                  <div className="head mt-4 mb-6">
                    <span className="text-lg font-semibold text-[#000000CC]">
                      New Course on Cyber Threat Intelligence
                    </span>
                  </div>
                </div>
                <span className="w-[263px] block">
                  This course provides essential cybersecurity training for
                  enthusiasts transitioning into the field, emphasizing CIA
                  principles and continuous protection of information and
                  systems for business objectives...
                </span>
                <div className="flex justify-end mt-4">
                  <button className="p-2 flex items-center gap-2 bg-transparent border border-solid border-cp-secondary text-cp-secondary">
                    Read more
                    <IoArrowForward size={22} />
                  </button>
                </div>
              </div>
              <div className="border h-fit border-solid border-cp-secondary p-5">
                <Image src="/images/awareness-banner.png" alt="" />
                <div className="details mb-6">
                  <div className="head mt-4 mb-6">
                    <span className="text-lg font-semibold text-[#000000CC]">
                      New Course on Cyber Threat Intelligence
                    </span>
                  </div>
                </div>
                <span className="w-[263px] block">
                  This course provides essential cybersecurity training for
                  enthusiasts transitioning into the field, emphasizing CIA
                  principles and continuous protection of information and
                  systems for business objectives...
                </span>
                <div className="flex justify-end mt-4">
                  <button className="p-2 flex items-center gap-2 bg-transparent border border-solid border-cp-secondary text-cp-secondary">
                    Read more
                    <IoArrowForward size={22} />
                  </button>
                </div>
              </div>
              <div className="border h-fit border-solid border-cp-secondary p-5">
                <Image src="/images/awareness-banner.png" alt="" />
                <div className="details mb-6">
                  <div className="head mt-4 mb-6">
                    <span className="text-lg font-semibold text-[#000000CC]">
                      New Course on Cyber Threat Intelligence
                    </span>
                  </div>
                </div>
                <span className="w-[263px] block">
                  This course provides essential cybersecurity training for
                  enthusiasts transitioning into the field, emphasizing CIA
                  principles and continuous protection of information and
                  systems for business objectives...
                </span>
                <div className="flex justify-end mt-4">
                  <button className="p-2 flex items-center gap-2 bg-transparent border border-solid border-cp-secondary text-cp-secondary">
                    Read more
                    <IoArrowForward size={22} />
                  </button>
                </div>
              </div>
              <div className="border h-fit border-solid border-cp-secondary p-5">
                <Image src="/images/awareness-banner.png" alt="" />
                <div className="details mb-6">
                  <div className="head mt-4 mb-6">
                    <span className="text-lg font-semibold text-[#000000CC]">
                      New Course on Cyber Threat Intelligence
                    </span>
                  </div>
                </div>
                <span className="w-[263px] block">
                  This course provides essential cybersecurity training for
                  enthusiasts transitioning into the field, emphasizing CIA
                  principles and continuous protection of information and
                  systems for business objectives...
                </span>
                <div className="flex justify-end mt-4">
                  <button className="p-2 flex items-center gap-2 bg-transparent border border-solid border-cp-secondary text-cp-secondary">
                    Read more
                    <IoArrowForward size={22} />
                  </button>
                </div>
              </div>
              <div className="border h-fit border-solid border-cp-secondary p-5">
                <Image src="/images/awareness-banner.png" alt="" />
                <div className="details mb-6">
                  <div className="head mt-4 mb-6">
                    <span className="text-lg font-semibold text-[#000000CC]">
                      New Course on Cyber Threat Intelligence
                    </span>
                  </div>
                </div>
                <span className="w-[263px] block">
                  This course provides essential cybersecurity training for
                  enthusiasts transitioning into the field, emphasizing CIA
                  principles and continuous protection of information and
                  systems for business objectives...
                </span>
                <div className="flex justify-end mt-4">
                  <button className="p-2 flex items-center gap-2 bg-transparent border border-solid border-cp-secondary text-cp-secondary">
                    Read more
                    <IoArrowForward size={22} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer flex flex-col gap-5 -mx-4 p-4 lg:-mx-20 bg-cp-primary lg:px-20 py-16 text-white mt-20 lg:mt-32">
        <div className="top border-b border-solid flex flex-col xl:flex-row xl:items-center justify-between border-white pb-5">
          <div className="logo flex flex-col gap-4 mb-5">
            <Image
              className="w-[11.375rem]"
              src="/images/footer-logo.png"
              alt=""
            />
            <span className="text-sm">A product of CyberPlural</span>

            <div className="socials mt-7">
              <Image src="/images/socials.png" alt="" />
            </div>
          </div>
          <div className="moreinfo flex flex-col md:flex-row md:items-center gap-10 xl:gap-20">
            <div className="group flex flex-col gap-3">
              <span className="heading text-base font-semibold">
                Quick Links
              </span>
              <span className="text-base">Become an Instructor</span>
              <span className="text-base">Become a Student</span>
            </div>
            <div className="group flex flex-col gap-3">
              <span className="heading text-base font-semibold">
                Contact us
              </span>
              <span className="text-base">+234 8000 000 000</span>
              <span className="text-base">+234 8000 000 000</span>
            </div>
            <div className="group flex flex-col gap-3">
              <span className="heading text-base font-semibold">
                Our Offices
              </span>
              <span className="text-base">
                4, Sefadu Close Wuse II, Abuja FCT.
              </span>
              <span className="text-base">
                212, Haramani Plaza, Shettima Monguno Crescent, Utako.
              </span>
            </div>
          </div>
        </div>
        <div className="bootom mt-5 flex md:flex-row flex-col gap-5 md:gap-0 items-center justify-between">
          <span className="text-base font-medium">
            © 2024 CyberDemia All Rights Reserved.
          </span>
          <div className="policy-conditions flex">
            <span className="border-r border-solid border-white pr-4">
              Privacy Policy
            </span>
            <span className="ml-4">Terms & Condition</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
