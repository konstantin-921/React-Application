import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ filter }) => ({
  filter,
});


class ActiveHero extends React.Component {
  constructor(props) {
    super(props);
    this.renderObject = this.renderObject.bind(this);
  }

  renderObject() {
    const obj = this.props.filter.nameHeroes;
    return obj.map((elem) => {
      return (
        <div style={{ color: 'darkorange' }} key={elem}>{elem}</div>
      );
    });
  }

  render() {
    const render = this.props.filter.nameHeroes ? this.renderObject() : 'Oops';
    return (
      <div>{render}</div>
    );
  }
}

export default connect(mapStateToProps)(ActiveHero);
