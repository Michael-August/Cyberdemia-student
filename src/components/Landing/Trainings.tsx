'use client';
import { useState } from 'react';

import {
  PublicTrainings,
  TechnicalTrainings,
} from '../../../utils/constants/trainings';
import Training from './Training';

const Trainings = () => {
  const [tab, setTab] = useState('available-tech');
  const switchTab = (tab: string) => setTab(tab);

  return (
    <>
      <div className="trainings mt-20 md:mt-32">
        <div className="mb-6 md:mb-10 text-[#000000CC] text-base font-semibold">
          <span>Cyber Security Technical Training</span>
        </div>
        <div className="details mb-8">
          <div className="heading mb-4">
            <span className="text-sm text-cp-secondary font-semibold">
              Workforce to secure your critical systems and assets
            </span>
          </div>
          <div className="paragraph">
            <span className="text-sm text-[#000000B2]">
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
              onClick={() => switchTab('available-tech')}
              className={`tab relative cursor-pointer ${tab === 'available-tech' ? 'active' : ''} font-semibold text-xs  text-[#00000099]`}
            >
              <span>Available</span>
            </div>
            <div
              onClick={() => switchTab('coming-tech')}
              className={`tab relative cursor-pointer ${tab === 'coming-tech' ? 'active' : ''} font-semibold text-xs  text-[#00000099]`}
            >
              <span>Coming Soon</span>
            </div>
          </div>
          {tab === 'available-tech' && <div>
            <div className="tab-contents hidden xs:block">
              <div className="available-tech">
                <div className="w-full flex gap-5 overflow-x-scroll">
                  {TechnicalTrainings.map((techTrain) => (
                    <Training
                      image={techTrain.image}
                      title={techTrain.title}
                      detail={techTrain.detail}
                      key={techTrain.id}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="tab-contents block xs:hidden">
              <div className="available flex">
                <div className="w-full flex gap-5 overflow-x-scroll">
                  {TechnicalTrainings.map((techTrain) => (
                    <Training
                      image={techTrain.image}
                      title={techTrain.title}
                      detail={techTrain.detail}
                      key={techTrain.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </>
  );
};

export const AwarenessTraining = () => {
  const [tab2, setTab2] = useState('available');
  const switchTab2 = (tab: string) => setTab2(tab);

  return (
    <>
      <div className="trainings mt-20 md:mt-32">
        <div className="mb-6 md:mb-10 text-[#000000CC] text-base md:text-[2rem] font-semibold md:leading-[2.75rem]">
          <span>Cyber Security Awareness</span>
        </div>
        <div className="details mb-8">
          <div className="heading mb-4">
            <span className="text-xs  text-cp-secondary font-semibold leading-[1.75rem]">
              Workforce to secure your critical systems and assets
            </span>
          </div>
          <div className="paragraph">
            <span className="text-xs md:text-xs text-[#000000B2] leading-[1.5625rem]">
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
              onClick={() => switchTab2('available-tech')}
              className={`tab relative cursor-pointer ${tab2 === 'available-tech' ? 'active' : ''} font-semibold text-xs  text-[#00000099]`}
            >
              <span>Available</span>
            </div>
            <div
              onClick={() => switchTab2('coming-tech')}
              className={`tab relative cursor-pointer ${tab2 === 'coming-tech' ? 'active' : ''} font-semibold text-xs  text-[#00000099]`}
            >
              <span>Coming Soon</span>
            </div>
          </div>
          <div className="tab-contents hidden xs:block">
            <div className="available-tech">
              <div className="w-full flex gap-5 overflow-x-scroll">
                {PublicTrainings.map((training) => (
                  <Training
                    key={training.id}
                    image={training.image}
                    title={training.title}
                    detail={training.detail}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="tab-contents block xs:hidden">
            <div className="available flex">
              <div className="w-full flex gap-5 overflow-x-scroll">
                {PublicTrainings.map((training) => (
                  <Training
                    key={training.id}
                    image={training.image}
                    title={training.title}
                    detail={training.detail}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trainings;
