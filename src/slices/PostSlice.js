import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"
import { useDispatch } from 'react-redux'
//get post list

export const getAllPosts = createAsyncThunk("posts/getAllPosts",async(info, {rejectWithValue})=>{
    try {
 const res =   await axios.get('http://localhost:5000/api/v1/posts')
  
        
        return res.data

    } catch (error) {
       return rejectWithValue(error?.response?.data?.msg)
    }
 })
 //add new post
 export const AddNewPost = createAsyncThunk("posts/AddNewPost",async(postInfo, {rejectWithValue,dispatch})=>{
    // console.log(info)
  
    //   const formData = new FormData();
     
    // formData.append('picture', info.file);
    // formData.append('info', JSON.stringify(info.potInfo));
    // console.log(formData)
    try {
  
   const {data} =await axios.post('http://localhost:5000/api/v1/posts/newPost',postInfo,{
    headers:{Authorization:`Bearer ${localStorage.getItem('token')}`} })

        
      return  dispatch(getAllPosts())

    } catch (error) {
       return rejectWithValue(error?.response?.data?.msg)
    }
 })


 //like/dislike post 

 export const LikPost = createAsyncThunk("posts/LikPost",async(postId, {rejectWithValue,dispatch})=>{

    try {
  
   const {data} =await axios.put(`http://localhost:5000/api/v1/posts/likes/${postId}`,null,{
    headers:{Authorization:`Bearer ${localStorage.getItem('token')}`} })

        
      return  dispatch(getAllPosts())

    } catch (error) {
       return rejectWithValue(error?.response?.data?.msg)
    }
 })
//add comment

 export const addComment = createAsyncThunk("posts/addComment",async(commentInfo, {rejectWithValue,dispatch})=>{

    try {
  
   const {data} =await axios.post(`http://localhost:5000/api/v1/comments/newComment/${commentInfo.postId}`,{desc:commentInfo.desc},{
    headers:{Authorization:`Bearer ${localStorage.getItem('token')}`} })

        
      return  dispatch(getAllPosts())

    } catch (error) {
       return rejectWithValue(error?.response?.data?.msg)
    }
 })
 //delete Comment
 export const deleteComments = createAsyncThunk("posts/deleteComments",async(info, {rejectWithValue,dispatch})=>{

   try {
 
  const {data} =await axios.delete(`http://localhost:5000/api/v1/comments/${info.postId}/${info.commentId}`,{
   headers:{Authorization:`Bearer ${localStorage.getItem('token')}`} })

       
     return  dispatch(getAllPosts())

   } catch (error) {
      return rejectWithValue(error?.response?.data?.msg)
   }
})




  //delete a post
  export const deletePost = createAsyncThunk("posts/deletePost",async(postId,{rejectWithValue,dispatch})=>{
    try {
  
   const {data} =await axios.delete( `http://localhost:5000/api/v1/posts/${postId}`,{
    headers:{Authorization:`Bearer ${localStorage.getItem('token')}`} })

        
      return  dispatch(getAllPosts())
     
    } catch (error) {
       return rejectWithValue(error?.response?.data?.msg)
    }
 })
 //ûpdate a post
 export const updatePosts = createAsyncThunk("posts/updatePost",async(postInfo,{rejectWithValue,dispatch})=>{
    try {
  
   const {data} =await axios.put( `http://localhost:5000/api/v1/posts/update/${postInfo.id}`,postInfo,{
    headers:{Authorization:`Bearer ${localStorage.getItem('token')}`} })

        
      return  dispatch(getAllPosts())
     
    } catch (error) {
       return rejectWithValue(error?.response?.data?.msg)
    }
 })


const postsSlice = createSlice({
    name: "posts",
    initialState :{
        postList :[],
        errors:null,
    },
    reducers:{
   
    },
    extraReducers:{
   
        [getAllPosts.pending]:(state)=>{
            state.loading = true},

        [getAllPosts.fulfilled]:(state,action)=>{
            state.loading = false
            state.postList = action.payload
            state.errors =null
           
        }  ,
        [getAllPosts.rejected]:(state,action)=>{
            state.loading = false
            state.errors = action.payload

        },
        
       

    }

})
export default postsSlice.reducer
