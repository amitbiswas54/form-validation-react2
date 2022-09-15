import React from "react";
import { useState, useEffect } from "react";

const Details = () => {
  const [user, setUser] = useState({
    name: "",
    address: "",
    email: "",
    mobile: "",
    password: "",
    conpassword: "",
  });

  const { username, address, email, mobile, password, conpassword } = user;
  console.log(password, conpassword);

  const [errormes, setErrormes] = useState({});
  const [issubmit, setSubmit] = useState(false);

  const fieldvalue = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setErrormes(formvalidation(user));
    setSubmit(true);
  };

  const formvalidation = (value) => {
    const errors = {};

    const namepattern = /^[a-zA-Z ]{2,30}$/;
    const mobilepattern = /^\d{10}$/;
    const emailpattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const passwordpattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!value.username) {
      errors.username = "plz enter your name";
    } else if (!namepattern.test(value.username)) {
      errors.username = "Enter valid name";
    }

    if (!value.address) {
      errors.address = "plz enter your Address";
    }

    if (!value.mobile) {
      errors.mobile = "plz enter your Mobile no";
    } else if (!mobilepattern.test(value.mobile)) {
      errors.mobile = " plz enter valid mobile no ";
    }

    if (!value.email) {
      errors.email = "plz enter your email";
    } else if (!emailpattern.test(value.email)) {
      errors.email = " plz enter valid email id";
    }

    if (!value.password) {
      errors.password = "plz enter password";
    } else if (!passwordpattern.test(value.password)) {
      errors.password =
        "Minimum eight characters, at least one letter and one number";
    }

    if (!value.conpassword) {
      errors.conpassword = "enter confirm password";
    } else if (conpassword === password) {
      errors.conpassword = "";
    } else if (password != conpassword) {
      errors.conpassword = "Password doesn't match";
    }

    return errors;
  };

  return (
    <>
      <div className="container">
        <h3>Form</h3>

        <form onSubmit={formSubmit}>
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">
                Name
              </label>

              <input
                type="text"
                className="form-control"
                defaultValue={username}
                onChange={fieldvalue}
                name="username"
              />
              <div className="text-danger">{errormes.username}</div>
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={address}
                onChange={fieldvalue}
                name="address"
              />
              <div className="text-danger">{errormes.address}</div>
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">
                Email Id
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={email}
                onChange={fieldvalue}
                name="email"
              />
              <div className="text-danger">{errormes.email}</div>
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">
                Mobile
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={mobile}
                onChange={fieldvalue}
                name="mobile"
              />
              <div className="text-danger">{errormes.mobile}</div>
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={password}
                onChange={fieldvalue}
                name="password"
              />
              <div className="text-danger">{errormes.password}</div>
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">
                Confirm Password
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={conpassword}
                onChange={fieldvalue}
                name="conpassword"
              />
              <div className="text-danger">{errormes.conpassword}</div>
            </div>

            <div className="col-sm-6">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Details;
