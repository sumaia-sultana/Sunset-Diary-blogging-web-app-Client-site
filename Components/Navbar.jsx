import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOutUser();
      navigate("/");
      Swal.fire({
        icon: "success",
        title: "Logged Out",
        text: "You have been successfully logged out",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Something went wrong",
      });
    }
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#FF5F7E] font-semibold"
      : "text-gray-600 hover:text-[#FF5F7E] transition";

  const Links = () => (
    <>
      <NavLink to="/" className={navLinkClass}>Home</NavLink>
      <NavLink to="/allblogs" className={navLinkClass}>All Blogs</NavLink>
      <NavLink to="/featuredBlogs" className={navLinkClass}>Featured Blogs</NavLink>
      <NavLink to="/addBlog" className={navLinkClass}>Add Blogs</NavLink>
      <NavLink to="/wishList" className={navLinkClass}>Wishlist</NavLink>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-[#FF5F7E] to-[#FF9E80] bg-clip-text text-transparent">
            SunsetDiary
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Links />
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <>
                <img
                  src={
                    user.photoURL ||
                    `https://ui-avatars.com/api/?name=${user.email}`
                  }
                  className="w-10 h-10 rounded-full border"
                  alt="user"
                />
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 rounded bg-gradient-to-r from-[#FF5F7E] to-[#FF9E80] text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login"
                className="px-4 py-2 rounded bg-gradient-to-r from-[#FF5F7E] to-[#FF9E80] text-white">Login</Link>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded bg-gradient-to-r from-[#FF5F7E] to-[#FF9E80] text-white"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="text-[#FF5F7E]"/> : <Menu className="text-[#FF5F7E]"/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-16 left-0 w-full bg-white/90  shadow-md z-40">
          <div className="flex flex-col gap-4 p-5">
            <Links />

            <hr/>

            {user ? (
              <>
                <div className="flex items-center gap-3">
                  <img
                    src={
                      user.photoURL ||
                      `https://ui-avatars.com/api/?name=${user.email}`
                    }
                    className="w-10 h-10 rounded-full"
                    alt="user"
                  />
                  <span>{user.displayName || user.email}</span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="py-2 bg-[#FF5F7E] rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="text-[#FF5F7E]" to="/login">Login</Link>
                <Link className="text-[#FF5F7E]" to="/register">Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
