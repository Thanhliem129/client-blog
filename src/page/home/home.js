import React, { useEffect, useState } from 'react';
import './home.css';
import Header from '../../components/header/header';
import Posts from '../../components/posts/posts';
import SideBar from '../../components/sidebar/sidebar';
import axios from 'axios';
import { useLocation } from 'react-router';

const Home = () => {
   const [posts, setPosts] = useState([]);
   const {search} = useLocation();

   useEffect(()=>{
      const fetchPosts = async () => {
         const res = await axios.get('/post'+ search)
         setPosts(res.data);
      }
      fetchPosts()
   },[search])
   // console.log(search)
   return (
      <> 
         <Header />
         <div className='home'>
            <Posts posts={posts} />
            <SideBar />
         </div>
         
      </>
   )
}
export default Home
