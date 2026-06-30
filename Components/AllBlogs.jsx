import { useContext, useEffect, useState } from 'react';
import { FaHeart, FaInfoCircle } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hook/useAxiosSecure';

const AllBlogs = () => {
  const { user } = useContext(AuthContext);
  const blogs = useLoaderData();
  const navigate = useNavigate();
  const apiBaseUrl = import.meta.env.VITE_API_URL?.trim().replace(/\/$/, '');
  const [category, setCategory] = useState(Array.isArray(blogs) ? blogs : []);
  const [search, setSearch] = useState("");
  const [wish, setWish] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    setCategory(Array.isArray(blogs) ? blogs : []);
  }, [blogs]);

  // searching by category
  useEffect(() => {
    const query = search.trim();

    fetch(`${apiBaseUrl}/blogs${query ? `?search=${encodeURIComponent(query)}` : ""}`)
      .then((res) => res.json())
      .then((data) => setCategory(Array.isArray(data) ? data : []))
      .catch(() => setCategory([]));
  }, [apiBaseUrl, search]);

  useEffect(() => {
    if(user?.email) {
      axiosSecure
      .get(`/wishlist/${user.email}`)  
      .then(res => setWish(res.data))
      .catch(err => console.error(err));
    }
  }, [user, axiosSecure]);

 
  const handleWishBlog = (blog) => {
    if (!user?.email) {
      Swal.fire("Login required", "Please log in to add blogs to your wishlist.", "info");
      navigate('/login');
      return;
    }

    const exists = wish.find(item => item.blogId === blog._id);
    if (exists) {
      Swal.fire("Already Added!", "This blog is already in your wishlist.", "info");
      return;
    }

    const wishData = {
    blogId: blog._id,
    title: blog.title,
    photo: blog.photo,
    email: user.email,
    category: blog.category,
    description: blog.short_description
    }
    axiosSecure.post(`/wishlist`, wishData
  )
     
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
   };
 
  return (
    <div className="mx-auto max-w-7xl bg-white py-5 lg:px-5 md:px-5">
    <div className='flex justify-between'>
       <div className='w-1/5'>
        <h1 className="text-2xl top-10 relative text-left font-bold text-[#FF5F7E] "> All blogs</h1>
    </div>
       <div className='w-4/5 text-right right-0 relative'>
     {/* Search Bar according to category */}
<fieldset className="space-y-2 m-5 lg:px-10">
  <label className="label text-[#FF5F7E] font-bold bg-white text-shadow-md">
   
  </label>
  <div className="flex gap-2">
    <select 
      name="category" 
      className="select w-full  bg-white border-0 border-[#FF5F7E] flex-1"  
      placeholder="search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}>
        
       <option value="">All Categories</option>
          <option>Personal</option>
          <option>Travelling & Photography</option>
          <option>Fashion & Beauty</option>
          <option>Food & Health</option>
          <option>Technology</option>
          <option>Education</option>
          <option>DIY & Craft Blogs</option>
    </select>
    <button
      type="button"
      className="bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] hover:from-[#FF9E80] hover:via-[#FF9E80]
       hover:to-[#FFC75F] text-white font-bold px-4 py-2 rounded ">
      Search
    </button>
  </div>
      </fieldset>
    </div>
    </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {category.length === 0 && (
          <p className="col-span-full text-center text-gray-500">No blogs found for this category.</p>
        )}
        {category.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img
              src={blog.photo}
              alt={blog.title}
              className="w-full h-48 object-cover"/>

            <div className="p-4 space-y-2">
              <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
                {blog.category}
              </span>

              <h2 className="text-xl font-semibold text-gray-800">
                {blog.title}
              </h2>

              <p className="text-gray-600 text-sm">{blog.short_description}</p>

              <div className="flex items-center justify-between pt-2">
                <Link to={`/blogs/${blog._id}`}
                  className="bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] 
                  hover:from-[#FF9E80] hover:via-[#FF9E80] hover:to-[#FFC75F] 
                  text-white font-semibold px-2 py-2 rounded-full 
                  transition duration-300 flex items-center space-x-2">
                  <FaInfoCircle className="h-5 w-5"/>
                </Link>
                <button  onClick={() => handleWishBlog(blog)}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                  title="Add to Wishlist">
                  <FaHeart className="w-5 h-5 text-red-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
