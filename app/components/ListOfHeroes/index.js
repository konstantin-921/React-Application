import React from 'react';
import axios from 'axios';
import ItemHero from './ItemHero/index';
import Loader from '../Loader/index';

class ListOfHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      loading: true,
    };
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/people/')
      .then((response) => {
        this.setState({
          heroes: response.data.results,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderHeroes() {
    return this.state.heroes.map((hero) => {
      return <ItemHero key={hero.name} hero={hero} />;
    });
  }

  render() {
    const heroes = this.renderHeroes();
    const render = (this.state.loading === false) ? heroes : <Loader text="Loading data..." />;
    return (
      <div>{render}</div>
    );
  }
}

export default ListOfHeroes;
