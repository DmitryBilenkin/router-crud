import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostsItem from "../../components/PostItem/PostsItem";
import Card from "../../components/Card/Card";
import './MainPage.css'

function MainPage() {
    const [posts, setPosts] = useState([]);
    const urlGETPosts = 'http://localhost:7070/posts';

    async function getPosts(url){
        const resp = await fetch(url);
        const data = await resp.json();
        setPosts(data);
    }

    useEffect(()=>{
        getPosts(urlGETPosts)                
    },[])
    
  return (
    <div>
        <Card className='post-header'>       
            <Link to='/posts/new'>
                <button className="btn">Создать пост</button>
            </Link>       
        </Card>        
        <main>
            {posts.map(post => <PostsItem key={post.id} post={post} />)}
        </main>        
    </div>
  )
}

export default MainPage;
