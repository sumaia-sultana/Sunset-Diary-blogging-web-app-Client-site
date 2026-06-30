import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { use, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {

      const [error, setError] = useState();
      const  {signInUser, setUser} = use(AuthContext);

         const location = useLocation();
         const navigate = useNavigate();
          // console.log(location);
        //  console.log(signInUser);

        const [success, setSuccess] = useState();
        const [errorMessage, setErrorMessage] = useState('')

       const handleLogIn = e => {
 
        e.preventDefault();
        const email = e.target.email.value; 
        const password = e.target.password.value;
        // (email, password);
        signInUser(email,password)
        .then(result => {
          console.log(result.user); 
          setSuccess(true); 
          Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You're successfully Logged In!",
          showConfirmButton: false,
          timer: 1500
          });
          navigate(`${location.state? location.state : "/" }`)
          
        })
        .catch(error => {
          const errorCode = error.code; 
          const errorMessage = error.message;         
          setErrorMessage(errorMessage); 
          Swal.fire({
          title: "Error!",
          text: "Failed to Log in",
          icon: "error"
          }); 
          setError(errorCode); 
          setSuccess(false)     
        });
     
    }
       const provider = new GoogleAuthProvider();
       const handleGoogle = () => {
        console.log('Google sign in clicked!');
  
      signInWithPopup(auth, provider).then(result => {
         console.log(result.user);
        setUser(result.user);
         Swal.fire({
         position: "top-end",
         icon: "success",
         title: "You're successfully Logged In!",
         showConfirmButton: false,
         timer: 1500
          });
          navigate(`${location.state? location.state : "/" }`)
         
      }) .catch(error => {
          console.log(error);      
      })
      }

    return (
    <div className=" flex justify-center items-center min-h-screen ">
      <div className="flex flex-col max-w-md p-6 rounded-md  relative justify-center item-center card bg-base-100 w-96 my-10 shadow-sm">
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl  bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent font-bold m-5 '>Log In</h1>
          <p className='text-sm text-[#6b7280]'>
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleLogIn} className="fieldset justify-center item-center">
 
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          {
          errorMessage && <p className='text-red-500'> {errorMessage} </p>
        }
          <button className="btn bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] hover:from-[#FF9E80] 
       hover:via-[#FF9E80] hover:to-[#FFC75F] text-white font-semibold transition duration-300">
            Log in</button>
           
        </form>
        <div className="divider"><span className='text-[#FF5F7E] font-bold'>or</span></div>
        <div className='text-center'>
  <button
    onClick={handleGoogle}
    className="btn text-center mt-3 shadow-sm bg-white text-black border border-[#e5e5e5]
    hover:bg-gradient-to-r hover:from-[#FF5F7E] hover:via-[#FF9E80] hover:to-[#FF9E80] hover:text-white transition duration-300"
  >
    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512" className="inline-block mr-2">
      <g>
        <path d="m0 0H512V512H0" fill="#fff"></path>
        <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
        <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
        <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
        <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
      </g>
    </svg>Log In with Google
  </button>
</div>
        <p className='font-semibold text-gray-500'>New To This website? Please <Link to='/register' className='text-blue-500 underline' >Register now</Link>  </p>
        
         
      </div>
    </div>
 
    );
};

export default Login;