import React from 'react'
import logo  from './images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faUser,faCartPlus,faHeart } from '@fortawesome/free-solid-svg-icons'
import './User.css'

function Navbar() {
  return (
    <div className="mainbox">
        <div className="navbar-right-box">
            <div className="main-logo">
                <img src={logo} alt="" />
            </div>
        </div>
        <div className="navbar-center-box">
            <input type="text" placeholder='Serach here'/>
            <FontAwesomeIcon id='fasearch' icon={faSearch}/>

        </div>
        <div className="navbar-left-box">
            <FontAwesomeIcon id='facartplus' icon={faCartPlus}/>
            <FontAwesomeIcon id='fauser' icon={faUser}/>
            <FontAwesomeIcon id='faheart' icon={faHeart}/>

        </div>
    </div>
  )
}



export default Navbar