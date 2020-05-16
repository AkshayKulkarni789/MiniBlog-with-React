import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class Post extends Component {
    clickHandler = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/')
    }
    render() {
        const post = this.props.post ? (
            <div className="post">
                <h3 className="center">{this.props.post.title}</h3>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.clickHandler}>Delete Post</button>
                </div>
            </div>
        ) : (
            <div className="center">
                Post Currently Unavailable...
            </div>
        )
        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return{
        post: state.posts.find((post) => {
            return post.id == id
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)