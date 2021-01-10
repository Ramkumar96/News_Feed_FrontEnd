import React, { Component } from "react";
import AuthService from "../../services/auth.service";

export default class Activeusers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allUserDetails:[],
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

  render() {

    const { allUserDetails } = this.state;

    const ActiveUserDetails =  allUserDetails.filter((user) => 
    user.roles[0].name == "ROLE_STUDENT" &&  user.acceptedByAdmin == true && user.rejectedByAdmin == false);


    return (
      <div>
        {/* /.row */}
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Active User List</h3>
                <div className="card-tools">
                  <div
                    className="input-group input-group-sm"
                    style={{ width: 150 }}
                  >
                    <input
                      type="text"
                      name="table_search"
                      className="form-control float-right"
                      placeholder="Search"
                    />
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-default">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body table-responsive p-0">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Mail</th>
                      <th>Academic Year</th>
                      <th>Faculty</th>
                      <th>Department</th>
                    </tr>
                  </thead>
                  <tbody>
                  {ActiveUserDetails &&
                  ActiveUserDetails.map((user, index) => {
                    return (
                      <tr>
                      <td>{user.firstname}</td>
                      <td>{user.email}</td>
                      <td>{user.academicYear}</td>
                      <td>{user.facultyId}</td>
                      <td>{user.departmentId}</td>
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
        </div>
      </div>
    );
  }
}
