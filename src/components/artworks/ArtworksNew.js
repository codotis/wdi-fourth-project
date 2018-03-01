import React from 'react';
import ArtworksForm from './ArtworksForm';
import Axios from 'axios';
import Auth from '../../lib/Auth';


class ArtworksNew extends React.Component {

  state = {
    artwork: {
      title: '',
      image: '',
      price: '',
      description: ''
    }
  }

  handleChange = (e) => {
    const artwork = Object.assign({}, this.state.artwork, {[e.target.name]: e.target.value});
    this.setState({ artwork });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('/api/artworks', this.state.artwork, {
      headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
    })
      .then(() => this.props.history.push('/'))
      //push created artwork into logged in users 'artwork' array?
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <ArtworksForm
        artwork={this.state.artwork}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default ArtworksNew;
