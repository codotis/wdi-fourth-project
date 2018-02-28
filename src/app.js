import React, { Component }    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import ArtworksIndex from './components/artworks/ArtworksIndex';

import './scss/style.scss';
import 'bootstrap-css-only';

class App extends Component {

  render() {
    return (
      <Router>
        <main>
          <Link to="/"><h1>Artwork</h1></Link>
          <Route exact path="/" component={ArtworksIndex} />
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
