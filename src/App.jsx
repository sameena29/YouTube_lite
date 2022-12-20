import React, {useState, useCallback } from 'react';
import HomePage from './homePage';
import ResultPage from './resultPage';
import VideoPage from './videoPage';
import Api from './Api';

const App = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const searchVideo = useCallback(async (termFromSearchBar) => {
        setSearchQuery(termFromSearchBar);
        const response = await Api.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        setVideos(response.data.items || []);
    }, [setVideos]);
    
    const selectVideo = useCallback((video) => {
        setSelectedVideo(video);
    }, [setSelectedVideo]);

    if (selectedVideo) {
        return <VideoPage video={selectedVideo} videos={videos} searchQuery={searchQuery} selectVideo={selectVideo} />;
    }

    return searchQuery ? (
        <ResultPage videos={videos} searchVideo={searchVideo} selectVideo={selectVideo} searchQuery={searchQuery} />
    ) : (
        <HomePage searchVideo={searchVideo} />
    );
    
}

export default App;
