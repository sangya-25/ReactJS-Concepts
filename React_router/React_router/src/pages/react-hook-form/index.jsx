import { useForm } from "react-hook-form";

function ReactHookFormEx(){
    const{register, handleSubmit, formState:{errors},reset}=useForm()
    function onSubmitForm(formData){
        console.log(formData);
        reset();
    }
    return(
        <div>
            <h1>React Hook form</h1>
            <form style={{backgroundColor:"lightskyblue",height:"370px",display:'block',justifyContent:'center',borderRadius:'10px',padding:"10px"}} onSubmit={handleSubmit(onSubmitForm)}>
                <h2 style={{color:'black'}}>Enter Your Credentials</h2>
                <div style={{margin:'10px'}}>
                    <label style={{fontSize:'20px',color:'black',fontWeight:'bolder'}}>Name :</label>
                    <input style={{height:'30px',border:'3px solid cornflowerblue', marginLeft:'10px',width:"300px"}} {...register('name',{required:true})} name="name" type="text" />
                </div>
                <div style={{margin:'10px'}}>
                    <label  style={{fontSize:'20px',color:'black',fontWeight:'bolder'}}>Email :</label>
                    <input style={{width:"300px",height:'30px',border:'3px solid cornflowerblue', marginLeft:'10px'}} {...register('email',{required:true})} name="email" type="email" />
                    {
                        errors.email && errors.email.type ==='required' ? <p style={{color:"red",fontSize:'18px'}}>Email is required</p> : null
                    }
                </div>
                <div style={{margin:'10px'}}>
                    <label  style={{fontSize:'20px',color:'black',fontWeight:'bolder'}}>Password :</label>
                    <input style={{width:"300px",height:'30px',border:'3px solid cornflowerblue', marginLeft:'10px'}} {...register('password',{required:true, minLength:8})} name="password" type="password" />
                    {
                        errors.password && errors.password.type ==='required' ? (<p style={{color:"red",fontSize:'18px'}}>Password is required !</p>) : null
                    }
                    {
                        errors.password && errors.password.type === 'minLength' ? <p style={{color:"red",fontSize:'18px'}}>Password must be atleast of length 8</p>: null
                    }
                </div>
                <button style={{marginTop:'4px', marginBottom:"20px"}} type="submit">Submit</button>
            </form>
        </div>
    );
}
export default ReactHookFormEx;