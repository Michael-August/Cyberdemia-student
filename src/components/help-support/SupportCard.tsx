import Image from 'next/image';
import Link from 'next/link';

const SupportCard = ({
  support,
}: {
  support: { icon: any; title: string; info: string; link: string };
}) => {
  return (
    <Link href={support.link}>
      <div className="border border-solid border-cp-secondary flex flex-col items-center justify-center gap-3 p-6 w-full md:w-[14.875rem] cursor-pointer">
        <Image
          className="mb-4"
          src={support.icon}
          width={64}
          height={64}
          alt="support icon"
        />
        <div className="title">
          <span className="text-base font-semibold text-[#000000CC]">
            {support.title}
          </span>
        </div>
        <div className="info text-center">
          <span className="text-sm">{support.info}</span>
        </div>
      </div>
    </Link>
  );
};

export default SupportCard;
