import { Link } from "react-router-dom";
import Post from "../Post/Post";
import Card from "../Card/Card";

import './PostItem.css'

function PostsItem(props) {
  return (
    <Card >
      <Link to={`/posts/${props.post.id}`} className='post link'>
        <Post content={props.post.content}/>        
      </Link>
    </Card> 
  )
}

export default PostsItem;
