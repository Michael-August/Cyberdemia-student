import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer flex flex-col gap-5 -mx-4 p-4 lg:-mx-20 bg-cp-primary lg:px-20 py-16 text-white mt-20 lg:mt-32">
      <div className="top border-b border-solid flex flex-col xl:flex-row xl:items-center justify-between border-white pb-5">
        <div className="logo flex flex-col gap-4 mb-5">
          <Image
            width={182.71}
            height={48.71}
            className="w-[11.375rem]"
            src="/images/footer-logo.png"
            alt=""
          />
          <span className="text-sm">A product of CyberPlural</span>

          <div className="socials flex gap-5 items-center mt-7">
            <Link target="_blank" href={'https://x.com/cyberplural'}>
              <Image
                width={23.2}
                height={23.2}
                src="/icons/xlogo.svg"
                alt="x logo"
              />
            </Link>
            <Link
              target="_blank"
              href={'https://www.instagram.com/cyberplural'}
            >
              <Image
                width={23.2}
                height={23.2}
                src="/icons/iglogo.svg"
                alt="instagram logo"
              />
            </Link>
            <Link
              target="_blank"
              href={'https://www.linkedin.com/company/cyberplural/'}
            >
              <Image
                width={23.2}
                height={23.2}
                src="/icons/inlogo.svg"
                alt="linkedin logo"
              />
            </Link>
            {/* <Image
              width={23.2}
              height={23.2}
              src="/icons/fblogo.svg"
              alt="facebook logo"
            /> */}
          </div>
        </div>
        <div className="moreinfo flex flex-col md:flex-row md:items-center gap-10 xl:gap-20">
          <div className="group flex flex-col gap-3">
            <span className="heading text-sm font-semibold">Quick Links</span>
            <Link
              href={'https://cyberdemia-tutor.vercel.app/signin'}
              target="_blank"
              className="text-xs"
            >
              Become an Instructor
            </Link>
            <Link href={'/signin'} className="text-xs">
              Become a Student
            </Link>
          </div>
          <div className="group flex flex-col gap-3">
            <span className="heading text-sm font-semibold">Contact us</span>
            <span className="text-xs">+234 8000 000 000</span>
            <span className="text-xs">+234 8000 000 000</span>
          </div>
          <div className="group flex flex-col gap-3">
            <span className="heading text-sm font-semibold">Our Offices</span>
            <span className="text-xs">4, Sefadu Close Wuse II, Abuja FCT.</span>
            <span className="text-xs">
              212, Haramani Plaza, Shettima Monguno Crescent, Utako.
            </span>
          </div>
        </div>
      </div>
      <div className="bootom mt-5 flex md:flex-row flex-col gap-5 md:gap-0 items-center justify-between">
        <span className="text-xs font-medium">
          © {moment().year()} CyberDemia All Rights Reserved.
        </span>
        <div className="policy-conditions flex">
          <span className="border-r text-sm border-solid border-white pr-4">
            Privacy Policy
          </span>
          <span className="ml-4 text-sm">Terms & Condition</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
