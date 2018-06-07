import React from 'react';
import PropTypes from 'prop-types';
import ItemHero from '../ItemHero/index';
import Loader from '../Loader/index';

class ListOfHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayHeroes: [],
      renderState: '',
    };
    this.handleChangeOpen = this.handleChangeOpen.bind(this);
    this.showAllState = this.showAllState.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    const { heroes } = nextProps;
    const array = heroes.slice();
    for (let i = 0; i < array.length; i += 1) {
      array[i].isOpen = false;
    }
    this.setState({ arrayHeroes: array });
  }

  handleChangeOpen(flag, name) {
    for (let i = 0; i < this.state.arrayHeroes.length; i += 1) {
      if (this.state.arrayHeroes[i].name === name) {
        this.state.arrayHeroes[i].isOpen = flag;
      }
    }
  }

  showAllState() {
    const array = this.state.arrayHeroes.map((element) => {
      return (
        <div key={element.name} style={{ color: 'darkgreen' }}>
          {element.name}
          <span style={{ marginLeft: 10, color: 'red' }}>
            {`${element.isOpen}`}
          </span>
        </div>);
    });
    this.setState({ renderState: array });
  }

  renderHeroes() {
    const { heroes } = this.props;
    return heroes.map((hero) => {
      return (
        <ItemHero
          changeOpen={this.handleChangeOpen}
          key={hero.name}
          hero={hero}
        />
      );
    });
  }

  render() {
    const heroes = this.renderHeroes();
    const { loading } = this.props;
    const render = (loading === false) ? heroes : <Loader text="Loading data..." />;
    return (
      <div>
        <button onClick={this.showAllState}>Show state</button>
        <div>{this.state.renderState}{render}</div>
      </div>
    );
  }
}

ListOfHeroes.defaultProps = {
  loading: false,
  heroes: [],
};

ListOfHeroes.propTypes = {
  loading: PropTypes.bool,
  heroes: PropTypes.arrayOf(PropTypes.object),
};

export default ListOfHeroes;
