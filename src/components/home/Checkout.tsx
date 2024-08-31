"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { title } from "process";
import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { usePaystackPayment } from "react-paystack";

const Checkout = () => {
  const router = useRouter();
  const data = sessionStorage.getItem("userProfile");

  // Paystack configuration
  const config = {
    reference: new Date().getTime().toString(),
    title: "Cyber Security Fundamentals",
    firstname: data && JSON.parse(data).firstName,
    lastname: data && JSON.parse(data).lastName,
    email: data && JSON.parse(data).email,
    amount: 25000000, // Amount is in kobo, so 25000000 kobo = N250,000
    publicKey: "pk_test_7863e2147cb741abfa6c7c02f37e0b7f3a6b76c4",
  };

  const onSuccess = (reference: any) => {
    // Handle success here, such as storing the reference in your database
    console.log(reference);
  };

  const onClose = () => {
    // Handle when the payment dialog is closed
    console.log("Payment closed");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <>
      <div className="mx-10 w-[30%] ">
        <div className="flex justify-start mb-[20px] ">
          <div
            className="bg-cp-secondary cursor-pointer text-white py-3 px-10 flex justify-center hover:bg-cp-secondaryDarker items-center text-[13px] gap-2"
            onClick={() => router.back()}
          >
            <GoArrowLeft size={19} />
            Go Back
          </div>
        </div>
        <main>
          <div>
            <h1 className="text-2xl py-3 font-extrabold text-start">
              Checkout
            </h1>
          </div>
          <div>
            <h2 className="text-[14px] py-1 font-extrabold text-cp-secondary text-start">
              Course
            </h2>
            <h3 className="text-[12px] py-2 text-start">
              Cyber Security Fundamentals
            </h3>
          </div>
          <div>
            <h2 className="text-[14px] py-1 font-extrabold text-cp-secondary text-start">
              Summary
            </h2>
            <div className="">
              <div className="flex justify-between items-center">
                <h3 className="text-[12px] font-extrabold text-start">
                  Cyber Security Fundamentals
                </h3>
                <h3 className="text-[12px] py-2 font-extrabold text-start">
                  N250,000
                </h3>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-[12px] py-2 font-extrabold text-start">
                  Discount
                </h3>
                <h3 className="text-[12px] py-2 font-extrabold text-start">
                  {/* Discount amount will be here */}
                </h3>
              </div>
              <hr
                style={{
                  height: "1px",
                  backgroundColor: "black",
                  border: "none",
                }}
              />
              <div className="text-[14px] flex justify-between items-center">
                <h3 className="py-5 font-extrabold text-start">
                  Cyber Security Fundamentals
                </h3>
                <h3 className="text-[14px] py-5 font-extrabold text-start">
                  N250,000
                </h3>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-[14px] py-5 font-extrabold text-cp-secondary text-start">
              Payment Platform
            </h2>
            <h3 className="text-[12px] py-2 font-extrabold text-start">
              Please choose your preferred payment platform
            </h3>
            <div>
              <select
                className="text-black py-3 px-3 border w-full text-[13px]"
                aria-label="Select payment platform"
              >
                <option value="paystack">Paystack</option>
              </select>
            </div>
          </div>
          <div className="mt-5">
            <button
              className="bg-cp-secondary cursor-pointer text-white py-3 px-5 hover:bg-cp-secondaryDarker w-full text-[13px]"
              onClick={() => initializePayment({ onSuccess, onClose })}
            >
              Proceed to Payment
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Checkout;
