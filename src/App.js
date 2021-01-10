import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Admindashboard from "./Pages/AdminDashBoard";
import Forgotpasswordemail from "./Pages/ForgotPasswordEmail";
import Landingpage from "./Pages/LandingPage";
import Loginpage from "./Pages/LoginPage";
import Registerpage from "./Pages/RegisterPage";
import Resetpasswordpage from "./Pages/ResetPasswordPage";
import Studentprofilepage from "./Pages/StudentProfilePage";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landingpage} />
            <Route exact path="/login" component={Loginpage} />
            <Route exact path="/forgotpasswordemail" component={Forgotpasswordemail} />
          <Route exact path="/resetpasswordpage/:token" component={Resetpasswordpage} />
          <Route exact path="/register" component={Registerpage} />

          <Route exact path="/studentprofilepage" component={Studentprofilepage} />
          
          <Route exact path="/admindashboard" component={Admindashboard} />
          </Switch>
        </BrowserRouter> 
      </div>
    );
  }
}
