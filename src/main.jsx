import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from '../Layouts/MainLayout.jsx';
import Error from '../Pages/Error.jsx';
import Home from '../Components/Home.jsx';
import Navbar from '../Components/Navbar.jsx';
import Login from '../Components/Login.jsx';
import Register from '../Components/Register.jsx';
import AuthProvider from '../Context/AuthProvider.jsx';
import AllBlogs from '../Components/AllBlogs.jsx';
import AddBlog from '../Components/AddBlog.jsx';
import Wishlist from '../Components/Wishlist.jsx';
import Footer from '../Components/Footer.jsx';
import BlogDetails from '../Components/BlogDetails.jsx';
import UpdateBlog from '../Components/UpdateBlog.jsx';
import Loading from '../Pages/Loading.jsx';
import FeaturedBlogs from '../Components/FeaturedBlogs.jsx';
import Newsletter from '../Pages/Newsletter.jsx';
import Recent from '../Pages/Recent.jsx';
import PrivateRoute from '../Routes/PrivateRoute.jsx';
import MemoryFrame from '../Components/MemoryFrame.jsx';
import Counter from '../Components/Counter.jsx';
 

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<Error/>,
    children:[{
     index: true,
     Component: Home,
    },
    {
      path: 'navbar',
      Component: Navbar,
    },
    {
      path: 'login',
      Component: Login,
    },
    {
      path: 'register',
      Component: Register,
    },
    {
      path: 'allblogs',
      loader: () => fetch('http://localhost:5000/blogs') , 
      Component: AllBlogs,
      hydrateFallbackElement: <Loading/>
    },
    {
      path: 'addBlog',
      element: <PrivateRoute><AddBlog/></PrivateRoute>
    },
    {
     path: '/blogs/:id',
     loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/blogs/${params.id}`),
     element: <BlogDetails/>,
     hydrateFallbackElement: <Loading/>
    },
    {
     path: '/updateBlog/:id',
     loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`),
     element: <PrivateRoute><UpdateBlog/></PrivateRoute>
    },
    {
      path: 'wishList',    
      element: <PrivateRoute><Wishlist/></PrivateRoute>,
      hydrateFallbackElement:<Loading/> ,
    },
    {
      path: 'featuredBlogs',
      Component: FeaturedBlogs,
    },
    {
     path: 'newsletter',
     Component: Newsletter,
    },
    {
     path: 'recent',
     Component: Recent,
    },
    {
     path: 'memoryframe',
     element: <MemoryFrame/>
    },  
    {
      path: 'counter',
      element:<Counter/>,
    } ,
    {
      path: 'footer',
      Component: Footer,
    } 
  ]
 },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
