const VideoPlayer = ({ videoSrc }) => {
  return (
    <div className="w-full max-w-5xl h-[70vh]">
      {videoSrc ? (
        <video
          key={videoSrc}
          controls
          autoPlay
          className="w-full h-full rounded-lg shadow-lg object-cover"
        >
          <source src={`http://localhost:5000/videos/${videoSrc}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p className="text-gray-400 text-center text-xl">Select a video to play</p>
      )}
    </div>
  );
};

export default VideoPlayer;