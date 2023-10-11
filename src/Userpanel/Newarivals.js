import React from 'react'
import Navbar from './Navbar'
import Footer from '../Footer'
import Items from './Items'
import Promition from './Promition'
import Login from '../Login'
import Signup from '../Signup'

function Newarivals() {
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

export default Newarivals