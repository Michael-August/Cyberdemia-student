'use client';

import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { Button } from '../button';
import { Input } from '../inputs';
import { Label } from '../label';

const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <div>
      <form className="mt-8 flex flex-col gap-5 lg:w-[70%]">
        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="w-full flex flex-col gap-3">
            <Label htmlFor="password">Old Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                className="w-full !p-3 focus:!outline-none focus:!ring-0 border !border-solid !border-[#00000033] !bg-[#F5F5F5]"
                // {...register('password', {
                //   required: 'Password is required',
                //   minLength: {
                //     value: 6,
                //     message: 'Password must be at least 6 characters long',
                //   },
                // })}
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </div>
            {/* {errors.password && (
                  <p className="text-red-500 py-2 text-sm">
                    {errors.password.message}
                  </p>
                )} */}
          </div>
          <div className="w-full flex flex-col gap-3">
            <Label htmlFor="password">New Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                className="w-full !p-3 focus:!outline-none focus:!ring-0 border !border-solid !border-[#00000033] !bg-[#F5F5F5]"
                // {...register('password', {
                //   required: 'Password is required',
                //   minLength: {
                //     value: 6,
                //     message: 'Password must be at least 6 characters long',
                //   },
                // })}
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </div>
            {/* {errors.password && (
                  <p className="text-red-500 py-2 text-sm">
                    {errors.password.message}
                  </p>
                )} */}
          </div>
        </div>
        <Button className="!bg-cp-secondary !text-white mt-5">
          Save changes
        </Button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
