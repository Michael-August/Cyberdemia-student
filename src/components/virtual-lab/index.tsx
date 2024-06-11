'use client';
import React from 'react';

import { coursesData } from '../../../utils/datas';
import Header from './Header';
import StandardCard from './StandardCard';
import VideoCard from './VideoCard';

const Index = () => {
  return (
    <div>
      <Header />
      <VideoCard
        videoSrc="/video/Tim Godfrey ft Travis Greene - Nara (Official Video).mp4"
        poster="/images/Certificate.svg"
        title="Watch a video tutorial on how to use Virtual Labs."
      />
      <div>
        <h1 className="text-2xl font-extrabold  py-10 text-center sm:text-start">
          Courses with Virtual Labs included
        </h1>
        <div className="flex justify-between items-center flex-wrap">
          {coursesData?.map((course, index) => (
            <StandardCard
              key={index}
              imageSrc={course.imageSrc}
              imageAlt={course.imageAlt}
              title={course.title}
              description={course.description}
              buttonText={course.buttonText}
              isComingSoon={course.isComingSoon}
              handleViewCourse={() => {
                console.log('you clicked me');
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
