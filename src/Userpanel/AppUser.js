import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Popular from './Popular'
import Bestdeals from './Bestdeals'
import Allproducts from './Allproducts'
import Newarivals from './Newarivals'
import Featured from './Featured'
import Nopage from './Nopage'
import Home from './Home'
import Admin from '../Adminpanel/Admin'



function AppUser() {
  return (
    <div className='home-main-box'>
      
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Navbar' element={<Navbar />}/>
          <Route path='/Popular' element={<Popular />} />
          <Route path='/Allproducts' element={<Allproducts />} />
          <Route path='/Newarivals' element={<Newarivals />} />
          <Route path='/Bestdeals' element={<Bestdeals />} />
          <Route path='/Featured' element={<Featured />} />       
          <Route path='*' element={<Nopage />} /> 
          <Route path='/Adminpanel/Admin' element={<Admin />} /> 

      </Routes>
      
    </BrowserRouter>
    
    
  </div>
)
}

export default AppUser