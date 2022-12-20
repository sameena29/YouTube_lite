import React from 'react';
import './VideoItem.css';

const VideoItem = ({video , selectVideo}) => {
    return (
        <div onClick={ () => selectVideo(video)} className="card">
            <div className='content'>
               <div className="pic">
                 <img  src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
               </div> 
               <div className="videoTitle">
                <h1>{video.snippet.title}</h1>
                <p> </p>
               </div>
            </div>
        </div>
    )
};
export default VideoItem;