"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { RxCaretDown } from "react-icons/rx";

function DashboardNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-cp-primary py-3 flex items-center justify-between md:px-5 px-4 shadow z-[100000]">
      <Link href="/">
        <Image
          src="/images/logo2.svg"
          alt="Description of image"
          width={100}
          height={100}
        />
      </Link>
      <div className="flex items-center gap-6">
        <div className="relative">
          <IoNotificationsOutline color="white" size={27} />
          <div className="bg-red-500 h-[15px] w-[15px] rounded-full text-[10px] text-white flex items-center justify-center absolute top-0 right-0">
            1
          </div>
        </div>
        <div className="md:flex items-center gap-2 hidden">
          <img
            src="/images/profilePicture.svg"
            alt="User Avatar"
            className="h-7 w-7 rounded-full"
          />
          <div>
            <p className="text-[10px] capitalize text-gray-300">John Doe</p>
          </div>
          <div className="relative">
            <RxCaretDown
              className="text-gray-300 cursor-pointer"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="absolute p-3 bg-cp-primary top-full right-0 mt-1 w-50 text-white rounded shadow-lg">
                {/* User info */}
                <div className="p-2">
                  <p className="text-gray-200 font-semibold capitalize">
                    John Doe
                  </p>
                  <p className="text-gray-400">JohnDoe@gmail.com</p>
                </div>
                {/* Logout button */}
                <button className="block bg-cp-secondary w-full py-2 text-left px-4 bg-sa-golden rounded-lg hover:bg-cp-primary">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="md:hidden">
          <img src="/images/menue.svg" alt="User Avatar" className="h-6 w-6 " />
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
