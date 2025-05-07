import { useState } from "react";
import CommonForm from "../common-form";
import { loginFormElements } from "../../../config";

const initialState={
    name: "",
    email: "",
    password: "",
    branch:'',
    text:'',
}
function LoginComponent(){
    const [loginFormData, setLoginFormData]=useState(initialState);
    function OnhandleSubmit(event){
        event.preventDefault();
        console.log(loginFormData,'loginFormData');
        setLoginFormData(initialState)
    }
    return(
        <div>
            <h1>Login Page</h1>
            <CommonForm 
            formData={loginFormData} 
            setFormData={setLoginFormData} 
            formControls={loginFormElements} 
            buttonText={'Login'} 
            OnhandleSubmit={OnhandleSubmit}/>
        </div>
    );
}
export default LoginComponent;