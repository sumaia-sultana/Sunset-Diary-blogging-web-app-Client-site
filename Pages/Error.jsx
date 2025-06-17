import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-[80vh] text-center'>
           <h1 className='text-2xl text-[#FF5F7E] pb-3 font-bold'>No Page found!</h1>
            <div className='flex justify-center'>
                <img 
                    className=' ' 
                    src='https://i.ibb.co/7BBYNkv/error.png' 
                    alt='404 Error' 
                />
            </div>
            <p className='text-gray-500 pb-3'>Opps!! No Content Found With the route.</p>
            <Link to="/" className="btn bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80]
             hover:from-[#FF9E80] hover:via-[#FF9E80] hover:to-[#FFC75F] text-white 
             font-semibold transition duration-300"> Back To Home</Link>
        </div>
    );
};

export default Error;