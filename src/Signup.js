import React from 'react'
import './App.css'
import facebook from './Userpanel/images/rfacebook.png'
import github from './Userpanel/images/github.png'
import google from './Userpanel/images/google.png'
import logo from './Adminpanel/Images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'



  





function Signup() {

  

  const hideSign = () => {
    const SignupMainBox = document.getElementById('main-box-Signup');
  
    SignupMainBox.style.display = "none";
  }
  
  
    useEffect(()=>{
      const signBox = document.getElementById('Signup-faclose');

      signBox.addEventListener("click",hideSign)
    
    })

  return (
    <div className='main-box-Signup'
    id='main-box-Signup'>
      <img className='logo-for-social-Signup' src={logo} alt="" />
      <div className="sub-box-social-Signup">
      <div className='Signup-close-button-box'>
      <h4 className='Signup-to '>Signup to account</h4> 
      <FontAwesomeIcon id='Signup-faclose' icon={faClose}/> 
      </div>
      <input type="text" id='firstName' placeholder='First name' />

      <br />
      <input id='lastName' type="text" placeholder='Last name' />
      <input id='e-mail-address' type="text" placeholder='E-mail Address' /> <br />
      <input id='Passwords' type="text" placeholder='Password' /> <br />
      <button id='Signup-button' type='submit'>Signup</button> <span>Forgot Password?</span>
      <p id='paragraph-Signup'>Or Signup With</p>
      <div className="social-Signup-box">
        <div className="facebook-Signup">
          <img src={facebook} alt="" />
          <p>Facebook</p>
        </div>
        <div className="Google-Signup">
          <img src={google} alt="" />
          <p>Google</p>
        </div>
        <div className="github-Signup">
          <img src={github} alt="" />
          <p>Github</p>
        </div>
      </div>
      <h4 id='Login-your-account'>Login your account</h4>
      </div>
    </div>
  )
}

export default Signup