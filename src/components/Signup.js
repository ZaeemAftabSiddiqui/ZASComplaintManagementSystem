import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="form-title">Sign up</h1>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">
                <i className="zmdi zmdi-account"></i> Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                value={user.name}
                onChange={handleInputs}
                autoComplete="off"
                placeholder="Name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">
                <i className="zmdi zmdi-email"></i> Email
              </label>

              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={user.email}
                onChange={handleInputs}
                autoComplete="off"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="phone">
                <i className="zmdi zmdi-phone-in-talk"></i> Mobile number
              </label>
              <input
                type="number"
                className="form-control"
                id="inputEmail4"
                name="phone"
                value={user.phone}
                onChange={handleInputs}
                autoComplete="off"
                placeholder="phone"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">
                <i className="zmdi zmdi-slideshow"></i> Your profession
              </label>
              <input
                type="text"
                className="form-control"
                id="work"
                name="work"
                value={user.work}
                onChange={handleInputs}
                autoComplete="off"
                placeholder="work"
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
                value={user.password}
                onChange={handleInputs}
                autoComplete="off"
                placeholder="Password"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="cpassword">
                <i className="zmdi zmdi-lock"></i> Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="cpassword"
                name="cpassword"
                value={user.cpassword}
                onChange={handleInputs}
                autoComplete="off"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
          <NavLink to="/login" className="ml-4">
            I am already Sign up
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default Signup;
