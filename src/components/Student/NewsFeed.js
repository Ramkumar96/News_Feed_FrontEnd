import React, { Component } from "react";
import PostService from "../../services/post.service";
import AuthService from "../../services/auth.service";
import CommentService from "../../services/comment.service";
import LikeService from "../../services/like.service";
import axios from "axios";

const baseURL = "http://localhost:8080/post/";

export default class Newsfeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUserId:"",
      fileInfos: [],
      allCommentInfos:[],
      allLikeInfos:[],

      commentContent: "",
      commentedPostId: "",
      commentedUserId: "",
      commentedFirstName: "",

      likedPostId:"",
      likedUserId:"",

      // userMail: "",
      // userId: "",
      // firstname: "",

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

    CommentService.getAllComments().then((response) => {
      this.setState({
        allCommentInfos: response.data,
      });
      console.log(response);
    });

    LikeService.getAllLikes().then((response) => {
      this.setState({
        allLikeInfos: response.data,
      });
      console.log(response);
    });

    this.getUserDetails();
  }

  getUserDetails = () => {
    const currentUser = AuthService.getCurrentUser();

    this.setState({
      commentedUserId: currentUser.id,
      commentedFirstName: currentUser.firstname,
      likedUserId : currentUser.id,
      currentUserId : currentUser.id,
    });
  };

  onChangeCommentContent = (postId , e) => {
    this.setState({
      commentContent: e.target.value ,
      commentedPostId: postId,

    });
  };

  handlePostComment = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
      // commentedPostId: postId,
    });

    console.log(
      this.state.commentContent,
      this.state.commentedPostId,
      this.state.commentedUserId,
      this.state.commentedFirstName
    );

    let formData = new FormData();

    let commentContent = this.state.commentContent;
    let commentedPostId =   this.state.commentedPostId;
    let commentedUserId =  this.state.commentedUserId;
    let commentedFirstName =  this.state.commentedFirstName;

    formData.append("commentContent", commentContent);
    formData.append("commentedPostId", commentedPostId);
    formData.append("commentedUserId", commentedUserId);
    formData.append("commentedFirstName", commentedFirstName);

    console.log(formData);

    CommentService.addComment(formData).then(
      (response) => {
        this.setState({
          message: response.data.message,
          successful: true,
        });
        window.location.reload();
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

  onhandlePostLikes = (postId) => {
    // e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

    console.log(
      postId,
      this.state.likedUserId,
    );

    let formData = new FormData();

    let likedPostId = postId;
    let likedUserId =   this.state.likedUserId;

    formData.append("likedPostId", likedPostId);
    formData.append("likedUserId", likedUserId);

    console.log(formData);

    LikeService.addLike(formData).then(
      (response) => {
        this.setState({
          message: response.data.message,
          successful: true,
        });
        window.location.reload();
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
    const { fileInfos , allCommentInfos , allLikeInfos , currentUserId } = this.state;

    const FinalNewsFeedPost = fileInfos.filter(
      (fileInfo) =>
        fileInfo.postAcceptedByAdmin == true &&
        fileInfo.postDeletedByAdmin == false &&
        fileInfo.postDeletedByUser == false
    );


    return (
      <div>
        {FinalNewsFeedPost &&
          FinalNewsFeedPost.map((post, index) => {

            // Calculating number of comments
            const postComment = allCommentInfos.filter((commentInfo) =>commentInfo.commentedPostId == post.id);
            const postCount = postComment.length;

            // Calculating number of like
            const postLikes = allLikeInfos.filter((LikeInfo) =>LikeInfo.likedPostId == post.id);
            const LikeCount = postLikes.length;

            const currentuserliked = allLikeInfos.filter((LikeInfo) => LikeInfo.likedPostId == post.id && LikeInfo.likedUserId == currentUserId);
            const IsUserLiked = currentuserliked.length;

            return (
              <div className="post">
                <div className="user-block">
                  <img
                    className="img-circle img-bordered-sm"
                    src="../../dist/img/user4-128x128.png"
                    alt="user image"
                  />
                  <span className="username">
                    <a href="#">{post.firstname}</a>
                    <a href="#" className="float-right btn-tool">
                      <i className="fas fa-times" />
                    </a>
                  </span>
                  <span className="description">
                    Posted on - {post.createdOn}
                  </span>
                </div>
                {/* /.user-block */}
                <p>
                  <h6>{post.postTitle}</h6>
                </p>
                <p>{post.content}</p>
                <p mt-3>
                  <a href={post.url} class="link-black text-sm">
                    <i class="fas fa-link mr-1"></i> {post.name}
                  </a>
                </p>
                <p>

                  <button className="link-black text-sm" 
                  onClick={()=>this.onhandlePostLikes(post.id)}
                  disabled={ IsUserLiked ==1 ? "true": "" } >
                    <i className="far fa-thumbs-up mr-1" /> Like 
                  </button>
                  {LikeCount} Likes
                  <span className="float-right">
                    <a href="#" className="link-black text-sm">
                      <i className="far fa-comments mr-1" /> Comments ({postCount})
                    </a>
                  </span>
                </p>

                
                <p>
                {postComment &&
                  postComment.map((comment, index) => {
                    return (
                      <div className="card-footer card-comments">
                      {/* /.card-comment */}
                      <div className="card-comment">
                        {/* User image */}
                        <img
                          className="img-circle img-sm"
                          src="../dist/img/user4-128x128.png"
                          alt="User Image"
                        />
                        <div className="comment-text">
                          <span className="username">
                            {comment.commentedFirstName}
                          </span>
                          {/* /.username */}
                          {comment.commentContent}
                        </div>
                        {/* /.comment-text */}
                      </div>
                      {/* /.card-comment */}
                    </div>
                    );
                  })}
                </p>

                <div className="form-horizontal">
                  <div className="input-group input-group-sm mb-0">
                    <input
                      className="form-control form-control-sm"
                      placeholder="Type a comment"
                      name="text"
                      // value={this.state.commentContent}
                      onChange={(e) => this.onChangeCommentContent(post.id, e)}
                    />
                    <div className="input-group-append">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.handlePostComment}
                        // post.id
                      >
                        Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
