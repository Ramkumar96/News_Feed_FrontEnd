import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/likes/";

class LikeService {

  addLike(formData) {
    return axios.post(API_URL + "addlike",formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  }

  getAllLikes(){
    return axios.get(API_URL + 'alllikes' , { headers: authHeader() } );
}

}

export default new LikeService();
