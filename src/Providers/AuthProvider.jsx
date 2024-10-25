import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const logIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    };
    
    const [user, setUser] =useState(null)

    const creatUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    };



    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log(currentUser);
        setUser(currentUser)
      }) ; 
      return()=>{
        unSubscribe();
      }
    },[]);

    const logOut= ()=>{
        return signOut(auth)
    };

    

    const authInfo ={
        user,
        creatUser,
        logOut,
        logIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;