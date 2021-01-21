import React, { Component } from "react";

import AuthService from "../services/auth.service";

export default class Profileheader extends Component {

  logOut = () => {
    AuthService.logout();
  };

  render() {
    return (
      <div>
        {/* ======= Header ======= */}
        <header id="header" className="fixed-top">
          <div className="container">
            <div className="logo float-left">
              <h1>
                <a href="index.html">Sabara Talkies</a>
              </h1>
            </div>
            <nav className="main-nav float-right d-none d-lg-block">
              <ul>
                <li className="active">
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="/" onClick={this.logOut}>
                    Logout
                  </a>
                </li>
              </ul>
            </nav>
            {/* .main-nav */}
          </div>
        </header>
        {/* #header */}
      </div>
    );
  }
}
