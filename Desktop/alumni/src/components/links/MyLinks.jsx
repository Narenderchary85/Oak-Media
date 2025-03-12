import React from 'react'
import NavBar from '../NavBar'
import LeftSection from '../LeftSection'
import Connections from './Connections'

const MyLinks = () => {
  return (
    <div>
      <NavBar/>
        <div className='mt-17 flex flex-col lg:flex-row relative'>
        <LeftSection/>
        <Connections/>
        </div>
    </div>
  )
}

export default MyLinks
