import Image from 'next/image';

const Testimonial = (props: {
  words: string;
  name: string;
  company: string;
  position: string;
  image: string;
}) => {
  const { words, name, company, position, image } = props;

  return (
    <div className="testimony px-5 py-2 md:p-[2rem] w-full md:w-[48%] bg-[#FFE5F7]">
      <div className="words mb-7">
        <span className="text-xs font-medium text-[#000000CC]">
          {words}
        </span>
      </div>
      <div className="profile flex items-center gap-5">
        <Image width={76} height={80} src={image} alt="" />
        <div className="flex flex-col">
          <span className="text-xs font-bold text-[#000000CC]">
            {name}
          </span>
          <span className="text-sm text-[#000000CC]">
            {position}, {company}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
