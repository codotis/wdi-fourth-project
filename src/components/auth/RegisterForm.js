import React from 'react';

const RegisterForm = ({ handleChange, handleSubmit, user }) => {
  return (
    <form onSubmit={handleSubmit} className="form-center">
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input className="form-control"
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={user.username}
        />
      </div>
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
      <div className="form-group">
        <label htmlFor="password">Re-enter password:</label>
        <input className="form-control"
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={user.passwordConfirmation}
        />
      </div>

      <button className="btn btn-primary center-block">Register</button>
    </form>
  );
};

export default RegisterForm;
