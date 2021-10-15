import React from 'react';
import './post.css';
import {Link} from 'react-router-dom'

const Post = ({post}) => {
   const PF = 'https://thanhliem-blog.herokuapp.com/images/';
   return(
      <div className='post'>
         {
            post.photo && <img className='postImage' src={PF + post.photo} alt='' /> 
         }
         <div className='postInfo'>
            <div className='postCats'>
               {
                  post && post.categories.map((item)=>(
                     <span className='postCat'>{item.name}</span>
                  ))
               } 
            </div>
            <Link className='' to={`/post/${post._id}`}><span className='postTitle'>{post.title}</span></Link>
            <hr/>
            <span className='postDate'>{new Date(post.createdAt).toDateString()}</span>
         </div>
         <p className='postDesc'>
            {post.desc}
         </p>
      </div>
   )
}
export default Post;