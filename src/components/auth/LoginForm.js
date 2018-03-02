import React from 'react';

const LoginForm = ({ handleChange, handleSubmit, user }) => {
  return (
    <form onSubmit={handleSubmit} className="form-center">
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input className="form-control"
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input className="form-control"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
        />
      </div>
      <button className="btn btn-primary center-block">Login</button>
    </form>
  );
};

export default LoginForm;
