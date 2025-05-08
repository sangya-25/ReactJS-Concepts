import { useNavigate } from "react-router-dom";

function Checkout(){
    const navigate=useNavigate();
    const handleOnNavigate=(route)=>{
        navigate(route);
    }
    return(
        <div>
            <div style={{display:'flex' , gap:'10px'}}>
            <h1 style={{color:'cornflowerblue', marginTop:'20px'}}>Order has been placed Successfully!</h1>
            <img style={{width:"100px", borderRadius:"50%", textAlign:'center'}} src="/src/assets/tick2.jpg" alt="" />
        </div>
        <div>
        <button onClick={()=>handleOnNavigate('/')} style={{fontSize:'20px',border:"3px solid cornflowerblue",marginTop:'50px', width:"200px"}}>Back to home  <img style={{width:'50px',marginTop:"10px",marginLeft:"50px"}} src="/src/assets/home.png" alt="" /></button>
        </div>
        </div>
    )
}
export default Checkout;