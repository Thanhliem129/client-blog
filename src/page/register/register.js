import React, { useState } from 'react';
import './register.css';
import { Link } from "react-router-dom";
import axios from 'axios';


const Register = () => {

   const [username, setUsername]= useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   // const [err, setErr]= useState('Email đã được đăng ký');

   const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        const res = await axios.post('/auth/register',{ username, email, password});
         res.data && window.location.replace('/login');
      }
      catch(err){
          alert('Email đã được đăng ký')
      }
     
   }
   return(
      <div className='register'>
         <span className='registerTitle'>Register</span>
         <form className='registerForm' onSubmit={handleSubmit}>
            <label className='registerLabel'>Username</label>
            <input 
               className='registerInput' 
               type='text' 
               onChange={(e)=>setUsername(e.target.value)}
               placeholder='Enter your user name...' />

            <label className='registerLabel'>Email</label>
            <input 
               className='registerInput' 
               type='email'
               placeholder='Email...'
               onChange={(e)=>setEmail(e.target.value)}
               />

            <label className='registerLabel'>Password</label>
            <input 
               className='registerInput' 
               type='password'
               placeholder='Password...'
               onChange={(e)=>setPassword(e.target.value)}
            />

            <button className='registerButton' type='submit'>Regiter</button>
         </form>
         <Link to='/login'> 
            <button className='registerLoginButton'>Login</button>
         </Link>
      </div>
   )
}
export default Register;
