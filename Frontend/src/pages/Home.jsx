import React from 'react';
import Navbar from '../components/Navbar';
import VideoCard from '../components/VideoCard';

const mockVideos = [
  {
    thumbnail: 'https://i.imgur.com/gC5801u.jpeg',
    title: 'Tech Talk: Future of AI',
    creator: 'TechGuru',
    views: '1.2M',
  },
  {
    thumbnail: 'https://i.imgur.com/3Q3SPvf.jpeg',
    title: 'Cooking with Chef Isabella',
    creator: 'IsabellaKitchen',
    views: '800K',
  },
  {
    thumbnail: 'https://i.imgur.com/S8W7m5c.jpeg',
    title: 'Travel Vlog: Exploring the Alps',
    creator: 'MountainTrekker',
    views: '2.1M',
  },
  {
    thumbnail: 'https://i.imgur.com/KxS1pQ9.png',
    title: 'Gaming Stream: League of Legends',
    creator: 'ProGamer22',
    views: '550K',
  },
];

const Home = () => {
  // Example: You can control the navbar state from here
  const isAuthenticated = true;
  const isAdmin = false;

  return (
    <div className="min-h-screen bg-[#231010] text-white">
      <Navbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="space-y-8">
          {/* Trending Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Trending Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 ">
              {mockVideos.map((video, index) => (
                <VideoCard
                  key={index}
                  thumbnail={video.thumbnail}
                  title={video.title}
                  creator={video.creator}
                  views={`${video.views} views`}
                />
              ))}
            </div>
          </div>
          {/* Add other sections like "Continue Watching" here */}
        </div>
      </main>
    </div>
  );
};

export default Home; 