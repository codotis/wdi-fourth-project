import React, { Component } from 'react';
import Axios from 'axios';


class UsersShow extends Component {

  state = {
    user: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }, console.log(res.data)))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        {this.state.user.username}
        {this.state.user.artworks}
        <p>test text</p>
        {/* print all artworks belonging to this user */}
      </div>
    );
  }

}

export default UsersShow;
