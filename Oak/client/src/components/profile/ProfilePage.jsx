import React from 'react'
import SideBar from './SideBar';
import ProfileMiddle from './ProfileMiddle';


const ProfilePage = () => {
  return (
    <div className='bg-custom-gray flex flex-row'>
      <SideBar/>
      <ProfileMiddle/>
    </div>
  )
}

export default ProfilePage
