import axios from 'axios';

const API_Version = '/api/v1';

const fetchGetData = (uri) => {
  const url = `${API_Version}${uri}`;
  return axios.get(url).catch((err) => {
    console.error('Error fetching data:', url, 'Error:', err.message);
    throw err;
  });
};

const fetchPostData = (uri, payload) => {
  const url = `${API_Version}${uri}`;
  return axios.post(url, payload).catch((err) => {
    console.error('Error posting data:', url, 'Error:', err.message);
    throw err;
  });
};

const fetchGetDataWithAuth = async (uri) => {
  const token = localStorage.getItem('token');
  const url = `${API_Version}${uri}`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data; // Return only the data part if that's what you need
  } catch (error) {
    console.error('Error fetching data:', url, 'Error:', error.message);
    throw error; // Re-throw the error to ensure caller knows an error occurred
  }
};

const fetchGetDataWithAuthArrayBuffer = async (uri) => {
  const token = localStorage.getItem('token');
  const url = `${API_Version}/albums${uri}`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      responseType: 'arraybuffer'
    });
    return response.data; // Return only the data part if that's what you need
  } catch (error) {
    console.error('Error fetching data:', url, 'Error:', error.message);
    throw error; // Re-throw the error to ensure caller knows an error occurred
  }
};
const fetchPostDataWithAuth = (uri, payload) => {
  const token = localStorage.getItem('token');
  const url = `${API_Version}${uri}`;
  return axios
    .post(url, payload, {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    .catch((err) => {
      console.error('Error posting data:', url, 'Error:', err.message);
      throw err;
    });
};

export default fetchGetData;
export { fetchPostData, fetchPostDataWithAuth, fetchGetDataWithAuth, fetchGetDataWithAuthArrayBuffer };
