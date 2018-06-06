import React from 'react';
import PropTypes from 'prop-types';
import ItemHero from '../ItemHero/index';
import Loader from '../Loader/index';

class ListOfHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: false,
    };
    this.handleChangeOpen = this.handleChangeOpen.bind(this);
  }
  handleChangeOpen(isOpen, name) {
    console.log(isOpen, name);
    this.setState({ test: true });
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
    console.log('test', this.state.test);
    return (
      <div>
        <button>Show state</button>
        <div>{render}</div>
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
