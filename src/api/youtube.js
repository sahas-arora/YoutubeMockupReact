

import axios from 'axios';

let KEY = 'AIzaSyAbrLEPZQwcTZWn1VIinbdq_jujiXvK838';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
