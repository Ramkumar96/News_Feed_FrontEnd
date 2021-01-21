import React, { Component } from "react";
import PostService from "../../services/post.service";
import axios from "axios";

const baseURL = "http://localhost:8080/post/";

export default class Adminpostlist extends Component {
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

      PostDeletedByUser: false,
      PostAcceptedByAdmin: true,
      PostDeletedByAdmin: true,
    };
  }

  componentDidMount() {
    PostService.getposts().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
      console.log(response);
    });
  }

  onDeletePost = (id) => {
    const { PostDeletedByAdmin } = this.state;
    let formData = new FormData();
    formData.append("PostDeletedByAdmin", PostDeletedByAdmin);
    axios
      .put(baseURL + "posts/deletedByAdmin/" + id, formData)
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        window.location.reload();
      });
  };

  onAcceptPost = (id) => {
    const { PostAcceptedByAdmin } = this.state;
    let formData = new FormData();
    formData.append("PostAcceptedByAdmin", PostAcceptedByAdmin);
    axios
      .put(baseURL + "posts/acceptedByAdmin/" + id, formData)
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        window.location.reload();
      });
  };

  render() {
    const { fileInfos } = this.state;
    const NonDeletedByUser = fileInfos.filter(
      (fileInfo) => fileInfo.postDeletedByUser == false
    );
    const NonDeletedByAdminandUser = NonDeletedByUser.filter(
      (file) => file.postDeletedByAdmin == false
    );

    return (
      <div className="timeline timeline-inverse">
        {/* timeline item */}
        {NonDeletedByAdminandUser &&
          NonDeletedByAdminandUser.map((post, index) => {
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
                      className="btn btn-success btn-sm"
                      disabled={post.postAcceptedByAdmin ? "true" : ""}
                      onClick={() => this.onAcceptPost(post.id)}
                    >
                      Accept
                    </button>
                    <button
                      href="#"
                      className="btn btn-danger btn-sm"
                      onClick={() => this.onDeletePost(post.id)}
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
