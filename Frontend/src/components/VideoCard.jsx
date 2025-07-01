import React from 'react';

const VideoCard = ({ thumbnail, title, creator, views, watchedPercent = 0 }) => {
  // Use a default placeholder if no thumbnail is provided to prevent the "black box" issue.
  const displayThumbnail = thumbnail || 'https://i.imgur.com/gC5801u.jpeg';

  return (
    <div className="bg-[#1c1c1c] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/20 group cursor-pointer">
      <div className="relative w-full h-48">
        <img
          className="w-full h-48 object-cover"
          src={displayThumbnail}
          alt={title || 'Video thumbnail'}
        />
        {watchedPercent > 0 && (
          <div
            className="absolute left-0 bottom-0 h-2 bg-red-500 rounded z-20"
            style={{ width: `${watchedPercent}%` }}
          />
        )}
      </div>
      <div className="p-3">
        <h3 className="text-white text-base font-semibold truncate transition-colors group-hover:text-red-400">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mt-1">{creator}</p>
        {views && <p className="text-gray-500 text-xs mt-1">{views} views</p>}
      </div>
    </div>
  );
};

export default VideoCard; 