import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:8080/api/v1';

const fetchGetData = (uri) => {
  const url = `${BASE_URL}${uri}`;
  return axios.get(url).catch((err) => {
    console.error('Error fetching data:', url, 'Error:', err.message);
    throw err;
  });
};

const fetchPostData = (uri, payload) => {
  const url = `${BASE_URL}${uri}`;
  return axios.post(url, payload).catch((err) => {
    console.error('Error posting data:', url, 'Error:', err.message);
    throw err;
  });
};

export default fetchGetData;

export { fetchPostData };
