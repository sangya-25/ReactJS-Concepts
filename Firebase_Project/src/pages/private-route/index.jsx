import { useContext } from "react";
import { AuthContext } from "../../context";
import { Navigate } from "react-router-dom";

function AuthRoute({children}){
    const {user,loading}=useContext(AuthContext)
    if (loading) return <h1>Please wait!</h1>
    if(user) return children
    return (
        <Navigate to={'/login'}/>
    )
}
export default AuthRoute;