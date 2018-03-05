import React, { Component } from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';

class ArtworksShow extends Component {
  state = {
    artwork: []
  };

  componentDidMount() {
    console.log(Auth.getPayload());
    Axios
      .get(`/api/artworks/${this.props.match.params.id}`)
      .then(res => this.setState({ artwork: res.data}, console.log(res.data)))
      .catch(err => console.log(err));
  }

  deleteArtwork = ({ id }) => {
    Axios.delete(`/api/artworks/${id}`)
      .then(() => {
        this.setState(prevState => {
          const artworks = prevState.artworks.filter(artwork => artwork.id !== id );
          return { artworks };
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img className="show-img" src={this.state.artwork.image}/>
            <h3 className="show-title">{this.state.artwork.title} by <Link to={`/users/${this.state.artwork.createdBy}`}>Artist Profile</Link>
            </h3>
            <button className="delete" onClick={() => this.deleteArtwork(this.state.artwork)}>x</button>



            {/* <h4 className="show-description">Description: {this.state.artwork.description}</h4> */}
          </div>
          <div className="col-md-3">
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </div>
    );
  }
}
export default ArtworksShow;
