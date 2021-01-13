import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/comments/";

class CommentService {

  addComment(formData) {
    return axios.post(API_URL + "addcomment",formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  }

  getAllComments(){
    return axios.get(API_URL + 'allcomments' , { headers: authHeader() } );
}

}

export default new CommentService();
