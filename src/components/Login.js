import React from "react";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="container mt-5">
        <h1 className="form-title">Login</h1>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">
                <i className="zmdi zmdi-email"></i> Email
              </label>

              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                autoComplete="off"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">
                <i className="zmdi zmdi-lock"></i> Password
              </label>
              <input
                type="Password"
                className="form-control"
                id="password"
                name="password"
                autoComplete="off"
                placeholder="Password"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Log In
          </button>
          <NavLink to="/Signup" className="ml-4">
            Create new account
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default Login;
