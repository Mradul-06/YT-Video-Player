import axios from 'axios';

const KEY ="AIzaSyATBwZRo031EYDvG4QonHVOLN1nmzyS08E";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3/",
    params:{
        part:'snippet',
        maxResults:5,
        type:'video',
        key:KEY,
    }

});
