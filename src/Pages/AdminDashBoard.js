import React, { Component } from "react";
import Adminpostlist from "../components/Admin/AdminPostList";
import AdminUploadpost from "../components/Admin/AdminUploadPost";
import Adminuserslist from "../components/Admin/AdminUsersList";
import Profileheader from "../components/ProfileHeader";
import AuthService from "../services/auth.service";

export default class Admindashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      gender: "",
      birthOfDate: "",
      district: "",
      userName: "",
      email: "",
    };
  }

  componentDidMount() {
    this.getUserDetails();
  }

  getUserDetails = () => {
    const currentUser = AuthService.getCurrentUser();

    this.setState({
      id: currentUser.id,
      firstName: currentUser.firstname,
      lastName: currentUser.lastname,
      gender: currentUser.gender,
      birthOfDate: currentUser.birthOfDate,
      district: currentUser.district,
      email: currentUser.email,
    });
  };
  render() {
    return (
      <div>
        {/* Navbar */}
        <Profileheader />
        {/* /.navbar */}
        {/* Content Wrapper. Contains page content */}
        <div>
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Profile</h1>
                  <h1>Profile</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">User Profile</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  {/* Profile Image */}
                  <div className="card card-primary card-outline">
                    <div className="card-body box-profile">
                      <div className="text-center">
                        <img
                          className="profile-user-img img-fluid img-circle"
                          src="../../dist/img/admin.png"
                          alt="User profile picture"
                        />
                      </div>
                      <h3 className="profile-username text-center">Admin</h3>
                      {/* <p className="text-muted text-center">
                        Software Engineer
                      </p> */}
                      <ul className="list-group list-group-unbordered mb-3">
                        <li className="list-group-item">
                          <strong>
                            <i className="fas fa-book mr-1" /> Email
                          </strong>
                          <p className="text-muted">{this.state.email}</p>
                        </li>
                        <li className="list-group-item">
                          <strong>
                            <i className="fas fa-map-marker-alt mr-1" />{" "}
                            Location
                          </strong>
                          <p className="text-muted">{this.state.district}</p>
                        </li>
                      </ul>
                      {/* <a href="#" className="btn btn-primary btn-block">
                        <b>Follow</b>
                      </a> */}
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </div>
                {/* /.col */}
                <div className="col-md-9">
                  <div className="card">
                    <div className="card-header p-2">
                      <ul className="nav nav-pills">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#addnewpost"
                            data-toggle="tab"
                          >
                            Add New Post
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#postlist"
                            data-toggle="tab"
                          >
                            Post List
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#activeuserslist"
                            data-toggle="tab"
                          >
                            Registered Users List
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <div className="tab-content">
                        <div className="active tab-pane" id="addnewpost">
                          <AdminUploadpost />
                        </div>
                        <div className="tab-pane" id="postlist">
                         <Adminpostlist/>
                        </div>
                        <div className="tab-pane" id="activeuserslist">
                          <Adminuserslist/>
                        </div>
                      </div>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.nav-tabs-custom */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
      </div>
    );
  }
}
