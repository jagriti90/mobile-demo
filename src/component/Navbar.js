import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handlingnav= () =>{
    setNav(!nav)
  }
  return (
    <>
    <div className= ' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <p className='w-full  font-bold text-3xl text-[#00df90]'>REACT.</p>
      <ul className=' hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handlingnav}  className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20} />}
       
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] border-b border-r-gray-900  bg-[#000300 ] ease-out duration-500' :'fixed left-[-100%]'}>
      <p className='w-full font-bold text-3xl text-[#00df90] m-4'>REACT.</p>
      <ul className='uppercase p-4'>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>company</li> 
        <li className='p-4 border-b border-gray-600'>Resources</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar