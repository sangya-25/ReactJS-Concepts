import { useDispatch, useSelector } from "react-redux";
import { handleAddTodo, handleInputChange } from "../store/slices/blogSlice";

function AddNewBlog(){
    const state=useSelector(state=>state);
    const dispatch=useDispatch();
    const {blog}=state;
    // console.log(state)
    console.log(blog)

    function handleOnChangeInput(event){
        dispatch(handleInputChange({
            [event.target.name] : event.target.value,

        }))
    }
    function handleTodoSubmit(event){
        event.preventDefault();
        dispatch(handleAddTodo());
    }
    return (
        <div>
            <form onSubmit={handleTodoSubmit}>
                <div>
                    <label style={{fontSize:"20px"}}>Enter Blog Title: </label>
                    <input style={{border:"4px solid cornflowerblue",height:"30px",fontSize:'20px',borderRadius:'6px',marginBottom:"10px"}} type="text" name='title' placeholder="Enter Blog Title" id="title" onChange={handleOnChangeInput} value={blog.formData?.title}/>
                </div>
                <div>
                    <label style={{fontSize:"20px"}}>Enter Blog Description: </label>
                    <input style={{border:"4px solid cornflowerblue",height:"30px",fontSize:'20px',borderRadius:'6px'}} type="text" name='description' placeholder="Enter Blog Description" id="description" onChange={handleOnChangeInput} value={blog.formData?.description}/>
                </div>
                <button style={{border:"2px solid cornflowerblue",marginTop:'12px'}} type="submit">Add New Blog</button>
            </form>
        </div>
    )
}
export default AddNewBlog;