import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getuserInfo } from'../slices/UserSlice'
import { getAllPosts } from'../slices/PostSlice'
import PostCard from '../component/PostCard'
import PostModel from '../component/PostModel'





const Posts = () => {
  
  const dispatch = useDispatch()
  const postList = useSelector(state=>state.postReducer.postList)

 console.log(postList)


  useEffect(()=>{
    dispatch(getAllPosts())
    dispatch(getuserInfo())
    
  },[])

  
  return (

     <>
     <PostModel />
      <div style ={{display :'flex', gap :'30px',paddingTop:'3%',marginLeft:'50px',  flexWrap:'wrap',listStyle:'none' ,padding:'0'}}>
      {postList && postList.map(post=><PostCard el={postList}  key ={post._id}{...post} />
        )}
        </div>
          
     </>
    
   
     
   
 
  )
}

export default Posts
