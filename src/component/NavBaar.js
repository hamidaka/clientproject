import React from 'react'
import './NavBarr.css'
import { Link } from 'react-router-dom';
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getuserInfo, logout } from '../slices/UserSlice';
const NavBaar = () => {
    const {errors, isAuth,userInfo} = useSelector(state=>state.userReducer)
    const user = useSelector((state) => state.userReducer);
     
  useEffect(()=>{
    dispatch(getuserInfo())
  },[])
    const dispatch = useDispatch()
    const nav = useNavigate()
  const handlelogout = (e) =>{
    dispatch(logout())
    nav('/login')
  
  }
  return (
    <>
 <header>
           <img src="https://saintjust34.com/wp-content/uploads/2020/10/Couv-vide-dressing-1-1030x391.jpg" />
            <nav>
                <ul>
                   
                    <li><Link to ='/Home'>Home</Link></li>

                    {user.isAuth ? (
                        <>
                    <li> <Link to='/login' onClick={() => dispatch(logout())}>
                    logout
                  </Link></li>
                   
                    </>
                    ) : (
                        <>
                         <li><Link to ='/login'>Login</Link></li>
                         <li><Link to ='/registre'>Registre</Link></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                        </>
                    )}
                </ul>
            </nav>


        </header>
        
  
    </>
  )
}

export default NavBaar
