import React from 'react';
import axios from 'axios';

function hocAddFilms(Component) {
  class HocAddFilms extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        films: '',
      };
    }
    componentDidMount() {
      const { hero: { films } } = this.props;
      axios.get(films[0])
        .then((response) => {
          this.setState({
            films: response.data.title,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    render() {
      return (
        <Component {...this.props} films={this.state.films} />
      );
    }
  }
  HocAddFilms.displayName = `HocAddFilms(${Component.displayName || Component.name || 'Component'})`;
  return HocAddFilms;
}

export default hocAddFilms;
