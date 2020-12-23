import React, { Component } from 'react'

export default class Forgotpasswordemail extends Component {
    render() {
        return (
            <div>
                 {/* ======= Intro Section ======= */}
      <section id="intro" className="clearfix">
          <div className="container" data-aos="fade-up">
            <div className="intro-img" data-aos="zoom-out" data-aos-delay={200}>
              <img src="assets/img/intro-img.svg" alt className="img-fluid" />
            </div>
            <div className="intro-info" data-aos="zoom-in" data-aos-delay={100}>
              <h2>
                We provide
                <br />
                <span>Login</span>
                <br />
                to upload your Notices !
              </h2>
              <div>
                <a href="#about" className="btn-get-started scrollto">
                  Register
                </a>
                <a href="#services" className="btn-services scrollto">
                 Login
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End Intro Section */}
            </div>
        )
    }
}
