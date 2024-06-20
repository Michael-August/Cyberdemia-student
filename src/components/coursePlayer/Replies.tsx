import React, { useState } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import Comment from './Comment';
import CommentedSection from './CommentedSection';

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
];
interface RepliesProps {
  handleReply: () => void;
}
const Replies: React.FC<RepliesProps> = ({ handleReply }) => {
  const [visibleCount, setVisibleCount] = useState(10);

  const handleShowMore = () => {
    setVisibleCount(comments.length);
  };
  const handleShowLess = () => {
    setVisibleCount(10);
  };
  return (
    <div className="fade-enter-active flex flex-col gap-5 pt-5 pb-20">
      <div
        className="flex gap-1 w-max p-2 border border-cp-secondary text-[12px] items-center justify-center cursor-pointer hover:bg-cp-secondary hover:text-white"
        onClick={handleReply}
      >
        <MdArrowBack />
        Back to Q&A
      </div>

      <CommentedSection
        key={'00'}
        logo={'p'}
        name={'Alice Johnson'}
        time={'7 days ago'}
        comment={''}
        replies={
          'This is a great article! I appreciate the depth of analysis and the well-researched points made. It was very enlightening.'
        }
        likes={'3'}
        isReply={true}
        handleReply={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <Comment title={'Write a reply?'} />
      <p className=" text-[12px] font-extrabold cursor-pointer text-cp-secondary">
        (2 replies)
      </p>
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
          handleReply={function (): void {}}
        />
      ))}

      {visibleCount < comments.length ? (
        <div className="flex justify-center">
          <button
            className="bg-cp-secondary p-2 text-white w-max flex text-[12px] gap-1 items-center justify-center mr-40"
            onClick={handleShowMore}
          >
            Show more <MdKeyboardArrowDown size={16} />
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            className="bg-cp-secondary p-2 text-white w-max flex text-[12px] gap-1 items-center justify-center mr-40"
            onClick={handleShowLess}
          >
            Show Less <MdKeyboardArrowUp size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Replies;
