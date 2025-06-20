const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <video src={video.url} controls width="320" />
      <h3>{video.title}</h3>
      {/* TODO: Add more video details */}
    </div>
  );
};

export default VideoCard; 