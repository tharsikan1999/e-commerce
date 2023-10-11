import React from 'react'
import Navbar from './Navbar'
import Footer from '../Footer'
import Signup from '../Signup'
import Items from './Items'
import Promition from './Promition'
import Login from '../Login'


function Popular() {
  return (
    <div>
      <Navbar/>
      <Signup/>
      <Login/>
      <Signup/>
      <Items/>
      <Promition/>
      <Footer/>
    </div>
  )
}

export default Popular