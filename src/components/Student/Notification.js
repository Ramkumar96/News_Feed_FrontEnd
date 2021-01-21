import React, { Component } from "react";
import AuthService from "../../services/auth.service";
import PostService from "../../services/post.service";

export default class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileInfos: [],
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
      id: currentUser.id,
    });
  };

  render() {
    const { fileInfos } = this.state;

    const usersPost = fileInfos.filter(
      (fileInfo) => fileInfo.userId == this.state.id
    );

    const deletedPosts = usersPost.filter(
      (postInfo) => postInfo.postDeletedByAdmin == true
    );

    const acceptedPosts = usersPost.filter(
      (postInfo) => postInfo.postAcceptedByAdmin == true
    );

    return (
      <div className="timeline timeline-inverse">
        {acceptedPosts &&
          acceptedPosts.map((post, index) => {
            return (
              <div key={index}>
                <i className="fas fa-comments bg-success"/>
                <div className="timeline-item">
                  <h3 className="timeline-header">
                    <strong>{post.postTitle}</strong> Post is Accepted By Admin
                  </h3>
                  <div className="timeline-body">{post.content}</div>
                </div>
              </div>
            );
          })}
        {deletedPosts &&
          deletedPosts.map((post, index) => {
            return (
              <div key={index}>
                <i className="fas fa-comments bg-danger" />
                <div className="timeline-item">
                  <h3 className="timeline-header">
                    <strong>{post.postTitle}</strong> Post is Deleted By Admin
                  </h3>
                  <div className="timeline-body">{post.content}</div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
