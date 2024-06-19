import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';

const NewsUpdates = [
  {
    id: 1,
    image: '/images/tech-banner.png',
    title: 'New Course on Cyber Threat Intelligence',
    detail:
      'This course provides essential cybersecurity training for enthusiasts transitioning into the field, emphasizing CIA principles and continuous protection of information and systems for business objectives...',
  },
];

const NewsAndUpdates = () => {
  return (
    <div>
      <div className="mt-7 hidden lg:block">
        <div className="">
          <div className="flex gap-5 overflow-x-scroll">
            {NewsUpdates.map((news) => (
              <SingleNews
                image={news.image}
                title={news.title}
                detail={news.detail}
                key={news.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 block lg:hidden">
        <div className="flex">
          <div className="w-full flex gap-5 overflow-x-scroll">
            {NewsUpdates.map((news) => (
              <MobileNews
                image={news.image}
                title={news.title}
                detail={news.detail}
                key={news.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const SingleNews = ({
  image,
  title,
  detail,
}: {
  image: string;
  title: string;
  detail: string;
}) => {
  return (
    <div className="border w-[334px] h-fit border-solid flex-shrink-0 border-cp-secondary p-5">
      <Image width={333} height={180} className="w-full" src={image} alt="" />
      <div className="details mb-6">
        <div className="head mt-4 mb-6">
          <span className="text-lg font-semibold text-[#000000CC]">
            {title}
          </span>
        </div>
        <span className="md:hidden lg:block">{detail}</span>
      </div>
      <div className="flex justify-end">
        <button className="py-5 px-[30px] flex items-center gap-2 bg-transparent border border-solid border-cp-secondary text-cp-secondary">
          Read more
          <IoArrowForward size={22} />
        </button>
      </div>
    </div>
  );
};

export const MobileNews = ({
  image,
  title,
  detail,
}: {
  image: string;
  title: string;
  detail: string;
}) => {
  return (
    <div className="border h-fit w-full border-solid border-cp-secondary p-5">
      <Image width={333} height={180} className="w-full" src={image} alt="" />
      <div className="details mb-6">
        <div className="head mt-4 mb-6">
          <span className="text-lg font-semibold text-[#000000CC]">
            {title}
          </span>
        </div>
      </div>
      <span className="block">{detail}</span>
      <div className="flex justify-end mt-4">
        <button className="p-2 flex items-center gap-2 bg-transparent border border-solid border-cp-secondary text-cp-secondary">
          Read more
          <IoArrowForward size={22} />
        </button>
      </div>
    </div>
  );
};

export default NewsAndUpdates;
