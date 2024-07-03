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
    <>
      <div className="news mt-20 md:mt-32">
        <div className="mb-6 md:mb-10 text-[#000000CC] text-base font-semibold">
          <span>News & Updates</span>
        </div>
        <span className="intro text-sm text-[#000000B2]">
          Promote a culture in which employees, staffs, and students share the
          responsibility of defending the school against cyber-incident with
          holistic cybersecurity strategy.
        </span>
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
      </div>
    </>
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
          <span className="text-sm font-semibold text-[#000000CC]">
            {title}
          </span>
        </div>
        <span className="md:hidden text-xs lg:block">{detail}</span>
      </div>
      <div className="flex justify-end">
        <button className="py-5 px-[30px] hover:text-white hover:bg-cp-secondary transition-all text-sm flex items-center gap-2 bg-transparent border border-solid border-cp-secondary text-cp-secondary">
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
          <span className="text-sm font-semibold text-[#000000CC]">
            {title}
          </span>
        </div>
      </div>
      <span className="block text-xs">{detail}</span>
      <div className="flex justify-end mt-4">
        <button className="p-2 flex text-sm items-center hover:text-white hover:bg-cp-secondary transition-all gap-2 bg-transparent border border-solid border-cp-secondary text-cp-secondary">
          Read more
          <IoArrowForward size={22} />
        </button>
      </div>
    </div>
  );
};

export default NewsAndUpdates;
