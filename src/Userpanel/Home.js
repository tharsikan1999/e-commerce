import React from 'react'
import Navbar from './Navbar'
import Footer from '../Footer'
import Login from '../Login'
import Signup from '../Signup'
import Promition from './Promition'

function Home() {

  return (
    <div>
        <Navbar/> 
        <Login/>
        <Signup/>
        <div className="sample-content-box">
        
      </div>
      <Promition/>
        <Footer/>
    </div>
  )
}

export default Home