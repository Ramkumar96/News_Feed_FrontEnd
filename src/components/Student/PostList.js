import React, { Component } from "react";
import AuthService from "../../services/auth.service";
import PostService from "../../services/post.service";
import axios from "axios";

const baseURL = "http://localhost:8080/post/";

export default class Postlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileInfos: [],

      userMail: "",
      userId: "",
      firstname: "",

      postTitle: "",
      content: "",
      createdOn: "",
      PostDeletedByUser: true,
      PostAcceptedByAdmin: false,
      PostDeletedByAdmin: false,
    };
  }

  componentDidMount() {
    PostService.getposts().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
      console.log(response);
    });

    this.getUserDetails();
  }

  getUserDetails = () => {
    const currentUser = AuthService.getCurrentUser();

    this.setState({
      userId: currentUser.id,
      firstname: currentUser.firstname,
      userMail: currentUser.email,
    });
  };

  onUserDeletePost = (id) => {
    const { PostDeletedByUser } = this.state;
    let formData = new FormData();
    formData.append("PostDeletedByUser", PostDeletedByUser);
    axios
      .put(baseURL + "posts/deletedByUser/" + id, formData)
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        window.location.reload();
      });
  };

  render() {
    const { fileInfos, userId } = this.state;

    const usersPost = fileInfos.filter((fileInfo) => fileInfo.userId == userId);
    const FinalPostListUser = usersPost.filter(
      (userposts) =>
        userposts.postDeletedByUser == false &&
        userposts.postDeletedByAdmin == false
    );

    return (
      <div className="timeline timeline-inverse">
        {/* timeline item */}
        {FinalPostListUser &&
          FinalPostListUser.map((post, index) => {
            return (
              <div key={index}>
                <i className="fas fa-envelope bg-primary" />
                <div className="timeline-item">
                  <span className="time">
                    <i className="far fa-clock" /> {post.createdOn}
                  </span>
                  <h3 className="timeline-header">
                    <a href="#">Post Title :</a> {post.postTitle}
                  </h3>
                  <div className="timeline-body">
                    {post.content}
                    <p mt-3>
                      <a href={post.url} class="link-black text-sm">
                        <i class="fas fa-link mr-1"></i> {post.name}
                      </a>
                    </p>
                  </div>
                  <div className="timeline-footer">
                    <button
                      href="#"
                      className="btn btn-danger btn-sm"
                      // disabled={post.PostAcceptedByAdmin ? "true":""}
                      onClick={() => this.onUserDeletePost(post.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
