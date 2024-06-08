'use client';
import React, { useRef } from 'react';

interface VideoCardProps {
  videoSrc: string;
  poster: string;
  title: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoSrc, poster, title }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="sm:px-0 px-5 py-5">
      <div className="border-[1px] border-[#AC1D7E] h-full w-[325px] mb-20 p-5 flex flex-col gap-4">
        <div
          className="w-full h-[150px] overflow-hidden flex items-center justify-center cursor-pointer"
          onClick={handleVideoPlay}
        >
          <video
            ref={videoRef}
            width="350"
            height="150"
            poster={poster}
            className="object-cover h-full w-full"
            controls
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="text-[16px] font-extrabold sm:text-start">{title}</p>
      </div>
    </div>
  );
};

export default VideoCard;
