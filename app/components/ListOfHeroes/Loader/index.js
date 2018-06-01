import React from 'react';

const Loader = () => {
  const text = 'Загружаю данные...';
  const loader = (
    <div className="loader component" style={{ height: 100, background: 'ligthgreen' }} key="loader">{text}</div>
  );
  return (
    <div className="list">{loader}</div>
  );
};

export default Loader;
