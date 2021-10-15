import React, {useContext, useEffect, useState} from 'react';
import { useLocation } from 'react-router';
import './singlePost.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../context/context';


const SinglePost = () => {
   const location = useLocation();
   const PF = 'https://thanhliem-blog.herokuapp.com/images/';
   const {user} = useContext(Context)

   const [post, setPost] = useState({});
   const [title, setTitle] = useState('');
   const [desc, setDesc] = useState('');
   const [updateMode, setUpdateMode] = useState(false);

   const path = location.pathname.split('/')[2];

   useEffect(()=>{
      const fetchPosts = async () => {
         const res = await axios.get(`/post/${path}`)
         setPost(res.data);
         setTitle(res.data.title)
         setDesc(res.data.desc)
      }
      fetchPosts()
   },[path])

   const handleDelete = async () => {
      try{
         await axios.delete(`/post/${post._id}`,{
            data:{username:user.username}
         })
         window.location.replace('/')
      }
      catch(err){

      }
      
   }
   const handleUpdate = async () => {
      try{
         await axios.put(`/post/${post._id}`,{
            username:user.username, title, desc
         })
         window.location.reload()
      }
      catch(err){

      }
   }
   return (
      <div className='singlePost'>
         <div className='singlePostWrapper'>
            {
               post && <img className='singlePostImg' src={ PF + post.photo} alt='' />
            }
            {
               updateMode ? 
               <input 
                  type='text'
                  className='singlePostTitleInput' 
                  autoFocus={true}
                  value={title}
                  onChange={(e)=> setTitle(e.target.value)} />
               :
               <h1 className='singlePostTitle'> 
                  {title}
                  {
                     post.username === user?.username && (
                        <div className='singlePostEdit'>
                           <i className="far fa-edit singlePostIcon" onClick={()=> setUpdateMode(true)}></i>
                           <i className="far fa-trash-alt singlePostIcon" onClick={handleDelete}></i>
                        </div>
                     )
                  }
                  
               </h1>
            }
            
            <div className='singlePostInfo'>
               <span className='singlePostAuthor' > 
                  Author : 
                  <Link to={`/?user=${post.username}`}><b>{post.username}</b></Link>
                  
               </span>
               <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
            </div>
            {
               updateMode ? 
                  <textarea
                     type='text'
                     className='singlePostDescInput'
                     value={desc}
                  />    
               :
               <p className='singlePostDesc'>
              {desc}
            </p>
            }
            {
               updateMode && <button className='singlePostButton' onClick={handleUpdate}>Save</button>
            }
            
         </div>
      </div>
   )
}
export default SinglePost;