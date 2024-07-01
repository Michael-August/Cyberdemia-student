import React from 'react';

interface QuestionBarProps {
  numberOfQuestion: number;
}

function QuestionBar({ numberOfQuestion }: QuestionBarProps) {
  const numbers = Array.from({ length: numberOfQuestion }, (_, i) => ({
    id: i + 1,
    number: i + 1,
  }));

  return (
    <div className="border-[1px] border-gray-500 py-7 px-6 w-max grid gap-7 h-max">
      <h1 className="text-[13px] font-extrabold text-gray-900">Questions</h1>
      <div className="grid grid-cols-5 gap-3">
        {numbers.map(({ id, number }) => (
          <div
            key={id}
            className="border-[0.8px] border-gray-300 py-[3px] px-[12px] text-[9px] w-full cursor-pointer flex items-center justify-center"
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionBar;
