import React, { Component } from "react";

import AuthService from "../services/auth.service";
import { Redirect, Link } from "react-router-dom";
import resetPasswordService from "../services/resetPassword.service";

export default class Forgotpasswordemail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      loading: false,
      message: "",
      redirect: false,
    };
  }

  handleSendMail = (e) => {
    e.preventDefault();
    this.setState({
      message: "",
      loading: true,
    });

    let formData = new FormData();

    let email = this.state.email;

    formData.append("email", email);
    resetPasswordService.sendmail(formData).then(
      (response) => {
        console.log(response.message);
        this.setState({
          successful: true,
          loading: false,
          message: response.message,
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
          loading: false,
          message: resMessage,
          successful: false,
        });
      }
    );
  };

  render() {
    return (
      <div className="hold-transition login-page">
        <div className="login-box">
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">
                You forgot your password? Here you can easily retrieve a new
                password.
              </p>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={this.handleSendMail}
                  >
                    Request new password
                  </button>
                </div>
                {/* /.col */}
              </div>

              <p className="mb-0">
                <Link to="register">Register a new membership</Link>
              </p>
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
                </div>
              )}
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
        {/* /.login-box */}
      </div>
    );
  }
}
