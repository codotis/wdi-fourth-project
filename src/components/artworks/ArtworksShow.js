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

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img className="show-img" src={this.state.artwork.image}/>
            <h3 className="show-title">{this.state.artwork.title}</h3>

            <Link to={`/users/${this.state.artwork.createdBy}`}>
              <h3>{this.state.artwork.title}</h3>
            </Link>

            <h4 className="show-description">Description: {this.state.artwork.description}</h4>
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
