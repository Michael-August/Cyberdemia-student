'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { GoArrowRight } from 'react-icons/go';
import { MdCancel, MdCheckCircle, MdPending } from 'react-icons/md';

import { Course } from '../../../types/Course.type';
import { formatPrice } from '../../../utils/constants';
import Loader from '../loader';

// Define the interface for a data row
interface TableRow {
  id: string;
  date: string;
  course: Course;
  status: string;
  amount: string;
}
interface TableProps {
  data: any;
  isLoading: boolean;
}

const Table: React.FC<TableProps> = ({ data, isLoading }) => {
  const router = useRouter();

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: '#ffff',
        fontWeight: 'bold',
        fontSize: '14px',
      },
    },
    rows: {
      style: {
        minHeight: '56px',
        textTransform: 'capitalize',
        cursor: 'default',
      },
    },
  };

  // Define the columns using the TableColumn interface
  const columns: TableColumn<TableRow>[] = [
    {
      name: 'Payment ID',
      selector: (row) => row.id,
      sortable: true,
      width: 'full',
    },
    {
      name: 'Date',
      selector: (row) => row.date,
      sortable: true,
      width: 'full',
    },
    {
      name: 'Course',
      selector: (row) => row.course?.title,
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      cell: (row) => (
        <div className="text-left capitalize flex items-center">
          <span className="mr-2">{row.status}</span>
          {row.status === 'paid' && <MdCheckCircle color="green" />}
          {row.status === 'unpaid' && <MdCancel color="red" />}
          {row.status === 'pending' && <MdPending color="orange" />}
        </div>
      ),
      sortable: true,
    },
    {
      name: 'Amount',
      selector: (row) => row.amount,
      cell: (row) => <div>{formatPrice(parseInt(row.amount))}</div>,
      sortable: true,
    },
    {
      name: 'Action',
      cell: (row) => (
        <div className="flex justify-end cursor-pointer">
          <button
            className="bg-cp-secondary text-white w-[150px] py-3 flex justify-center hover:bg-cp-secondaryDarker items-center text-[13px] gap-2"
            onClick={() => router.push(`/student/courses/${row.course?.id}`)}
          >
            View Course
            <GoArrowRight size={19} />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: '15rem',
    },
  ];

  return (
    <div className="rounded-[.5rem] px-2 py-10 bg-white shadow">
      {isLoading ? (
        <Loader />
      ) : (
        <DataTable
          customStyles={{
            headCells: {
              style: {
                backgroundColor: customStyles.headCells.style.backgroundColor,
                fontWeight: customStyles.headCells.style.fontWeight,
                fontSize: customStyles.headCells.style.fontSize,
              },
            },
            rows: {
              style: {
                minHeight: customStyles.rows.style.minHeight,
                textTransform: 'none',
                cursor: customStyles.rows.style.cursor,
              },
            },
          }}
          columns={columns}
          data={data}
          pagination
          // onChangePage={handlePageChange}
        />
      )}
    </div>
  );
};

export default Table;
