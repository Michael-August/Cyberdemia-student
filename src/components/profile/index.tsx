'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Label } from '../label';
import ProfileForm from './profileForm';
import ResetPasswordForm from './resetpasswordForm';

const Profile = () => {
  const [tab, setTab] = useState('edit');

  const switchTab = (newTab: string) => {
    setTab(newTab);
  };

  return (
    <div className="profile">
      <div className="top flex flex-col gap-8 border-b-[2px] border-solid border-[#00000099] pb-4">
        <div className="img-name flex items-center gap-4 md:gap-8">
          {/* <Image className='hidden md:block rounded-[50%]' src="/images/profile-pic.png" width={150} height={150} alt='profile picture' />
                <Image className='md:hidden rounded-[50%]' src="/images/profile-pic.png" width={102} height={102} alt='profile picture' /> */}
          <div className="w-[6.375rem] flex items-center justify-center h-[6.375rem] md:w-[9.25rem] md:h-[9.25rem] rounded-[50%] border border-solid">
            <span className="text-[3.1875rem] md:text-[4.625rem] font-bold text-cp-secondary">
              J
            </span>
          </div>
          <div className="name-email flex flex-col gap-1">
            <span className="text-base font-bold">John Doe</span>
            <span className="text-xs text-[#000000CC]">
              johndoe1234@gmail.com
            </span>
          </div>
        </div>
        <input type="file" name="" hidden id="profile-image" />
        <Label
          htmlFor="profile-image"
          className="w-fit h-10 px-4 cursor-pointer py-2 text-xs !bg-cp-secondary !text-white flex items-center gap-1"
        >
          Upload Image
          <Image src="/icons/camera.png" width={24} height={24} alt="camera" />
        </Label>
      </div>

      <div className="tabs flex items-center gap-5 mt-4">
        <div
          className={`tab relative cursor-pointer ${tab === 'edit' ? 'active' : ''}`}
          onClick={() => switchTab('edit')}
        >
          <span className="heading text-sm font-bold">Edit Profile</span>
        </div>
        <div
          className={`tab relative cursor-pointer ${tab === 'password' ? 'active' : ''}`}
          onClick={() => switchTab('password')}
        >
          <span className="heading text-sm font-bold">Reset Password</span>
        </div>
      </div>

      {tab === 'edit' && <ProfileForm />}

      {tab === 'password' && <ResetPasswordForm />}
    </div>
  );
};

export default Profile;
