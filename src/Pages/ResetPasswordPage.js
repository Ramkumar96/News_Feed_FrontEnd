import React, { Component } from "react";

import AuthService from "../services/auth.service";
import resetPasswordService from "../services/resetPassword.service";

import { Link } from "react-router-dom";

export default class Resetpasswordpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      passwordMatch: true,
      successful: false,
      message: "",
      userReady: false,
    };
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleResetPassword = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

      let formData = new FormData();
      let password = this.state.password;
      let token = this.props.match.params.token;

      console.log(token);
      console.log(password);

      formData.append("password", password);
      formData.append("token", token);

      console.log(formData);

      resetPasswordService.resetPassword(formData).then(
        (response) => {
          this.setState({
            message: response.message,
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
      <div class="hold-transition login-page">
        <div className="login-box">
          {/* /.login-logo */}
          <div className="card">
            {!this.state.successful && (
              <div className="card-body login-card-body">
                <p className="login-box-msg">
                  You are only one step a way from your new password, recover
                  your password now.
                </p>
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
                <div className="row">
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      onClick={this.handleResetPassword}
                    >
                      Change password
                    </button>
                  </div>
                  {/* /.col */}
                </div>
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
                <Link to="/login">
                  Login with your New Password
                </Link>
              </div>
            )}
            {/* /.login-card-body */}
          </div>
        </div>
      </div>
    );
  }
}
