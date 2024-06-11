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
      <div className="certificate-bg flex flex-col items-center py-7 w-full">
        <div className="flex flex-col items-center gap-2">
          <h1
            className="text-[14px] font-bold text-black"
            style={{ fontWeight: 1000 }}
          >
            CyberDemia certifies that
          </h1>
          <div className="flex flex-col gap-0">
            <h1
              className="text-cp-secondary text-[30px]"
              style={{ fontWeight: 1000 }}
            >
              John Doe
            </h1>
            <div className="h-[1px] bg-cp-secondary w-full" />
          </div>
        </div>
      </div>
    </div>
  );
});

// Set the displayName for the component
Certificate.displayName = "Certificate";

export default Certificate;
