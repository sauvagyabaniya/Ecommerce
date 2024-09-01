import React from 'react'
import { Link } from 'react-router-dom'
// import AboutImg from '../../assets/images/discussing.jpeg';


const CommonPages = (props) => {
  return (
  <>
  <div className='font-poppins px-4 py-16 mx-auto sm:max-w-xl ms:max-w-full lg:max-w-screen-xl md:px-20 lg:px-9 lg:py-20'>
    <div className='grid gap-8 lg:grid-cols-2'>
        <div>

        <h2 className='mb-4 text text-3xl font-bold leading-none sm:text-4xl'>
        <span className='mr-2 '>        
        {props.title}
        </span>
        <span>

         {props.subTitle} 
        </span>

        </h2> 
        <p>{props.desc}
        </p>

        <p className='text-black '>{props.desc1}</p>
        <Link to={props.visit}
        className='inline-block py-2 px-4 text-white bg-purple-500 hover:bg-gray-500 rounded-lg no-underline ' >
{props.btnAbout}
        </Link>
    </div>

       <div className="flex justify-right ">
        <img src={props.imageAbout} alt='About Us' className='h-full w-full object-contain animate-moveUpDown' />
        </div>
    </div>
  </div>
  </>
  )
}

export default CommonPages