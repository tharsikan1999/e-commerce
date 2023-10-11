import React from 'react'
import Navbar from './Navbar'
import Footer from '../Footer'
import Signup from '../Signup'
import Items from './Items'
import Promition from './Promition'
import Login from '../Login'



function Featured() {
  return (
    <div>
      <Navbar/>
      <Login/>
      <Signup/>
      <Items/>
      <Promition/>
      <Footer/>
    </div>
  )
}

export default Featured