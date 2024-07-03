import Image from 'next/image';
import React from 'react';

const SchoolOutreach = () => {
  return (
    <div className="school-outreach mt-20 lg:mt-32 flex items-center lg:flex-row flex-col gap-10">
      <div className="details w-full md:w-[43.75rem]">
        <div className="secion-title relative mb-6 md:mb-10 text-[#000000CC] text-base font-semibold">
          <span>Cyber Security for School Program</span>
        </div>
        <span className="intro text-sm text-[#000000B2]">
          Promote a culture in which employees, staffs, and students share the
          responsibility of defending the school against cyber-incident with
          holistic cybersecurity strategy.
        </span>
        <div className="sub mt-8 flex flex-col gap-5">
          <span className="font-semibold text-sm text-[#000000CC]">
            Get Started with Cybersecurity for School Program
          </span>
          <span className="text-sm text-[#000000B2]">
            The program has four primary activities: Education, Prevention,
            Detection, and Response to Incidents. Together, these activities
            will give your school a strong Cybersecurity framework, expose both
            the staff and students to current cybersecurity trends and best
            practices and also a powerful defense against cyber-attacks. You can
            reach out for quote and more information
            through cyberdemia@cyberplural.com
          </span>
        </div>
      </div>
      <div className="banner -mx-4 md:mx-0 lg:hidden xl:block">
        <Image width={694} height={514.42} src="/images/children.svg" alt="" />
      </div>
    </div>
  );
};

export default SchoolOutreach;
