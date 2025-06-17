import React, { use, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';
import { CiCircleCheck } from 'react-icons/ci';

const Newsletter = () => {
     const [email, setEmail] = useState("");
     const {user} = use(AuthContext)

     const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
      });
       return;
    }
     toast.success("Thank you for subscribing to our newsletter!", {
      position: "top-right",
    });

    setEmail(user.email);
  };

 return (
    // my doing part
        <div className='mx-auto p-6'>
            <h1 className='text-center text-[#2596be] text-2xl font-semibold mb-5 '>Never Miss a New Story!</h1>
        <div className='flex   justify-center h-[460px] '>
            <div className='relative w-full md:w-1/2 h-[460px]'>
                <img src="https://i.ibb.co/jZMjxs1k/nadir-on-go.png" 
                  className='object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1'
                />
        <div className=" relative -top-84 max-w-md mx-auto text-center my-12 px-4 ">
      <h2 className="text-2xl text-white font-bold mb-4">Subscribe Newsletter to get fresh blogs and stories!</h2>
      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          className="border border-gray-300 text-gray-50 rounded-lg p-3 flex-1 focus:outline-none focus:ring-2 "
        />
        <button   className="relative inline-block text-lg group">
      <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span className="relative">Subscribe</span>
      </span>
      <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
     </button>
      </form>

      {/* Toast container */}
      <ToastContainer/>
    </div>
     </div>
         <div className='bg-[#2596be] py-2 lg:w-1/3 lg:px-20'>
             <div className='text-white md:my-5  md:mt-14 lg:my-5 mx-2 md:px-10 lg:py-10 '>
                <h3 className=''>Why You'll Subscribe?</h3>   
            <p className='my-2'>To Get - </p>
            <ul className='space-y-2  '>
            <li className='flex '><CiCircleCheck className='top-1 relative' />latest posts</li>
            <li className='flex '><CiCircleCheck className='top-1 relative'/>personal notes</li>
            <li className='flex '><CiCircleCheck className='top-1 relative'/>exclusive content</li>
            <li className='flex '><CiCircleCheck className='top-1 relative'/>fresh ideas</li>
            <li className='flex '><CiCircleCheck className='top-1 relative'/>lifestyle tips</li>
            <li className='flex '><CiCircleCheck className='top-1 relative'/>amazing stories</li>
            <li className='flex '><CiCircleCheck className='top-1 relative'/>inspiration</li>
            <li className='flex '><CiCircleCheck className='top-1 relative'/>entertainment</li>
            </ul>
             </div>
            </div>
        </div>
        
        </div>
  );
};

export default Newsletter;