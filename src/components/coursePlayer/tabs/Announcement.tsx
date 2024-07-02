'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import Comment from '../Comment';
import CommentedSection from '../CommentedSection';

const comments = [
  {
    id: 1,
    name: 'Alice Johnson',
    initial: 'A',
    daysAgo: '7 days ago',
    comment:
      'This is a great article! I appreciate the depth of analysis and the well-researched points made. It was very enlightening.',
    likes: '15 likes',
    replies: '3 replies',
  },
  {
    id: 2,
    name: 'Bob Smith',
    initial: 'B',
    daysAgo: '3 days ago',
    comment:
      'I found this very helpful. The examples provided are practical and easy to understand, making the topic much clearer.',
    likes: '25 likes',
    replies: '5 replies',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    initial: 'C',
    daysAgo: '5 days ago',
    comment:
      'I disagree with some points. However, I think the overall argument is strong and well-presented, though more evidence could help.',
    likes: '10 likes',
    replies: '2 replies',
  },
  {
    id: 4,
    name: 'Dana White',
    initial: 'D',
    daysAgo: '10 days ago',
    comment:
      'Well written, thanks for sharing. This article provides a fresh perspective on the topic and highlights some key issues effectively.',
    likes: '30 likes',
    replies: '8 replies',
  },
  {
    id: 5,
    name: 'Eve Walker',
    initial: 'E',
    daysAgo: '1 day ago',
    comment:
      'Can you provide more details on this specific aspect? I am curious about how it relates to current trends and practices.',
    likes: '12 likes',
    replies: '4 replies',
  },
  {
    id: 6,
    name: 'Frank Wilson',
    initial: 'F',
    daysAgo: '2 days ago',
    comment:
      'I love this topic! The way you broke down the concepts was really engaging and helped me understand the complexities involved.',
    likes: '20 likes',
    replies: '6 replies',
  },
  {
    id: 7,
    name: 'Grace Miller',
    initial: 'G',
    daysAgo: '6 days ago',
    comment:
      'Very informative. The clarity of your writing and the inclusion of relevant examples makes this a valuable read for anyone interested.',
    likes: '18 likes',
    replies: '3 replies',
  },
  {
    id: 8,
    name: 'Hank Davis',
    initial: 'H',
    daysAgo: '9 days ago',
    comment:
      'Thanks for the insights. Your article has given me a lot to think about, and I plan to apply some of these ideas in my work.',
    likes: '22 likes',
    replies: '7 replies',
  },
  {
    id: 9,
    name: 'Ivy Lee',
    initial: 'I',
    daysAgo: '4 days ago',
    comment:
      'I have a different perspective on this. While I appreciate the thorough analysis, I think there are some alternative viewpoints worth considering.',
    likes: '14 likes',
    replies: '5 replies',
  },
  {
    id: 10,
    name: 'Jack Martin',
    initial: 'J',
    daysAgo: '8 days ago',
    comment:
      'This is very useful, thanks! The practical applications of these theories are clear, and the examples make it easy to understand.',
    likes: '28 likes',
    replies: '10 replies',
  },
  {
    id: 11,
    name: 'Kate Thompson',
    initial: 'K',
    daysAgo: '11 days ago',
    comment:
      'I learned something new today. This article was both enlightening and engaging, providing new insights into a complex subject.',
    likes: '17 likes',
    replies: '4 replies',
  },
  {
    id: 12,
    name: 'Leo Baker',
    initial: 'L',
    daysAgo: '12 days ago',
    comment:
      "Great analysis! Your in-depth look at the topic uncovered some aspects I hadn't considered before, which I found really fascinating.",
    likes: '35 likes',
    replies: '9 replies',
  },
];

function Announcement() {
  const [visibleCount, setVisibleCount] = useState(10);

  const handleShowMore = () => {
    setVisibleCount(comments.length);
  };
  const handleShowLess = () => {
    setVisibleCount(10);
  };
  return (
    <div>
      <div className="px-2 flex flex-col gap-5">
        <div className="flex gap-3 items-center">
          <Image
            src="/images/instructor.svg"
            alt="instructor Icon"
            width={70}
            height={50}
            className="cursor-pointer rounded-full "
          />
          <div className=" flex flex-col gap-1">
            <h1 className="text-[13px] font-extrabold">Jane Doe</h1>
            <span className="text-[11px] font-bold text-gray-600">
              (Cyber Security Expert)
            </span>
            <span className="text-[11px] font-bold text-gray-600">
              1day ago
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[14px] font-extrabold">
            Title of the announcement will be entered here!
          </h1>
          <span className="text-[12px] font-normal text-gray-600 md:w-[80%] flex flex-col gap-10">
            Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra
            malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id
            pellentesque interdum. Vestibulum convallis velit feugiat aliquam
            pellentesque etiam. In posuere purus aliquet dolor pretium eget
            dictum.
            <br /> Ut auctor dui neque aliquet tempor. Elementum amet duis
            auctor interdum. Dolor in aliquam blandit lectus pretium. Aliquam
            malesuada aliquam ac in. Urna sit mauris faucibus lectus elementum
            ipsum. Proin quis velit elementum dui aliquam euismod a placerat
            consectetur. Arcu proin et parturient nisl semper bibendum enim eget
            etiam. Neque penatibus iaculis non ultrices augue. Platea tellus ut
            sit lectus. Ligula aliquam tristique egestas semper facilisis erat.
            <br />
            Ut auctor dui neque aliquet tempor. Elementum amet duis auctor
            interdum. Dolor in aliquam blandit lectus pretium. Aliquam malesuada
            aliquam ac in. Urna sit mauris faucibus lectus elementum ipsum.
            Proin quis velit elementum dui aliquam euismod a placerat
            consectetur. Arcu proin et parturient nisl semper bibendum enim eget
            etiam. Neque penatibus iaculis non ultrices augue. Platea tellus ut
            sit lectus. Ligula aliquam tristique egestas semper facilisis erat.
            <br />
            Platea tellus ut sit lectus. Ligula aliquam tristique egestas semper
            facilisis erat.
          </span>
        </div>
        <div className="pb-40 flex flex-col gap-5 px-2">
          <Comment />

          {comments.slice(0, visibleCount).map((comment) => (
            <CommentedSection
              key={comment.id}
              logo={comment.initial}
              name={comment.name}
              time={comment.daysAgo}
              comment={comment.comment}
              replies={comment.replies}
              likes={comment.likes}
              isReply={false}
              handleReply={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
          ))}

          {visibleCount < comments.length ? (
            <div className="flex  w-full justify-center ml-20 md:ml-0 items-center">
              <button
                className="bg-cp-secondary p-2 text-white w-max flex text-[12px] gap-1 items-center justify-center mr-40"
                onClick={handleShowMore}
              >
                Show more <MdKeyboardArrowDown size={16} />
              </button>
            </div>
          ) : (
            <div className="flex w-full   justify-center items-center">
              <button
                className="bg-cp-secondary p-2 text-white w-max flex text-[12px] gap-1 items-center justify-center md:mr-40"
                onClick={handleShowLess}
              >
                Show Less <MdKeyboardArrowUp size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Announcement;
