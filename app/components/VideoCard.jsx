'use client';

import React, { useState } from 'react';

const VideoCard = ({ 
  videoSrc, 
  title, 
  username, 
  likes, 
  duration, 
  width = 'w-72', 
  height = 'h-48' 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative ${width} ${height} rounded-lg overflow-hidden bg-black hover:cursor-pointer `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Element */}
      <video
        className="w-full h-full object-cover"
        src={videoSrc}
        muted
        loop
        ref={(video) => {
          if (video) {
            isHovered ? video.play() : video.pause();
          }
        }}
      />

      {/* Overlay for Details */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-0 text-white flex flex-col justify-end p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex items-center justify-between text-sm mt-2">
            <span>{username}</span>
            <div className='flex gap-2'>
              <span>❤️{likes}</span>
              <span>|</span>
              <span className="text-sm">{duration}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
