import React from 'react';

const Loader = ({
  loading,
  heroes,
}) => {
  const text = 'Загружаю данные...';
  const loader = (
    <div className="loader component" style={{ height: 100, background: 'ligthgreen' }} key="loader">{text}</div>
  );
  return (
    <div className="list">{loading ? loader : heroes}</div>
  );
};

export default Loader;
