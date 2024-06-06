"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label } from "../label";
import { Input } from "../inputs";

type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  age: number;
  countryofresidence: string;
  sateofresidence: string;
  hoowdidyouhearaboutus: string;
  password: string;
  confirmpassword: string;
  phoneNumbers: string[];
};

const SignupForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const submitForm: SubmitHandler<FormValues> = (data) => {
    console.log("Form submitted", data);
  };

  return (
    <div className="w-full px-2 gap-4">
      <h1 className="text-center mb-4 text-2xl">YouTube Form</h1>
      <form
        onSubmit={handleSubmit(submitForm)}
        noValidate
        className="space-y-4"
      >
        {/* First and Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstname">First Name</Label>
            <Input
              className="w-full p-2"
              type="text"
              id="firstname"
              {...register("firstname", {
                required: "First name is required",
              })}
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm">{errors.firstname.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="lastname">Last Name</Label>
            <Input
              className="w-full p-2"
              type="text"
              id="lastname"
              {...register("lastname", {
                required: "Last name is required",
              })}
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm">{errors.lastname.message}</p>
            )}
          </div>
        </div>

        {/* Email and Gender */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              className="w-full p-2"
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
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
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>
        </div>

        {/* Age and Country of Residence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="age">Age</Label>
            <Input
              type="number"
              id="age"
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
              <p className="text-red-500 text-sm">{errors.age.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phoneNumbers">Phone Number</Label>
            <Input
              className="w-full p-2 border rounded-md"
              type="text"
              id="phoneNumbers"
              {...register("phoneNumbers.0", {
                required: "Phone number is required",
              })}
            />
            {errors.phoneNumbers?.[0] && (
              <p className="text-red-500 text-sm">
                {errors.phoneNumbers[0].message}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="countryofresidence">Country of Residence</Label>
            <Input
              type="text"
              id="countryofresidence"
              className="w-full p-2 border rounded-md"
              {...register("countryofresidence", {
                required: "Country of residence is required",
              })}
            />
            {errors.countryofresidence && (
              <p className="text-red-500 text-sm">
                {errors.countryofresidence.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
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
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender.message}</p>
              )}
            </div>
          </div>
          <div></div>
        </div>

        {/* Password and Confirm Password */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              className="w-full p-2 border rounded-md"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="confirmpassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmpassword"
              className="w-full p-2 border rounded-md"
              {...register("confirmpassword", {
                required: "Confirm Password is required",
                // validate: (value) => {
                //   if (value !== document.getElementById("password")?.value) {
                //     return "Passwords do not match";
                //   }
                // },
              })}
            />
            {errors.confirmpassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmpassword.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone Numbers */}

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
