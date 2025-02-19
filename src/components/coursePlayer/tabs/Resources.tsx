import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

function Resources({ resources }: { resources: any[] }) {
  const [downlaodable, setDownloadable] = useState<any[]>([]);
  const [external, setExternal] = useState<any[]>([]);

  useEffect(() => {
    setDownloadable(
      resources.filter(
        (resource) => resource.resourceType === 'downloadableFile',
      ),
    );

    setExternal(
      resources.filter((resource) => resource.resourceType === 'external'),
    );
  }, [resources]);

  return (
    <div className="pb-20 pt-5">
      <div className="border border-gray-700 text-gray-800 text-[12px] h-max md:w-[35%]  ">
        <div className="p-4 flex justify-between items-center">
          <div>
            Downloadable file <span>({downlaodable.length}) </span>
          </div>
          <IoIosArrowDown size={20} className="text-gray-700" />
        </div>
      </div>
      <div className="border border-gray-700 text-gray-800 text-[12px] border-t-0 h-max md:w-[35%]  ">
        <div className="p-4 flex flex-col justify-between  gap-3">
          {downlaodable.map((downla) => (
            <div key={downla?.title} className="flex gap-2 items-center">
              {downla.title}
              <a
                href={downla?.url}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/Cloud.svg"
                  alt="Download"
                  width={25}
                  height={40}
                  className="cursor-pointer"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-gray-700 text-gray-800 text-[12px] border-t-0 h-max md:w-[35%]  ">
        <div className="p-4 flex justify-between items-center">
          <div>
            External Resource <span>({external.length}) </span>
          </div>
          <IoIosArrowDown size={20} className="text-gray-700" />
        </div>
      </div>
      <div className="border border-gray-700 text-gray-800 text-[12px] border-t-0 h-max md:w-[35%]  ">
        <div className="p-4 flex flex-col justify-between  gap-4">
          {external.map((exter) => (
            <Link href={`${exter?.url}`} target="_blank" key={exter?.title}>
              <div className="flex gap-2 items-center">
                {exter.title}
                <Image
                  src="/images/chain.svg"
                  alt="cloud"
                  width={18}
                  height={40}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resources;
