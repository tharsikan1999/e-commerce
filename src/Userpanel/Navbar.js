import React from 'react'
import logo  from './images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faUser,faCartPlus,faHeart } from '@fortawesome/free-solid-svg-icons'
import './User.css'
import { Link,Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import DropDownuser from './DropDownuser'

function Navbar() {

     const showDropDownBar = () =>{
         const DropDownBar = document.getElementById('umainbox-dropdown');

         if(DropDownBar.style.display === "flex"){
            DropDownBar.style.display = "none"
         }
         else{
            DropDownBar.style.display = "flex"
         }

         
    }

    

    useEffect(()=>{
        const showDropdownBar = document.getElementById('fauser')

        showDropdownBar.addEventListener("click",showDropDownBar)
        
    }) 


  return (
    <div className="mainbox">
        <div className="sub-box-one">
        <div className="navbar-right-box">
            <div className="main-logo">
               <Link to='/'><img src={logo} alt="" /></Link> 
            </div>
        </div>
        <div className="navbar-center-box">
            <input type="text" placeholder='What do you want find here?'/>
            <FontAwesomeIcon id='fasearch' icon={faSearch}/>

        </div>
        <div className="navbar-left-box">
            <FontAwesomeIcon id='facartplus' icon={faCartPlus}/>
            
            <FontAwesomeIcon id='faheart' icon={faHeart}/>
            <FontAwesomeIcon id='fauser' icon={faUser}/>

        </div>
        </div>
        <div className="sub-box-two">
            <ul>
                <li><Link id='Popular'  to='/Popular'>🔥 Popular</Link></li>
                 <li><Link id='Bestdeals' to='/Bestdeals'>👍 Best deals</Link></li>
                <li><Link id='Featured' to='/Featured'>⭐ Featured</Link></li>
                <li><Link id='Newarivals' to='/Newarivals'>⏱️ New arrivals</Link></li>
                <li><Link id='Allproducts' to='/Allproducts'>😍 All products</Link></li> 
                       
            </ul>
        </div>
        <Outlet/>
       <DropDownuser/>
    </div>
  )
}



export default Navbar