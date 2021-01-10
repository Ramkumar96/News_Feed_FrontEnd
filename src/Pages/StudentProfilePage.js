import React, { Component, useImperativeHandle } from "react";
import Profileheader from "../components/ProfileHeader";
import Activeusers from "../components/Student/ActiveUsers";
import Updateprofile from "../components/Student/UpdateProfile";
import DepartmentService from "../services/department.service";
import FacultyService from "../services/faculty.service";

import AuthService from "../services/auth.service";
import Uploadpost from "../components/Student/UploadPost";
import Postlist from "../components/Student/PostList";
import Newsfeed from "../components/Student/NewsFeed";
import Notification from "../components/Student/Notification";





export default class Studentprofilepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id:"",
      firstName: "",
      lastName: "",
      gender: "",
      birthOfDate: "",
      district: "",
      userName: "",
      email: "",
      password: "",
      academicYear: "",
      facultyId: "",
      departmentId: "",

      availableFaculties:[],
      availableDepartments:[],

    };
  }

  componentDidMount() {
    // Getting All Faculties
    FacultyService.getAllFaculties().then(
      (response) => {
        this.setState({
          availableFaculties: response.data,
        });
      },
      (error) => {
        this.setState({
          availableFaculties:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
      
    );
    // Getting All Departments
    DepartmentService.getAllDepartments().then(
      (response) => {
        this.setState({
          availableDepartments: response.data,
        });
        console.log(this.state.availableDepartments);
      },
      (error) => {
        this.setState({
          availableDepartments:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );

    this.getUserDetails()

  }

  getUserDetails = () => {

    const currentUser = AuthService.getCurrentUser();
    
    this.setState({
      id:currentUser.id,
      firstName: currentUser.firstname,
      lastName: currentUser.lastname,
      gender: currentUser.gender,
      birthOfDate: currentUser.birthOfDate,
      district:currentUser.district,
      email: currentUser.email,
      academicYear: currentUser.academicYear,
      facultyId: currentUser.facultyId,
      departmentId: currentUser.departmentId, 
    });
  }


 
  render() {

    // const currentUser = AuthService.getCurrentUser();

    // const {availableFaculties ,  availableDepartments } = this.state;

    // const userdepartment = availableDepartments.filter(
    //   (department) => department.departmentId == currentUser.departmentId
    // );

    // const dep = userdepartment.filter(
    //   (depa) => depa.departmentName == userdepartment.departmentName
    // );

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
                          src="../../dist/img/user4-128x128.png"
                          alt="User profile picture"
                        />
                      </div>
                      <h3 className="profile-username text-center">
                      {this.state.firstName} 
                      </h3>
                      <p className="text-muted text-center">
                      Student
                      </p>
                      <ul className="list-group list-group-unbordered mb-3">
                        <li className="list-group-item">
                          <strong>
                            <i className="fas fa-book mr-1" /> Academic Year
                          </strong>
                          <p className="text-muted ml-3">{this.state.academicYear} </p>
                        </li>
                        <li className="list-group-item">
                          <strong>
                            <i className="fas fa-book mr-1" /> Faculty
                          </strong>
                          <p className="text-muted">{this.state.facultyId}</p>
                        </li>
                        <li className="list-group-item">
                          <strong>
                            <i className="fas fa-book mr-1" /> Department
                          </strong>
                          <p className="text-muted">{this.state.departmentId}</p>
                        </li>
                        <li className="list-group-item">
                          <strong>
                            <i className="fas fa-map-marker-alt mr-1" />{" "}
                            Location
                          </strong>
                          <p className="text-muted">{this.state.district}</p>
                        </li>
                        <li className="list-group-item">
                          <strong>
                            <i className="fas fa-pencil-alt mr-1" /> Email
                          </strong>
                          <p className="text-muted"> {this.state.email} </p>
                        </li>
                        <li className="list-group-item">
                          <strong>
                            <i className="fas fa-pencil-alt mr-1" /> Gender
                          </strong>
                          <p className="text-muted"> {this.state.gender} </p>
                        </li>
                        <li className="list-group-item">
                          <strong>
                            <i className="far fa-file-alt mr-1" /> Birth Of Date
                          </strong>
                          <p className="text-muted">
                          {this.state.birthOfDate}
                          </p>
                        </li>
                      </ul>
                      <a href="#" className="btn btn-primary btn-block">
                        <b>Follow</b>
                      </a>
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
                            href="#newsfeed"
                            data-toggle="tab"
                          >
                            News Feed
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
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
                            href="#notification"
                            data-toggle="tab"
                          >
                            Notifications
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#activeuserslist"
                            data-toggle="tab"
                          >
                            Active Users
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#updateprofile"
                            data-toggle="tab"
                          >
                            Update Profile
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <div className="tab-content">
                        <div className="active tab-pane" id="newsfeed">
                          {/* Post */}
                          <Newsfeed/>
                        </div>
                        {/* /.tab-pane */}
                        {/* /.tab-pane */}
                        <div className="tab-pane" id="addnewpost">
                         <Uploadpost userfirstname= {this.state.userFirstName}/>
                        </div>
                        {/* /.tab-pane */}
                        <div className="tab-pane" id="postlist">
                          {/* The timeline */}
                         <Postlist/>
                        </div>
                        <div className="tab-pane" id="notification">
                        <Notification/>
                        </div>
                        {/* /.tab-pane */}

                        <div className="tab-pane" id="activeuserslist">
                         <Activeusers/>
                        </div>
                        {/* /.tab-pane */}

                        <div className="tab-pane" id="updateprofile">
                                <Updateprofile/>
                        </div>
                        {/* /.tab-pane */}
                      </div>
                      {/* /.tab-content */}
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
        {/* /.content-wrapper */}
        <footer className="main-footer">                           
          ©Copyright <strong>SabaraTalkies</strong>. All Rights Reserved
        </footer>
        {/* Control Sidebar */}
        <aside className="control-sidebar control-sidebar-dark">
          {/* Control sidebar content goes here */}
        </aside>
        {/* /.control-sidebar */}
      </div>
    );
  }
}
