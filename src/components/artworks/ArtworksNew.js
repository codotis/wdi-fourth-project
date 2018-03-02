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
    },
    errors: {}
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
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    return (
      <ArtworksForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        artwork={this.state.artwork}
        errors={this.state.errors}
      />
    );
  }
}

export default ArtworksNew;
