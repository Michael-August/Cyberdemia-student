import Image from 'next/image';

const Values = () => {
  return (
    <div className="values mt-20 md:mt-32">
      <div className="secion-title relative mb-6 md:mb-10 text-[#000000CC] text-base font-semibold">
        <span>Our Value Proposition</span>
      </div>
      <div className="values-list md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-4">
        <div className="value w-full  flex flex-col items-center justify-center md:block">
          <Image
            width={64}
            height={64}
            className="mb-5 md:mb-8"
            src="/images/idea.svg"
            alt="Training - value"
          />
          <div className="value-title mb-4">
            <span className="text-base  font-semibold  text-[#000000CC]">
              Awareness & Training
            </span>
          </div>
          <div className="details text-center md:text-left">
            <span className="text-[#000000B2]  text-xs md:text-xs ">
              Your in-house team will learn to approach cybersecurity
              offensively and defensively through real-world examples and
              exercises, hands-on labs and expert instruction.
            </span>
          </div>
        </div>
        <div className="value w-full  flex flex-col items-center justify-center md:block">
          <Image
            width={64}
            height={64}
            className="mb-5 md:mb-8"
            src="/images/completed.svg"
            alt=""
          />
          <div className="value-title mb-4">
            <span className="text-base  font-semibold  text-[#000000CC]">
              Virtual Labs Access
            </span>
          </div>
          <div className="details text-center md:text-left">
            <span className="text-[#000000B2] text-xs md:text-xs ">
              Test out cybersecurity virtual labs, they are cloud-based digital
              simulations that use real-world programs to emulate real-world
              environments and scenerios.
            </span>
          </div>
        </div>
        <div className="value w-full  flex flex-col items-center justify-center md:block">
          <Image
            width={64}
            height={64}
            className="mb-5 md:mb-8"
            src="/images/certificate2.svg"
            alt=""
          />
          <div className="value-title mb-4">
            <span className="text-base  font-semibold  text-[#000000CC]">
              Certification
            </span>
          </div>
          <div className="details text-center md:text-left">
            <span className="text-[#000000B2] text-xs md:text-xs ">
              Our technical trainings are geared towards certification, be
              confident with the skills needed to pass your all required
              certifications in your career path.
            </span>
          </div>
        </div>
        <div className="value w-full  flex flex-col items-center justify-center md:block">
          <Image
            width={64}
            height={64}
            className="mb-5 md:mb-8"
            src="/images/network.svg"
            alt=""
          />
          <div className="value-title mb-4">
            <span className="text-base  font-semibold  text-[#000000CC]">
              Transfer of knowledge
            </span>
          </div>
          <div className="details text-center md:text-left">
            <span className="text-[#000000B2] text-xs md:text-xs ">
              Working alongside your technical team to transfer knowledge as it
              may be needed in real-time to drive security operations for the
              organization.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
