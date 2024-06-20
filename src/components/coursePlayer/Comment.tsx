import React from 'react';

function Comment({ title }: any) {
  return (
    <div className="flex items-center justify-center md:justify-start">
      <div className="bg-[#F5E4F0] h-max w-max p-3 flex flex-col gap-3 ">
        <h1 className="text-[13px] font-bold text-gray-600">{title}</h1>
        <div className="flex gap-3 items-start">
          <div className="bg-[#5E5E5E] h-10 w-10 rounded-full text-[22px] font-bold text-white flex items-center justify-center ">
            J
          </div>
          <input
            type="text"
            placeholder="Enter your comment"
            maxLength={2000}
            className="border bg-[#F5F5F5] border-gray-300 rounded-md p-4 mb:pb-10 shadow-sm w-[330px] md:w-[700px] text-sm text-gray-700 placeholder-gray-400 outline-none resize-none"
          />
        </div>
        <div className="flex justify-end">
          <div className="bg-cp-secondary w-max h-max p-2 text-[10px] text-white">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
