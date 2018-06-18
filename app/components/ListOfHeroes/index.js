import { connect } from 'react-redux';
import React from 'react';
// import PropTypes from 'prop-types';
import { addActiveHero, deleteActiveHero } from '../../redux/action/index';
import ItemHero from '../ItemHero/index';
import Loader from '../Loader/index';

const mapStateToProps = ({ filter }) => ({
  filter,
});

const mapDispatchToProps = dispatch => ({
  addActiveHero: data => dispatch(addActiveHero(data)),
  deleteActiveHero: data => dispatch(deleteActiveHero(data)),
});

class ListOfHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChangeOpen = this.handleChangeOpen.bind(this);
    this.showAllState = this.showAllState.bind(this);
  }

  handleChangeOpen(flag, name) {
    if (flag) {
      this.props.addActiveHero(name);
    } else if (!flag) {
      this.props.deleteActiveHero(name);
    }
  }

  showAllState() {
    console.log(this.props.filter.activeHero);
  }

  renderHeroes() {
    const { filter: { heroes } } = this.props;
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
        <div>{render}</div>
      </div>
    );
  }
}

// ListOfHeroes.propTypes = {
//   loading: PropTypes.bool.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(ListOfHeroes);
