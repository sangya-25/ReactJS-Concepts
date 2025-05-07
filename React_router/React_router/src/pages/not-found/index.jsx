import {Link} from "react-router-dom";
function NotFoundPage(){
    return(
        <div>
            <h2>This page doest not exist</h2>
            <Link to={'/'}>Go to Home page</Link>
        </div>
    )
}
export default NotFoundPage;