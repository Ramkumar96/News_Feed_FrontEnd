import axios from "axios";

const API_URL = "http://localhost:8080/resetPassword/";

class ResetPasswordService {

  sendmail(formData) {
    return axios
      .post(API_URL + "forgotPasswordSendMail",formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(response => {
        console.log(response);
        return response.data;
        });
  }

  resetPassword(formData) {
    return axios
      .post(API_URL + "reset_password",formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(response => {
        console.log(response);
        return response.data;
        });
  }

}

export default new ResetPasswordService();
