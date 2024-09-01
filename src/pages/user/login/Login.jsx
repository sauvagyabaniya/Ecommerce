import React from 'react'
import { NavLink } from 'react-router-dom';

const Login =()=> {
  return (
   <div className="font-poppins max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md rounded-md my-2">

    <h1 className="text-2xl font-semibold mb-4"></h1>
    <form action="">
        <h1> Login </h1> <br />
        <p>Please enter your valid email and password</p>
            <div className="mb-4">
                <label htmlFor="email"
                className='block text-sm font-medium text-gray-700'>
                    Email
                </label>
                <input type="text" id='email' name='email' 
                className='mt-1 px-4 py-3 border border-gray-300 rounded-md w-full focus:ring-indigo-500' 
                placeholder='Enter your email'/>
            </div>
            <div className="mb-4">
                <label htmlFor="password"
                className='block text-sm font-medium text-gray-700'>
                    Password
                </label>
                <input type="text" id='password' name='password' 
                className='mt-1 px-4 py-3 border border-gray-300 rounded-md w-full focus:ring-indigo-500'  placeholder="Enter your password" />
            <div className="mt-4">
                <button type='submit'
                className='py-2 px-4 bg-purple-600 text-white rounded-md w-full focus:ring-purple-600 '>
                    Login
                    </button>
            </div>
            <span className=''>Don't have an account? 
        <NavLink to="S&S-register" className='text-blue-600 hover:text-gray-500 text-decoration-none p-2'>Register</NavLink></span>
            </div>
        </form>
   </div>
  )
}

export default Login