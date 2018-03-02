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

  deleteArtwork = ({ id }) => {
    Axios.delete(`/api/artworks/${id}`)
      .then(() => {
        this.setState(prevState => {
          const artworks = prevState.artwork.filter(artwork => artwork.id !== id );
          return { artworks };
        });
      });
  }
  render() {
    console.log('jsx was rendered');


    return(
      <div className="container">
        {this.state.user.username && this.state.user.artworks.map(artwork => <div key={artwork.id} className="row">
          <div className="col-md-6">
            <img className="profile-images" src={artwork.image}/>
          </div>
          <div className="col-md-6">
            <h3>{artwork.title}</h3>
            <p>{artwork.description}</p>
            <p>{artwork.price}</p>
          </div>

        </div>)}
      </div>
    );
  }

}

export default UsersShow;
