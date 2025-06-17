import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import axios from 'axios';


const AuthProvider = ({children}) => {

     const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // console.log(loading, user);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password);
    }

    const signInUser =  (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password )
       
    }

    const signOutUser = () => {
      localStorage.removeItem('token');
        setLoading(true);
        return signOut(auth);
    }

     useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
          // console.log('current user inside', currentUser);
          setUser(currentUser);
          setLoading(false);
           if (currentUser?.email){
            const userData = { email: currentUser.email};
            axios.post(`${import.meta.env.VITE_API_URL}/jwt`, userData )
                    .then(res => {console.log(res.data.token);
                     localStorage.setItem('token', res.data.token); 
                    })
                    .catch(error => console.log(error));
           }
           console.log('user in the auth state change', currentUser)
          
        })
        return () => {
          unSubscribe();
        }
      }, [])
     const userInfo = { 
        createUser, user, setUser,signInUser, signOutUser,signOut,loading}
    return (
         <AuthContext value={userInfo} >{children} </AuthContext>
    );
};

export default AuthProvider;