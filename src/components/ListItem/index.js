import React from "react";
import myimage from "../../assets/images/nice-piccy3.jpg";

class ListItem extends React.Component{
    render(){
        return(
        <div className="posts">
        <div
          className="likes"
          style={{
            width: "40px; border-left:4px solid transparent;",
            float: "left"
          }}
        >
          <span style={{ fontSize: "1em" }}>
            <i className="fa fa-arrow-up custom"></i>6k
            <i className="fa fa-arrow-down custom"></i>
          </span>
        </div>
        <div className="maincontent" id="content">
          <div className="author">
            <span style={{ float: "left" }}>
              <i className="fa fa-user"></i>
            </span>
            <span style={{ float: "left" }}> post by Eliz </span>
            <span style={{ float: "left" }}> 7 hours ago</span>
            <span style={{ float: "left" }} className="effect">
              <i className="fa fa-trophy"></i>
            </span>
          </div>
          <div className="posts-content">
            <h4>{this.props.article.title}</h4>
            <img className="profile-img" alt="complex" src={myimage} />
          </div>
          <div className="bottom" id="commentarea">
            <span style={{ float: "left" }}>
              <i className="fa fa-comment">6k comments</i>
            </span>
            <span style={{ float: "left" }}>
              <i className="fa fa-share">share</i>
            </span>

            <span style={{ float: "left" }}>...</span>
          </div>
        </div>
      </div>)
    }
}

export default ListItem