import { use,  useEffect,  useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const BlogDetails = () => {

  const { id } = useParams();
  const blog = useLoaderData(); 
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const {user} = use(AuthContext)
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/blogs/${id}`)
    .then(res => res.json())
    .then(blogData => {
      setComments(blogData.comments);
      console.log(blogData.comments);
      
    });
  }, [id])
   const handleUpdate = () => {
    if(user.email !== blog.email){
     Swal.fire({
     position: "top-end",
     icon: "warning",
     title: "You can't update this blog!Only Owner is allowed to Update.",
     showConfirmButton: false,
     timer: 3000
     });
    return;
    }else{
      navigate (`/updateBlog/${id}`);
    }
   }

  const handleComment = (e) => {
  e.preventDefault();
  if (user.email === blog.email) {
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: "You can't comment on your own post 😥",
      showConfirmButton: false,
      timer: 3000
    });
    return;
  }

  //  fetching comment data

  fetch(`${import.meta.env.VITE_API_URL}/blogs/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      userName: user.displayName,
      userPhoto: user.photoURL,
      userEmail: user.email,
      commentText: commentText
    })
   })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
    fetch(`${import.meta.env.VITE_API_URL}/blogs/${id}`)
      .then(res => res.json())
      .then(blogData => {
        setComments(blogData.comments);
      });

    setCommentText('');
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Comment posted successfully",
      showConfirmButton: false,
      timer: 3000
    });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Failed to comment 😥",
        showConfirmButton: false,
        timer: 3000
      });
    }
    });
};

 
 return (

<div className="flex max-w-7xl mx-auto p-6 gap-8">
      
 {/* Left Section: Blog Details + Update + Comment Form */}
 <div className="w-[70%]">
   {/* Blog Info Card */}
   <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
     <img src={blog.photo} alt={blog.title} className="w-full rounded-lg object-cover max-h-96" />
          
 {/* Creator and Post Info */}
 <div className="flex justify-between items-center text-sm text-gray-400 font-medium">
   <div className="flex flex-col">
     <span className="text-[#FF5F7E] font-semibold">{blog.name}</span>
     <span className="italic">{blog.type}</span>   
   </div>
   <div>
     <span>Posted on {new Date(blog.createdAt).toLocaleDateString()}</span>
    </div>
     </div>

      {/* Title and Descriptions */}
      <h1 className="text-4xl font-bold text-gray-900">{blog.title}</h1>
      <p className="text-gray-600">{blog.short_description}</p>
      <p className="text-gray-700">{blog.long_description}</p>
      <p className="text-gray-800">{blog.details}</p>
    </div>

    {/* Update Button */}
    <div className="mt-6">
      <button onClick={() => handleUpdate(blog)}
      className="btn bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] hover:from-[#FF9E80] 
    hover:via-[#FF9E80] hover:to-[#FFC75F] text-white font-semibold transition duration-300">
       Update Blog</button>
      </div>

    {/* Comment Form */}
    <div className="mt-10 bg-gray-50 rounded-lg p-6 shadow-inner">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Leave a Comment</h2>
      <form onSubmit={handleComment} className="flex flex-col space-y-4">
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        rows={4}
        placeholder="Write your comment here..."
        className="resize-none p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required />
      <button  
      type="submit"
      className="btn bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] hover:from-[#FF9E80] 
     hover:via-[#FF9E80] hover:to-[#FFC75F] text-white font-semibold transition duration-300">
       Comment</button>  
      </form>
      </div>
      </div>

 {/* Right Section: Comments List */}

 <div className="w-[30%] bg-white rounded-lg shadow-md p-6 overflow-y-auto  h-[full]">
  <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">Comments </h2>
  {(!comments || comments.length === 0) ? (
    <p className="text-gray-500">No comments yet. Be the first to comment!</p>
    ) : (
    <div className="space-y-6">
      {comments.map((comment, index) => (
        <div key={index} className="flex space-x-4">
          <img
            src={comment.userPhoto}
            alt={comment.userName}
            className="w-12 h-12 rounded-full object-cover" />
          <div>
            <h4 className="font-semibold text-gray-900">{comment.userName}</h4>
            <p className="text-gray-500 text-sm">{new Date(comment.commentedAt).toLocaleString()}</p>
            <p className="text-gray-700">{comment.commentText}</p>
          </div>
        </div>
      ))}
    </div>
     )}
      </div>
    </div>
  );
};

export default BlogDetails;

