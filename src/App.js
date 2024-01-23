import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage/MainPage';
import NewPost from './pages/NewPost/NewPost';
import PostView from './pages/PostView/PostView';
import EditPost from './pages/EditPost/EditPost';


function App() {
  return (
    <Routes >
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />}/>
        <Route path='/posts/new' element={<NewPost />}/>
        <Route path='/posts/:id' element={<PostView />}/> 
        <Route path='/posts/edit/:id' element={<EditPost />}/> 
      </Route>   
    </Routes>
  );
}

export default App;
