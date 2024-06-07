"use client";

import * as React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function InputOTPControlled() {
  const [value, setValue] = React.useState("");

  return (
    <div className="space-y-10 ">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup className="flex justify-center items-center gap-4">
          <InputOTPSlot
            index={0}
            className="w-15 h-12 text-xl border border-cp-secondary p-5"
          />
          <InputOTPSlot
            index={1}
            className="w-15 h-12 text-xl border border-cp-secondary p-5"
          />
          <InputOTPSlot
            index={2}
            className="w-15 h-12 text-xl border border-cp-secondary p-5"
          />
          <InputOTPSlot
            index={3}
            className="w-15 h-12 text-xl border border-cp-secondary p-5"
          />
          <InputOTPSlot
            index={4}
            className="w-15 h-12 text-xl border border-cp-secondary p-5"
          />
          <InputOTPSlot
            index={5}
            className="w-15 h-12 text-xl border border-cp-secondary p-5"
          />
        </InputOTPGroup>
      </InputOTP>
      <button
        type="submit"
        className="w-full py-4 mt-10 bg-cp-secondary text-white rounded-md hover:bg-cp-secondaryDarker transition duration-200"
      >
        Submit
      </button>
    </div>
  );
}
