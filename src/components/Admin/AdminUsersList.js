import React, { Component } from "react";

import AuthService from "../../services/auth.service";
import axios from "axios";

const baseURL = "http://localhost:8080/api/auth/";

export default class Adminuserslist extends Component {
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
      password: "",
      academicYear: "",
      facultyName: "",
      departmentName: "",

      acceptedByAdmin: true,
      rejectedByAdmin: true,

      allUserDetails: [],
    };
  }

  componentDidMount() {
    // Getting All Users
    AuthService.getAllUsers().then(
      (response) => {
        console.log(response.data);
        this.setState({
          allUserDetails: response.data,
        });
        console.log(this.state.allUserDetails);
      },
      (error) => {
        this.setState({
          allUserDetails:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  onRejectUser = (id) => {
    const { rejectedByAdmin } = this.state;
    let formData = new FormData();
    formData.append("rejectedByAdmin", rejectedByAdmin);
    axios.put(baseURL + "rejectedByAdmin/" + id, formData).then((response) => {
      this.setState({
        message: response.data.message,
      });
      window.location.reload();
    });
  };

  onAcceptUser = (id) => {
    const { acceptedByAdmin } = this.state;
    let formData = new FormData();
    formData.append("acceptedByAdmin", acceptedByAdmin);
    axios.put(baseURL + "acceptedByAdmin/" + id, formData).then((response) => {
      this.setState({
        message: response.data.message,
      });
      window.location.reload();
    });
  };

  render() {
    const { allUserDetails } = this.state;

    const AdminUserDetails = allUserDetails.filter(
      (user) =>
        user.roles[0].name == "ROLE_STUDENT" &&
        user.acceptedByAdmin == false &&
        user.rejectedByAdmin == false
    );

    return (
      <div className="content">
        {/* Default box */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Registered Users List</h3>
          </div>
          <div className="card-body p-0">
            <table className="table table-striped projects">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Mail</th>
                  <th>District</th>
                  <th>Username</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {AdminUserDetails &&
                  AdminUserDetails.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{user.firstname}</td>
                        <td>{user.email}</td>
                        <td>{user.district}</td>
                        <td>{user.username}</td>
                        <td className="project-actions text-right">
                          <a
                            className="btn btn-info btn-sm"
                            onClick={() => this.onAcceptUser(user.id)}
                          >
                            <i className="fas fa-pencil-alt"></i>
                            Accept
                          </a>
                          <a
                            className="btn btn-danger btn-sm"
                            onClick={() => this.onRejectUser(user.id)}
                          >
                            <i className="fas fa-trash"></i>
                            Reject
                          </a>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
    );
  }
}
