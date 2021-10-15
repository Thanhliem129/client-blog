import React from 'react';
import SideBar from '../../components/sidebar/sidebar';
import SinglePost from '../../components/singlePost/singlePost';
import './single.css';


const Single = () => {
   return(
      <div className='single'>
         {/* post   */}
         <SinglePost/>
         <SideBar />
         
      </div>
   )
}
export default Single;
