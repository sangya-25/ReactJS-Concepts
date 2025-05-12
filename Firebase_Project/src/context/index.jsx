import { createContext, use, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from "../firebaseConfig";

export const AuthContext= createContext(null);
export default function AuthState({children}){
    const [registerFormData, setRegisterFormData]=useState({
        name:"",
        age:"",
        email:"",
        password:"",
    }
    );
    const [user, setUser]=useState(null);
    const [loading, setloading]=useState(true)
    function registerOnsubmit(){
        const {email,password}=registerFormData
        return createUserWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const checkAuthState=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setloading(false)
        })
        return ()=>{
            checkAuthState();
        }
    },[]);
    console.log(user,"users");
    return (
        <AuthContext.Provider 
    value={{registerFormData, setRegisterFormData,registerOnsubmit, loading, user}}>
        {children}
    </AuthContext.Provider>
    );
}