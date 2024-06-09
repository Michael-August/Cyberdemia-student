import React from 'react';

import Table from '@/components/payment/Table';

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-2 ">
        <span className="text-[16px] font-extrabold text-[#AC1D7E]">
          Payment History
        </span>
        <div className="">
          <div className="w-[103px] h-[8px] bg-[#AC1D7E]"></div>
          <hr
            style={{
              height: '1px',
              backgroundColor: '#AC1D7E',
              border: 'none',
            }}
          />
        </div>
      </div>
      <div>
        <Table />
      </div>
    </>
  );
};

export default page;
