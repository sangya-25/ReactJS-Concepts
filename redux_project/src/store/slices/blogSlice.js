import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    formData:{
        title:'',
        description:"",
    },
    blogList:[]
}

export const blogSlice=createSlice({
    name: 'blog',
    initialState,
    reducers:{
        handleInputChange: (state, action)=>{
            let copyFormData={...state.formData};
            copyFormData={
                ...copyFormData,
                ...action.payload,
            };
            state.formData=copyFormData
        },
        handleAddTodo: (state, action)=>{
            console.log(action);
            state.blogList.push({
                id: nanoid(),
                ...state.formData
            });
            state.formData={
                title:"",
                description:'',
            };
            localStorage.setItem('blogList',JSON.stringify(state.blogList))
        },
        setBlogListOnInitialLoad:(state,action)=>{
            state.blogList=action.payload.blogList;
        },
        handleDeleteBlog:(state,action)=>{
            const {payload}=action;
            const {currentBlogId}=payload;
            let copyBlogList=[...state.blogList]
            copyBlogList=copyBlogList.filter(singleBlogItem.id !== currentBlogId)
            state.blogList=
        }
    }
});
export const {handleInputChange, handleAddTodo, setBlogListOnInitialLoad,handleDeleteBlog }=blogSlice.actions;
export default blogSlice.reducer;