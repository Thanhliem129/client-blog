import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { Context } from '../../context/context';
import './topBar.css';

const TopBar = () => {
   const {user, dispatch} = useContext(Context);
   const PF = 'https://thanhliem-blog.herokuapp.com/images/';

   const handleLogout = () => {
      dispatch({type:'LOGOUT'})
   }
   return(
      <div className='top-bar'>
         <div className='topLeft'>
            <i className="fab fa-facebook-square topIcon"></i>
            <i className="fab fa-pinterest-square topIcon"></i>
            <i className="fab fa-twitter-square topIcon"></i>
            <i className="fab fa-instagram-square topIcon"></i>
         </div>
         <div className='topCenter'>
            <ul className='topList'>
               <li className='topListItem'><Link className='link' to='/'>home</Link> </li>
               <li className='topListItem'><Link className='link' to='/'>about</Link></li>
               <li className='topListItem'><Link className='link' to='/'>contact</Link></li>
               <li className='topListItem'><Link className='link' to='/write'>write</Link></li>
               <li className='topListItem' onClick={handleLogout}>
                  {user && 'logout'}
               </li>
            </ul>
         </div>
         <div className='topRight'>
            {
               user ? 
               <Link to='/setting'>
                   <img className='topImage' src={PF + user.profilePic} alt=''/>
               </Link>
               : 
               <>
                  <Link className='link' to='/login'>LOGIN</Link>
                  <Link className='link' to='/register' style={{marginLeft:10}}>REGISTER</Link>
               </>
            }
            
         <i className="fas fa-search topSearchIcon"></i>
         </div>
         
      </div>
   )
}
export default TopBar;
