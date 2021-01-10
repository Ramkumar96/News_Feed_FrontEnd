import React, { Component } from "react";
import DepartmentService from "../../services/department.service";
import FacultyService from "../../services/faculty.service";
import AuthService from "../../services/auth.service";

export default class Updateprofile extends Component {
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
      currentUser: [],

      message:"",

      availableFaculties: [],
      availableDepartments: [],
      allUserDetails:[],
      DistrictList: [
        "Kilinochchi",
        "Polonnaruwa",
        "Hambantota",
        "Trincomalee",
        "Nuwara Eliya",
        "Ampara",
        "Monaragala",
        "Puttalam",
        "Kegalle",
        "Anuradhapura",
        "Ratnapura",
        "Batticaloa",
        "Matale",
        "Jaffna",
        "Matara",
        "Badulla",
        "Galle",
        "Colombo",
        "Kurunegala",
        "Kandy",
        "Kalutara",
        "Gampaha",
        "Mannar",
        "Vavuniya",
        "Mullaitivu",
      ],
      AcademicyearList: [
        "2018/2019",
        "2017/2018",
        "2016/2017",
        "2015/2016",
        "2014/2015",
        "2013/2014",
        "2012/2013",
      ],
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

    console.log(this.state.availableFaculties);
    console.log(this.state.availableDepartments);

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

  onChangefirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  onChangelastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };
  onChangeGender = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };
  onChangeBirthOfDate = (e) => {
    this.setState({
      birthOfDate: e.target.value,
    });
  };
  onChangeDistrict = (e) => {
    this.setState({
      district: e.target.value,
    });
  };
  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  onChangeAcademicYear = (e) => {
    this.setState({
      academicYear: e.target.value,
    });
  };
  onChangeFacultyId = (e) => {
    this.setState({
      facultyId: e.target.value,
    });
    console.log(this.state.facultyId);
  };
  onChangeDepartmentId = (e) => {
    this.setState({
      departmentId: e.target.value,
    });
  };

  handleUpdateProfile = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

    console.log(
      this.state.firstName,
       this.state.lastName,
       this.state.gender,
       this.state.birthOfDate,
       this.state.district,
       this.state.email,
       this.state.password,
       this.state.academicYear,
       this.state.facultyId,
       this.state.departmentId,
    );

      AuthService.updateProfile(
       this.state.firstName,
       this.state.lastName,
       this.state.gender,
       this.state.birthOfDate,
       this.state.district,
       this.state.email,
       this.state.password,
       this.state.academicYear,
       this.state.facultyId,
       this.state.departmentId,
      ).then(
        (response) => {
          this.setState({
            message: response.data.message,
            successful: true,
            // userReady: true,
          });
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage,
          });
        }
      );
  };

  render() {

    const currentUser = AuthService.getCurrentUser();

    const { availableDepartments } = this.state;

    const departmentlist = availableDepartments.filter(
      (availabledepartment) =>
    availabledepartment.facultyId == this.state.facultyId
      );
    



    return (
      <div>
        <div className="form-horizontal">
          <div className="form-group row">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">
              First Name
              {/* {availableDepartments} */}
              {/* {currentUser.firstname} */}
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="First Name"
                name="firstname"
                value={this.state.firstName}
                onChange={this.onChangefirstName}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">
              Last Name
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputName"
                placeholder="Last name"
                name="lastname"
                value={this.state.lastName}
                onChange={this.onChangelastName}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
              Gender
            </label>
            <div className="col-sm-10">
              <select
                class="custom-select"
                value={this.state.gender}
                onChange={this.onChangeGender}
              >
                <option district="">Select Gender</option>
                <option district="">Male</option>
                <option district="">Female</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputName2" className="col-sm-2 col-form-label">
              Date of Birth
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputName2"
                placeholder="Name"
                placeholder="Date of Birth"
                name="dateofbirth"
                value={this.state.birthOfDate}
                onChange={this.onChangeBirthOfDate}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputName2" className="col-sm-2 col-form-label">
              District
            </label>
            <div className="col-sm-10">
              <select
                class="custom-select"
                value={this.state.district}
                onChange={this.onChangeDistrict}
              >
                <option district="">Select District</option>
                {this.state.DistrictList &&
                  this.state.DistrictList.map((district, key) => (
                    <option key={key} value={district}>
                      {district}
                    </option>
                  ))}
              </select>
            </div>
          </div>
{/* 
          <div className="form-group row">
            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </div>
          </div> */}
          <div className="form-group row">
            <label htmlFor="inputName2" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input 
              type="password" 
              className="form-control" 
              id="inputName2"
              placeholder="Update your New Password"
              name="password"
              value={this.state.password}
              onChange={this.onChangePassword} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputName2" className="col-sm-2 col-form-label">
              Academic Year
            </label>
            <div className="col-sm-10">
              <select
                class="custom-select"
                value={this.state.academicYear}
                onChange={this.onChangeAcademicYear}
              >
                <option district="">Select Academic Year</option>
                {this.state.AcademicyearList &&
                  this.state.AcademicyearList.map((academicyear, key) => (
                    <option key={key} value={academicyear}>
                      {academicyear}
                    </option>
                  ))}
              </select>
            </div>
          </div>

  
          <div className="form-group row">
            <label
              htmlFor="inputExperience"
              className="col-sm-2 col-form-label"
            >
              Faculty
            </label>
            <div className="col-sm-10">
              <select
                class="form-control input-sm m-bot15"
                value={this.state.facultyId}
                onChange={this.onChangeFacultyId}
              >
                <option facultyId=""> Select Faculty </option>
                {this.state.availableFaculties &&
                  this.state.availableFaculties.map((faculty, key) => (
                    <option key={key} value={faculty.facultyId}>
                      {faculty.facultyName}
                    </option>
                  ))}
              </select>
              
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
              Department
            </label>
            <div className="col-sm-10">
            <select
                class="form-control input-sm m-bot15"
                value={this.state.departmentId}
                onChange={this.onChangeDepartmentId}
              >
                <option departmentId=""> Select Department </option>
                {departmentlist &&
                  departmentlist.map((department, key) => (
                    <option key={key} value={department.departmentId}>
                      {department.departmentName}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        
          <div className="form-group row">
            <div className="offset-sm-2 col-sm-10">
              <div className="checkbox">
                {/* <label>
                  <input type="checkbox" /> I agree to the{" "}
                  <a href="#">terms and conditions</a>
                </label> */}
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="offset-sm-2 col-sm-10">
              <button type="submit" className="btn btn-success" onClick={this.handleUpdateProfile }>
                Update Profile
              </button>
            </div>
          </div>
          {this.state.message && (
                <div className="form-group">
                  <div
                    className={
                      this.state.successful
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {this.state.message}
                  </div>
                </div>
                
              )}
        </div>
      </div>
    );
  }
}
