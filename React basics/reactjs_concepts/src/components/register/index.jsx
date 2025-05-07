import { useState } from "react";
import CommonForm from "../common-form";
import { registerFormElements } from "../../../config";

const initialState={
    name:"",
    email:"",
    age:"",
    number:"",
    password:"",
}
function RegisterComponent(){
    const [registerFormData,setRegisterFormDat]=useState(initialState)
    function OnhandleSubmit(event){
        event.preventDefault();
        setRegisterFormDat(initialState)
    }
    return(
        <div>
            <h1>Register Page</h1>
            <CommonForm 
            formControls={registerFormElements}
            formData={registerFormData}
            setFormData={setRegisterFormDat}
            buttonText={'Register'}
            OnhandleSubmit={OnhandleSubmit}
            />
        </div>
    );
}
export default RegisterComponent;