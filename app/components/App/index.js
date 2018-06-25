import React from 'react';
import { Redirect } from 'react-router-dom';
import FormLogin from '../openPage/FormLogin';

const App = () => {
  const storage = localStorage.getItem('token.id');
  const startPage = (storage && storage !== 'undefined') ? <Redirect to="/mainpage" /> : <FormLogin />;
  return (
    <div>
      {startPage}
    </div>
  );
};

export default App;
