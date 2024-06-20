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
    <div className="tab-area">
      <div className="tabs flex items-center gap-8 border-b border-solid border-cp-secondary pb-4 mb-6">
        <div
          onClick={() => switchTab('available-tech')}
          className={`tab relative cursor-pointer ${tab === 'available-tech' ? 'active' : ''} font-semibold text-lg md:text-[1.25rem] text-[#00000099]`}
        >
          <span>Available</span>
        </div>
        <div
          onClick={() => switchTab('coming-tech')}
          className={`tab relative cursor-pointer ${tab === 'coming-tech' ? 'active' : ''} font-semibold text-lg md:text-[1.25rem] text-[#00000099]`}
        >
          <span>Coming Soon</span>
        </div>
      </div>
      <div className="tab-contents hidden lg:block">
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
      <div className="tab-contents block lg:hidden">
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
    </div>
  );
};

export const AwarenessTraining = () => {
  const [tab2, setTab2] = useState('available');
  const switchTab2 = (tab: string) => setTab2(tab);

  return (
    <div className="tab-area">
      <div className="tabs flex items-center gap-8 border-b border-solid border-cp-secondary pb-4 mb-6">
        <div
          onClick={() => switchTab2('available-tech')}
          className={`tab relative cursor-pointer ${tab2 === 'available-tech' ? 'active' : ''} font-semibold text-lg md:text-[1.25rem] text-[#00000099]`}
        >
          <span>Available</span>
        </div>
        <div
          onClick={() => switchTab2('coming-tech')}
          className={`tab relative cursor-pointer ${tab2 === 'coming-tech' ? 'active' : ''} font-semibold text-lg md:text-[1.25rem] text-[#00000099]`}
        >
          <span>Coming Soon</span>
        </div>
      </div>
      <div className="tab-contents hidden lg:block">
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
      <div className="tab-contents block lg:hidden">
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
  );
};

export default Trainings;
