import React, { Component }    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import ArtworksIndex from './components/artworks/ArtworksIndex';
import ArtworksShow from './components/artworks/ArtworksShow';
import ArtworksNew  from './components/artworks/ArtworksNew';

import UsersShow from './components/users/UsersShow';

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
          <hr className="hr-style"/>
          <Link to="/"><h1 className="title animated tada">ArtHub</h1></Link>
          <hr className="hr-style"/>
          <Route exact path="/" component={ArtworksIndex} />
          <Route path="/artworks/:id" component={ArtworksShow} />
          <Route path="/new" component={ArtworksNew} />

          <Route path="/users/:id" component={UsersShow} />

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
