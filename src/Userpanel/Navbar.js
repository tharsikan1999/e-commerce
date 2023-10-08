import React from 'react'
import logo  from './images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faUser,faCartPlus,faHeart } from '@fortawesome/free-solid-svg-icons'
import './User.css'
import { Link } from 'react-router-dom'

function Navbar() {
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
                <li><Link to='/Popular'>🔥 Popular</Link></li>
                 <li><Link to='/Bestdeals'>👍 Best deals</Link></li>
                <li><Link to='/Featured'>⭐ Featured</Link></li>
                <li><Link to='/Newarivals'>⏱️ New arrivals</Link></li>
                <li><Link to='/Allproducts'>😍 All products</Link></li> 

                
            </ul>
        </div>
    </div>
  )
}



export default Navbar