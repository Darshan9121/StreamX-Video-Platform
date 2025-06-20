const VideoUploadForm = () => {
  return (
    <form>
      <h2>Upload Video</h2>
      {/* TODO: Add upload logic */}
      <input type="file" accept="video/*" />
      <button type="submit">Upload</button>
    </form>
  );
};

export default VideoUploadForm; 