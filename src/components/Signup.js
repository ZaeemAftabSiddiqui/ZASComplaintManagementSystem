import React from "react";

const Signup = () => {
  return (
    <>
      <div className="container mt-5">
        <h1 className="form-title">Sign up</h1>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">
                <i class="zmdi zmdi-account"></i> Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                autoComplete="off"
                placeholder="Name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputPassword4"
                autoComplete="off"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                autoComplete="off"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                autoComplete="off"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Password</label>
              <input
                type="Password"
                className="form-control"
                id="inputEmail4"
                autoComplete="off"
                placeholder="Password"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                autoComplete="off"
                placeholder="Password"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
