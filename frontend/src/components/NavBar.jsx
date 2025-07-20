import { FaHamburger } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useState } from "react";
import { motion } from 'framer-motion';

function NavBar() {
  const [hamBurger, setHamBurger] = useState(false);

  function handleHamBurger() {
    setHamBurger(!hamBurger); 
  }

  function handleClick() {
    setHamBurger(false); 
  }

  return (
    <div className='w-screen h-[3rem] bg-black text-white flex 
         justify-around items-center z-10'>
      
      <div className='flex gap-2 items-center'>
        <Link to='/'><img src='/youno-logo.png' alt='youno logo' className='w-5 h-5' /></Link>
        <p style={{ fontFamily: '"Intel One Mono", monospace', fontSize:"1.2rem", fontWeight:"bolder"}}>
          <Link to='/'>youno</Link></p>
      </div>
      
      <div className='hidden sm:flex sm:gap-5 sm:text-[0.9rem]'>
        <Link to='/' className='hover:text-blue-400 transition-all ease-in duration-75'>Home</Link>
        <Link to='/container' className='hover:text-blue-400 transition-all ease-in duration-75'>Container</Link>
        <Link to='/profile' className='hover:text-blue-400 transition-all ease-in duration-75'>Profile</Link>
      </div>

      <div className='flex gap-2 sm:hidden'>
        <FaHamburger size={18} className="cursor-pointer" onClick={handleHamBurger}/>
       </div>

     {hamBurger && (
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute top-[3rem] right-0 bg-black text-white 
        w-full flex flex-col items-center sm:hidden z-5 p-6"
      >
        <Link to="/" className="py-2 hover:text-blue-400" onClick={handleClick}>Home</Link>
        <Link to="/container" className="py-2 hover:text-blue-400" onClick={handleClick}>Container</Link>
        <Link to="/profile" className="py-2 hover:text-blue-400" onClick={handleClick}>Profile</Link>
      </motion.div>
)}

    </div>
  )
}

export default NavBar
