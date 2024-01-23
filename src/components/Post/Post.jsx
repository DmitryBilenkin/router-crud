import PostHeader from "../PostHeader/PostHeader";
import './Post.css'

function Post(props) {
  return (
    <div className="post-container">
        <PostHeader />            
        <div className="post-content">{props.content}</div>  
    </div>
  )
}

export default Post;
