import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import Logo from '../../assets/images/logo.png'
import apple from '../../assets/images/apple.png'
import google from '../../assets/images/google.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="font-poppins bg-purple-900 text-red-300 p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <img src={Logo} alt="SastoBazar" className="h-16 mb-4 md:mb-0" />
          <p className="text-sm text-white-400">Your online shop</p>
        </div>
        
        {/* <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">FAQ</a>
        </div> */}
        <div className="flex space-x-4 mt-15 md:mt-0">
          <a href="https://www.facebook.com" aria-label="Facebook" className="text-gray-100 hover:text-gray-500 mt-1 px-4 py-3 border border-gray-300 rounded-md w-full">
            <FiFacebook className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram" className="text-gray-100 hover:text-gray-500 mt-1 px-4 py-3 border border-gray-300 rounded-md w-full">
            <FiInstagram className="h-5 w-5" />
          </a>
          <a href="https://www.youtube.com" aria-label="LinkedIn" className="text-gray-100 hover:text-gray-500 mt-1 px-4 py-3 border border-gray-300 rounded-md w-full">
            <FiYoutube className="h-5 w-5" />
          </a>
          <a href="https://www.twitter.com" aria-label="Twitter" className="text-gray-100 hover:text-gray-500 ring-1 mt-1 px-4 py-3 border border-gray-300 rounded-md w-full">
            <FiTwitter className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn" className="text-gray-100 hover:text-gray-500 mt-1 px-4 py-3 border border-gray-300 rounded-md w-full">
            <FiLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="mt-6 border-t border-black-700 pt-4 text-center text-sm">
        <div className="flex space-x-4">
          <div>
      <h5> Happy Shopping </h5>
      <a href="#" className='text-gray-50 text-decoration-none'> Download now </a>
          </div>
      </div>

          <div className="w-full md:w-1/4 px-3 text-center">
          <h2 className=''> </h2>
          <ul> </ul>
          {/* render abputus page  */}
          <Link to="/about-us-details" className="text-gray-100 hover:text-purple-600 "> About-us </Link>
          <div>
          </div>
          
          <img src={apple} alt="Apple Store" className="h-15 w-40 "  /> 
        <div>
          <img src={google} alt="Google Play Store" className="h-16 w-40 " />
        </div>
          {/* <img src="../../assets/images/namaste.png" alt="namaste" srcset="" /> */}

        </div>
        <p>&copy; 2024 S & S Electronics. All rights reserved.</p>
        <p>
          <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Service</a> | <a href="#" className="hover:underline">Refund Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;