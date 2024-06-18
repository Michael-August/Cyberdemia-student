import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';

const Training = ({
  image,
  title,
  detail,
}: {
  image: string;
  title: string;
  detail: string;
}) => {
  return (
    <div className="border h-fit border-solid border-cp-secondary p-5">
      <Image width={333} height={180} className="w-full" src={image} alt="" />
      <div className="details mb-6">
        <div className="head mt-4 mb-6 w-[264px] lg:w-full">
          <span className="text-lg font-semibold text-[#000000CC]">
            {title}
          </span>
        </div>
        <span className="hidden w-[350px] lg:block">{detail}</span>
      </div>
      <div className="flex justify-end">
        <button className="p-2 flex items-center gap-2 bg-cp-secondary text-white">
          View Course
          <IoArrowForward size={22} />
        </button>
      </div>
    </div>
  );
};

export default Training;
