import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import { usePostQA, useReplyQA } from '@/hooks/react-query/useCommunications';

function Comment({ title, commentId }: any) {
  const { courseId } = useParams();

  const queryClient = useQueryClient();
  const [content, setContent] = useState('');

  const profileData = sessionStorage.getItem('userProfile');
  const { mutate: postQA } = usePostQA(courseId as string);
  const { mutate: replyQA } = useReplyQA(courseId as string, commentId);

  const handleCommentSubmission = () => {
    if (commentId) {
      replyQA(
        { content },
        {
          onSuccess: () => {
            queryClient.invalidateQueries('QAs');
            toast.success('Question/comment posted succesfully!');
            setContent('');
          },
          onError: (error) => {
            console.error('Question/comment post failed:', error);
          },
        },
      );
    } else {
      postQA(
        { content },
        {
          onSuccess: () => {
            queryClient.invalidateQueries('QAs');
            toast.success('Question/comment posted succesfully!');
            setContent('');
          },
          onError: (error) => {
            console.error('Question/comment post failed:', error);
          },
        },
      );
    }
  };

  return (
    <div className="flex items-center justify-center md:justify-start">
      <div className="bg-[#F5E4F0] h-max w-max p-3 flex flex-col gap-3 ">
        <h1 className="text-[13px] font-bold text-gray-600">{title}</h1>
        <div className="flex gap-3 items-start">
          <div className="bg-[#5E5E5E] h-10 w-10 rounded-[50%] text-[22px] font-bold text-white flex items-center justify-center ">
            <span className="">
              {profileData && JSON.parse(profileData).fullName.split(' ')[0][0]}
            </span>
          </div>
          <input
            type="text"
            placeholder="Enter your comment"
            value={content}
            onChange={(e) => setContent(e?.target?.value)}
            maxLength={2000}
            className="border bg-[#F5F5F5] border-gray-300 rounded-md p-4 mb:pb-10 shadow-sm w-[330px] md:w-[700px] text-sm text-gray-700 placeholder-gray-400 outline-none resize-none"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleCommentSubmission}
            className="bg-cp-secondary w-max h-max p-2 text-[10px] text-white cursor-pointer hover:bg-pink-800"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
