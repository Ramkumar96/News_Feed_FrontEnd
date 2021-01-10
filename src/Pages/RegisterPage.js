import React, { Component } from "react";
import { Link } from "react-router-dom";

import AuthService from "../services/auth.service";

export default class Registerpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      gender: null,
      birthOfDate: null,
      district: "",
      userName: "",
      email: "",
      password: "",
      academicYear: null,
      facultyId: null,
      departmentId: null,
      acceptedByAdmin: false,
      rejectedByAdmin: false,
      resetPasswordToken: null,
      userRole: ["student"],
      DistrictList: [
        "Kilinochchi",
        "Polonnaruwa",
        "Hambantota",
        "Trincomalee",
        "Nuwara Eliya",
        "Ampara",
        "Monaragala",
        "Puttalam",
        "Kegalle",
        "Anuradhapura",
        "Ratnapura",
        "Batticaloa",
        "Matale",
        "Jaffna",
        "Matara",
        "Badulla",
        "Galle",
        "Colombo",
        "Kurunegala",
        "Kandy",
        "Kalutara",
        "Gampaha",
        "Mannar",
        "Vavuniya",
        "Mullaitivu",
      ],

      successful: false,
      message: "",
      // availableCourses: [],
      // availableDepartments: [],
      user: "",
    };
  }

  onChangefirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  onChangelastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  onChangeDistrict = (e) => {
    this.setState({
      district: e.target.value,
    });
  };

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onChangeUserName = (e) => {
    this.setState({
      userName : e.target.value,
    });
  };
  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleRegister = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

      console.log(
        this.state.firstName,
        this.state.lastName,
        this.state.gender,
        this.state.birthOfDate,
        this.state.district,
        this.state.address,
        this.state.userName,
        this.state.email,
        this.state.password,
        this.state.academicYear,
        this.state.facultyId,
        this.state.departmentId,
        this.state.acceptedByAdmin,
        this.state.rejectedByAdmin,
        this.state.resetPasswordToken,
        this.state.userRole
        );

      AuthService.register(
        this.state.firstName,
        this.state.lastName,
        this.state.gender,
        this.state.birthOfDate,
        this.state.district,
        this.state.userName,
        this.state.email,
        this.state.password,
        this.state.academicYear,
        this.state.facultyId,
        this.state.departmentId,
        this.state.acceptedByAdmin,
        this.state.rejectedByAdmin,
        this.state.resetPasswordToken,
        this.state.userRole
      ).then(
        (response) => {
          this.setState({
            message: response.data.message,
            successful: true,
          });
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage,
          });
        }
      );
  };


  render() {
    return (
      <div className="register-page">
        <div className="register-box">
          <div className="register-logo">
            <b>Register</b>
          </div>
          <div className="card">
            <div className="card-body register-card-body">
              <p className="login-box-msg">Register a new membership</p>
              {!this.state.successful && (
                <div>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        name="firstname"
                        value={this.state.firstName}
                        onChange={this.onChangefirstName}
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-user" />
                        </div>
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        name="lastname"
                        value={this.state.lastName}
                        onChange={this.onChangelastName}
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-user" />
                        </div>
                      </div>
                    </div>

                    <div className="input-group mb-3">
                      <select class="custom-select"
                      value={this.state.district}
                      onChange={this.onChangeDistrict}>
                        <option district="">Select District</option>
                        {this.state.DistrictList &&
                          this.state.DistrictList.map((district, key) => (
                            <option key={key} value={district}>
                              {district}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="input-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-envelope" />
                        </div>
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="User name"
                        name="username"
                        value={this.state.userName}
                        onChange={this.onChangeUserName}
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-user" />
                        </div>
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-lock" />
                        </div>
                      </div>
                    </div>
                    {/* <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Retype password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div> */}
                    <div className="row">
                      <div className="col-8">
                        {/* <div className="icheck-primary">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="terms"
                        defaultValue="agree"
                      />
                      <label htmlFor="agreeTerms">
                        I agree to the <a href="#">terms</a>
                      </label>
                    </div> */}
                      </div>
                      {/* /.col */}
                      <div className="col-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          onClick={this.handleRegister}
                        >
                          Register
                        </button>
                      </div>
                      {/* /.col */}
                    </div>
                    <Link to="/login"  className="text-center">
                    I already have a membership
                </Link>
                </div>
              )}
              {this.state.message && (
                <div className="form-group">
                  <div
                    className={
                      this.state.successful
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {this.state.message}
                  </div>
                  <div>
                    <Link  to="/login">
                    Login to your Account
                    </Link>
                  </div>
                </div>
                
              )}
            </div>
            {/* /.form-box */}
          </div>
          {/* /.card */}
        </div>
        {/* /.register-box */}
      </div>
    );
  }
}
