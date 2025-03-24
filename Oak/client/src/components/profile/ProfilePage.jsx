import React from 'react'
import SideBar from './SideBar';
import ProfileMiddle from './ProfileMiddle';
import EditProfile from './EditProfile';
import { useSelector } from 'react-redux';


const ProfilePage = () => {
  const open=useSelector(state=>state.posts.opene)
  console.log(open)
  return (
    <div className='bg-custom-gray flex flex-row'>
      <SideBar/>
      <ProfileMiddle/>
     { open ? (
            <EditProfile/>
     ):(<></>)
     }
    </div>
  )
}

export default ProfilePage
