import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
  const [nav, setNav] =useState(false);

  const handleNav = ()=>{
    setNav(!nav);
  };
  return (
    <div className='flex justify-between text-white items-center px-4 h-24 max-w-[1240px] mx-auto border-b border-b-gray-900'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] hover:cursor-pointer '>React.</h1>
      <ul className='md:flex hidden'>
        <li className='p-4 hover:cursor-pointer hover:text-[#00df9a] '>Home</li>
        <li className='p-4 hover:cursor-pointer hover:text-[#00df9a] '>Company</li>
        <li className='p-4 hover:cursor-pointer hover:text-[#00df9a] '>Resources</li>
        <li className='p-4 hover:cursor-pointer hover:text-[#00df9a] '>About</li>
        <li className='p-4 hover:cursor-pointer hover:text-[#00df9a] '>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden hover:cursor-pointer '>
        {!nav ? <AiOutlineClose size={20}/>:<AiOutlineMenu size={22}/>}
      <div className={!nav ? 'left-0 top-16 w-[100%] h-[100%] absolute border-r border-r-gray-700  ease-in-out duration-500  hover:cursor-pointer backdrop-blur-sm' : 'fixed left-[-100%]'}>
        <ul className='pt-4 uppercase  p-4 border-t border-b-[#00df9a] '>
        <li className='p-4 border-b border-b-[#00df9a]  hover:cursor-pointer hover:text-gray-400'>Home</li>
        <li className='p-4 border-b border-b-[#00df9a]  hover:cursor-pointer hover:text-gray-400'>Company</li>
        <li className='p-4 border-b border-b-[#00df9a]  hover:cursor-pointer hover:text-gray-400'>Resources</li>
        <li className='p-4 border-b border-b-[#00df9a]  hover:cursor-pointer hover:text-gray-400'>About</li>
        <li className='p-4 border-b border-b-[#00df9a]  hover:cursor-pointer hover:text-gray-400'>Contact</li>
        </ul>
      </div>
        
      </div>
    </div>
  )
}

export default Navbar
