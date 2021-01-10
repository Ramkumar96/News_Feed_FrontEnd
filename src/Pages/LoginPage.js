import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import AuthService from "../services/auth.service";

export default class Loginpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
      userReady: false,
      loginUserType: "",
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    AuthService.login(this.state.username, this.state.password).then(
      (response) => {
        console.log(response);

        this.setState({
          loginUserType: response.roles[0],
          userReady: true,
        });
        console.log(response.roles);
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
        });
      }
    );
  };

  render() {
    const { loginUserType } = this.state;

    if (this.state.userReady == true) {
      if (loginUserType === "ROLE_ADMIN") {
        return <Redirect to="/admindashboard" />;
      }
      if (loginUserType === "ROLE_STUDENT") {
        return <Redirect to="/studentprofilepage" />;
      }
    }

    return (
      <div class="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <b>Login</b>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form action="../../index3.html" method="post">
                <div className="input-group mb-3">
                  <input
                    type="username"
                    className="form-control"
                    placeholder="User name"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
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
                <div className="row">
                  <div className="col-8">
                    {/* <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div> */}
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      onClick={this.handleLogin}
                    >
                      Login
                    </button>
                  </div>
                  {/* /.col */}
                </div>
              </form>

              {this.state.message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
              <p>{this.state.message}</p>
                  </div>
                </div>
              )}
              {/* /.social-auth-links */}
              <p className="mb-1">
                <Link to="/forgotpasswordemail">I forgot my password</Link>
              </p>
              <p className="mb-0">
                <Link to="/register" className="text-center">
                  Register a new membership
                </Link>
              </p>
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
        {/* /.login-box */}
      </div>
    );
  }
}
