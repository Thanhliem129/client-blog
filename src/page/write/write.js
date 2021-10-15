import React, { useContext, useState } from 'react';
import './write.css';
import axios from 'axios';
import {Context} from '../../context/context';


const Write = () => {
   const [title, setTitle] = useState('');
   const [desc, setDesc] = useState('');
   const [file, setFile] = useState(null);
   const {user} = useContext(Context) ;
   
   const handleSubmit = async (e) => {
      e.preventDefault();
      const newPost = {
         username:user.username,
         title, 
         desc
      }
      if(file){
         const data = new FormData();
         const filename = Date.now() + file.name;
         data.append('name', filename)
         data.append('file', file)
         newPost.photo = filename
         try{
            await axios.post('/upload', data)
         }
         catch(err){}
      }
      try{
         const res = await axios.post('/post',newPost)
         window.location.replace('/post/'+ res.data._id)
      }
      catch(err){}
   }
   
   return(
      <div className='write'>
         {
            file && <img className='writeImg' src={URL.createObjectURL(file)} alt='' />
         }
         
         <form className='writeForm' onSubmit={handleSubmit}>
            <div className='writeFormGroup'>
               <label htmlFor='fileInput'>
                  <i className="fas fa-plus writeIcon"></i>
               </label>
               <input 
                  type='file' 
                  id='fileInput' 
                  style={{display:'none'}} 
                  onChange={e => setFile(e.target.files[0])}/>
               <input 
                  type='text' 
                  placeholder='Title' 
                  className='writeInput' 
                  onChange={(e)=> setTitle(e.target.value)}
                  autoFocus={true} />
            </div>
            <div className='writeFormGroup'>
               <textarea 
                  placeholder='Tell me your story...' 
                  className='writeInput writeText' 
                  onChange={(e)=> setDesc(e.target.value)}
                  type='text'>

               </textarea>
            </div>
            <button className='writeSubmit' type='submit'>Publish</button>
         </form>
      </div>
   )
}
export default Write;
