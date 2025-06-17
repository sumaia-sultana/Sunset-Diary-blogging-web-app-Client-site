import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hook/useAxiosSecure';

const AddBlog = () => {
    const location = useLocation();
         const navigate = useNavigate();
         const axiosSecure = useAxiosSecure();
          

    const handleSubmitBlog = async(e) => {
 
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        
         const  blogFormData = {
          ...Object.fromEntries(formData.entries()),
          createdAt: new Date().toISOString(),  
          status: "pending"
         };
        //  console.log( blogFormData);
        
         // sending data to server 

            const res = await axiosSecure.post(`/blogs`, blogFormData)
            if(res.data.insertedId){
                // ('added successfully');
               
                Swal.fire({
                title: "Your Blog added successfully!",
                icon: "success",
                draggable: true
                }); 
                 navigate('/allblogs' , {
                   state: location.state || null
                }); 
                }
    }
 return (
 <div className='mx-auto p-5'>           
 <div><h1>Add Your blog</h1></div>
   <form onSubmit={handleSubmitBlog} className='mx-auto'> 
  <div>
    <fieldset className="fieldset text-left grid lg:grid-cols-2 gap-4 border-base-300 rounded-box space-y-0.5 border px-10">
      <legend className="fieldset-legend text-center bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-semibold">Form details</legend>

      <fieldset className='space-y-0.5'>
        <label className="label bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-semibold">Title</label>
        <input type="text" name='title' className="input bg-white w-full" required placeholder="Your Vlog Title..." />
      </fieldset>

      <fieldset className='space-y-0.5'>
        <label className="label bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-semibold">User Email</label>
        <input type="email" name='email' className="input bg-white w-full" required placeholder="mail@send.com" />
      </fieldset>

      <fieldset className='space-y-0.5'>
        <label className="label bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-semibold">User Name</label>
        <input  type="text" 
         name="name" 
         className="input bg-white w-full" 
         required 
         placeholder="Your name..." 
         pattern="^[A-Za-z\s]+$"
         title="Please enter a valid name"/>
      </fieldset>

       <fieldset className='space-y-0.5'>
        <label className="label  bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-semibold">Category</label>
        <select name="category" required className="select bg-white w-full">
          <option disabled hidden selected>Select Category</option>
          <option>Personal</option>
          <option>Travelling & Photography</option>
          <option>Fashion & Beauty</option>
          <option>Food & Health</option>
          <option>Technology</option>
          <option>Education</option>
          <option>DIY & Craft Blogs</option>
        </select>
      </fieldset>
      <fieldset className='space-y-0.5'>
        <label className="label  bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-semibold">Blog Type</label>
        <select name="type" required className="select bg-white w-full">
          <option disabled selected>Select Type</option>
          <option>written content</option>
          <option>Video</option>
          <option>Photo</option>
          <option>Podcast</option>
          <option>Mini blog</option>
          
        </select>
      </fieldset>

      <fieldset className='space-y-0.5'>
        <label className="label bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-semibold">Give a brief description</label>
        <input type="text" name='short_description' className="input bg-white w-full" required placeholder="Here give a brief description..." />
      </fieldset>

       <fieldset className='space-y-0.5'>
      <label className="label bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-semibold">Image URL</label>
      <input type="text" name='photo' className="input bg-white w-full" required placeholder="Enter your Photo URL" />
    </fieldset>
     
      <fieldset className='space-y-0.5'>
        <label className="label bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-semibold">Availability</label>
        <select name="availability" required className="select bg-white w-full">
          <option disabled hidden selected>Select Visibility</option>
          <option>Public</option>
          <option>Hidden</option>
        </select>
      </fieldset>
    </fieldset>
      <fieldset className='space-y-0.5'>
        <label className="label  bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-semibold">Detailed Description</label>
        <textarea type="text" name='long_description' className="textarea bg-white w-full" required placeholder="Here give a details description of your blog..." />
      </fieldset>
   

    <div className='py-5 text-center'>
        <button
  type="submit"
  className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#FF5F7E] transition-all duration-300 ease-in-out rounded bg-white border border-[#FF5F7E] group hover:bg-gradient-to-r 
  hover:from-[#FF5F7E] hover:via-[#FF9E80] hover:to-[#FF9E80] hover:text-white">
  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FF5F7E] transition-all duration-300 ease-in-out group-hover:h-0"></span>

  <span className="absolute right-0 pr-4 duration-300 ease-out group-hover:translate-x-12">
    <svg
      className="w-5 h-5 text-[#FF5F7E] group-hover:text-white transition duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </span>

  <span className="absolute left-0 pl-2 -translate-x-12 group-hover:translate-x-0 duration-300 ease-out">
    <svg
      className="w-5 h-5 text-[#FF5F7E] group-hover:text-white transition duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </span>

  <span className="group-hover:pl-5 relative w-full text-left transition-colors duration-300 ease-in-out">
   Post Your blog
  </span>
   
</button> 

    </div>
  </div>
</form>

</div>
    );
};

export default AddBlog;