import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Image from "../image.png"
import { connect } from 'react-redux'

class Home extends Component{
render(){
    const { posts } = this.props;
    const postlist = posts.length ? (
        posts.map(post => {
            return(
                <div className="post card" key={post.id}>
                <img src={Image} alt="An Image" />
                    <div className="card-content">
                        <Link to={"/" + post.id}><p className="card-title grey-text">{post.title}</p></Link>
                        <p>{post.body}</p>
                    </div>
                </div>
            )
        })
    ) : (
        <div className="center">
            No Posts yet!
        </div>
    )
    return(
        <div className="container home">
            <h3 className="center">Posts!</h3>
            {postlist}
        </div>
    )
}
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)