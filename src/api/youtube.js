

import axios from 'axios';

let KEY = 'AIzaSyAgshKBaqWgV4HiFQ4-GEPvzSmtter2Q64';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
