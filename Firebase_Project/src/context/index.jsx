import { createContext, use, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export const AuthContext= createContext(null);
export default function AuthState({children}){
    const [registerFormData, setRegisterFormData]=useState({
        name:"",
        age:"",
        email:"",
        password:"",
    }
    );
    const [loginFormData, setLoginFormData]=useState({
        email:"",
        password:""
    })
    const [user, setUser]=useState(null);
    const [loading, setloading]=useState(true)
    const navigate=useNavigate()
    function registerOnsubmit(){
        setloading(true)
        const {email,password}=registerFormData
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function loginWithFirebase(){
        const {email, password}=loginFormData
        return signInWithEmailAndPassword(auth, email, password)
    }
    function handleLogout(){
        return signOut(auth).then(() => {
            navigate("/login"); // or "/register"
        });
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

    useEffect(()=>{
        if(user) navigate('/profile')
    },[user])
    if(loading) return <h1>Loading Please wait</h1>

    return (
        <AuthContext.Provider 
    value={{registerFormData, setRegisterFormData,registerOnsubmit, loading, user, loginFormData, setLoginFormData,loginWithFirebase, handleLogout,setloading}}>
        {children}
    </AuthContext.Provider>
    );
}