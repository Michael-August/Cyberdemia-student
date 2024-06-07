import Image from "next/image";
import React from "react";
import { InputOTPControlled } from "./otp-input";

const Otp = () => {
  return (
    <>
      <main className="border border-red-500 px-[20rem] pt-[5rem] h-full">
        <div className="flex flex-col justify-center items-start gap-10">
          <Image
            src={"/images/cyberdemiaLogo.svg"}
            width={200}
            height={200}
            alt={"cyberdemia logo"}
          />
          <div>
            <h1 className="text-3xl font-bold">
              Please verify your email address
            </h1>
            <p className="text-black py-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus, accusantium!
            </p>
          </div>
          <div className="flex justify-center items-center w-full">
            <InputOTPControlled />
          </div>
        </div>
      </main>
    </>
  );
};

export default Otp;
