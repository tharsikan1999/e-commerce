import React from 'react'
import Navbar from './Navbar'
import Footer from '../Footer'
import Login from '../Login'
import Signup from '../Signup'
import Promition from './Promition'
import superSale from './images/Footer/superSale.jpg'
import './User.css'
import Items from './Items'

function Home() {

  return (
    <div>
        <Navbar/> 
        <Login/>
        <Signup/>
        <div className="sale-image-box">
          <img src={superSale} alt="" />
        </div>
        <Items/>
      <Promition/>
        <Footer/>
    </div>
  )
}

export default Home