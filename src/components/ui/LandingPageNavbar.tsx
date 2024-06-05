import Link from 'next/link';
import React, { useState } from 'react';

function LandingPageNavbar() { 

    const [expandNavBar, setExpandNavBar] = useState(false)

    return (
        <>
            <div className='w-screen flex items-center justify-between py-[10px] px-4 md:px-10 border-b border-0 border-solid border-[#AA167666]'>
                <div className="logo">
                    <img src="/images/logo.png" alt="Cyberdemia Logo" className='w-[157px] md:w-[182px]' />
                </div>
                <div className='md:hidden' onClick={() => setExpandNavBar(true)}>
                    <img src='/icons/hamburger.png' alt='show menu' className='w-8' />
                </div>
                <div className="hidden nav-links md:flex items-center gap-4">
                    <div className="link-item">
                        <Link className='text-base text-[#000000CC] font-normal no-underline' href={''}>Why CyberDemia</Link>
                    </div>
                    <div className="link-item">
                        <Link className='text-base text-[#000000CC] font-normal no-underline' href={''}>Courses</Link>
                    </div>
                    <div className="link-item">
                        <Link className='text-base text-[#000000CC] font-normal no-underline' href={''}>Cyber for Schools</Link>
                    </div>
                    <div className="link-item">
                        <Link className='text-base text-[#000000CC] font-normal no-underline' href={''}>FAQs</Link>
                    </div>
                    <div className="link-item">
                        <Link className='text-base text-[#000000CC] font-normal no-underline' href={''}>News and Updates</Link>
                    </div>
                    <div className="link-item">
                        <Link className='text-base text-[#000000CC] font-normal no-underline' href={''}>Become an Instructor</Link>
                    </div>
                    <div className="link-item border-solid text-center border-[#AC1D7E] p-2">
                        <Link className='text-base text-[#AC1D7E] font-[700] no-underline' href={''}>Log in</Link>
                    </div>
                    <div className="link-item bg-[#2BDE48] text-center p-2">
                        <Link className='text-base text-white font-[700] no-underline' href={''}>Apply Now</Link>
                    </div>
                </div>
            </div>

            <div className={`absolute w-[108vw] top-0 bg-white mobile-menu flex flex-col h-screen nav-links md:hidden ${expandNavBar ? 'open' : 'closed'}`}>
                <div className="close flex justify-end mt-5 mb-20 mr-3" onClick={() => setExpandNavBar(false)}>
                    <img src="/icons/close.png" alt="close" className='text-right w-8' />
                </div>
                <div className="logo mb-16 flex items-center flex-col">
                    <img src="/images/logo.png" alt="Cyberdemia Logo" className='w-[157px]' />
                </div>

                <div className="flex flex-col nav-links items-center gap-10">
                    <div className="link-item">
                        <Link className='text-base text-[#000000CC] font-normal no-underline' href={''}>Why CyberDemia</Link>
                    </div>
                    <div className="link-item">
                        <Link className='text-base text-[#000000CC] font-normal no-underline' href={''}>Courses</Link>
                    </div>
                    <div className="link-item">
                        <Link className='text-base text-[#000000CC] font-normal no-underline' href={''}>Cyber for Schools</Link>
                    </div>
                    <div className="link-item">
                        <Link className='text-base text-[#000000CC] font-normal no-underline' href={''}>FAQs</Link>
                    </div>
                    <div className="link-item">
                        <Link className='text-base text-[#000000CC] font-normal no-underline' href={''}>News and Updates</Link>
                    </div>
                    <div className="link-item">
                        <Link className='text-base text-[#000000CC] font-normal no-underline' href={''}>Become an Instructor</Link>
                    </div>
                    <div className="link-item border-solid text-center border-[#AC1D7E] p-2">
                        <Link className='text-base text-[#AC1D7E] font-[700] no-underline' href={''}>Log in</Link>
                    </div>
                    <div className="link-item bg-[#2BDE48] text-center p-2">
                        <Link className='text-base text-white font-[700] no-underline' href={''}>Apply Now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPageNavbar