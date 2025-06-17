import axios from 'axios';
 
 

const axiosInstance = axios.create({
   
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json"
    }
});
const useAxiosSecure = () => {
   

     axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('token' );
    // console.log(token);
    
    if (token){
        config.headers.authorization = `Bearer ${token}`;
    }
    return config;   
}
)


    return axiosInstance;
};

export default useAxiosSecure;