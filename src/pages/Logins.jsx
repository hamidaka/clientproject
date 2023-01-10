import React from 'react';
import {useRef} from 'react'
import {loginUser} from '../slices/UserSlice'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {  useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

function Logins() {
  const nav = useNavigate()
  const {errors, isAuth} = useSelector(state=>state.userReducer)
  const dispatch = useDispatch()

  const email = useRef()
  const password = useRef()
  const handlelogin=(e) =>{
    e.preventDefault()
   console.log(email.current.value,password.current.value)
    dispatch(loginUser({email:email.current.value,password:password.current.value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  useEffect(()=>{
    if(isAuth){
      nav('/posts')
    }
  },[isAuth])
  return (
    <MDBContainer className="my-5" style ={{width:'1000px' , height:'1000px'}}>

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://i.pinimg.com/564x/30/a3/16/30a316e0a1b7c0358df6472e1aabc4cb--vide-dressing-zen.jpg' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              {/* <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Logo</span>
              </div> */}

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <MDBInput wrapperClass='mb-4' label='Email address' id='email' name ='email' type='email' size="lg"   inputRef = {email}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg'  name ='password' type='password' size="lg"    inputRef = {password}/>

                <Button
              type="submit" onClick={handlelogin}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style ={{backgroundColor:'black'}}
            >
              Sign In
            </Button>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>
              </Box>
            </MDBCardBody>
         
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Logins;