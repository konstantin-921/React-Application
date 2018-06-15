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
    const obj = Object.entries(this.props.filter.activeHero);
    return obj.map((elem) => {
      if (elem[1] === true) {
        return (
          <div style={{ color: 'darkorange' }} key={elem}>{elem[0]}</div>
        );
      }
      return null;
    });
  }

  render() {
    const render = this.props.filter.activeHero ? this.renderObject() : 'Oops';
    console.log(render);
    return (
      <div>{render}</div>
    );
  }
}

export default connect(mapStateToProps)(ActiveHero);
