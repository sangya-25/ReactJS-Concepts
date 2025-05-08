import { useNavigate } from "react-router-dom";

function HomePage(){
    const navigate=useNavigate();
    const onNavigate=(route)=>{
        navigate(route);
    };
    return(
        <div>
            <h2 style={{fontSize:'25px', fontWeight:"bold", marginBottom:'20px'}}>Shop whatever you like :)</h2>
            <img src="/src/assets/image.png" style={{width:'300px',marginLeft:'100px', marginBottom:'20px', borderRadius:'50%'}} alt="" />
            <h1 style={{color:'cornflowerblue', fontWeight:'bold'}}>Welcome to this site!</h1>
            <button onClick={()=> onNavigate('/product-list')} style={{marginRight:'20px', marginTop:"20px",border:"3px solid cornflowerblue"}}>Product List</button>
            <button onClick={()=>onNavigate('/cart-list')} style={{marginRight:'20px', marginTop:"20px",border:"3px solid cornflowerblue"}}>Cart List</button>
        </div>
    )
}
export default HomePage;