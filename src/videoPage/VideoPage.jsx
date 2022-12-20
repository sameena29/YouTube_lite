import React from 'react';
import SearchBar from '../components/searchBar'; 
import VideoDetail from '../components/VideoDetail';
import VideoList from '../components/VideoList';
import './VideoPage.css';

const VideoPage = (props) => {

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }} className="video">
			<SearchBar searchQuery={props.searchQuery} />
			<div style={{ display: 'flex' }}>
			 <div className="player">
				<VideoDetail video={props.video} />
			 </div>	
			 <div className="list">
				<VideoList videos={props.videos} selectVideo={props.selectVideo} />
			 </div>	
			</div>
		</div>
	);
}

export default VideoPage;