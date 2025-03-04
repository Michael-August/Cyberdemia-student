'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoArrowForward } from 'react-icons/io5';

const Training = ({
  title,
  detail,
  courseId,
}: {
  title: string;
  detail: string;
  courseId?: string;
}) => {
  const router = useRouter();

  return (
    <div className="border w-[264px] lg:w-[350px] h-auto border-solid flex-shrink-0 border-cp-secondary p-5">
      <Image
        width={333}
        height={180}
        className="w-full"
        src={'/images/tech-banner.png'}
        alt=""
      />
      <div className="details mb-6">
        <div className="head mt-4 mb-6">
          <span className="text-xs font-semibold text-[#000000CC]">
            {title}
          </span>
        </div>
        <div
          className="hidden lg:block text-xs text-[#000000B2]"
          dangerouslySetInnerHTML={{ __html: detail }}
        />
        {/* <span className="hidden lg:block text-xs text-[#000000B2]">
          {detail}
        </span> */}
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => router.push(`/student/courses/${courseId}`)}
          className="p-2 flex items-center text-sm hover:bg-cp-primary transition-all gap-2 bg-cp-secondary text-white"
        >
          View Course
          <IoArrowForward size={22} />
        </button>
      </div>
    </div>
  );
};

export default Training;
