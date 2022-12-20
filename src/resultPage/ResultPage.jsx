import React, { useState, useCallback } from 'react';
import VideoList from '../components/VideoList';
import SearchBar from '../components/searchBar';
import logo from '../logo.png';
import './ResultPage.css';


const ResultPage = (props) => {
	if (!props.videos.length) return 'Loading ...';

	return (
		<div className="result">
			<SearchBar className="SearchBar" searchQuery={props.searchQuery} handleSearch={props.searchVideo} />
			<VideoList className="VideoList" videos={props.videos} selectVideo={props.selectVideo} />
		</div>
	);
}

export default ResultPage;
