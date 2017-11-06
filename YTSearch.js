import axios from 'axios';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});

export const YTSearch = async ({ key, term }) => {
  if (!key) {
    throw new Error('Youtube Search expected key, received undefined');
  }

  const params = {
    part: 'snippet',
    key,
    q: term,
    type: 'video',
    maxResults: 50,
  };

  return await youtube.get('/search', { params })
    .then(response => response.data.items)
    .catch(error => console.error(error));
};
