import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className='w-screen h-[3rem] bg-black text-white flex justify-between pl-[15rem] pr-[15rem] items-center'>
      {/* logo */}
      <div className='flex gap-2'>
        <img src='/youno-logo.png' alt='youno logo' className='w-6 h-6' />
        <p className='italic bold'>youno</p>
      </div>
      {/* menu*/}
      <div className='flex gap-5'>
        <Link to='/'>Home</Link>
        <Link to='/container'>Container</Link>
      </div>
    </div>
  )
}

export default NavBar
