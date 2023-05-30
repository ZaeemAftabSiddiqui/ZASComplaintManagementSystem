import React from "react";

const About = () => {
  return (
    <>
      <div className="container ">
        <form action="">
          <div className="row">
            <div className="col-md-4">wow</div>
            <div className="col-md-6">
              <div>
                <h5>zaeem khapa</h5>
                <h6>web developer</h6>
                <p>Rankings= 1/10</p>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">Edit Profile</div>
          </div>
          <div className="row">
            {/* left side url    */}
            <div className="col-md-4">
              <div>
                <p>Work Links</p>
                <a href=" https://www.facebook.com " target="_blank">
                  facebook
                </a>
                <br />
                <a href=" https://www.youtube.com/ " target="_blank">
                  Youtube
                </a>
                <br />
                <a href=" https://twitter.com/ " target="_blank">
                  twitter
                </a>
                <br />
                <a href=" https://pk.linkedin.com/ " target="_blank">
                  linkedin
                </a>
                <br />
                <a href=" https://pk.indeed.com/ " target="_blank">
                  indeed
                </a>
                <br />
              </div>
            </div>

            {/* right side data toggle  */}
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="active tab-pane fade show"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <label> User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>235345345</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label> Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>zaeem</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label> Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>zaeem@gmail.com</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label> Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>03212222330</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label> Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>web developer</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <label> Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label> Hourly rate</label>
                    </div>
                    <div className="col-md-6">
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label> Total Projects</label>
                    </div>
                    <div className="col-md-6">
                      <p>10+</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label> English level</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label> availability</label>
                    </div>
                    <div className="col-md-6">
                      <p>web 6 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
