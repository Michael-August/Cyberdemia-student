'use client';
import React, { useEffect } from 'react';

import Table from '@/components/payment/Table';
import { useGetPayments } from '@/hooks/react-query/usePayments';

import { useLayoutContext } from '../../../../../context/LayoutContext';

// Renaming the function to start with an uppercase letter
const Page = () => {
  const { dispatch } = useLayoutContext();

  const { data, isLoading, refetch } = useGetPayments();

  useEffect(() => {
    refetch();
    console.log(data);
  }, []);

  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'dashboardNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'defaultSidebar' });
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col gap-2 px-4 md:px-0  sm:mt-[2.5rem] mt-1">
        <span className="text-sm font-extrabold text-[#AC1D7E]">
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
        <Table data={data} isLoading={isLoading} />
      </div>
    </>
  );
};

export default Page;
