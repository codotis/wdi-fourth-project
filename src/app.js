import React, { Component }    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import ArtworksIndex from './components/artworks/ArtworksIndex';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from './components/utility/Navbar';

import './scss/style.scss';
import 'bootstrap-css-only';

class App extends Component {

  render() {
    return (
      <Router>
        <main>
          <Navbar/>
          <Link to="/" className="title"><h1>ArtHub</h1></Link>
          <Route exact path="/" component={ArtworksIndex} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);