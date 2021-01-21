import React, { Component } from "react";
import AuthService from "../../services/auth.service";
import PostService from "../../services/post.service";

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

export default class AdminUploadpost extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);
    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      message: "",

      fileInfos: [],

      userMail: "",
      userId: "",
      firstname: "",

      postTitle: "",
      content: "",
      createdOn: date,
      PostDeletedByUser: false,
      PostAcceptedByAdmin: true,
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

  onChangePostTitle = (e) => {
    this.setState({
      postTitle: e.target.value,
    });
  };

  onChangeContent = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
    });
  }

  upload() {
    let currentFile = this.state.selectedFiles[0];
    this.setState({
      currentFile: currentFile,
    });

    let formData = new FormData();

    let userMail = this.state.userMail;
    let userId = this.state.userId;
    let firstname = this.state.firstname;
    let postTitle = this.state.postTitle;
    let content = this.state.content;
    let createdOn = this.state.createdOn;
    let PostDeletedByUser = this.state.PostDeletedByUser;
    let PostAcceptedByAdmin = this.state.PostAcceptedByAdmin;
    let PostDeletedByAdmin = this.state.PostDeletedByAdmin;

    formData.append("file", currentFile);
    formData.append("userMail", userMail);
    formData.append("userId", userId);
    formData.append("firstname", firstname);
    formData.append("postTitle", postTitle);
    formData.append("content", content);
    formData.append("createdOn", createdOn);
    formData.append("PostDeletedByUser", PostDeletedByUser);
    formData.append("PostAcceptedByAdmin", PostAcceptedByAdmin);
    formData.append("PostDeletedByAdmin", PostDeletedByAdmin);

    PostService.upload(formData)
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        return PostService.getposts();
      })
      .then((files) => {
        this.setState({
          fileInfos: files.data,
        });
      })
      .catch(() => {
        this.setState({
          message: "Could not upload the file!",
          currentFile: undefined,
        });
      });
    this.setState({
      selectedFiles: undefined,
    });
  }

  render() {
    const { selectedFiles, message } = this.state;

    return (
      <div>
        <div className="form-horizontal">
          <div className="form-group row">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">
              Post Title
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Post Title"
                value={this.state.postTitle}
                onChange={this.onChangePostTitle}
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="inputExperience"
              className="col-sm-2 col-form-label"
            >
              Post Content
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                id="inputExperience"
                placeholder="post content"
                defaultValue={""}
                value={this.state.content}
                onChange={this.onChangeContent}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
              Attach File
            </label>
            <div className="col-sm-10">
              <div class="btn btn-default btn-file">
                <i class="fas fa-paperclip"></i> Attachment
                <input type="file" onChange={this.selectFile} />
              </div>
              <div className="alert alert-light" role="alert">
                {message}
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="offset-sm-2 col-sm-10">
              <button
                type="submit"
                className="btn btn-success"
                disabled={!selectedFiles}
                onClick={this.upload}
              >
                Create new Post
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
