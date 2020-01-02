import React from "react";
import myimage from "../../assets/images/nice-piccy3.jpg";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { AuthUserContext } from "../Session";
class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: [],
            upvotes: [],
            downvotes: [],
            calculatedvote: 0
        };
        //this.handleVote = this.handleVote.bind(this);
    }
    componentDidMount() {
        const { article } = this.props
        let upvote = article.upvotes;
        let downvote = article.downvotes;
        this.calculatedvote(upvote, downvote)
    }
    calculatedvote(upvotes, downvotes) {
        let total = upvotes - downvotes;
        this.setState({ calculatedvote: total })
    }
    handleVote = (e, authUser) => {
        console.log("currentuser", authUser)
        //this.setState({calculatedvote: this.state.calculatedvote + 1 });
        this.props.firebase
            .article("3BkKXYRVLMNSbupu04zC")
            .set({ calculatedvote: this.state.calculatedvote + 1 })
        console.log("upvotes", this.state.calculatedvote)
    }
    handleDownvote = (e, authUser) => {
        const { article } = this.props
        let initialvote = [authUser.uid];
        console.log("article", article)
        if (article.downvotes == 0) {
            this.props.firebase
                .article(article.uid)
                .set({
                    ...article,
                    downvotes: initialvote
                })
        }
        else {
            //this.setState({ calculatedvote: this.state.calculatedvote - 1 })
            let updatedvote = article.downvotes.push(authUser.uid)
            console.log("article2", article)
            this.props.firebase
                .article(article.uid)
                .set({
                    ...article,
                    downvotes: updatedvote
                })
            console.log("currentuser", authUser)
            console.log("upvotes", this.state.calculatedvote)
        }
    }
    render() {
        // const { upvotes } = this.state
        // const { downvotes } = this.state
        const { countedvote } = this.state
        return (
            <AuthUserContext.Consumer>
                {
                    authUser => (
                        <div className="posts">
                            <div
                                className="likes"
                                style={{
                                    width: "40px; border-left:4px solid transparent;",
                                    float: "left"
                                }}
                            >
                                <span style={{ fontSize: "1em" }}>
                                    <button
                                        onClick={(e) => this.handleVote(e, authUser)}>
                                        <i className="fa fa-arrow-up custom"> </i>
                                    </button>
                                    <br />
                                    {this.state.calculatedvote}
                                    <br />
                                    <button
                                        onClick={(e) => this.handleDownvote(e, authUser)}>
                                        <i className="fa fa-arrow-down custom"></i>
                                    </button>
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
                                        <button> <i className="fa fa-comment">comments</i></button>
                                    </span>
                                    <span style={{ float: "left" }}>
                                        <button>
                                            <i className="fa fa-share">share...</i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
            </AuthUserContext.Consumer>
        )
    }
}
export default compose(withFirebase, withRouter)(ListItem);