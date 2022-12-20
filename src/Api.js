import axios from 'axios';
const KEY = 'AIzaSyD6XRt-2SrTmiWdZ4ORWsOUGHJS9Ioju-8'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 15,
        key: KEY
    }
})
