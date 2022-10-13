import {Link} from "react-router-dom"

const Post = ({post})=>{

    return(
        <Link to={`/posts/${post.id}`} className="post-card">
            <div className="post-title">
              <h2>{post.title}</h2>
            </div>
            <div className="post-image">
            <img src = {post.image} alt = "post" />
            </div>
        </Link>
    )
} 

export default Post;