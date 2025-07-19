import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className='w-screen h-[3rem] bg-black text-white flex 
         justify-between pl-[15rem] pr-[15rem] items-center'>
      
      <div className='flex gap-2 items-center'>
        <img src='/youno-logo.png' alt='youno logo' className='w-4 h-4' />
        <p style={{ fontFamily: '"Intel One Mono", monospace', fontSize:"1.2rem", fontWeight:"bolder"}}>youno</p>
      </div>
      
      <div className='flex gap-5'>
        <Link to='/'>Home</Link>
        <Link to='/container'>Container</Link>
      </div>
    </div>
  )
}

export default NavBar
