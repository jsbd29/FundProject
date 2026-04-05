import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='bg-slate-800 shadow-lg flex items-center
    justify-around py-3 px-32 fixed top-0 left-0 w-full'>
        <Link>
        <span className='font-semibold text-lg flex items-center gap-3 text-blue-400'></span>
        
        </Link>
    
    
    </nav>
        
        </>
  )
}

export default Navbar