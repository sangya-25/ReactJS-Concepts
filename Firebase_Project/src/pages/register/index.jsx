import { useContext } from "react";
import ComonForm from "../../components/common-form";
import { AuthContext } from "../../context";
import { regiseterFormControls } from "../../config";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function RegisterPage(){

    const {registerFormData, setRegisterFormData,registerOnsubmit, user, loading}=useContext(AuthContext);
    const navigate=useNavigate();
    function handleRegisterFormSubmit(event){
        event.preventDefault();
        registerOnsubmit().then(result=>{
            if(result.user){
                updateProfile(result.user, {displayName: registerFormData.name})
                navigate('/profile');
            }
        })

    }
    if(loading) return <h1>Please wait!</h1>
    if(user) navigate('/profile')
    return (
        <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
            <div className="px-6 py-5 ">
                <h1 style={{color:"cornflowerblue"}}>Welcome Back!</h1>
                <p style={{color:'GrayText',fontSize:"30px",fontWeight:'bold'}}>Register page</p>
                <ComonForm
                formControls={regiseterFormControls}
                formData={registerFormData}
                setFormData={setRegisterFormData}
                onSubmit={handleRegisterFormSubmit}
                buttonText={'Register'}
                />
            </div>
        </div>
    )
}
export default RegisterPage;