import React, { useEffect, useState } from 'react';
import './sidebar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SideBar = () => {
   const [cat, setCats] = useState([]);

   useEffect(()=>{
      const getCats = async () => {
         const res = await axios.get('/category/')
         // console.log(res.data)
         setCats(res.data)
      }
      getCats()
   },[])
   // console.log(cat)

   return(
      <div className='sidebar'> 
         <div className='sidebarItem'>
            <span className='sidebarTitle'>About me</span>
            <img alt='' className='sidebarImage' src='https://img.wallpapersafari.com/phone/750/1334/76/49/QxW34B.jpg' />
            <p className=''>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
               ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam 
            </p>
         </div>
         <div className='sidebarItem'>
            <span className='sidebarTitle'>categories</span>
            <ul className='sidebarList'>
               {cat.map((item, index)=>(
                  <Link to={`/?cat=${item.name}`} key={index}>
                     <li className='sidebarListItem'>{item.name}</li>
                  </Link>
                  
               ))}
            </ul>
         </div>
         <div className='sidebarItem'>
            <span className='sidebarTitle'>follow us</span>
            <div className='sidebarSocial'>
               <i className="fab fa-facebook-square sidebarIcon"></i>
               <i className="fab fa-pinterest-square sidebarIcon"></i>
               <i className="fab fa-twitter-square sidebarIcon"></i>
               <i className="fab fa-instagram-square sidebarIcon"></i>
            </div>
         </div>

      </div>
   )
}
export default SideBar;