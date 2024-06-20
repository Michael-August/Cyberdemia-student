'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import RecomendedCourse from '@/components/home/RecomendedCourse';
import { NavigationCrumbs } from '@/components/NavigationCrumbs';

import { useLayoutContext } from '../../../../../../context/LayoutContext';
function RecomendedCourses() {
  const router = useRouter();
  const { dispatch } = useLayoutContext();

  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'dashboardNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'defaultSidebar' });
  }, [dispatch]);

  return (
    <div className=" px-5  flex gap-10 flex-col">
      <NavigationCrumbs />
      <span className="text-14px font-extrabold">
        Cyber Security Technical Training
      </span>
      <div className="grid grid-rows md:grid-cols-3 ">
        <RecomendedCourse
          availableCourses="7 Courses Available"
          image={'/images/card3.svg'}
          title="Cyber Security Technical Training"
          body="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam. In posuere purus aliquet dolor pretium eget dictum."
          handleClick={() => router.push('dhjfhjdfh/rrhh')}
          isCourseAvailable={false}
          isCourseComing={false}
        />

        <RecomendedCourse
          availableCourses="7 Courses Available"
          image={'/images/card3.svg'}
          title="Cyber Security Technical Training"
          body="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam. In posuere purus aliquet dolor pretium eget dictum."
          handleClick={() => router.push('dhjfhjdfh/rg')}
          isCourseAvailable={false}
          isCourseComing={false}
        />
        <RecomendedCourse
          availableCourses="7 Courses Available"
          image={'/images/card3.svg'}
          title="Cyber Security Technical Training"
          body="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam. In posuere purus aliquet dolor pretium eget dictum."
          handleClick={() => router.push('dhjfhjdfh/ff')}
          isCourseAvailable={false}
          isCourseComing={false}
        />
        <RecomendedCourse
          availableCourses="7 Courses Available"
          image={'/images/card3.svg'}
          title="Cyber Security Technical Training"
          body="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam. In posuere purus aliquet dolor pretium eget dictum."
          handleClick={() => router.push('dhjfhjdfh/wws')}
          isCourseAvailable={false}
          isCourseComing={false}
        />
        <RecomendedCourse
          availableCourses="7 Courses Available"
          image={'/images/card3.svg'}
          title="Cyber Security Technical Training"
          body="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam. In posuere purus aliquet dolor pretium eget dictum."
          handleClick={() => router.push('dhjfhjdfh/jks')}
          isCourseAvailable={false}
          isCourseComing={false}
        />
      </div>
      <span className="text-14px font-extrabold">Coming Soon</span>
      <div className="grid grid-rows md:grid-cols-3 ">
        <RecomendedCourse
          availableCourses="7 Courses Available"
          image={'/images/card3.svg'}
          title="Cyber Security Technical Training"
          body="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam. In posuere purus aliquet dolor pretium eget dictum."
          handleClick={() => router.push('dhjfhjdfh/ksks')}
          isCourseAvailable={false}
          isCourseComing={true}
        />
        <RecomendedCourse
          availableCourses="7 Courses Available"
          image={'/images/card3.svg'}
          title="Cyber Security Technical Training"
          body="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam. In posuere purus aliquet dolor pretium eget dictum."
          handleClick={() => router.push('home/dhjfhjdfh/ksks')}
          isCourseAvailable={false}
          isCourseComing={true}
        />
      </div>
    </div>
  );
}

export default RecomendedCourses;
