import React from 'react';
import './header.css';


const Header = () => {
   return(
      <div className='header'>
         <div className='headerTitles'>
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
         </div>
         <img className='headerImg' src='https://wallpaperaccess.com/full/4002726.jpg' alt=''  />
      </div>
   )
}

export default Header;
