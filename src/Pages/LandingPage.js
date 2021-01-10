import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landingpage extends Component {
  render() {
    return (
      <div>
        {/* ======= Header ======= */}
        <header id="header" className="fixed-top">
          <div className="container">
            <div className="logo float-left">
              <h1><a href="index.html">Sabara Talkies</a></h1>
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
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </nav>
            {/* .main-nav */}
          </div>
        </header>
        {/* #header */}
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
                <span>solutions</span>
                <br />
                to upload your Notices !
              </h2>
              <div>
                <Link to="/register"  className="btn-get-started scrollto" >
                Register
                </Link>
                <Link to="/login" className="btn-services scrollto" >
                Login
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* End Intro Section */}
        <main id="main">
          {/* ======= About Section ======= */}
          <section id="about">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h3>About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </header>
              <div className="row about-container">
                <div className="col-lg-6 content order-lg-1 order-2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <div className="icon">
                      <i className="fa fa-shopping-bag" />
                    </div>
                    <h4 className="title">
                      <a href>Eiusmod Tempor</a>
                    </h4>
                    <p className="description">
                      Et harum quidem rerum facilis est et expedita distinctio.
                      Nam libero tempore, cum soluta nobis est eligendi
                    </p>
                  </div>
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <div className="icon">
                      <i className="fa fa-photo" />
                    </div>
                    <h4 className="title">
                      <a href>Magni Dolores</a>
                    </h4>
                    <p className="description">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <div className="icon">
                      <i className="fa fa-bar-chart" />
                    </div>
                    <h4 className="title">
                      <a href>Dolor Sitema</a>
                    </h4>
                    <p className="description">
                      Minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat tarad limino ata
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-6 background order-lg-2"
                  data-aos="zoom-in"
                >
                  <img
                    src="assets/img/about-img.svg"
                    className="img-fluid"
                    alt
                  />
                </div>
              </div>
              <div className="row about-extra">
                <div className="col-lg-6" data-aos="fade-right">
                  <img
                    src="assets/img/about-extra-1.svg"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left">
                  <h4>
                    Voluptatem dignissimos provident quasi corporis voluptates
                    sit assumenda.
                  </h4>
                  <p>
                    Ipsum in aspernatur ut possimus sint. Quia omnis est
                    occaecati possimus ea. Quas molestiae perspiciatis occaecati
                    qui rerum. Deleniti quod porro sed quisquam saepe. Numquam
                    mollitia recusandae non ad at et a.
                  </p>
                  <p>
                    Ad vitae recusandae odit possimus. Quaerat cum ipsum
                    corrupti. Odit qui asperiores ea corporis deserunt veritatis
                    quidem expedita perferendis. Qui rerum eligendi ex doloribus
                    quia sit. Porro rerum eum eum.
                  </p>
                </div>
              </div>
              <div className="row about-extra">
                <div
                  className="col-lg-6 order-1 order-lg-2"
                  data-aos="fade-left"
                >
                  <img
                    src="assets/img/about-extra-2.svg"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div
                  className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1"
                  data-aos="fade-right"
                >
                  <h4>
                    Neque saepe temporibus repellat ea ipsum et. Id vel et quia
                    tempora facere reprehenderit.
                  </h4>
                  <p>
                    Delectus alias ut incidunt delectus nam placeat in
                    consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui
                    aut distinctio. Cumque fugit earum est quam officiis
                    numquam. Ducimus corporis autem at blanditiis beatae
                    incidunt sunt.
                  </p>
                  <p>
                    Voluptas saepe natus quidem blanditiis. Non sunt impedit
                    voluptas mollitia beatae. Qui esse molestias. Laudantium
                    libero nisi vitae debitis. Dolorem cupiditate est
                    perferendis iusto.
                  </p>
                  <p>
                    Eum quia in. Magni quas ipsum a. Quis ex voluptatem
                    inventore sint quia modi. Numquam est aut fuga mollitia
                    exercitationem nam accusantium provident quia.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* End About Section */}
         
        </main>
        {/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 footer-info">
                  <h3>Sabara Talkies</h3>
                  <p>
                    Cras fermentum odio eu feugiat lide par naso tierra. Justo
                    eget nada terra videa magna derita valies darta donna mare
                    fermentum iaculis eu non diam phasellus. Scelerisque felis
                    imperdiet proin fermentum leo. Amet volutpat consequat
                    mauris nunc congue.
                  </p>
                </div>
                <div className="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Terms of service</a>
                    </li>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h4>Contact Us</h4>
                  <p>
                    A108 Adam Street <br />
                    New York, NY 535022
                    <br />
                    United States <br />
                    <strong>Phone:</strong> +1 5589 55488 55
                    <br />
                    <strong>Email:</strong> info@example.com
                    <br />
                  </p>
                  <div className="social-links">
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#" className="instagram">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#" className="google-plus">
                      <i className="fa fa-google-plus" />
                    </a>
                    <a href="#" className="linkedin">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 footer-newsletter">
                  <h4>Our Newsletter</h4>
                  <p>
                    Tamen quem nulla quae legam multos aute sint culpa legam
                    noster magna veniam enim veniam illum dolore legam minim
                    quorum culpa amet magna export quem marada parida nodela
                    caramase seza.
                  </p>
                  <form action method="post">
                    <input type="email" name="email" />
                    <input type="submit" defaultValue="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              © Copyright <strong>SabaraTalkies</strong>. All Rights Reserved
            </div>
          </div>
        </footer>
        {/* End Footer */}
      </div>
    );
  }
}
