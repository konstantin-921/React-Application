import React from 'react';


class ItemHero extends React.Component {
  render() {
    const { hero: { name, height, mass } } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <p>{height} { mass }</p>
      </div>
    );
  }
}

export default ItemHero;
