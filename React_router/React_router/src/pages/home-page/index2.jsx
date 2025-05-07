import { useNavigate } from "react-router-dom"

function ChildRouteDemo(){
    const navigate=useNavigate();
    return(
        <div>
            <h1>Quick Recipe Details</h1>
            <button onClick={()=>navigate('/')}>Home</button>
        </div>
    )
}
export default ChildRouteDemo;