import { Link, useNavigate } from 'react-router-dom';

function HomeDetails(){
    const navigate=useNavigate()
    return(
        <div>
            <div>
                <Link to={'/recipe-list'}>One more method using Link tag</Link>
            </div>
            <h1 style={{fontSize:"30px"}}>React routing, Custom Hook and more</h1>
            <button onClick={()=>navigate('/recipe-list')}  style={{marginRight:'20px', marginTop:'20px'}}>Navigate to Recipe List Page</button>
            <button onClick={()=>navigate('/comment-list')}>Navigate to Comment List Page</button>
        </div>
    )
}
export default HomeDetails;