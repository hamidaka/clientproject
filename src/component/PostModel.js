
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { AddNewPost, updatePosts } from '../slices/PostSlice';
import EditIcon from '@mui/icons-material/Edit';
import Form from "react-bootstrap/Form";
import IconButton from '@mui/material/IconButton';
const PostModel = ({check,title,desc,img,id}) => {
    const dispatch = useDispatch()
    const[show ,setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);
    const { register,  handleSubmit} = useForm();
   const addPost = (data) =>{
    check
   ?dispatch(updatePosts({...data,id}))
   :dispatch(AddNewPost(data))
    handleClose()
   }
  return (
    <>
  <button  variant="primary"  className="btn btn-success d-table my-5 mx-auto" data-bs-toggle="modal" data-bs-target="#ModalForm" onClick={handleShow}>
 {check ? <IconButton><EditIcon  style= {{fontSize:'14px'}} /></IconButton>  :"Add New Post"}
</button>
<Modal   className="modal fade" id="ModalForm" tabIndex="-1"   show={show} onHide={handleClose}>

  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content" >
      
        <Form onSubmit={handleSubmit(addPost)}>
          <div className="modal-header">
            <h5 className="modal-title">ADD New Post</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body" >
            <div className="mb-3">
                <label htmlFor="Username">Title<span className="text-danger">*</span></label>
                <input type="text" className="form-control"  {...register('title',{value:title})}  />
            </div>

            <div className="mb-3">
                <label htmlFor="Password">description<span className="text-danger">*</span></label>
                <input type="text" className="form-control"  {...register('desc',{value:desc})} />
            </div>
            <div className="mb-3">
                <label htmlFor="Password">image<span className="text-danger">*</span></label>
                <input type="text"className="form-control"   {...register('img',{value:img})} />
            </div>
            
          </div>
          <div className="modal-footer pt-4">                  
            <button variant="primary"  className="btn btn-success mx-auto w-100"  onClick={handleClose}>{check ? 'Update Post' :"Add New Post"}</button>
          </div>
         
      </Form>
    </div>
  </div>

</Modal>
  </>
  )
}

export default PostModel
