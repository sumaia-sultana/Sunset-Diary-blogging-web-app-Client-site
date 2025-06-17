 import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
 
 const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

    const handleSignOut = () => {
    signOutUser()
      .then(() => {
        navigate("/");  // Fixed navigation
        Swal.fire({
          icon: "success",
          title: "Logged Out",
          text: "You have been successfully logged out",
        });
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message || "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      });
  };
  const links = <>
    <li className='text-lg bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-semibold'>
      <NavLink to='/'>Home</NavLink></li>
    <li className='text-lg bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-semibold'>
      <NavLink to='/allblogs'>All Blogs</NavLink></li>
    <li className='text-lg bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-semibold'>
      <NavLink to='/featuredBlogs'>Featured Blogs</NavLink></li>
    <li className='text-lg bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-semibold'>
      <NavLink to='/addBlog'>Add blogs</NavLink></li>
    
    <li className='text-lg bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-semibold'>
      <NavLink to={'/wishList'}>Wishlist</NavLink></li>

  </>;
    return (
        <div className='lg:mx-5 mt-5'>
         <nav className="navbar bg-base-100 lg:px-5 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         {links}
      </ul>
    </div>
    <nav className='lg:flex justify-between flex  dark:bg-gray-900 text-black dark:text-white '>
        
    <h1 className=" text-2xl bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent lg:flex md:flex font-bold  ">
        SunsetDiary  </h1>
        
    </nav>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1  text-[#FF5F7E] font-semibold">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-1.5"> 
    { user ? 
     <> 
     <div className="tooltip  tooltip-bottom" data-tip={`${user.displayName } ${user.email}`}>
      <div className="avatar"> 
         <div className="ring-active ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-1">
        <img src= {user.photoURL} />
    </div>   
</div>
</div>      
    <button onClick={handleSignOut}  className="btn bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] hover:from-[#FF9E80] 
       hover:via-[#FF9E80] hover:to-[#FFC75F] text-white font-semibold transition duration-300">Log Out</button>
       </>      
       :
       <>
       <Link to='/register' className="btn bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] hover:from-[#FF9E80] 
       hover:via-[#FF9E80] hover:to-[#FFC75F] text-white font-semibold transition duration-300">Register</Link>
       <Link to='/login' className="btn bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] hover:from-[#FF9E80] 
       hover:via-[#FF9E80] hover:to-[#FFC75F] text-white font-semibold transition duration-300">Log In</Link> 
     </>
    }      
  </div>
  {/* <Theme/> */}
  
 
</nav>
      </div>
    );
 };
 
 export default Navbar;