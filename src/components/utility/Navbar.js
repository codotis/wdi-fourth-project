import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = () => {

  return(
    <nav>
      <Link to="/login" className="standard-button">Login</Link>
      {' '}
      <Link to="/register" className="standard-button">Register</Link>
      {' '}
      <a href="#" className="standard-button">Logout</a>
    </nav>
  );
};

export default Navbar;
