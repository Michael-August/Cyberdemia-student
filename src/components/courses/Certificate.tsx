"use client";
import Image from "next/image";
import React, { forwardRef } from "react";

// Define the Certificate component with forwardRef
const Certificate = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex items-center w-max shadow"
      style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
    >
      <div>
        <Image
          src="/images/certificateBg.svg"
          alt="Certificate Background"
          width={170}
          height={300}
        />
      </div>
      <div className="certificate-bg flex flex-col justify-between items-center py-7 pb-10 w-[350px]">
        <div className="flex flex-col items-center gap-2">
          <h1
            className="text-[14px] font-bold text-black"
            style={{ fontWeight: 1000 }}
          >
            CyberDemia certifies that
          </h1>
          <div className="flex flex-col gap-0 items-center">
            <h1
              className="text-cp-secondary text-[30px]"
              style={{ fontWeight: 1000 }}
            >
              John Doe
            </h1>
            <div className="h-[1px] bg-cp-secondary w-[350px] -mt-1" />
          </div>
          <div className=" text-[11px] text-center font-bold">
            has successfully completed the CyberDemia exam requirements and is{" "}
            <br />
            recognized as
          </div>
        </div>
        <div className=" text-[35px] text-center font-bold mb-8">
          Cyber Security Expert
        </div>
        <div className="flex gap-20 items-center">
          <div className="flex flex-col gap-1 items-center">
            <Image
              src="/images/qrCode.svg"
              alt="Certificate Background"
              width={30}
              height={300}
            />
            <div className="h-[1px] bg-cp-secondary w-[70px] " />
            <div className="flex flex-col gap-[2px] items-center">
              <span className="text-[8px]">843ha108ah25</span>
              <span className="text-[8px] text-cp-secondary">
                Certificate ID
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <Image
              src="/images/qrCode.svg"
              alt="Certificate Background"
              width={30}
              height={300}
            />
            <div className="h-[1px] bg-cp-secondary w-[70px] " />
            <div className="flex flex-col gap-[2px] items-center">
              <span className="text-[8px]">18/01/2024</span>
              <span className="text-[8px] text-cp-secondary">Date Earned</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <Image
              src="/images/signature.svg"
              alt="Certificate Background"
              width={40}
              height={300}
            />
            <div className="h-[1px] bg-cp-secondary w-[70px] " />
            <div className="flex flex-col gap-[2px] items-center">
              <span className="text-[8px]">18/01/2024</span>
              <span className="text-[8px] text-cp-secondary">Date Earned</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

// Set the displayName for the component
Certificate.displayName = "Certificate";

export default Certificate;
