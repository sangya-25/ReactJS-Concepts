import { useState } from "react";

function FormComponent(){
    const [nameValue, setnameValue]=useState('')
    const [emailValue, setemailValue]=useState('')
    const [ageValue, setAgeValue]=useState('')
    const [formData, setFormData]=useState({
        name:'',
        email: '',
        age: ''
    })
    function handleInputChange(event){
        const {value}=event.target;
        setnameValue(value);
    }
    function handleEmailChange(event){
        const {value}=event.target;
        setemailValue(value);
    }
    function handleAgeChange(event){
        const {value}=event.target;
        setAgeValue(value);
    }
    function handleSubmit(event){
        event.preventDefault();
    }
    function handleOnChange(event){
        const {name,value}=event.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    console.log(formData);
    
    return <div style={{display: 'flex',width:'400px', flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:"gray",borderRadius:'10px'}}>
        <h1>form</h1>
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column',alignItems:"center",gap:'14px'}}>
        <input style={{width:'240px',padding:'6px', border:'2px solid cornflowerblue', filter: 'drop-shadow(0 0 0.3em #646cffaa)'}} type="text" name="name" id="name" placeholder="enter your name here" value={formData.name} onChange={(event)=> setFormData({
            ...formData,
            [event.target.name]:event.target.value
        })}/>
        <input style={{width:'240px',padding:'6px', border:'2px solid cornflowerblue', filter: 'drop-shadow(0 0 0.3em #646cffaa)'}} type="email" name="email" id="email" placeholder="enter your email here" value={formData.email} onChange={handleOnChange}/>
        <input style={{width:'240px',padding:'6px', border:'2px solid cornflowerblue', filter: 'drop-shadow(0 0 0.3em #646cffaa)'}} type="number" name='age' id='age' placeholder="Enter your age" value={formData.age} onChange={handleOnChange}/>
        <button style={{width:"100px",marginBottom:'70px'}} type="submit">Submit</button>
        </form>
    </div>
}
export default FormComponent;