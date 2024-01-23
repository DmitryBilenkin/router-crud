import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import './EditPost.css'

function EditPost() {
 
    const [editPost, setEditPost] = useState(null)
    const [editContent, setEditContent] = useState('')
    const [editPostPUT, setEditPostPUT] = useState(null)

    const params = useParams()
    const {id} = params

    const urlEditPUT = `http://localhost:7070/posts/${id}`
    const urlEditGET = `http://localhost:7070/posts/${id}`

    async function getEditPost(url){
        const resp = await fetch(url);
        const data = await resp.json();
        setEditPost(data);
    }

    async function putEditPost(url, body){
       await fetch(url,{
            method: 'PUT',
            body: JSON.stringify(body),
            headers:{
                'Content-Type':'application/json'
            }
        })
    }

    const onValueEditPostTextareaHandler = (e)=>{
        setEditContent(e.target.value)
    }

    const onSaveHandler =()=>{  
        putEditPost(urlEditPUT, editPostPUT)        
    };

    useEffect(()=>{
        getEditPost(urlEditGET)
    },[]);    

    useEffect(()=>{
        if(editContent){
            setEditPostPUT({...editPost.post, content: editContent}) 
        }                    
    },[editContent]);  

    useEffect(()=>{
        if(editPost){
            setEditContent(editPost.post.content)
        }        
    },[editPost]); 

  return (
    <Card className='edit_post__container'>
        <h2 className='edit_post__title'>Редактирование</h2>
        {editPost && <textarea className='edit_post__textarea' onChange={onValueEditPostTextareaHandler} value={editContent}/>}
        <Link to={`/posts/${id}`}>
            <button className="btn" onClick={onSaveHandler}>Cохранить</button>
        </Link>
        <Link className='btn-close link' to={`/posts/${id}`}>&times;</Link>
    </Card>
  )
}

export default EditPost;
