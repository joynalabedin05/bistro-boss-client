import { useEffect, useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const googleSignin = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const signIn =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }; 
    const updateUserProfile= (name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
          })
    }
    useEffect(()=>{
    const unsubscribe =   onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log(currentUser);
            // set and get jwt
           if(currentUser){
            axios.post('https://bistro-boss-server-nine-xi.vercel.app/jwt', {
                email: currentUser.email
            })
            .then(data=>{
                console.log(data.data.token);
                localStorage.setItem('access-token', data.data.token);
                setLoading(false);
            })
           }
           else{
            localStorage.removeItem('access-token');
           }
           
            // setLoading(false);
        });
        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;