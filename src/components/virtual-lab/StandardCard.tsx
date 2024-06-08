"use client";
import Image, { StaticImageData } from "next/image";
import { GoArrowRight } from "react-icons/go";
import { truncateText } from "../../../utils/constants";

interface StandardCardProps {
  imageSrc: string | StaticImageData;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  handleViewCourse: () => void;
  isComingSoon: boolean; // Boolean prop to toggle "Coming Soon" tag
}

const StandardCard: React.FC<StandardCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  handleViewCourse,
  isComingSoon,
}) => {
  return (
    <div className="sm:px-0 px-5 relative">
      <div className="border-[1px] border-[#AC1D7E] h-full w-[325px] mb-20 p-5 flex flex-col gap-4">
        {/* Conditional Rendering of "Coming Soon" Tag */}
        {isComingSoon && (
          <div className="absolute top-8 sm:left-8 left-12 bg-green-600 text-white text-xs py-1 px-2 border-2 rounded-full border-white rounded">
            Coming Soon
          </div>
        )}
        <div className="w-full h-[150px] overflow-hidden flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={350}
            height={50}
            className="cursor-pointer object-cover h-full w-full"
          />
        </div>
        <span className="text-[14px] font-extrabold overflow-hidden">
          {title}
        </span>
        <span className="text-[12px] font-normal overflow-hidden">
          {truncateText(description, 120)}
        </span>
        <div className="flex justify-end cursor-pointer">
          <div
            className="bg-cp-secondary text-white w-[150px] py-3 flex justify-center hover:bg-cp-secondaryDarker items-center text-[13px] gap-2"
            onClick={handleViewCourse}
          >
            {buttonText}
            <GoArrowRight size={19} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardCard;
