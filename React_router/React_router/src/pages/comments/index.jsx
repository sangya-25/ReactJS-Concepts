import { Link, useNavigate } from 'react-router-dom';
import UseFetch from '../../hooks/use-fetch';
function CommentList(){
    const navigate=useNavigate()
    const {data,loading,error}=UseFetch('https://dummyjson.com/comments');
    if(loading){
        return <h1>Fetching Comments! Please Wait...</h1>
    }
    return(
        <div>
            <h1 style={{color:"cornflowerblue"}}>Comment List Page</h1>
            <button onClick={()=>navigate('/')} style={{marginRight:'10px',border:'2px solid cornflowerblue'}}>Home</button>
            <button onClick={()=>navigate('/recipe-list')} style={{border:'2px solid cornflowerblue'}}>Recipe List</button>
            <ul>
            {
                    data?.comments?.length > 0 ?
                    data.comments.map(commentItem => (
                    <li key={commentItem.id}>
                        <label style={{color:'beige'}}>{commentItem.body}</label>
                        <div style={{display:'flex',gap:'20px',justifyContent:'center'}}><h3>{commentItem.likes} likes, </h3>
                        <h3>User: {commentItem.user.username}</h3></div>
                    </li>
                    ))
                    : null
                }
            </ul>
        </div>
    );
}
export default CommentList;