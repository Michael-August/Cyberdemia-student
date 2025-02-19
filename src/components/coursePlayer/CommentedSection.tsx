import moment from 'moment';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import { useLike } from '@/hooks/react-query/useCommunications';

interface CommentedSectionProps {
  comment: any;
  isReply: boolean;
  handleReply?: (commentId: string) => void;
}

const CommentedSection: React.FC<CommentedSectionProps> = ({
  comment,
  isReply,
  handleReply,
}) => {
  const { courseId } = useParams();
  const queryClient = useQueryClient();
  const { mutate: like } = useLike(courseId as string, comment.id);

  const handleLike = () => {
    like(
      {},
      {
        onSuccess: () => {
          queryClient.invalidateQueries('QAs');
          toast.success('Comment liked successfully!');
        },
        onError: (error) => {
          console.error('Comment like failed', error);
        },
      },
    );
  };
  return (
    <div>
      <div className="border-b-[1px] border-gray-400 p-3 flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="bg-[#5E5E5E] h-10 w-10 rounded-full text-[22px] font-bold text-white flex items-center justify-center">
            {comment?.student?.firstName.split('')[0]}
          </div>
          <div>
            <h1 className="text-[12px] font-bold">
              {comment?.student?.firstName} {comment?.student?.lastName}
            </h1>
            <p className="text-[10px] text-gray-500">
              {moment(comment?.createdAt).fromNow()}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:w-[75%] text-[14px] text-gray-600">
          {comment?.content}
          <div className="flex gap-2">
            {isReply && (
              <div
                className="flex gap-1 text-[10px] text-gray-500 items-center cursor-pointer"
                onClick={() => handleReply && handleReply(comment?.id)}
              >
                <Image
                  src="/images/comment.svg"
                  alt="comment"
                  width={20}
                  height={30}
                />
                {comment?.replyCount} replies
              </div>
            )}
            <div
              onClick={handleLike}
              className="flex gap-1 text-[10px] cursor-pointer text-gray-500 items-center"
            >
              {comment?.likeCount == 0 && (
                <BiLike size={20} className={`text-cp-secondary`} />
              )}
              {comment?.likeCount > 0 && (
                <BiSolidLike size={20} className="text-cp-secondary" />
              )}
              {comment?.likeCount} likes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentedSection;
