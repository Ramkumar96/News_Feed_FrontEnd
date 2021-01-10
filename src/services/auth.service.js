import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(firstname,lastname,gender,birthOfDate,district, username,email,password,
    academicYear, facultyId, departmentId,acceptedByAdmin,rejectedByAdmin, resetPasswordToken,role) {
    return axios.post(API_URL + "adduser", {
      firstname,
      lastname,
      gender,
      birthOfDate,
      district,
      username,
      email,
      password,
      academicYear,
      facultyId, 
      departmentId,
      acceptedByAdmin,
      rejectedByAdmin,
      resetPasswordToken,
      role
    });
  }
  
  updateProfile(firstname, lastname, gender,birthOfDate,district,email,password,academicYear,facultyId,departmentId) {
    return axios.put(API_URL + "register", {
      firstname,
      lastname,
      gender,
      birthOfDate,
      district,
      email,
      password,
      academicYear,
      facultyId,
      departmentId
    });
  }
  
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }

  
  getAllUsers(){
    return axios.get(API_URL + 'allusers' , { headers: authHeader() } );
}

}

export default new AuthService();
