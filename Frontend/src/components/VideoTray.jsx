import React, { useEffect, useState } from 'react'
import API from '../services/api';
import VideoCard from './VideoCard';

const DEMO_VIDEOS = [
  { thumbnail: 'https://up.yimg.com/ib/th/id/OIP.TcVLBkYGTO7F-M2i2N31EgHaEK?pid=Api&rs=1&c=1&qlt=95&w=205&h=115', title: 'AI in Healthcare', creator: 'TechGuru', views: '1.2M' },
  { thumbnail: 'https://up.yimg.com/ib/th/id/OIP.HGKk3_eGTGlBog1u9Okm_AHaEK?pid=Api&rs=1&c=1&qlt=95&w=203&h=114', title: 'AI Ethics', creator: 'TechGuru', views: '900K' },
  { thumbnail: 'https://images.squarespace-cdn.com/content/v1/64aa25ba0f9b2a46585e0148/d6a2460d-0761-4516-a351-bbc99b879628/a-modern-and-insightful-thumbnail-with-a_SLSit1MrSDesethDyGAiOw_nXIiq2DDTdCb7Na6ZI18iQ.png', title: 'AI and Education', creator: 'TechGuru', views: '800K' },
  { thumbnail: 'https://images.openai.com/thumbnails/url/C-72n3icu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4ud6lIqygxKMn1ToqIdw0o9XRNDPMojw-3LKsMLnfycassKqlycc6PME51MXXMTKqIdzfTLUiNdypQKwYA8E8qEQ', title: 'AI in Finance', creator: 'TechGuru', views: '700K' },
  { thumbnail: 'https://images.openai.com/thumbnails/url/C-72n3icu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4ud6lIqygxKMn1ToqIdw0o9XRNDPMojw-3LKsMLnfycassKqlycc6PME51MXXMTKqIdzfTLUiNdypQKwYA8E8qEQ', title: 'AI in Art', creator: 'TechGuru', views: '600K' },
  { thumbnail: 'https://tse2.mm.bing.net/th/id/OIP.uLmLgdVyOB2x1ShCHQyv1QHaD4?pid=Api&P=0&h=180', title: 'AI in Music', creator: 'TechGuru', views: '500K' },
  { thumbnail: 'https://up.yimg.com/ib/th/id/OIP.TcVLBkYGTO7F-M2i2N31EgHaEK?pid=Api&rs=1&c=1&qlt=95&w=205&h=115', title: 'AI in Sports', creator: 'TechGuru', views: '400K' },
  { thumbnail: 'https://up.yimg.com/ib/th/id/OIP.TcVLBkYGTO7F-M2i2N31EgHaEK?pid=Api&rs=1&c=1&qlt=95&w=205&h=115', title: 'AI in Space', creator: 'TechGuru', views: '300K' },
  { thumbnail: 'https://images.squarespace-cdn.com/content/v1/64aa25ba0f9b2a46585e0148/d6a2460d-0761-4516-a351-bbc99b879628/a-modern-and-insightful-thumbnail-with-a_SLSit1MrSDesethDyGAiOw_nXIiq2DDTdCb7Na6ZI18iQ.png', title: 'AI in Gaming', creator: 'TechGuru', views: '200K' },
  { thumbnail: 'https://images.squarespace-cdn.com/content/v1/64aa25ba0f9b2a46585e0148/d6a2460d-0761-4516-a351-bbc99b879628/a-modern-and-insightful-thumbnail-with-a_SLSit1MrSDesethDyGAiOw_nXIiq2DDTdCb7Na6ZI18iQ.png', title: 'AI in Movies', creator: 'TechGuru', views: '100K' },
//   { thumbnail: 'https://i.imgur.com/S8W7m5c.jpeg', title: 'AI in Writing', creator: 'TechGuru', views: '90K' },
//   { thumbnail: 'https://i.imgur.com/KxS1pQ9.png', title: 'AI in Robotics', creator: 'TechGuru', views: '80K' },
//   { thumbnail: 'https://i.imgur.com/gC5801u.jpeg', title: 'AI in Security', creator: 'TechGuru', views: '70K' },
//   { thumbnail: 'https://i.imgur.com/3Q3SPvf.jpeg', title: 'AI in Retail', creator: 'TechGuru', views: '60K' },
//   { thumbnail: 'https://i.imgur.com/S8W7m5c.jpeg', title: 'AI in Logistics', creator: 'TechGuru', views: '50K' },
//   { thumbnail: 'https://i.imgur.com/KxS1pQ9.png', title: 'AI in Weather', creator: 'TechGuru', views: '40K' },
];

const VideoTray = (props) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feedPage, setFeedPage] = useState(0);
  const name = props.name;

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

  // For Feed: pagination logic
  const FEED_PAGE_SIZE = 15;
  const feedStart = feedPage * FEED_PAGE_SIZE;
  const feedEnd = feedStart + FEED_PAGE_SIZE;
  const feedVideos = videos.slice(feedStart, feedEnd);

  // For non-Feed: show max 5 videos
  const trayVideos = videos.slice(0, 5);

  const totalFeedPages = Math.ceil(videos.length / FEED_PAGE_SIZE);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 border-b-4">
          {name === 'Trending' ? 'Trending Videos' : name === 'Feed' ? 'Watch Latest' : 'Related Videos'}
        </h2>
        <div className={
          name === 'Feed'
            ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4'
            : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4'
        }>
          {loading ? (
            <div>Loading...</div>
          ) : Array.isArray(videos) && videos.length > 0 ? (
            name === 'Feed'
              ? feedVideos.map((video, index) => (
                  <VideoCard
                    key={index + feedStart}
                    thumbnail={video.thumbnail}
                    title={video.title}
                    creator={video.creator}
                    views={`${video.views} views`}
                  />
                ))
              : trayVideos.map((video, index) => (
                  <VideoCard
                    key={index}
                    thumbnail={video.thumbnail}
                    title={video.title}
                    creator={video.creator}
                    views={`${video.views} views`}
                  />
                ))
          ) : (
            <div>No videos found.</div>
          )}
        </div>
        {/* Feed styled pagination controls */}
        {name === 'Feed' && !loading && Array.isArray(videos) && videos.length > FEED_PAGE_SIZE && (
          <div className="flex justify-center items-center mt-4 gap-2 select-none">
            {/* Prev Arrow */}
            <button
              className="text-white text-lg px-2 disabled:opacity-40"
              onClick={() => setFeedPage(feedPage - 1)}
              disabled={feedPage === 0}
              aria-label="Previous Page"
            >
             {'<'}
            </button>
            {/* Page Numbers */}
            {Array.from({ length: totalFeedPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setFeedPage(idx)}
                className={
                  feedPage === idx
                    ? 'mx-1 w-8 h-8 rounded-full bg-[#4a2323] text-white flex items-center justify-center text-base font-semibold'
                    : 'mx-1 w-8 h-8 rounded-full text-white flex items-center justify-center text-base hover:bg-[#3a2323]'
                }
                style={{ transition: 'background 0.2s' }}
              >
                {idx + 1}
              </button>
            ))}
            {/* Next Arrow */}
            <button
              className="text-white text-lg px-2 disabled:opacity-40"
              onClick={() => setFeedPage(feedPage + 1)}
              disabled={feedPage === totalFeedPages - 1}
              aria-label="Next Page"
            >
             {'>'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoTray;