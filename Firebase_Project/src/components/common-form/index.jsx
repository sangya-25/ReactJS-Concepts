import { Link } from "react-router-dom";
import CommonInput from "../common-input";

const formElementTypes={
    INPUT :'input',
    SELECT: 'select',
    TEXTAREA: 'textarea'
}
function ComonForm({formControls=[],buttonText, setFormData ,formData, onSubmit}){
    function renderFormElements(getCurrentFormControl, getFormData){
        let element=null;
        switch (getCurrentFormControl.componentType) {
            case formElementTypes.INPUT:
                element=(
                    <CommonInput 
                    type={getCurrentFormControl.type}
                    placeholder={getCurrentFormControl.placeholder} 
                    name={getCurrentFormControl.name} 
                    value={getFormData[getCurrentFormControl.name]} 
                    onChange={(event)=>setFormData({
                        ...formData,
                        [getCurrentFormControl.name]:event.target.value,
                    }
                    )}
                />
                );
                break;
            default:
                element=(
                    <CommonInput 
                    type={getCurrentFormControl.type}
                    placeholder={getCurrentFormControl.placeholder} 
                    name={getCurrentFormControl.name} 
                    value={getFormData[getCurrentFormControl.name]} 
                    onChange={(event)=>setFormData({
                        ...formData,
                        [getCurrentFormControl.name]:event.target.value,
                    }
                    )}
                />
                );
                break;
        }
        return element;
    }
    return(
        <form style={{display:'flex',gap:'20px', flexDirection:'column',height:"300px", backgroundColor:"lightgrey",padding:'60px',borderRadius:"10px",border:"5px solid cornflowerblue"}} onSubmit={onSubmit}>
            {
                formControls.map((singleFormControl)=>
                <div key={singleFormControl.name}>{renderFormElements(singleFormControl, formData)}</div>)
            }
            <button style={{border:'4px solid cornflowerblue',borderRadius:"20px"}} type="submit">{buttonText || 'Submit'}</button>
            <p style={{ color: "cornflowerblue", fontSize: "17px", fontWeight: "bold" }}>
                {location.pathname === "/login" ? (
                    <>Don't have an account? <Link to="/register">Register</Link></>
                ) : (
                    <>Already have an account? <Link to="/login">Login</Link></>
                )}
            </p>
        </form>
    )
}
export default ComonForm;