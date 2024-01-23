import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import PostHeader from "../../components/PostHeader/PostHeader";
import './PostView.css'

 function PostView() {
    const [post, setPost] = useState(null)
    const params = useParams();
    const {id} = params

    const urlGETandDELETEPostView = `http://localhost:7070/posts/${id}`

    async function getPost(url){
        const resp = await fetch(url);
        const data = await resp.json();
        setPost(data);
    }

    async function deletePost(url){
      await fetch(url, {
        method: 'DELETE'
      });
  }

    const onDeletePostHandler =()=>{
      deletePost(urlGETandDELETEPostView)
    }

    useEffect(()=>{
        getPost(urlGETandDELETEPostView)
    },[])

  return (
    <Card className='post_view__container'>
      <PostHeader />
      {post && <div className='post_view__content'>{post.post.content}</div>}
      <div className="post_view__btns">
        <Link to='/'>
          <button className="btn btn-delete"onClick={onDeletePostHandler}>Удалить</button>      
        </Link>
        <Link to={`/posts/edit/${id}`}>
          <button className="btn">Редактировать</button>      
        </Link>
      </div>      
      <Link className='btn-close link' to='/'>&times;</Link>
    </Card>
      
  )
}

export default PostView;
