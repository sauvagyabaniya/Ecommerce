import React from 'react'
import {FaViber} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const TopHeader = (props) => {
  console.log(props);
  return (
    <>
    <div className='font-poppins pt-1 border -b p-2 px-4 flex justify-between item-center'>
      <div className='flex item-center space-x-2'>
        <FaViber className="text-gray-500"/>
        <span className='text-sm text-black-700'>Customer Support </span>
      </div>


      <div className='flex item-center space-x-2'>
      <button className='text-purple-800 hover:text-gray-500 text-decoration-none p-2'> {props.title} </button>  
        <NavLink to="S&S-login" className='text-purple-600 hover:text-gray-500 text-decoration-none p-2' >Save more on app  </NavLink>
        <NavLink to="S&S-login" className='text-purple-600 hover:text-gray-500 text-decoration-none p-2' >Help & Support  </NavLink>
        <NavLink to="S&S-login" className='text-purple-600 hover:text-gray-500 text-decoration-none p-2' >Logins </NavLink>
        <NavLink to="S&S-register" className='text-purple-600 hover:text-gray-500 text-decoration-none p-2'>Register</NavLink>

        {/* <span className='text-sm text-gray-700'>Customer Support </span> */}
        {/* <Navlink className='text-gray-700 hover:text-blue-500'>Register</Navlink>   */}
        {/* <NavLink to= ""></NavLink>   */}
    </div>
    </div>
    </>
  )
}
export default TopHeader;