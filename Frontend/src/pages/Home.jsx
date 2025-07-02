import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import VideoCard from '../components/VideoCard';
import API from '../services/api';
import VideoTray from '../components/VideoTray';
import Footer from "../components/Footer";

const DEMO_VIDEOS = [
  { thumbnail: 'https://images.squarespace-cdn.com/content/v1/64aa25ba0f9b2a46585e0148/d6a2460d-0761-4516-a351-bbc99b879628/a-modern-and-insightful-thumbnail-with-a_SLSit1MrSDesethDyGAiOw_nXIiq2DDTdCb7Na6ZI18iQ.png', title: 'AI in Healthcare', creator: 'TechGuru', views: '1.2M', watchedPercent: 80 },
  { thumbnail: 'https://images.squarespace-cdn.com/content/v1/64aa25ba0f9b2a46585e0148/d6a2460d-0761-4516-a351-bbc99b879628/a-modern-and-insightful-thumbnail-with-a_SLSit1MrSDesethDyGAiOw_nXIiq2DDTdCb7Na6ZI18iQ.png', title: 'AI Ethics', creator: 'TechGuru', views: '900K', watchedPercent: 0 },
  { thumbnail: 'https://images.squarespace-cdn.com/content/v1/64aa25ba0f9b2a46585e0148/d6a2460d-0761-4516-a351-bbc99b879628/a-modern-and-insightful-thumbnail-with-a_SLSit1MrSDesethDyGAiOw_nXIiq2DDTdCb7Na6ZI18iQ.png', title: 'AI and Education', creator: 'TechGuru', views: '800K', watchedPercent: 25 },
];

const CAROUSEL_SIZE = 3; // Number of images to show in carousel
const CAROUSEL_INTERVAL = 3500; // ms

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const intervalRef = useRef(null);
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await API.get('/videos');
        if (Array.isArray(res.data) && res.data.length > 0) {
          setVideos(res.data);
        } else {
          setVideos(DEMO_VIDEOS);
        }
      } catch {
        setVideos(DEMO_VIDEOS);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  // Carousel auto-advance
  useEffect(() => {
    if (videos.length < 1) return;
    intervalRef.current = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % Math.min(CAROUSEL_SIZE, videos.length));
    }, CAROUSEL_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, [videos]);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoTop(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // const handlePrev = () => {
  //   setCarouselIndex((prev) => (prev - 1 + Math.min(CAROUSEL_SIZE, videos.length)) % Math.min(CAROUSEL_SIZE, videos.length));
  // };
  // const handleNext = () => {
  //   setCarouselIndex((prev) => (prev + 1) % Math.min(CAROUSEL_SIZE, videos.length));
  // };

  const isAuthenticated = true;
  const isAdmin = false;

  return (
    <div className="h-fit  px-1 py-2 flex flex-col gap-8 bg-[#231010] text-white flex flex-col border-gray-200">
      <Navbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
      {/* <main className="container flex flex-col mx-auto p-4 sm:p-6 lg:p-8 lg:gap-6 pt-28 "> */}
      <main className="pt-24 lg:pt-20 flex flex-col gap-4">
        {/* Hero/Carousel Section */}
        <div className="mb-10 w-full  h-1/6">
          {/* <h2 className="text-2xl font-bold mb-4">Featured</h2> */}
          <div className="relative w-full h-1/6  md:h-1/6 lg:h-2/12 border-2  mx-auto rounded-lg overflow-hidden shadow-lg bg-[#2d1818]  flex flex-col ">
            {loading ? (
              <div className="flex items-center justify-center h-fit w-full">Loading...</div>
            ) : Array.isArray(videos) && videos.length > 0 ? (
              <div className='flex flex-col justify-center items-center w-full h-full'>
                <img
                  src={videos[carouselIndex]?.thumbnail}
                  alt={videos[carouselIndex]?.title}
                  className="w-full h-80 md:h-84 lg:h-98 object-cover  transition-all duration-500  border-2"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4">
                  <h3 className="text-lg font-semibold">{videos[carouselIndex]?.title}</h3>
                  <p className="text-sm">By {videos[carouselIndex]?.creator} &bull; {videos[carouselIndex]?.views} views</p>
                </div>
                {/* Controls */}
                
                {/* <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#3a2323] bg-opacity-80 hover:bg-opacity-100 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-white border-opacity-20 z-10"
                  aria-label="Previous"
                  style={{ fontSize: '1.5rem' }}
                >
                  {"<"}
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#3a2323] bg-opacity-80 hover:bg-opacity-100 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-white border-opacity-20 z-10"
                  aria-label="Next"
                  style={{ fontSize: '1.5rem' }}
                >
                  {">"}
                </button> */}
               
                {/* Indicators */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                  {Array.isArray(videos) ? videos.slice(0, CAROUSEL_SIZE).map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-3 h-3 rounded-full ${carouselIndex === idx ? 'bg-white' : 'bg-gray-500'} inline-block`}
                    />
                  )) : null}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64">No videos available</div>
            )}
          </div>
        </div>
       
        {/* Trending Section */}
        <VideoTray name={"Trending"}/>
       
        {/* Feed Section */}
        <div id="feed-section">
          <VideoTray name={"Feed"}/>
        </div>


        {/* Continue Watching Section */}
        <VideoTray name={"Continue Watching"}/>
      </main>
      <Footer/>
      {showGoTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-[#231010] border-2 border-red-500 rounded-full p-3 shadow-lg hover:bg-[#3a2323] transition-colors"
          aria-label="Go to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Home; 