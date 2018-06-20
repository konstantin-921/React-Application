class Help {
  checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  parseJSON = (response) => {
    return response.json();
  }

  saveToken = (response) => {
    localStorage['token.id'] = response.token;
    localStorage['user.id'] = response.userId;
    return response;
  }
}

const help = new Help();
export default help;
