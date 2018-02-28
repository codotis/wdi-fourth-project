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
          {this.state.artworks.map(artwork => <div key={artwork.id} className="col-sm-4">
            <div className="card">
              <img src={artwork.image}/>
              <Link to={`/artworks/${artwork.id}`}>
                <h3 className="card">{artwork.title}</h3>
              </Link>
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
