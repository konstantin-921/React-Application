import axios from 'axios';

function Api() {
  this.get = (url) => {
    return axios({
      method: 'get',
      url,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${localStorage.getItem('token.id') || null}`,
      },
    });
  };

  this.post = (url, data) => {
    return axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${localStorage.getItem('token.id') || null}`,
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
