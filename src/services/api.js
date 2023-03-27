import PropTypes from 'prop-types';
import axios from 'axios';

export default function fetchImagesWithQuery(searchQuery, page) {
  const response = axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=32699064-9164bb06c4e310b1f8df12c8f&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}

fetchImagesWithQuery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
