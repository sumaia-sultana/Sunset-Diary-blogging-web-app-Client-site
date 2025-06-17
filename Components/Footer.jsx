import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { NavLink } from 'react-router';
import { FaFacebook, FaGoogle, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const {user} = use(AuthContext)
    return (
         <footer className="footer mt-10 pt-10 lg:justify-center md:justify-center bg-base-200 rounded p-10">
             <div className='justify-between lg:text-center mx-auto '>
    <h1 className=" text-2xl bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent  font-bold  ">
        SunsetDiary </h1>
    </div>
    <p className='text-gray-500 lg:w-full md:w-full w-1/2'>
    SunsetDiary is a blogging page. Here, the people can share & read various kinds of blogs .</p>
  <nav className=" ">
    <ul className='lg:flex md:flex lg:text-center lg:gap-4 gap-2'>
    <>
    <li className='bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-semibold'>
      <NavLink to='/'>Home</NavLink></li>
    <li className='bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-semibold'>
      <NavLink to='/allblogs'>All Blogs</NavLink></li>
    <li className='bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-semibold'>
      <NavLink to='/featureBlog'>Featured Blogs</NavLink></li>
    <li className='bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-semibold'>
      <NavLink to='/addBlog'>Add blogs</NavLink></li>
    {user && 
    <li className='bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-semibold'>
      <NavLink to={`/wishList/${user.email}`}>Wishlist</NavLink></li>}
     </>
    </ul>

  </nav>
  <div className='flex text-[#FF5F7E] text-3xl'>
    <FaYoutube></FaYoutube>
    <FaFacebook></FaFacebook>
    <FaGoogle></FaGoogle>
  </div>
  
  <aside>
    <div className='lg:flex gap-2 lg:w-full md:flex'>Copyright © {new Date().getFullYear()} - All right reserved by 
         
        <h1 className="bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent  lg:flex md:flex relative  font-bold  ">
        SunsetDiary</h1></div>
  </aside>
</footer>
    );
};

export default Footer;