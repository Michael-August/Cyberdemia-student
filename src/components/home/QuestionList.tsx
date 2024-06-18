import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

function QuestionList() {
  const [listId, setListId] = useState(0);

  const text =
    'Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam. In posuere purus aliquet dolor pretium eget dictum';

  const spliceText = (str: string) => {
    return str.slice(0, 100) + '...';
  };

  const handleClick = (id: any) => {
    setListId(id);
  };

  return (
    <div className="w-full flex flex-col gap-7 mt-5">
      <h1 className="font-bold">Question List</h1>
      <div className="">
        <div className="border border-black flex items-start justify-between p-2">
          <h2 className="text-[12px] font-bold">Q1</h2>
          <div className="text-[12px] w-[90%]">
            {listId === 0 ? text : spliceText(text)}
          </div>
          <IoIosArrowDown
            size={20}
            onClick={() => handleClick(0)}
            className="cursor-pointer"
          />
        </div>
        <div className="border border-black border-t-0  flex items-start justify-between p-2">
          <h2 className="text-[12px] font-bold">Q2</h2>
          <div className="text-[12px] w-[90%]">
            {listId === 1 ? text : spliceText(text)}
          </div>
          <IoIosArrowDown
            size={20}
            onClick={() => handleClick(1)}
            className="cursor-pointer"
          />
        </div>
        <div className="border border-black border-t-0  flex items-start justify-between p-2">
          <h2 className="text-[12px] font-bold">Q3</h2>
          <div className="text-[12px] w-[90%]">
            {listId === 2 ? text : spliceText(text)}
          </div>
          <IoIosArrowDown
            size={20}
            onClick={() => handleClick(2)}
            className="cursor-pointer"
          />
        </div>
        <div className="border border-black border-t-0  flex items-start justify-between p-2">
          <h2 className="text-[12px] font-bold">Q4</h2>
          <div className="text-[12px] w-[90%]">
            {listId === 3 ? text : spliceText(text)}
          </div>
          <IoIosArrowDown
            size={20}
            onClick={() => handleClick(3)}
            className="cursor-pointer"
          />
        </div>
        <div className="border border-black border-t-0  flex items-start justify-between p-2">
          <h2 className="text-[12px] font-bold">Q5</h2>
          <div className="text-[12px] w-[90%]">
            {listId === 4 ? text : spliceText(text)}
          </div>
          <IoIosArrowDown
            size={20}
            onClick={() => handleClick(4)}
            className="cursor-pointer"
          />
        </div>
        <div className="border border-black border-t-0 flex items-start justify-between p-2">
          <h2 className="text-[12px] font-bold">Q6</h2>
          <div className="text-[12px] w-[90%]">
            {listId === 5 ? text : spliceText(text)}
          </div>
          <IoIosArrowDown
            size={20}
            onClick={() => handleClick(5)}
            className="cursor-pointer"
          />
        </div>
        <div className="border border-black border-t-0 flex items-start justify-between p-2">
          <h2 className="text-[12px] font-bold">Q7</h2>
          <div className="text-[12px] w-[90%]">
            {listId === 6 ? text : spliceText(text)}
          </div>
          <IoIosArrowDown
            size={20}
            onClick={() => handleClick(6)}
            className="cursor-pointer"
          />
        </div>
        <div className="border border-black border-t-0 flex items-start justify-between p-2">
          <h2 className="text-[12px] font-bold">Q8</h2>
          <div className="text-[12px] w-[90%]">
            {listId === 7 ? text : spliceText(text)}
          </div>
          <IoIosArrowDown
            size={20}
            onClick={() => handleClick(7)}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionList;
