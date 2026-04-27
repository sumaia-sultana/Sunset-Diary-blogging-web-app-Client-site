import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { NavLink } from 'react-router';
import { FaFacebook, FaGoogle, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const {user} = use(AuthContext)
    return (
  <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 mb-12">
                    
                    {/* Brand & Description */}
                    <div className="md:col-span-12 lg:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
                        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#FF5F7E] to-[#FF9E80] bg-clip-text text-transparent mb-4 tracking-tight">
                            SunsetDiary
                        </h1>
                        <p className="text-gray-500 leading-relaxed max-w-sm">
                            SunsetDiary is a vibrant blogging community. Discover stories, share your thoughts, and connect with readers around the world.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-6 lg:col-span-4 flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-bold text-gray-800 mb-5">Quick Links</h3>
                        <nav className="flex flex-col gap-3 items-center md:items-start">
                            <NavLink to="/" className="text-gray-500 hover:text-[#FF5F7E] transition-colors font-medium">Home</NavLink>
                            <NavLink to="/allblogs" className="text-gray-500 hover:text-[#FF5F7E] transition-colors font-medium">All Blogs</NavLink>
                            <NavLink to="/featuredBlogs" className="text-gray-500 hover:text-[#FF5F7E] transition-colors font-medium">Featured Blogs</NavLink>
                            <NavLink to="/addBlog" className="text-gray-500 hover:text-[#FF5F7E] transition-colors font-medium">Add Blog</NavLink>
                            {user && (
                                <NavLink to="/wishlist" className="text-gray-500 hover:text-[#FF5F7E] transition-colors font-medium">Wishlist</NavLink>
                            )}
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className="md:col-span-6 lg:col-span-3 flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-bold text-gray-800 mb-5">Connect With Us</h3>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-red-100 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-sm hover:shadow-md">
                                <FaYoutube className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all shadow-sm hover:shadow-md">
                                <FaFacebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-600 hover:text-white transition-all shadow-sm hover:shadow-md">
                                <FaGoogle className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-center gap-2 text-gray-500 text-sm">
                    <span>Copyright © {new Date().getFullYear()} - All rights reserved by</span>
                    <span className="font-bold bg-gradient-to-r from-[#FF5F7E] to-[#FF9E80] bg-clip-text text-transparent">
                        SunsetDiary
                    </span>
                </div>
            </div>
  </footer>
    );
};

export default Footer;


{/* <FaYoutube></FaYoutube>
    <FaFacebook></FaFacebook>
    <FaGoogle></FaGoogle> */}