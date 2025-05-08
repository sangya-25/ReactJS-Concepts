import { useNavigate } from "react-router-dom";

function NavBar(){
    const navigate=useNavigate();
    const handleNavigate=(route)=>{
        navigate(route);
    }
    return(
        <div>
            <button onClick={()=>handleNavigate('/')} style={{marginRight:'20px', border:'3px solid cornflowerblue'}}>Home</button>
            <button onClick={()=>handleNavigate('/cart-list')} style={{ border:'3px solid cornflowerblue'}}>Cart List</button>
        </div>
    )
}
export default NavBar;