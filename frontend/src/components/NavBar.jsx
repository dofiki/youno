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
    <div className='h-[3rem] bg-[#3B1C32] text-white flex 
         justify-around items-center z-15'>
      
      <div className='flex gap-2 items-center hover:opacity-60 transition-all ease-in duration-75'>
        <Link to='/'><img src='/youno-logo.png' alt='youno logo' className='w-5 h-5 hover:' /></Link>
        <p style={{ fontFamily: '"Intel One Mono", monospace', fontSize:"1.2rem", fontWeight:"bolder"}}>
          <Link to='/'>youno</Link></p>
      </div>
      
      <div className='hidden sm:flex sm:gap-5 sm:text-[0.9rem]'>
        <Link to='/' className='hover:text-[#da42ae] transition-all ease-in duration-75'>Home</Link>
        <Link to='/container' className='hover:text-[#da42ae] transition-all ease-in duration-75'>Container</Link>
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
        className="absolute top-[3rem] right-0 bg-[#3B1C32] text-white 
        w-full flex flex-col items-center sm:hidden z-15 p-6"
      >
        <Link to="/" className="py-2 hover:text-[#da42ae]" onClick={handleClick}>Home</Link>
        <Link to="/container" className="py-2 hover:text-[#da42ae]" onClick={handleClick}>Container</Link>
       
      </motion.div>
)}

    </div>
  )
}

export default NavBar
