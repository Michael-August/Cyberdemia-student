import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import StarRatings from 'react-star-ratings';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useCourseRating } from '@/hooks/react-query/useCourses';

import { Subscription } from '../../../types/SubscribedCourse.type';

function CompletedCourse({ course }: { course: Subscription }) {
  const stars = document.querySelectorAll('.star');

  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const mutation = useCourseRating();

  const handleRating = () => {
    mutation.mutate({ courseId: course.id, rating, review: reviewText });
  };

  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      stars.forEach((s, i) => {
        const imgElement = s as HTMLImageElement; // Explicitly cast to HTMLImageElement
        if (i <= index) {
          imgElement.src = '/images/starImage.svg'; // Change the image source for selected stars
        } else {
          imgElement.src = '/images/star2.svg'; // Change the image source for unselected stars
        }
      });
    });
  });
  const Router = useRouter();
  const handleClick = () => {
    localStorage.setItem('course-cert', course.id);
    Router.push('/student/courses/certificate');
  };
  return (
    <div className="h-[153px] w-[382px] md:w-[752px] bg-[#f8cfeb] p-5 flex gap-5">
      <div className="hidden md:flex">
        <Image
          src="/images/completedCourses.svg"
          alt="Completed Courses"
          width={100}
          height={100}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 justify-between">
        <span className="text-[14px] font-extrabold ">
          {course?.course.title}
        </span>
        <div className="flex items-center gap-2">
          <Image
            src="/images/CheckCircle.svg"
            alt="Check Circle"
            width={25}
            height={25}
            className="cursor-pointer"
          />
          <span className="text-[10px] text-gray-700 ">
            {course.completedSections.length}/{course.course.sections.length}{' '}
            Lessons Completed
          </span>
        </div>
        <div className="flex justify-end gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <button className="border hover:bg-cp-secondary hover:text-white cursor-pointer border-black py-2 px-4 md:px-2 w-[60%] md:w-auto text-black text-[12px] flex justify-center items-center gap-2">
                Rate Course
                <Image
                  src="/images/starImage.svg"
                  alt="Star"
                  width={15}
                  height={15}
                  className="cursor-pointer"
                />
              </button>
            </DialogTrigger>
            <DialogContent className="w-max p-8">
              <DialogHeader>
                <DialogTitle className="flex flex-col md:flex-row gap-5">
                  <Image
                    src="/images/completedCourses.svg"
                    alt="Completed Courses"
                    width={200}
                    height={100}
                    className="cursor-pointer responsive-image"
                  />
                  <div className="flex flex-col gap-5 mt-2 justify-start items-start">
                    <span className="text-[17px] font-bold  ">
                      {course.course.title}
                    </span>
                    <div className="flex items-center gap-2 ">
                      <Image
                        src="/images/CheckCircle.svg"
                        alt="Check Circle"
                        width={25}
                        height={25}
                        className="cursor-pointer"
                      />
                      <span className="text-[10px] text-gray-700 ">
                        {course.completedSections.length}/
                        {course.course.sections.length} Lessons Completed
                      </span>
                    </div>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid items-center gap-2">
                  <h1 className=" text-[10px] text-gray-800">
                    Enter your review here
                  </h1>
                  <input
                    type="text"
                    placeholder="Enter text (up to 2000 characters)"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    maxLength={2000}
                    className="border bg-[#F5F5F5] border-gray-300 rounded-md p-4 pb-20 shadow-sm w-full text-sm text-gray-700 placeholder-gray-400 outline-none resize-none"
                  />
                </div>
                <div className="flex flex-col items-end">
                  <span className=" text-[10px] text-gray-700">
                    Give star rating
                  </span>
                  <StarRatings
                    rating={rating}
                    starRatedColor="gold"
                    changeRating={(newRating: any) => setRating(newRating)}
                    numberOfStars={5}
                    name="rating"
                  />
                </div>
              </div>
              <DialogFooter className="flex flex-col md:flex-row gap-3">
                <div className=" text-[10px] text-gray-400">
                  Your feedback will help us make the <br /> platform better for
                  the community. Thanks.
                </div>
                <div className=" flex flex-col md:flex-row gap-4 ">
                  <DialogClose asChild>
                    <button className="border  cursor-pointer border-cp-secondary hover:bg-cp-secondary hover:text-white  py-2 px-4 md:px-2 w-[100%] md:w-auto text-black text-[12px] flex justify-center items-center gap-2 ">
                      cancel
                    </button>
                  </DialogClose>
                  <button
                    onClick={handleRating}
                    className="bg-cp-secondary hover:bg-pink-600 cursor-pointer py-2 px-4 md:px-2 w-[100%] md:w-auto text-white text-[12px] flex justify-center items-center gap-2"
                  >
                    Submit
                    <GoArrowRight size={20} />
                  </button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <button
            className="bg-cp-secondary hover:bg-pink-600 cursor-pointer py-2 px-4 md:px-2 w-[90%] md:w-auto text-white text-[12px] flex justify-center items-center gap-2"
            onClick={handleClick}
          >
            View Certificate
            <GoArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompletedCourse;
