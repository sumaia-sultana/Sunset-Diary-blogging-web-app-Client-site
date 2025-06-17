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
     <div>
  <div className="px-5 mx-auto">
  <h2 className="text-2xl font-bold 
  text-[#ff5771] text-center mb-6">Recent Blogs</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 gap-6">
    {recentBlog.map(blog => (
      <div
        key={blog._id}
        className="relative rounded-xl overflow-hidden shadow-lg group"
      >
        {/* Background Image */}
        {blog.photo && (
          <img
            src={blog.photo}
            alt={blog.title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}

        {/* Overlay content */}
        <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-between p-4 text-white">
          <div>
            <h3 className="text-xl text-[#f7f6f6] font-bold underline">{blog.title}</h3>
            <p className="text-sm text-[#f3efef] mr-1.5">Posted on 
              <span> {new Date(blog.createdAt).toLocaleDateString()}</span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between mt-4">
            <Link
              to={`/blogs/${blog._id}`}
              className="bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] 
              hover:from-[#FF9E80] hover:via-[#FF9E80] hover:to-[#FFC75F] 
              text-white font-semibold px-1.5 py-1.5 rounded-full flex items-center space-x-2 transition" >
              <FaInfoCircle className="h-5 w-5" />
               
            </Link>

            <button
              onClick={() => handleWishlist(blog)}
              className="p-1.5 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 transition"
              title="Add to Wishlist">
              <FaHeart className="w-5 h-5 text-[#ff5771]" />
            </button>
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