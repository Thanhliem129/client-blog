import React, { useContext, useRef } from 'react';
import './login.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Context } from '../../context/context';

const Login = () => {
   const userRef = useRef();
   const passRef = useRef();

   const {dispatch, isLoading } = useContext(Context)
   const handleLogin = async (e) => {
      e.preventDefault();
      dispatch({type:'LOGIN_START'})
      try{
         const res = await axios.post('/auth/login',{
            username: userRef.current.value,
            password: passRef.current.value
         })
         dispatch({type:'LOGIN_SUCCESS', payload: res.data})
         res.data && window.location.replace('/')
      }
      catch(err){
         dispatch({type:'LOGIN_FAILT'})
         // alert('Đăng nhập thất bại')
      }
   }
   return(
      <div className='login'>
         <span className='loginTitle'>Login</span>
         <form className='loginForm' onSubmit={handleLogin}>
            <label className='loginLabel'>Username</label>
            <input 
               className='loginInput' 
               type='text'
               ref={userRef}
               placeholder='Enter your username...' />
            <label className='loginLabel'>Password</label>
            <input 
               className='loginInput' 
               type='password'
               ref={passRef}/>
            <button className='loginButton' type='submit' disabled={isLoading}>Login</button>
         </form>
         <Link to='/register'> 
            <button className='loginRegisterButton'>Register</button>
         </Link>
         
      </div>
   )
}
export default Login;
