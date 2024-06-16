import Image from 'next/image';
import React from 'react';
import { BiLike } from 'react-icons/bi';

interface CommentedSectionProps {
  logo: string;
  name: string;
  time: string;
  comment: string;
  replies: string;
  likes: string;
}

const CommentedSection: React.FC<CommentedSectionProps> = ({
  logo,
  name,
  time,
  comment,
  replies,
  likes,
}) => {
  return (
    <div className="border-t-[1px] border-gray-400 p-3 flex flex-col gap-2">
      <div className="flex gap-2">
        <div className="bg-[#5E5E5E] h-10 w-10 rounded-full text-[22px] font-bold text-white flex items-center justify-center">
          {logo}
        </div>
        <div>
          <h1 className="text-[12px] font-bold">{name}</h1>
          <p className="text-[10px] text-gray-500">{time}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-[75%] text-[14px] text-gray-600">
        {comment}
        <div className="flex gap-2">
          <div className="flex gap-1 text-[10px] text-gray-500 items-center">
            <Image
              src="/images/comment.svg"
              alt="comment"
              width={20}
              height={30}
            />
            {replies}
          </div>
          <div className="flex gap-1 text-[10px] text-gray-500 items-center">
            <BiLike size={20} className="text-cp-secondary" />
            {likes}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentedSection;
