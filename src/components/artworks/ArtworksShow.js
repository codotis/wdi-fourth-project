import React, { Component } from 'react';
import Axios from 'axios';

class ArtworksShow extends Component {
  state = {
    artwork: []
  };

  componentDidMount() {
    Axios
      .get(`/api/artworks/${this.props.match.params.id}`)
      .then(res => this.setState({ artwork: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={this.state.artwork.image}/>
            <h3>{this.state.artwork.title}</h3>
            <h4>Description: {this.state.artwork.description}</h4>
          </div>
          <div className="col-md-3">
            <img src={this.state.artwork.image}/>
            <img src={this.state.artwork.image}/>
          </div>
          <div className="col-md-3">
            <img src={this.state.artwork.image}/>
            <img src={this.state.artwork.image}/>
          </div>
        </div>
      </div>
    );
  }
}
export default ArtworksShow;
