import React from "react";
import './VideoDetail.css';

const VideoDetail = ({ video }) => {

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  
  return (
    <>
          <div className="vlc">
              <iframe src={videoSrc} allowFullScreen title="Video player" className="tok"/>
          </div>
          <div className="info">
              <h4>{video.snippet.title}</h4>
              <p> {video.snippet.description}</p>
          </div>
    </>
  );
};

export default VideoDetail;
