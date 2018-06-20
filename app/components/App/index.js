import React from 'react';
import FormLogin from '../FormLogin';
import img from '../../assets/images/react_logo_512x512.png';
import MyInput from '../oldApp/MyInput';
import ContainerHeroes from '../oldApp/ContainerHeroes/index';

const App = () => {
  return (
    <div>
      <FormLogin />
      <h2 id="heading">Hello ReactJS</h2>
      <img
        className="image"
        style={{ margin: '0.5em' }}
        height="40"
        width="40"
        src={img}
        alt="React Logo"
      />
      <MyInput />
      <ContainerHeroes color="green" />
    </div>
  );
};

export default App;
