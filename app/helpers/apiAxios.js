import axios from 'axios';
// import history from 'history';

// const token = localStorage.getItem('token.id');
function ApiAxios() {
  // axios.defaults.headers.common.Authorization = `bearer ${localStorage.getItem('token.id')}`;
  this.get = (url) => {
    return axios.get(url);
  };

  this.post = (url) => {
    return axios.post(url);
  };

  this.put = (url) => {
    return axios.put(url);
  };

  this.delete = (url) => {
    return axios.delete(url);
  };
}

// if (!token && history.location !== '/') {
//   history.push('/');
// }

const apiAxios = new ApiAxios();
export default apiAxios;
