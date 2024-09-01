//rafce
import React from 'react'
import NotFoundimg from '../../assets/images/pagenotfound.jpeg';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen font-poppins'>
        <h1 className='text-center text-3x1 text-gray-700 mb-4'> OOP'S PAGE NOT FOUND! </h1> 
            <img src={NotFoundimg} alt="" className="max-w-full" />
            <Link to="/"
            className='bg-purple-700  hover:bg-gray-500 text-white py-3 px-5 no-underline'>Back To Home Link   </Link> 
            </div>
    <div>PageNotFound</div>
    
    </>
  )
}

export default PageNotFound