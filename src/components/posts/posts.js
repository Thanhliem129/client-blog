import React from 'react';
import Post from '../post/post';
import './posts.css';


const Posts = ({posts}) => {
   return(
      <div className='posts'> 
      {
         posts.map((item, index)=>(
            <Post key={index} post={item} /> 
         ))
      }
      </div>
   )
}
export default Posts;