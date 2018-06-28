import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import UserItem from '../../renderComponent/UserItem';
import style from './style';
import api from '../../../service/api';
import help from '../../../helpers/helperLogin';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      users: [],
    };
  }
  findUser = (value) => {
    const keyCode = {
      letter: value,
      id: localStorage['user.id'],
    };
    const url = new URL('http://localhost:3000/followers');
    url.search = new URLSearchParams(keyCode);

    api.get(url)
      .then(help.checkStatus)
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  hundlerInput = (event) => {
    this.setState({ searchValue: event.target.value });
    this.findUser(this.state.searchValue);
  }

  renderUserItem = (data) => {
    return data.map((elem) => {
      return <UserItem key={elem.id} name={elem.name} id={elem.id} />;
    });
  }
  render() {
    const userItems = this.renderUserItem(this.state.users);
    return (
      <React.Fragment>
        <DebounceInput
          debounceTimeout={300}
          style={style.input}
          placeholder="Search"
          value={this.state.searchValue}
          onChange={this.hundlerInput}
        />
        <div style={style.userBox}>{userItems}</div>
      </React.Fragment>
    );
  }
}

export default SearchInput;
