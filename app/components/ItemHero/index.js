import React from 'react';
import hocAddFilms from '../HocAddFilms/index';

class ItemHero extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Open',
      isOpen: false,
    };
    this.clickHundler = this.clickHundler.bind(this);
  }
  clickHundler() {
    const { changeOpen } = this.props;
    const { hero: { name } } = this.props;
    const switcher = !this.state.isOpen;
    const value = (this.state.buttonText === 'Open') ? 'Close' : 'Open';
    this.setState({ buttonText: value, isOpen: switcher });
    changeOpen(switcher, name);
  }
  render() {
    const buttonStyle = {
      width: 60,
      height: 25,
    };
    const { films } = this.props;
    const { hero: { name, height, mass } } = this.props;
    const renderData = (this.state.isOpen === true) ? <p style={{ color: 'darkred' }}>{`Height: ${height}`} <br /> {`Mass: ${mass}`} <br /> {`Acted in the film:  ${films}`}</p> : null;
    return (
      <div>
        <h2>{name}</h2>
        <button onClick={this.clickHundler} style={buttonStyle}>{this.state.buttonText}</button>
        {renderData}
      </div>
    );
  }
}

export default hocAddFilms(ItemHero);
