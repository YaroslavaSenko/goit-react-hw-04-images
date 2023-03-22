import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const key = '32699064-9164bb06c4e310b1f8df12c8f';
axios.defaults.params = {
  orientation: 'horizontal',
  image_type: 'photo',
  safesearch: 'true',
  per_page: 12,
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(`?key=${key}&q=${query}&page=${page}`);
  //   console.log('data =', data.hits);
  return data;
};