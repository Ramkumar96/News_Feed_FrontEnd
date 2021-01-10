import React, { Component } from 'react'
import PostService from "../../services/post.service";
import axios from "axios";

const baseURL = "http://localhost:8080/post/";

export default class Newsfeed extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fileInfos: [],

            // userMail: "",
            // userId: "",
            // firstname: "",

            postTitle: "",
            content: "",
            createdOn: "",
            PostDeletedByUser: true,
            PostAcceptedByAdmin: false,
            PostDeletedByAdmin: false,
                 
        }
    }

    componentDidMount() {
        PostService.getposts().then((response) => {
            this.setState({
              fileInfos: response.data,
            });
            console.log(response);
          });
    }

    render() {

        const {fileInfos} = this.state;

        const FinalNewsFeedPost = fileInfos.filter((fileInfo) =>
         fileInfo.postAcceptedByAdmin == true && fileInfo.postDeletedByAdmin == false && fileInfo.postDeletedByUser == false );

        return (
            <div>
                 {FinalNewsFeedPost &&
              FinalNewsFeedPost.map((post, index) => {
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
                    <p>
                    {post.content}
                    </p>
                    <p mt-3>
                          <a href={post.url} class="link-black text-sm">
                            <i class="fas fa-link mr-1"></i> {post.name}
                          </a>
                        </p>
                    <p>
                      <a href="#" className="link-black text-sm">
                        <i className="far fa-thumbs-up mr-1" /> Like (5)
                      </a>
                      <span className="float-right">
                        <a href="#" className="link-black text-sm">
                          <i className="far fa-comments mr-1" />{" "}
                          Comments (5)
                        </a>
                      </span>
                    </p>
                    <p>
                      {/* /.card-body */}
                      <div className="card-footer card-comments">
                        <div className="card-comment">
                          {/* User image */}
                          <img
                            className="img-circle img-sm"
                            src="../dist/img/user4-128x128.png"
                            alt="User Image"
                          />
                          <div className="comment-text">
                            <span className="username">
                              Maria Gonzales
                              <span className="text-muted float-right">
                                8:03 PM Today
                              </span>
                            </span>
                            {/* /.username */}
                            It is a long established fact that a reader
                            will be distracted by the readable content
                            of a page when looking at its layout.
                          </div>
                          {/* /.comment-text */}
                        </div>
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
                              Nora Havisham
                              <span className="text-muted float-right">
                                8:03 PM Today
                              </span>
                            </span>
                            {/* /.username */}
                            The point of using Lorem Ipsum is that it
                            hrs a morer-less normal distribution of
                            letters, as opposed to using 'Content here,
                            content here', making it look like readable
                            English.
                          </div>
                          {/* /.comment-text */}
                        </div>
                        {/* /.card-comment */}
                      </div>
                    </p>
        
                    <form className="form-horizontal">
                      <div className="input-group input-group-sm mb-0">
                        <input
                          className="form-control form-control-sm"
                          placeholder="Type a comment"
                        />
                        <div className="input-group-append">
                          <button
                            type="submit"
                            className="btn btn-primary"
                          >
                            Comment
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                );
              })}
            </div>

           
        )
    }
}
