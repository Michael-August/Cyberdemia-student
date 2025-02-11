import Image from 'next/image';
import React from 'react';

function CourseOverview({ details }: any) {
  return (
    <div className="w-full  md:w-[55%] flex flex-col gap-7 pb-20 pt-8 px-2 md:px-0">
      {/* <div className="flex flex-col gap-5 text-[12px] text-gray-600 ">
        <span>
          orem ipsum dolor sit amet consectetur. Ut porttitor et viverra
          malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id
          pellentesque interdum. Vestibulum convallis velit feugiat aliquam
          pellentesque etiam. In posuere purus aliquet dolor pretium eget
          dictum. Ut auctor dui neque aliquet tempor.
        </span>
        <span className="">
          Elementum amet duis auctor interdum. Dolor in aliquam blandit lectus
          pretium. Aliquam malesuada aliquam ac in. Urna sit mauris faucibus
          lectus elementum ipsum. Proin quis velit elementum dui aliquam euismod
          a placerat consectetur. Arcu proin et parturient nisl semper bibendum
          enim eget etiam. Neque penatibus iaculis non ultrices augue. Platea
          tellus ut sit lectus. Ligula aliquam tristique egestas semper
        </span>
        <div className="flex font-extrabold  gap-3 items-center text-cp-secondary">
          <Image
            src="/images/pass.svg"
            alt="Certificate Icon"
            width={20}
            height={50}
            color="#AC1D7E"
            className="cursor-pointer"
          />
          Pass 2 Certification Exams and get certified.
        </div>
      </div>
      <div>
        <h1 className="text-[13px] font-extrabold pb-2">
          What you will learn:
        </h1>
        <ul className="list-disc list-inside pl-5 text-[12px] text-gray-600 ">
          <li>Egestas magna gravida dolor venenatis ultrices cursus</li>
          <li>Morbi arcu pellentesque. Mauris sed vivamus at in in. </li>
          <li>Id ornare sed eget iaculis. Et arcu elementum vestibulum </li>
          <li>Etiam vitae vestibulum iaculis cursus. Vestibulum dictum </li>
          <li>n varius pellentesque justo justo. Nibh fermentum </li>
          <li>Purus augue auctor. Quis pharetra malesuada consequat</li>
        </ul>
      </div>
      <div>
        <h1 className="text-[13px] font-extrabold pb-2">
          Prerequisite for learning:
        </h1>
        <ul className="list-disc list-inside pl-5 text-[12px] text-gray-600 ">
          <li>Egestas magna gravida dolor venenatis ultrices cursus</li>
          <li>Morbi arcu pellentesque. Mauris sed vivamus at in in. </li>
          <li>Id ornare sed eget iaculis. Et arcu elementum vestibulum </li>
        </ul>
      </div> */}

      <div>
        <h1 className="text-[13px] font-extrabold pb-1">Course Objectives:</h1>
        <div dangerouslySetInnerHTML={{ __html: details?.objective }} />
      </div>

      <div>
        <h1 className="text-[13px] font-extrabold pb-1">
          Prerequisite for learning:
        </h1>
        <div dangerouslySetInnerHTML={{ __html: details?.prerequisite }} />
      </div>
      <h1 className="text-[15px] font-extrabold pt-10 ">Instructor</h1>
      <div className="flex flex-col gap-5">
        <div className="flex gap-3 items-center">
          <Image
            src="/images/instructor.svg"
            alt="instructor Icon"
            width={50}
            height={50}
            className="cursor-pointer rounded-full "
          />
          <div>
            <h1 className="text-[13px] font-extrabold">
              {details?.courseInstructor?.email}
            </h1>
            <span className="text-[11px] font-bold text-gray-600">
              {/* (Cyber Security Expert) */}
            </span>
          </div>
        </div>
        <span className="text-[12px] font-normal text-gray-600"></span>
      </div>
    </div>
  );
}

export default CourseOverview;
