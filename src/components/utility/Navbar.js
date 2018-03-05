import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';


const Navbar = ({ history }) => {

  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return(
    <nav className="navbar navbar-light bg-light">
      {!Auth.isAuthenticated() && <Link to="/login" className="navbar-brand">Login</Link>}

      {!Auth.isAuthenticated() && <Link to="/register" className="navbar-brand">Register</Link>}

      {Auth.isAuthenticated() &&  <Link to="/new" className="navbar-brand">New Artwork</Link>}

      {Auth.isAuthenticated() && <a href="#" className="navbar-brand" onClick={logout}>Logout</a>}


      <form className="form-inline my-2 my-lg-0 search-bar">
        <button className="btn btn-outline-success navbar-right my-2 my-sm-0" type="submit">Search</button>
        <input className="form-control navbar-right mr-sm-2" type="search" placeholder="Search artwork" aria-label="Search"/>
      </form>

    </nav>
  );
};

export default withRouter(Navbar);
