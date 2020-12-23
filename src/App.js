import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Landingpage from "./Pages/LandingPage";
import Loginpage from "./Pages/LoginPage";
import Registerpage from "./Pages/RegisterPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landingpage} />
            <Route exact path="/login" component={Loginpage} />
            {/* <Route exact path="/forgotpasswordemail" component={ForgotPasswordEmail} /> */}
          {/* <Route exact path="/resetpasswordpage/:token" component={ResetPasswordPage} /> */}
          <Route exact path="/register" component={Registerpage} />

          {/* <Route exact path="/admindashboard" component={Admindashboard} />
          <Route exact path="/studentdashboard" component={Studentdashboard} />
          <Route exact path="/staffdashboard" component={Staffdashboard} />
          <Route exact path="/lecturerdashboard" component={Lecturerdashboard} />
          <Route exact path="/hoddashboard" component={Hoddashboard} />
          <Route exact path="/deandashboard" component={Deandashboard} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
