import React, { use, useEffect, useState } from 'react';
import { FaHeart, FaInfoCircle } from 'react-icons/fa';
 
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hook/useAxiosSecure';

const Recent = () => {

    const [recentBlog, setRecentBlog] = useState([]);
    const {user} = use(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [wish, setWish] = useState([]);

    const navigate = useNavigate();

     useEffect(() => {
         if(user?.email) {
            axiosSecure.get(`/wishlist/${user.email}`)
           .then(res => setWish(res.data))
           .catch(err => console.error(err));
         }
         
       }, [user,axiosSecure])

     const handleWishlist = (blog) => {
        if (!user) {
    navigate('/login'); 
    return;
  }
     console.log(blog);     
        const wishData = {
        blogId: blog._id,
        title: blog.title,
        photo: blog.photo,
        email: user.email,
        category: blog.category,
        createdAt: new Date(),
        description: blog.short_description
        }
 
         const exists = wish.find(item => item.blogId === blog._id);
            if (exists) {
              Swal.fire("Already Added!", "This blog is already in your wishlist.", "info");
              return;
            }

      axiosSecure
      .post(`/wishlist`, wishData)
        
            .then(res => {
              console.log(res.data);
              Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Succesfully added to wishlist!",
              showConfirmButton: false,
              timer: 1500
              });   
             navigate('/wishlist');
            })
     }

    //  fetch Data for recent post

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/recent-blog`)
        .then(res => res.json())
        .then(data => setRecentBlog(data));
    }, []);

 return (
 
   <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-5">
                <h2 className="text-4xl font-bold text-[#ff5771] text-center mb-12">Recent Blogs</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentBlog.map(blog => (
<div
  key={blog._id}
  className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
>
  {/* Image */}
  <img
    src={blog.photo}
    alt={blog.title}
    className="w-full h-44 object-cover"
  />

  <div className="p-5 flex flex-col justify-between flex-1">
    {/* Category */}
    <span className="text-xs font-medium text-[#ff5771] bg-[#ff5771]/10 px-2.5 py-1 rounded-full w-fit">
      {blog.category}
    </span>

    {/* Title */}
    <h3 className="mt-3 text-lg font-semibold text-gray-900 leading-snug group-hover:text-[#ff5771] transition">
      {blog.title}
    </h3>

    {/* Description */}
    <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">
      {blog.short_description}
    </p>

    {/* Bottom Section */}
    <div className="mt-5 flex items-center justify-between">
      {/* Date */}
      <p className="text-xs text-gray-400">
        {new Date(blog.createdAt).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => handleWishlist(blog)}
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <FaHeart className="  text-[#ff5771] transition" />
        </button>

        <Link
          to={`/blogs/${blog._id}`}
          className="text-sm font-medium text-gray-700 hover:text-black transition flex items-center gap-1"
        >
           
          <FaInfoCircle className="text-lg" />
        </Link>
      </div>
    </div>
  </div>
  </div>
    ))}
     </div>
    </div>
  </div>   

    );
};

export default Recent;