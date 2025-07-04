import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const demoUser = {
  name: 'Sarah Miller',
  description: 'Tech enthusiast and content creator',
  image: 'https://randomuser.me/api/portraits/women/44.jpg',
};

const demoVideos = [
  {
    title: 'Tech Talk: Future of AI',
    thumbnail: 'https://img.freepik.com/free-photo/ai-cloud-concept-with-robot-arm_23-2149739748.jpg',
    views: '123K',
  },
  {
    title: 'AI in Healthcare',
    thumbnail: 'https://img.freepik.com/free-photo/ai-cloud-concept-with-robot-arm_23-2149739748.jpg',
    views: '50K',
  },
  {
    title: 'AI Ethics',
    thumbnail: 'https://img.freepik.com/free-photo/ai-cloud-concept-with-robot-arm_23-2149739748.jpg',
    views: '30K',
  },
];

const analytics = {
  views: '203K',
  likes: '5K',
};

const Profile = () => {
  return (
    <div className="h-fit bg-[#231010] text-white flex flex-col items-center flex flex-col gap-6 p-2">
      {/* navbar */}
      <Navbar/>
      {/* User Info Card */}
      <div className="w-full max-w-4xl bg-[#2d1818] rounded-xl shadow-lg flex flex-row sm:flex-row md:items-center md:justify-between gap-6 p-4 sm:p-6 mb-8  my-24">
        {/* Profile Image and User Details in same row for sm and up */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full md:w-auto">
          <div className="flex-shrink-0 flex flex-col items-center sm:items-start">
            <img
              src={demoUser.image}
              alt="Profile"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-red-400 shadow-lg object-cover"
            />
          </div>
          {/* User Details */}
          <div className=" flex-1 flex flex-col items-center sm:items-start justify-center w-full  hidden md:block">
            <h2 className="text-2xl font-bold text-center sm:text-left">{demoUser.name}</h2>
            <p className="text-sm text-gray-300 mt-1 text-center sm:text-left">{demoUser.description}</p>
          </div>
          </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full md:w-auto">
          {/* User Details */}
          <div className="flex-1 flex flex-col items-center sm:items-start justify-center w-full md:w-auto md:hidden">
            <h2 className="text-2xl font-bold text-center sm:text-left">{demoUser.name}</h2>
            <p className="text-sm text-gray-300 mt-1 text-center sm:text-left">{demoUser.description}</p>
          </div>
        {/* Edit Button */}
        <div className="flex flex-col items-center md:items-end w-full md:w-auto">
          <button className="bg-[#4a2323] hover:bg-red-500 transition-colors text-white px-6 py-2 rounded-md font-semibold mt-2 md:mt-0 w-full md:w-auto">Edit Profile</button>
        </div>
      </div>
        </div>

      {/* My Videos Section */}
      <div id="my-videos-section" className="w-full max-w-4xl mb-8">
        <h3 className="text-lg font-semibold mb-3">My Videos</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          {demoVideos.map((video, idx) => (
            <div
              key={idx}
              className="bg-[#2d1818] rounded-lg shadow-md flex-1 min-w-0 w-full sm:w-1/2 md:w-1/3 max-w-full mx-auto"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-40 sm:h-36 md:h-40 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <div className="font-medium truncate" title={video.title}>{video.title}</div>
                <div className="text-xs text-gray-400 mt-1">{video.views} views</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics Section */}
      <div className="w-full max-w-4xl mb-8">
        <h3 className="text-lg font-semibold mb-3">Analytics</h3>
        {/* Responsive row for analytics cards: 2 per row on all screens */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#2d1818] rounded-lg p-6 flex flex-col items-center justify-center border border-red-900">
            <div className="text-sm text-gray-400 mb-1">Total Views</div>
            <div className="text-2xl font-bold">{analytics.views}</div>
          </div>
          <div className="bg-[#2d1818] rounded-lg p-6 flex flex-col items-center justify-center border border-red-900">
            <div className="text-sm text-gray-400 mb-1">Total Likes</div>
            <div className="text-2xl font-bold">{analytics.likes}</div>
          </div>
        </div>
      </div>

      {/* Upload Button */}
      <Link to="/upload">Upload</Link>
      <button className="w-full max-w-xs bg-red-600 hover:bg-red-700 transition-colors text-white py-2 rounded-full font-semibold text-lg shadow-lg mt-2">Upload!</button>
      <Footer/>
    </div>
  );
};

export default Profile; 