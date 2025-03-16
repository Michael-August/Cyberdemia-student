import React from 'react';

const Why = () => {
  return (
    <div className="why-us mt-32">
      <div className="secion-title relative mb-6 md:mb-10 text-[#000000CC] text-base md:text-base font-semibold">
        <span>Why CyberDemia</span>
      </div>

      <div className="paragraph">
        <div className="first mb-7">
          <span className="text-sm md:text-sm text-[#000000CC]">
            CyberDemia, a flagship cybersecurity education initiative by{' '}
            <span className="text-cp-secondary font-semibold">CyberPlural</span>{' '}
            is dedicated to bridging the cybersecurity skills gap in Africa.
          </span>
        </div>
        <div className="second mb-7">
          <span className="text-[#000000B2] text-sm md:text-sm">
            Our platform offers structured courses from foundational to advanced levels, empowering beginners and professionals with industry-relevant expertise. Through CyberDemia, we aim to develop a skilled workforce, enhance cyber resilience, and drive economic growth.
          </span>
        </div>
      </div>

      <div className="video flex items-center justify-center">
        <video className="md:h-[34.185rem]" src="" controls></video>
      </div>
    </div>
  );
};

export default Why;
