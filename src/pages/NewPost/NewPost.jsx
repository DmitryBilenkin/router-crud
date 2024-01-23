import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import './NewPost.css';

 function NewPost() {
  const [newPostValue, setNewPostValue] = useState('')
  const [postsBody, setPostsBody] = useState({});
  const navigate = useNavigate();

  const urlPOSTNewPost = 'http://localhost:7070/posts';

  async function postNewPost(url, body){
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers:{
        'Content-Type':'application/json'
      }
    });
  };

  const onSetNewPostHandler =(e)=>{
    setNewPostValue(e.target.value)
  }

  useEffect(()=>{
    setPostsBody({
      id:0,
      content: newPostValue
    })
  },[newPostValue])
  
  const publicationHandler =(e)=>{
      e.preventDefault();

      postNewPost(urlPOSTNewPost, postsBody);
      setNewPostValue('');
      navigate(-1);
  }

  return (
    <Card className="new_post__container">
      <h2 className='new_post__title' >Новый пост</h2>
        <form className="new_post-form__container" onSubmit={publicationHandler}>
          <textarea className="new_post-form__textarea" onChange={onSetNewPostHandler} value={newPostValue}/>
          <button className="btn" type="submit">Опубликовать</button> 
        </form>
        <Link className='btn-close link' to='/'>&times;</Link>
    </Card>          
  )
}

export default NewPost;
