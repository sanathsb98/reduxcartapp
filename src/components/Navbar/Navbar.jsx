import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSearchItem } from '../../features/searchSlice';


const Navbar = () => {

  const dispatch = useDispatch()
 
  const selector = useSelector((state)=> state.cart.cartItems.length)
  const username = useSelector((state)=> state.username.name)

    const navigate = useNavigate()

  return (
    <div className='navbar'>
      
        <div onClick={()=>{navigate('/')}} className='loggedin-status'><PermIdentityIcon/> <div className='user-name'>{username}</div></div>
        <input onChange={(data)=>dispatch(getSearchItem({searchContent : data.target.value}))} placeholder='Search' className='search-bar'/>
        <div onClick={()=>{navigate('/cart')}} className='shopping-cart'><ShoppingCartIcon/>({selector})</div>
        {/* <div onClick={()=>{navigate('/')}} className='logout-btn'><LogoutIcon/></div> */}
    </div>
  )
}

export default Navbar