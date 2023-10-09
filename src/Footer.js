import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons'
import facebook from './Userpanel/images/facebook.png'
import linkedin from './Userpanel/images/linkedin.png'
import instagram from './Userpanel/images/instagram.png'
import github from './Userpanel/images/github.png'
import './Footer.css'




function Footer() {

  const copyRight = new Date();

 

  return (
    <div className='Footer-main-box'>
      <div className="Footer-main-box-one">
      <div className="sub-nox-one">
        <h4>CONTACT</h4>
        <div className="contcat-box-phone">
          <FontAwesomeIcon id='faPhone' icon={faPhone}/>
          <p>+9471234567</p>
        </div>
        <div className="contact-box-mail">
          <FontAwesomeIcon id='faEnvelope' icon={faEnvelope}/>
          <p>Tharsikansathasivam@gmail.com</p>
        </div>
        <div className="contact-box-address">
          <FontAwesomeIcon id='faLocationDot' icon={faLocationDot}/>
          <p>Srilanka Jaffna</p>
        </div>
      </div>
      <div className="sub-box-two">
        <h4>COMPANY INFO</h4>
        <ul>
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
          <li>Blog</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="sub-box-three">
        <h4>PURCHASE INFO</h4>
        <ul>
          <li>Frequently Asked Questions</li>
          <li>Tracking</li>
          <li>Payment Methods</li>
          <li>Refunds & Returns Policy</li>
          <li>Shipping & Delivery</li>
        </ul>
      </div>
      <div className="sub-box-four">
        <h4>FOLLOW US</h4>
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={linkedin} alt="linkedin" />
        <img src={github} alt="github" />
      </div>
      </div>
      <div className="Footer-main-box-two">
        <p>Copyright &copy;<span> {copyRight.getFullYear()}</span> S.Tharsikan</p>
        
      </div>

    </div>
  )
}

export default Footer