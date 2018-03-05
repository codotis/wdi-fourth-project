import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';


class ArtworksIndex extends Component {

  state = {
    artworks: []
  };

  componentDidMount() {
    Axios
      .get('/api/artworks')
      .then(res => this.setState({artworks: res.data}, () => console.log(res.data)))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.artworks.map(artwork => <div key={artwork.id} className="col-sm-12 col-md-4">
            <div className="card">
              <Link to={`/artworks/${artwork.id}`}>
                <img className="index-img" src={artwork.image}/>
              </Link>

              <h3 className="index-title">{artwork.title}</h3>
              <Link to={`/users/${artwork.createdBy.id}`}>by: {artwork.createdBy.username}</Link>
            </div>
            <div>
            </div>
          </div>)}
        </div>
      </div>
    );
  }
}

export default ArtworksIndex;
