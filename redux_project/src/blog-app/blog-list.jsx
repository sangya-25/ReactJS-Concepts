import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteBlog, handleInputChange, setBlogListOnInitialLoad, setCurretEditedBlogId } from "../store/slices/blogSlice";
import { FaTrash, FaEdit } from 'react-icons/fa';

function BlogList() {
    const {blog}=useSelector(state=>state);
    const dispatch=useDispatch();
    const {blogList}=blog;
    console.log(blogList);
    useEffect(()=>{
        dispatch(setBlogListOnInitialLoad({
            blogList: JSON.parse(localStorage.getItem('blogList')) || []
        }))
    },[]);
    function onDeleteBlog(getCurrentBlogId){
        console.log(getCurrentBlogId);
        dispatch(handleDeleteBlog({
            currentBlogId: getCurrentBlogId
        }))
    }
    function onEditBlog(getCurrentBlog){
        dispatch(setCurretEditedBlogId({
            currentBlogId: getCurrentBlog?.id,

        }));
        dispatch(handleInputChange({
            title: getCurrentBlog?.title ,
            description: getCurrentBlog?.description
        }));
    }
    return(
        <ul>
            {
                blogList?.length>0? blogList.map(singleBlogItem=><div style={{marginTop:"20px",backgroundColor:"white", padding:"20px",borderRadius:'10px',marginBottom:"20px"}} key={singleBlogItem.id}>
                    <h3 style={{border:"3px solid cornflowerblue", width:'300px',borderRadius:"10px",color:"black",fontSize:"20px", backgroundColor:"gray",marginBottom:"10px"}}>{singleBlogItem?.title}</h3>
                    <h3 style={{backgroundColor:"#494848", padding:"10px",borderRadius:'10px',border:"6px solid gray",fontSize:'18px'}}><span style={{fontSize:"25px",marginRight:"10px"}}>Discription: </span> {singleBlogItem.description}</h3>
                    <button onClick={()=>onEditBlog(singleBlogItem)} style={{backgroundColor:"#1F456E",marginRight:"30px",marginTop:"20px"}}><FaEdit className="mr-2" /> Edit</button>
                    <button onClick={()=>onDeleteBlog(singleBlogItem.id)} style={{backgroundColor:"cornflowerblue"}}><FaTrash className="mr-2" /> Delete</button>


                </div>):
                <h1>No blog Added ! Please Add One</h1>
            }
        </ul>
    )
}
export default BlogList;