import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { GoBook } from 'react-icons/go';
import { PiHouseFill } from 'react-icons/pi';
import { PiCertificateBold } from 'react-icons/pi';
import { PiHeadsetBold } from 'react-icons/pi';
import { TbCube } from 'react-icons/tb';
import { TbCreditCard } from 'react-icons/tb';

import SideItems from './SideItems';

function Sidebar() {
  const sidebarLinks = [
    { img: PiHouseFill, link: '/home', text: 'Home' },
    { img: GoBook, link: '/courses', text: 'My Courses' },
    { img: PiCertificateBold, link: '/certificate', text: 'Certificates' },
    { img: TbCube, link: '/labs', text: 'Virtual Labs' },
    { img: TbCreditCard, link: '/payments', text: 'Payments' },
    { img: CgProfile, link: '/profile', text: 'Profile' },
    { img: PiHeadsetBold, link: '/support', text: 'Help & Support' },
  ];

  return (
    <div className="hidden md:block bg-cp-primary w-[220px] text-white shadow-md z-[10000] h-full fixed top-10 left-0 bottom-0">
      <div className="mt-10">
        {sidebarLinks.map((link, index) => (
          <SideItems key={index} img={link.img} link={link.link}>
            {link.text}
          </SideItems>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
