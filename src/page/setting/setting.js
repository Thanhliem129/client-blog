import React, { useContext, useState } from 'react';
import './setting.css';
import Sidebar from '../../components/sidebar/sidebar'
import { Context } from '../../context/context';
import axios from 'axios'

const Setting = () => {

   const {user, dispatch} = useContext(Context);
   const PF = 'https://thanhliem-blog.herokuapp.com/images/';

   const [file, setFile] = useState(null);
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [success, setSuccess] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch({type:'UPDATE_START'})
      const updateUser = {
         userId:user._id,
         username, 
         email,
         password
      }
      if(file){
         const data = new FormData();
         const filename = Date.now() + file.name;
         data.append('name', filename)
         data.append('file', file)
         updateUser.profilePic = filename
         try{
            await axios.post('/upload', data)
            
         }
         catch(err){

         }
      }
      try{
         const res = await axios.put('/user/' + user._id, updateUser)
         setSuccess(true)
         dispatch({type:'UPDATE_SUCCESS', payload:res.data})
      }
      catch(err){
         dispatch({type:'UPDATE_FAILT'})
      }
   }

   return (
      <div className='setting'>
         <div className='settingWrapper'>
            <div className='settingTitle'>
               <span className='settingUpdateTitle'>Update your Acount</span>
               <span className='settingDeleteTitle'>Delete Acount</span>
            </div>
            <form className='settingForm' onSubmit={handleSubmit}>
               <label>Profile Picture</label>
               <div className='settingPP'>
               
                  <img className='settingPPImg' src={ file ? URL.createObjectURL(file) : (PF + user.profilePic) } alt='' /> 
             
                  {/* <img className='settingPPImg' src={PF + user.profilePic} alt='' /> */}
                  <label htmlFor='fileInput'>
                     <i className="far fa-user settingPPIcon"></i>
                  </label>
                  <input 
                     type='file' 
                     id='fileInput' 
                     style={{display:'none'}}
                     onChange={e => setFile(e.target.files[0])} />
               </div>
               <label>Username</label>
               <input  
                  type='text' 
                  placeholder={user.username}
                  onChange={e => setUsername(e.target.value)} />
               <label>Email</label>
               <input
                  type='email' 
                  placeholder={user.email}
                  onChange={e => setEmail(e.target.value)} />
               <label>Password</label>
               <input 
                  type='password'
                  onChange={e => setPassword(e.target.value)} />
               <button className='settingSubmit' type='submit'>Update</button>
               {
                  success && <span style={{fontStyle:'italic', color:'#3590de', textAlign:'center', marginTop:15}}>Your profile has been uppdated</span>
               }
            </form>
         </div>
         <Sidebar />
      </div>
   )
}
export default Setting;