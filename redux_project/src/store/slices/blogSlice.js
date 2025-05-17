import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    formData:{
        title:'',
        description:"",
    },
    blogList:[],
    currentEditedBlogId: null,
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
            copyBlogList=copyBlogList.filter(singleBlogItem=> singleBlogItem.id !== currentBlogId);
            state.blogList=copyBlogList;
            localStorage.setItem('blogList',JSON.stringify(copyBlogList))
        },

        setCurretEditedBlogId:(state, action)=>{
            const {payload}=action;
            const {currentBlogId}=payload;
            state.currentEditedBlogId=currentBlogId;
        },
        
        handleEditBlog:(state, action)=>{
            let copyBlogList=[...state.blogList];
            const findIndexOfCurrentBlogItem=copyBlogList.findIndex(singleBlogItem=> singleBlogItem.id===state.currentEditedBlogId);
            copyBlogList[findIndexOfCurrentBlogItem]={
                ...copyBlogList[findIndexOfCurrentBlogItem],
                ...state.formData
            }
            state.blogList=copyBlogList;
            localStorage.setItem('blogList',JSON.stringify(copyBlogList))
        },
    }
});
export const {handleInputChange, handleAddTodo, setBlogListOnInitialLoad,handleDeleteBlog, setCurretEditedBlogId, handleEditBlog }=blogSlice.actions;
export default blogSlice.reducer;