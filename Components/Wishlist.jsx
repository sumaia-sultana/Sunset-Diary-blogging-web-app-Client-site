 
import { FaHeart, FaInfoCircle, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { RxCross2 } from 'react-icons/rx';
import useAxiosSecure from '../Hook/useAxiosSecure';

 
const Wishlist = () => {
   
  const {user} = useContext(AuthContext)
  
  const [wishlist, setWishlist] = useState([]);
  const axiosSecure =  useAxiosSecure();

  useEffect(() => {
    
    if (user?.email) {
       axiosSecure
      .get(`/wishlist/${user.email}` )
      .then(res => setWishlist(res.data))
      .catch(err => console.error(err));
    }
  }, [user , axiosSecure])

    const handleRemove = (_id)  => {
      console.log(_id);
      Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }) .then((result) => {
      if (result.isConfirmed){
         axiosSecure.delete(`/wishlist/${_id}`, )
        .then(res => {
           if (res.data.deletedCount > 0) {
            const updatedWishlist = wishlist.filter(blog => blog._id !== _id);
            setWishlist(updatedWishlist);
           }
          Swal.fire({
            title: "Deleted!",
            text: "Blog has been removed from wishlist.",
            icon: "success"
          });
        })
        .catch(error => {
          console.error('Delete error:', error);
          Swal.fire({
            title: "Error!",
            text: "Failed to delete blog",
            icon: "error"
          }); 
        });
      }
    })
  }

  return (
   <div className="max-w-7xl mx-auto p-6">
  <div>
    <h1 className="text-2xl font-bold mb-6 text-center text-[#ff5771]">
      My Wishlist : {wishlist.length}
    </h1>
  </div>

<div>
  {wishlist.length === 0 ? (
    <p className="text-center text-gray-500">No blogs in your wishlist yet!</p>
  ) : (
    <div>
      { wishlist.map((blog) => (
        <div
          key={blog._id}
          className="flex items-center gap-4 p-4 border border-pink-200 rounded-lg mb-3 bg-[#fff5f5] hover:shadow transition">
            <FaHeart className='text-2xl text-[#ff5771]'/>
          <img
            src={blog.photo}
            alt={blog.title}
            className="w-20 h-20 object-cover rounded-md border border-[#FF9E80]"/>
          <div className="flex-1">
       
            <p className="text-lg font-semibold text-[#e95873]">{blog.title}</p>
            <p className="text-sm text-gray-600 mt-1">{blog.description}</p>
          </div>
          <div className=" items-center  ">
            <Link to={`/blogs/${blog.blogId}`}>
              <button
                className="mb-2 bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80]
                hover:from-[#FF9E80] hover:via-[#FF9E80] hover:to-[#FFC75F]
                text-white font-semibold px-1 py-1 rounded-full flex items-center space-x-1 transition">
                <FaInfoCircle className="w-4 h-4" />
              </button>
            </Link>

              <button
                onClick={() => handleRemove(blog._id)}
                className="p-2 mt-1 rounded-full bg-pink-100 hover:bg-pink-200 transition"
                title="Remove">
                <RxCross2 className='text-[#ff5771]' />
              </button>
            </div>
          </div>
        ))}
      </div>
    )} 
  </div>
</div>
  );
};

export default Wishlist;