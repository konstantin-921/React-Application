import React from 'react';

function hocAddFilms(Component) {
  class HocAddFilms extends React.Component {
    constructor(props) {
      super(props);
      const { hero: { films } } = this.props;
      this.state = {
        films,
      };
    }
    render() {
      return (
        <Component {...this.props} films={this.state.films[0]} />
      );
    }
  }
  HocAddFilms.displayName = `HocAddFilms(${Component.displayName || Component.name || 'Component'})`;
  return HocAddFilms;
}

export default hocAddFilms;
