'use client';
import React, { useEffect, useRef, useState } from 'react';
import { IoIosShareAlt } from 'react-icons/io';
import { RiDownload2Line } from 'react-icons/ri';
import { useReactToPrint } from 'react-to-print';

import Certificate from '@/components/courses/Certificate';
import Loader from '@/components/loader';
import { NavigationCrumbs } from '@/components/NavigationCrumbs';
import { useGetStudentCertificate } from '@/hooks/react-query/useCourses';
import moment from 'moment';
import ShareModal from '@/components/shareModal';
import { useSearchParams } from 'next/navigation';
// import { useGetCourseCertificate } from '@/hooks/react-query/useCourses';

const Page = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [courseId, setCourseId] = useState<string | null>(null);

  // const certCourseId = localStorage.getItem('course-cert');

  // const { data: certificate, isLoading } = useGetCourseCertificate(certCourseId as string);
  const { data: certificates, isLoading } = useGetStudentCertificate(
    courseId as string,
  );

  const [isOpen, setIsOpen] = useState(false);
  const shareUrl = `${window.location.origin}/student/courses/certificate?courseId=${courseId}`;

  const searchParams = useSearchParams();

  useEffect(() => {
    const queryCourseId = searchParams.get('courseId');
    const storedCourseId = localStorage.getItem('course-cert');

    if (queryCourseId) {
      setCourseId(queryCourseId);
    } else if (storedCourseId) {
      setCourseId(storedCourseId);
    }
  }, [searchParams]);

  return (
    <div className="px-5 mt-14 mb-5 md:mt-0 md:mb-0 flex gap-10 flex-col overflow-x-hidden">
      <NavigationCrumbs />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Certificate certificateDetails={certificates} ref={componentRef} />
          <div className="flex flex-col md:flex-row gap-5 mt-10">
            <button
              onClick={handlePrint}
              className=" bg-cp-secondary p-2 md:sw-max text-white text-[12px] flex justify-center items-end gap-2"
            >
              Download Certificate PDF
              <RiDownload2Line size={20} />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="border  cursor-pointer border-black py-2 px-4 md:px-2  md:w-max text-black text-[12px] flex justify-center items-center gap-2"
            >
              Share
              <IoIosShareAlt size={20} />
            </button>
          </div>
          <div className=" w-full md:w-1/2 text-[12px] text-gray-600">
            This certificate above verifies that{' '}
            {certificates?.issuedCert?.studentId?.fullName} successfully
            completed the course Cyber Security Defense Analyst on{' '}
            {moment(certificates?.issuedCert?.issuedDate).format(
              'Do MMMM, YYYY',
            )}{' '}
            as taught by CyberDemia. The certificate indicates the entire course
            was completed as validated by the student.
          </div>
        </>
      )}
      <ShareModal isOpen={isOpen} setIsOpen={setIsOpen} url={shareUrl} />
    </div>
  );
};

export default Page;
