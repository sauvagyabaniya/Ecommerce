import React from 'react'

const Register =()=> {
  return (
   <div className="font-poppins max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md rounded-md my-2">

    <h1 className="text-2xl font-semibold mb-4"></h1>
    <form action="">
        <h1> Register </h1> <br />
        <p>Register your id if you are new in this website</p>
        <div className="mb-4">
                <label htmlFor="Full Name"
                className='block text-sm font-medium text-gray-700'>
                    Full Name
                </label>
                <input type="text" id='Full Name' name='Full Name' 
                className='mt-1 px-4 py-3 border border-gray-300 rounded-md w-full'  placeholder="Enter your Full Name" />
                </div>

                {/* <div className="mod-login-birthday clearfix" >
                <div className="mod-birthday-month">
                    <span data-meta="Field" id="month" class="next-select large mod-fusion-select mod-birthday-month" tabindex="0">
                        <span className="next-select-inner" placeholder="Month" >

                        </span>
                    </span>
                </div>
                </div> */}

            <div className="mb-4">
                <label htmlFor="email"
                className='block text-sm font-medium text-gray-700'>
                    Email
                </label>
                <input type="text" id='email' name='email' 
                className='mt-1 px-4 py-3 border border-gray-300 rounded-md w-full' 
                placeholder='Enter your email'/>
            </div>

            <div className="mb-4">
                <label htmlFor="password"
                className='block text-sm font-medium text-gray-700'>
                    Password
                </label>
                <input type="text" id='password' name='password' 
                className='mt-1 px-4 py-3 border border-gray-300 rounded-md w-full'  placeholder="Enter your password" />
                </div>
            <div className="mb-4">
                <label htmlFor="conform password"
                className='block text-sm font-medium text-gray-700'>
                    Conform Password
                </label>
                <input type="text" id='conform password' name='conform password' 
                className='mt-1 px-4 py-3 border border-gray-300 rounded-md w-full focus:ring-indigo-500'  placeholder="Enter same password" />
            <div className="mt-4">
                <button type='submit'
                className='py-2 px-4 bg-purple-500 text-white rounded-md w-full focus:ring-purple-500'>
                    Register
                    </button>

            </div>
            <div>By clicking <div className="text-blue-700 text-decoration-underline"> "SIGN UP"    </div>I agree to Terms of Use and Privacy Policy</div>
            
            </div>
        </form>
   </div>
  )
}

export default Register