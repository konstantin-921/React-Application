import axios from 'axios';

function Api() {
  axios.defaults.headers.common.Authorization = `bearer ${localStorage.getItem('token.id')}`;
  this.get = (url) => {
    return axios.get(url);
  };

  this.post = (url, data) => {
    return axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      url,
      data: JSON.stringify(data),
    });
  };

  this.put = (url) => {
    return axios.put(url);
  };

  this.delete = (url) => {
    return axios.delete(url);
  };
}

const api = new Api();
export default api;
