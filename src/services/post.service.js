import authHeader from "./auth-header";
import axios from "axios";

const baseURL = "http://localhost:8080/post/";

class PostService {

  upload(formData) {
    return axios.post(baseURL + "upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  getposts() {
    return axios.get(baseURL + "posts", { headers: authHeader() });
  }
  // deletePosts(id) {
  //   return axios.delete(baseURL + "posts/" + id, { headers: authHeader() });
  // }
  
}

export default new PostService();
