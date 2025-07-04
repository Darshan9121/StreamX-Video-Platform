import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const demoVideo = {
  title: 'Tech Talk: Future of AI',
  description: 'A deep dive into the future of artificial intelligence and its impact on society. Hosted by TechGuru.',
  views: '123K',
  likes: '2.6K',
  comments: '600',
  videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  sources: [
    { label: '1080p', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { label: '720p', url: 'https://www.w3schools.com/html/movie.mp4' },
  ],
};

const relatedVideos = [
  {
    title: 'AI in Healthcare',
    creator: 'TechGuru',
    thumbnail: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'AI Ethics',
    creator: 'TechGuru',
    thumbnail: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'AI and Education',
    creator: 'TechGuru',
    thumbnail: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
  },
];

const comments = [
  {
    user: 'Sarah M.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    time: '2 days ago',
    text: 'Great video! Very insightful.'
  }
];

function formatTime(time) {
  if (isNaN(time)) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

const CustomVideoPlayer = ({ sources, poster }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [selectedSource, setSelectedSource] = useState(sources[0]);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = volume;
    video.muted = muted;
    video.playbackRate = playbackRate;
  }, [volume, muted, playbackRate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.code === 'ArrowRight') {
        seek(currentTime + 5);
      } else if (e.code === 'ArrowLeft') {
        seek(currentTime - 5);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line
  }, [currentTime]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e) => {
    const percent = e.target.value;
    const newTime = (percent / 100) * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const seek = (time) => {
    const clamped = Math.max(0, Math.min(duration, time));
    videoRef.current.currentTime = clamped;
    setCurrentTime(clamped);
  };

  const handleVolume = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    setMuted(vol === 0);
  };

  const handleMute = () => {
    setMuted((m) => !m);
  };

  const handlePlaybackRate = (e) => {
    setPlaybackRate(parseFloat(e.target.value));
  };

  const handleSourceChange = (e) => {
    const src = sources.find((s) => s.label === e.target.value);
    setSelectedSource(src);
    setTimeout(() => {
      if (playing) videoRef.current.play();
    }, 100);
  };

  const handleFullscreen = () => {
    const player = videoRef.current.parentElement;
    if (!document.fullscreenElement) {
      player.requestFullscreen();
      setFullscreen(true);
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black group">
      <video
        ref={videoRef}
        src={selectedSource.url}
        poster={poster}
        className="w-full h-full object-cover rounded-lg"
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        tabIndex={0}
      />
      {/* Center Play Button */}
      {!playing && (
        <button
          className="absolute inset-0 flex items-center justify-center focus:outline-none"
          onClick={togglePlay}
          tabIndex={0}
        >
          <svg className="w-24 h-24 text-white opacity-80" fill="currentColor" viewBox="0 0 84 84">
            <circle cx="42" cy="42" r="42" fill="#000" fillOpacity="0.3" />
            <polygon points="34,28 62,42 34,56" fill="#fff" />
          </svg>
        </button>
      )}
      {/* Custom Controls */}
      <div
        className="absolute bottom-0 left-0 w-full px-4 pb-2 pt-3 bg-gradient-to-t from-[#231010]/90 via-[#231010]/60 to-transparent flex flex-col gap-2"
        onMouseMove={() => setShowControls(true)}
      >
        {/* Progress Bar */}
        <input
          type="range"
          min={0}
          max={100}
          value={duration ? (currentTime / duration) * 100 : 0}
          onChange={handleSeek}
          className="w-full h-1 accent-red-500 bg-red-500 rounded-lg cursor-pointer"
        />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mt-1">
          {/* Left Controls */}
          <div className="flex items-center gap-2">
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="text-white hover:text-red-500 focus:outline-none"
              tabIndex={0}
            >
              {playing ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" fill="white" /></svg>
              )}
            </button>
            {/* Time */}
            <span className="text-xs text-white font-mono min-w-[60px]">{formatTime(currentTime)} / {formatTime(duration)}</span>
            {/* Volume */}
            <button onClick={handleMute} className="text-white hover:text-red-500 focus:outline-none">
              {muted || volume === 0 ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 9v6h4l5 5V4l-5 5H9z" /><line x1="19" y1="5" x2="5" y2="19" stroke="red" strokeWidth="2" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 9v6h4l5 5V4l-5 5H9z" /></svg>
              )}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={muted ? 0 : volume}
              onChange={handleVolume}
              className="w-20 h-1 accent-red-500 bg-red-500 rounded-lg cursor-pointer"
            />
          </div>
          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Playback Speed */}
            <select
              value={playbackRate}
              onChange={handlePlaybackRate}
              className="bg-[#2d1818] text-white rounded px-2 py-1 border border-red-500 focus:outline-none"
            >
              {[0.25, 0.5, 1, 1.25, 1.5, 2].map((rate) => (
                <option key={rate} value={rate}>{rate}x</option>
              ))}
            </select>
            {/* Quality Selector */}
            <select
              value={selectedSource.label}
              onChange={handleSourceChange}
              className="bg-[#2d1818] text-white rounded px-2 py-1 border border-red-500 focus:outline-none"
            >
              {sources.map((src) => (
                <option key={src.label} value={src.label}>{src.label}</option>
              ))}
            </select>
            {/* Fullscreen */}
            <button onClick={handleFullscreen} className="text-white hover:text-red-500 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h7V2H2v9h2V4zm16 0v7h2V2h-9v2h7zm0 16h-7v2h9v-9h-2v7zM4 20v-7H2v9h9v-2H4z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoView = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#231010]">
      <Navbar isAuthenticated={true} isAdmin={false} />
      <main className="flex-1 flex flex-col items-center px-2 pt-20 pb-8">
        {/* Video Player */}
        <div className="w-full max-w-5xl rounded-xl overflow-hidden bg-[#2d1818] p-4 flex flex-col items-center">
          <CustomVideoPlayer sources={demoVideo.sources} poster={demoVideo.thumbnail} />
        </div>
        {/* Video Info */}
        <div className="w-full max-w-5xl flex flex-col gap-4 mt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">{demoVideo.title}</h2>
              <p className="text-gray-300 text-sm mb-1">{demoVideo.description}</p>
              <div className="flex items-center gap-4 text-gray-400 text-xs">
                <span>{demoVideo.views} views</span>
                <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg> {demoVideo.likes}</span>
                <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 15h8M8 11h8M8 7h8" /></svg> {demoVideo.comments}</span>
              </div>
            </div>
            <button className="bg-[#2d1818] border border-red-500 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-red-600 transition-colors mt-2 md:mt-0 self-start md:self-auto">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 12v.01M8 12v.01M12 12v.01M16 12v.01M20 12v.01" /></svg>
              Share
            </button>
          </div>
        </div>
        {/* Comments */}
        <div className="w-full max-w-5xl mt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Comments</h3>
          <div className="flex flex-col gap-4">
            {comments.map((c, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <img src={c.avatar} alt={c.user} className="w-9 h-9 rounded-full object-cover" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white text-sm">{c.user}</span>
                    <span className="text-xs text-gray-400">{c.time}</span>
                  </div>
                  <div className="text-gray-200 text-sm">{c.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Related Videos */}
        <div className="w-full max-w-5xl mt-10">
          <h3 className="text-lg font-semibold text-white mb-4">Related Videos</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            {relatedVideos.map((video, idx) => (
              <div key={idx} className="bg-[#2d1818] rounded-lg shadow-md flex-1 min-w-0 w-full sm:w-1/3 max-w-full mx-auto overflow-hidden">
                <img src={video.thumbnail} alt={video.title} className="w-full h-32 object-cover rounded-t-lg" />
                <div className="p-3">
                  <div className="font-medium truncate text-white" title={video.title}>{video.title}</div>
                  <div className="text-xs text-gray-400 mt-1">{video.creator}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VideoView;
