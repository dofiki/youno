import { Link } from 'react-router-dom'

function FooterSection() {
  return (
  <div className='h-[10rem] bg-black z-5 grid sm:flex sm:flex-row sm:gap-5 items-center justify-center'>

  <div className='flex justify-around align-bottom gap-5'>
  
    <div className='flex gap-2 items-center hover:opacity-60 transition-all ease-in duration-75 text-white'>
        <Link to='/'><img src='/youno-logo.png' alt='youno logo' className='w-5 h-5 hover:' /></Link>
        <p style={{ fontFamily: '"Intel One Mono", monospace', fontSize:"1.2rem", fontWeight:"bolder"}}>
          <Link to='/'>youno</Link></p>
      </div>
        
      <div className='flex items-center text-[0.9rem] text-white gap-2'>
        <Link to='/' className='hover:text-[#da42ae] transition-all ease-in duration-75'>Home</Link>
        <Link to='/container' className='hover:text-[#da42ae] transition-all ease-in duration-75'>Container</Link>
      </div>

  </div>

  <div className='flex justify-center'>
    <p className='text-gray-500 text-[0.7rem]'> &copy;2025 youno. All rights reserved.</p>
  </div>

  </div>
  )
}

export default FooterSection
