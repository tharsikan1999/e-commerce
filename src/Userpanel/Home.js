import React from 'react'
import Navbar from './Navbar'
import Footer from '../Footer'
import Login from '../Login'
import Signup from '../Signup'

function Home() {

  return (
    <div>
        <Navbar/> 
        <Login/>
        <Signup/>
        <div className="sample-content-box">
        
      </div>
        <Footer/>
    </div>
  )
}

export default Home