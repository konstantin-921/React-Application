import React from 'react';
import FormLogin from '../openPage/FormLogin';

const App = () => {
  const storage = localStorage.getItem('token.id');
  const startPage = (storage && storage !== 'undefined') ? 'Main page' : <FormLogin />;
  return (
    <div>
      {startPage}
    </div>
  );
};

export default App;
