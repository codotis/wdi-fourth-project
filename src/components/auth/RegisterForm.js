import React from 'react';

const RegisterForm = ({ handleChange, handleSubmit, user, errors }) => {

  const formInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <form onSubmit={handleSubmit} noValidate className="form-center">
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input className="form-control"
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={user.username}
        />
        {errors.username && <small>{errors.username}</small>}
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
        {errors.email && <small>{errors.email}</small>}
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
        {errors.password && <small>{errors.password}</small>}
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
        {errors.passwordConfirmation && <small>{errors.passwordConfirmation}</small>}
      </div>

      <button disabled={formInvalid} className="btn btn-primary center-block">Register</button>
    </form>
  );
};

export default RegisterForm;
