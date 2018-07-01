import React from 'react';
import { Redirect } from 'react-router-dom';

const App = () => {
  const storage = localStorage.getItem('token.id');
  const startPage = (storage && storage !== 'undefined') ? <Redirect to="/mainpage" /> : <Redirect to="/login" />;
  return (
    <div>
      {startPage}
    </div>
  );
};

export default App;
