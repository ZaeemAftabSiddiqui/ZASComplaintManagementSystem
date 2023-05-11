import React from "react";
import "../App.css";
const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="my-5 flex col-lg-10 offset-lg-1 d-flex justify-content-between">
            {/* phone */}
            <div>
              <div className="">phone</div>
              <div>+92 3082375205</div>
            </div>
            {/* email */}
            <div>
              <div className="">email</div>
              <div>xyz@gmail.com</div>
            </div>
            {/* address */}
            <div>
              <div className="">Address</div>
              <div>R-4 xyz city.world</div>
            </div>
          </div>
        </div>
      </div>
      {/* contact us form  */}
      <div className="container">
        <h2>Get in Touch</h2>
        <form>
          <div className="form-row">
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                required={true}
                placeholder="Your name"
              />
            </div>
            <div className="col">
              <input
                type="email"
                className="form-control"
                required={true}
                placeholder="Your email"
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                required={true}
                placeholder="Your phone number"
              />
            </div>
          </div>
          <div className="form-group mt-4">
            <textarea
              className="form-control"
              placeholder="Message"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
