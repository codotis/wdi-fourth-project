import React, { Component } from 'react';
import Axios from 'axios';


class UsersShow extends Component {

  state = {
    user: ''
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.userId}`)
      .then(res => this.setState({ user: res.data }, console.log(res.data)))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        {this.state.user.username}
        <p>text</p>
      </div>
    );
  }

}

export default UsersShow;
