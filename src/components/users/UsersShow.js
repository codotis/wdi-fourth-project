import React, { Component } from 'react';
import Axios from 'axios';


class UsersShow extends Component {

  state = {
    user: ''
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }, console.log(res.data)))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <section>
        {this.state.user.username}
        {/* {this.state.user.artworks.map(artwork => <div key={artwork.id} className="col-sm-4">
          <img src={artwork.image}/>
          <h3>{artwork.title}</h3>
          <p>{artwork.username}</p>
          <div>
          </div>
        </div>)} */}

        <p>test text</p>
      </section>
    );
  }

}

export default UsersShow;
