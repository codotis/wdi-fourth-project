import React, { Component } from 'react';
import Axios from 'axios';


class UsersShow extends Component {

  state = {
    user: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }, console.log('USER SHOW', res.data)))
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
        <div className="profile-owner">{this.state.user.username} - ArtHub Listings <br/> Click here to contact
        </div>
        {this.state.user.username && this.state.user.artworks.map(artwork => <div key={artwork.id} className="row">
          <div className="col-md-6">
            <img className="profile-images" src={artwork.image}/>
          </div>
          <div className="col-md-6">
            <div className="artwork-show-bkgrnd">
              <h3 className="profile-title">{artwork.title}</h3>
              <p className="profile-price">Price: {artwork.price}</p>
            </div>
            <p className="profile-desc">{artwork.description}</p>
          </div>

        </div>)}
      </div>
    );
  }

}

export default UsersShow;
