import React from 'react';

const Why = () => {
  return (
    <div className="why-us mt-32">
      <div className="secion-title relative mb-6 md:mb-10 text-[#000000CC] text-2xl md:text-[2rem] font-semibold md:leading-[2.75rem]">
        <span>Why CyberDemia</span>
      </div>

      <div className="paragraph">
        <div className="first mb-7">
          <span className="text-base md:text-lg text-[#000000CC]">
            CyberDemia is a product from{' '}
            <span className="text-cp-secondary font-semibold">CyberPlural</span>{' '}
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
  );
};

export default Why;
