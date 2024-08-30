"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { Input } from "../inputs";
import { Label } from "../label";

type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  age: number;
  country: string;
  state: string;
  heardAboutUs: string;
  password: string;
  confirmpassword: string;
  phoneNumbers: string[];
};

const SignupForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const genderOptions = ["Male", "Female", "Other"];
  const countryOptions = ["Nigeria", "Canada", "Other"];
  const hearAboutOptions = ["Facebook", "2go", "Other"];

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const submitForm = (data: any) => {
    console.log("Form submitted", data);
  };
  const password = watch("password");
  return (
    <>
      <div className="flex flex-col justify-center sm:pt-10 items-start gap-10">
        <Image
          src={"/images/cyberdemiaLogo.svg"}
          width={200}
          height={200}
          alt={"cyberdemia logo"}
        />
        <div>
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-black py-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            accusantium!
          </p>
        </div>
      </div>
      <div className="w-full px-2 py-2 gap-4 h-full">
        <form
          onSubmit={handleSubmit(submitForm)}
          noValidate
          className="space-y-4"
        >
          {/* First and Last Name */}
          <div className="grid grid-cols-1 py-2 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstname">First Name</Label>
              <Input
                className="w-full p-2"
                placeholder="First Name"
                type="text"
                id="firstname"
                {...register("firstname", {
                  required: "First name is required",
                })}
              />
              {errors.firstname && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.firstname.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                className="w-full p-2"
                placeholder="Last Name"
                type="text"
                id="lastname"
                {...register("lastname", {
                  required: "Last name is required",
                })}
              />
              {errors.lastname && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.lastname.message}
                </p>
              )}
            </div>
          </div>

          {/* Email and Gender */}
          <div className="grid grid-cols-1 py-2 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                className="w-full p-2"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="gender">Gender</Label>
              <select
                id="gender"
                className="w-full p-2 border rounded-md"
                {...register("gender", {
                  required: "Gender is required",
                })}
              >
                <option value="">Select Gender</option>
                {genderOptions.map((option) => (
                  <option key={option} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.gender && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.gender.message}
                </p>
              )}
            </div>
          </div>

          {/* Age and Country of Residence */}
          <div className="grid grid-cols-1 py-2 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                type="age"
                id="age"
                placeholder="Age"
                className="w-full p-2 border rounded-md"
                {...register("age", {
                  required: "Age is required",
                  min: {
                    value: 1,
                    message: "Age must be a positive number",
                  },
                })}
              />
              {errors.age && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.age.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="phoneNumbers">Phone Number</Label>
              <Input
                className="w-full p-2 border rounded-md"
                placeholder="Phone Number"
                type="text"
                id="phoneNumbers"
                {...register("phoneNumbers.0", {
                  required: "Phone number is required",
                })}
              />
              {errors.phoneNumbers?.[0] && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.phoneNumbers[0].message}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 py-2 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="country">Country of Residence</Label>
              <select
                id="country"
                className="w-full p-2 border rounded-md"
                {...register("country", {
                  required: "Country of residence is required",
                })}
              >
                {countryOptions?.map((option) => (
                  <option key={option} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.country.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="state">State/Region of Residence</Label>
              <Input
                type="text"
                id="state"
                className="w-full p-2 border rounded-md"
                {...register("state", {
                  required: "State/Region of residence is required",
                })}
              />
              {errors.state && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.state.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 py-2 sm:grid-cols-2 gap-4">
            <div>
              <div>
                <Label htmlFor="heardAboutUs">
                  How did you hear about CyberDemia?
                </Label>
                <select
                  id="heardAboutUs"
                  className="w-full p-2 border rounded-md"
                  {...register("heardAboutUs", {
                    required: "How did you hear about CyberDemia is required",
                  })}
                >
                  {hearAboutOptions?.map((option) => (
                    <option key={option} value={option.toLowerCase()}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.heardAboutUs && (
                  <p className="text-red-500 py-2 text-sm">
                    {errors.heardAboutUs.message}
                  </p>
                )}
              </div>
            </div>
            <div></div>
          </div>

          {/* Password and Confirm Password */}
          <div className="grid grid-cols-1 py-2 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  className="w-full p-2 border rounded-md"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="confirmpassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  id="confirmpassword"
                  className="w-full p-2 border rounded-md"
                  {...register("confirmpassword", {
                    required: "Confirm Password is required",
                    validate: (value: string) =>
                      value === password || "Passwords do not match",
                  })}
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
              </div>
              {errors.confirmpassword && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.confirmpassword.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-10 bg-cp-secondary text-white rounded-md hover:bg-cp-secondaryDarker transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
